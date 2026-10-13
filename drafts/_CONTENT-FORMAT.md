# Формат черновика контента SIMMETRIKA — `drafts/content/{slug}.md` (контракт с вёрсткой)

> Адаптация шаблона `universal-rules/templates/content-format.md` под интернет-магазин. Сайт будет собираться автоматически: тексты из этих файлов, товары, ткани, шоурумы и цены из `drafts/data/catalog.json`. Поэтому в тексте НЕ дублируются карточки товаров, таблицы характеристик из базы, адреса шоурумов: на их месте стоят пустые директивы-контейнеры, вёрстка подставит данные. Отступление от формата ломает сборку.

## 1. YAML-шапка (обязательные поля помечены *)

```yaml
---
page_id: home                              # * slug структуры (home, catalog, pryamye-divany, product:pryamye-divany/kembridzh …)
url: /                                     # * со слешами
type: home                                 # * home | hub | category | collection | filter | product | landing | service | about | contact | news-list | news-item | cart | legal | error
title: "Диваны от производителя в Москве | SIMMETRIKA"   # * 50–60 символов, главный запрос в начале, разделитель | или :
description: "…"                           # * 140–160 символов, без «—»
og_title: "…"                              # *
og_description: "…"                        # * до 200 символов
h1: "…"                                    # * ровно как в структуре
lede: "…"                                  # * 1–2 предложения под H1, до 220 символов
eyebrow: "Каталог"                         # метка раздела, 1–3 слова (кроме главной)
date_modified: 2026-10-13                  # *
primary_kw: "…"                            # * из структуры §0
secondary_kws: ["…", "…"]                  # 3–8 из структуры §0
breadcrumbs:                               # * кроме главной
  - { name: "Главная", url: "/" }
  - { name: "Каталог", url: "/catalog/" }
hero_cta:                                  # * для коммерческих страниц
  primary: { label: "Смотреть каталог", href: "/catalog/" }
  secondary: { label: "Обратный звонок", action: "callback" }
highlights:                                # 3–4 факта первого экрана, только из catalog.json / _CONTEXT
  - { value: "5 шоурумов", label: "в Москве и Химках" }
listing:                                   # для hub/category/collection/filter/landing: правило выборки товаров
  rule: { category: "pryamye-divany" }     # или { mechanism: "pantograf" } / { material: "velyur" } / { color: "seryy" } / { tag: "dlya-gostinoy" } / { in_stock: true } / { sample: true } / { has_sleeping_place: true }
  sort_default: popularity
faq:                                       # * число пар по структуре §5; ответ 40–60 слов, обычный текст без markdown и ссылок
  - q: "…"
    a: "…"
related:                                   # * 3–6 карточек «Смотрите также», только URL из SITE-TREE
  - { url: "/catalog/divany-krovati/", title: "Диваны-кровати", text: "Одна строка, зачем перейти" }
images:                                    # слоты по структуре §9; для товаров и категорий — файлы из source/photos (как в catalog.json)
  - { slot: hero, src: "source/photos/xxxx.jpeg", alt: "…" }
  - { slot: inline-1, query: "upholstery workshop", alt: "…" }     # query = временное фото Pexels, только где структура это разрешает
assumptions: ["Q-01", "Q-05"]              # * какие допущения использованы в тексте страницы
---
```

Особые поля:
- `type: product` → файл товара содержит ТОЛЬКО то, что не берётся из базы: `title`, `description`, `og_*`, `h1`, `lede`, `description_md` (описание модели), `features` (3–5 преимуществ модели), `faq` (по модели), `alt_template`. Характеристики, варианты, цены, наличие вёрстка берёт из `catalog.json`. Описание модели допускается либо полем `description_md` в шапке, либо markdown-телом под шапкой: вёрстка берёт тело, если поле пустое.
- `type: filter` → в одном файле может быть несколько страниц-подборок: тогда файл состоит из нескольких YAML-документов, разделённых строкой `---` + тело каждого после своей шапки (см. раздел 4).
- `type: cart` и `type: error` → вместо тела раздел `ui_texts:` в шапке (кнопки, ошибки, пустые состояния, тосты).

## 2. Тело (markdown)

