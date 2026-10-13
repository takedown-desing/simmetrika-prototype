#!/usr/bin/env python3
"""Проверка черновиков drafts/content/*.md: шапки, meta, FAQ, тире, внутренние ссылки, дубли title."""
import re, sys, json, glob, collections
try:
    import yaml
except ImportError:
    sys.exit("pip install pyyaml")
ROOT = "."
cat = json.load(open(f"{ROOT}/drafts/data/catalog.json", encoding="utf-8"))
tree = open(f"{ROOT}/research/structure/SITE-TREE.md", encoding="utf-8").read()
valid = set(re.findall(r"`(/[a-z0-9\-/{}]*)`", tree)) | {p["url"] for p in cat["products"]}
colors = list(cat["colors"].keys())
valid |= {f"/catalog/cvet/{c}/" for c in colors} | {"/", "/catalog/", "/zayavka/", "/privacy/"}
def ok_url(u):
    u = u.split("#")[0].split("?")[0]
    if not u: return True
    if u in valid: return True
    if u.startswith("/news/"): return True
    if u.startswith("/kontakty/"): return True
    return False
pages = []
for f in sorted(glob.glob(f"{ROOT}/drafts/content/*.md")):
    raw = open(f, encoding="utf-8").read()
    for chunk in raw.split("<!-- page-break -->"):
        m = re.match(r"\s*---\n(.*?)\n---\n?(.*)", chunk, re.S)
        if not m:
            pages.append((f, None, chunk, ["нет YAML-шапки"])); continue
        try:
            h = yaml.safe_load(m.group(1)) or {}
        except Exception as e:
            pages.append((f, None, chunk, [f"YAML ошибка: {str(e)[:80]}"])); continue
        pages.append((f, h, m.group(2), []))
rows, titles = [], collections.Counter()
total_err = 0
for f, h, body, errs in pages:
    name = f.split("/")[-1]
    if h is None:
        print(f"!! {name}: {errs}"); total_err += 1; continue
    pid = h.get("page_id", "?")
    full = json.dumps(h, ensure_ascii=False, default=str) + body
    e = list(errs)
    if "—" in full: e.append(f"длинное тире ×{full.count('—')}")
    t, d = str(h.get("title", "")), str(h.get("description", ""))
    titles[t] += 1
    typ = h.get("type", "")
    if typ not in ("cart", "error", "legal") and not str(pid).startswith("ui"):
        if not (40 <= len(t) <= 60): e.append(f"title {len(t)}")
        if not (120 <= len(d) <= 160): e.append(f"description {len(d)}")
    faq = h.get("faq") or []
    bad = [len(str(x.get("a", "")).split()) for x in faq if not 38 <= len(str(x.get("a", "")).split()) <= 62]
    if bad: e.append(f"FAQ вне 40–60 слов: {bad}")
    links = re.findall(r"\]\((/[^)\s]*)\)", body + str(h.get("description_md", "")))
    broken = sorted({u for u in links if not ok_url(u)})
    if broken: e.append(f"ссылки не из SITE-TREE: {broken}")
    words = len(re.findall(r"[А-Яа-яЁёA-Za-z0-9]+", body + str(h.get("description_md", ""))))
    total_err += bool(e)
    rows.append((name, pid, typ, len(t), len(d), len(faq), len(links), words, "; ".join(e) or "ok"))
w = max(len(r[1]) for r in rows)
print(f"{'файл':28} {'page_id':{w}} {'type':12} {'T':>3} {'D':>3} {'FAQ':>3} {'ссыл':>4} {'слов':>5}  проверка")
for r in rows:
    print(f"{r[0]:28} {r[1]:{w}} {r[2]:12} {r[3]:>3} {r[4]:>3} {r[5]:>3} {r[6]:>4} {r[7]:>5}  {r[8]}")
dups = [t for t, c in titles.items() if c > 1 and t]
if dups: print("\nДубли title:", dups); total_err += 1
print(f"\nСтраниц: {len(rows)}, слов всего: {sum(r[7] for r in rows)}, FAQ всего: {sum(r[5] for r in rows)}, с замечаниями: {total_err}")
