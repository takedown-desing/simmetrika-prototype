# simmetrika-mebel.ru — проектные инструкции

Контекст проекта и статусы — в `master.md` (читать первым). Правила помощника подключены через @import в master.md.

## URL conventions (RULE-URL-STRUCTURE)
- Trailing slash: **yes**. Lowercase, kebab-case, латиница (транслит), без `.html`, без `index`.
- Товар: `/catalog/{category}/{product}/`. Вариант (ткань/цвет/сторона) без своего URL: параметры `?material=&color=&side=`, canonical на чистый URL, Clean-param на боевом домене.
- Статические SEO-фильтры индексируются при ≥ 3 товарах; прочие фильтры/сортировка — GET-параметры с `noindex,follow` + canonical.
- Любая смена URL — только через 301 single-hop; карта редиректов в `research/structure/CATALOG-MODEL.md §5`.

## Факты, которые нельзя выдумывать
- Цены, наличие, сроки, ткани, привязка фото к моделям — только после ответов клиента (`CATALOG-MODEL.md §7`).
- Итальянское происхождение модели «Эджио» (Egeo, CTS Salotti) не подтверждено — не заявлять.
- Счётчиков аналитики на старом сайте нет; доступов к Вебмастеру/GSC нет.