- **Нет H1** в теле. Первый блок: 1–2 абзаца вступления (`lede` не пересказывать).
- Разделы `## H2` и `### H3` в порядке структуры §3. FAQ в теле НЕ писать: вёрстка соберёт его из `faq:` последним H2 (заголовок FAQ укажите в `faq_title:` в шапке).
- Абзацы 2–4 предложения. Списки `-` и `1.`. Таблицы markdown.
- Внутренние ссылки `[анкор](/catalog/…/)` только на URL из SITE-TREE, анкоры по структуре §8 и `INTERLINKING.md`; ≥ 5 inline на коммерческой странице. Внешние ссылки только там, где структура их предусмотрела.
- **Запрещено:** длинное тире «—» (везде, включая шапку), эмодзи, восклицательные знаки в заголовках, «лучший/самый/№1», выдуманные отзывы, Италия/Egeo/Instagram, цифры не из `catalog.json` и `_CONTEXT.md`.
- Каждое предложение с допущением (цена, срок, тариф, гарантия, наполнитель, точки продаж) остаётся в тексте как обычная фраза, а в шапке страницы перечисляется номер допущения в `assumptions:`. Метки `[ДОПУЩЕНИЕ …]` в тело НЕ вставлять.

### Директивы-контейнеры (`:::имя{атрибуты}` … `:::`, без вложенности)

| Директива | Тело | Что подставит вёрстка |
|---|---|---|
| `:::products{rule="category=pryamye-divany" limit="20"}` | пустое | листинг карточек товаров по правилу (поля правила как в `listing.rule`) |
| `:::filters{set="price,length,material,color,stock,mechanism"}` | пустое | панель фильтров и сортировки |
| `:::tiles{items="/catalog/pryamye-divany/,/catalog/uglovye-divany/"}` | пустое | плитки разделов с фото и счётчиком товаров |
| `:::chips{items="/catalog/velyur/,/catalog/v-nalichii/"}` | пустое | лента чипов-ссылок |
| `:::spec-table{rule="category=pryamye-divany" cols="name,size,sleeping,mechanism,price"}` | пустое | таблица характеристик из базы |
| `:::swatches{materials="velyur,rogozhka,zhakkard"}` | пустое | сватчи тканей с подписями из базы |
| `:::showrooms{mode="cards"}` | пустое | карточки 5 шоурумов (NAP из базы); `mode="list"` компактно |
| `:::map` | пустое | карта шоурумов |
| `:::news{limit="3" type="all"}` | пустое | лента последних новостей и акций (`type="promo"` только акции) |
| `:::promo` | пустое | баннеры действующих акций из админки |
| `:::form{type="question" title="…"}` | 1 строка подзаголовка | форма заявки по ТЗ §8 (`question`, `callback`, `custom_size`, `sample_reserve`, `dealer`) |
| `:::steps{title="…"}` | нумерованный список 3–7 пунктов `1. **Шаг.** 1–2 предложения.` | инфографика-шаги |
| `:::compare{title="…"}` | одна markdown-таблица 2–5 колонок | инфографика-сравнение |
| `:::stats{title="…"}` | 3–4 пункта `- **значение** подпись` | инфографика-цифры |
| `:::scheme{kind="mechanism-pantograf"}` | 2–4 строки подписей к схеме | SVG-схема (механизм, размеры, модули, зоны доставки) |
| `:::cta{href="/na-zakaz/" label="…"}` | `**Заголовок**` + 1 предложение | перебивка mid-content, 1–2 на страницу |
| `:::practice` | 1–2 абзаца «Из опыта фабрики» | блок опыта без цифр сверх данных |
| `:::note` | 1–2 предложения | оговорка (не больше 1) |

Поля правил выборки: `all`, `category`, `mechanism`, `material`, `color`, `tag`, `in_stock`, `sample`, `has_sleeping_place`, `has_storage`, `hit`, `showroom` (образцы и выставленные модели точки), `length_gte`. Любой директиве можно задать атрибут `id="…"` для якорной ссылки (`[оставить размеры](#forma)`). Составные правила выборки через запятую (`rule="sample=true,category=uglovye-divany"`), сортировка `sort_default: popularity | price_asc | price_desc | discount`.

Ровно две инфографики на коммерческую страницу (из `steps`, `compare`, `stats`, `scheme`), как в структуре §9.

## 3. Тексты UI

Повторяющиеся тексты (кнопки, тосты, ошибки форм, пустые состояния, бейджи) пишутся один раз в `drafts/content/_ui.md` (делает субагент заявки). Страницы на них не дублируют.

## 4. Файл с несколькими страницами (подборки, новости, товары)

```markdown
---
page_id: filter:velyur
url: /catalog/velyur/
...
---
Тело страницы /catalog/velyur/

<!-- page-break -->
---
page_id: filter:rogozhka
...
---
Тело страницы /catalog/rogozhka/
```

Разделитель между страницами — строка `<!-- page-break -->`.
