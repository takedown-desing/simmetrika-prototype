# Тексты страниц — индекс (66 страниц, 2026-10-13)

Формат файлов: `drafts/_CONTENT-FORMAT.md` (YAML-шапка + markdown-тело + директивы-контейнеры, несколько страниц в файле через `<!-- page-break -->`). Данные товаров, тканей, шоурумов и настроек: `drafts/data/catalog.json`. Проверка: `python3 scripts/check-content.py` (тире, длины meta, FAQ 40–60 слов, внутренние ссылки, дубли title).

Все цифры, которых нет у клиента, — рабочие допущения. Номера допущений каждой страницы перечислены в поле `assumptions` её шапки; список вопросов — `QUESTIONS.md`.

| Файл | Страницы | Слов | FAQ |
|---|---|---:|---:|
| `home.md` | `/` | 1 322 | 13 |
| `catalog.md` | `/catalog/` | 1 471 | 15 |
| `pryamye-divany.md` | `/catalog/pryamye-divany/` | 1 320 | 12 |
| `uglovye-divany.md` | `/catalog/uglovye-divany/` | 1 629 | 14 |
| `modulnye-divany.md` | `/catalog/modulnye-divany/` | 2 108 | 14 |
| `divany-krovati.md` | `/catalog/divany-krovati/` + `/pantograf/`, `/venetsiya/`, `/vykatnye/` (noindex при 1 товаре) | 4 147 | 27 |
| `filter-landings-1.md` | для гостиной, большие, дизайнерские, велюр, рогожка, в наличии, прямые в велюре, угловые в велюре | ≈5 000 | 59 |
| `filter-landings-colors.md` | 10 цветов `/catalog/cvet/{color}/` (белый и коричневый noindex до фото) | ≈5 300 | 68 |
| `products-pryamye.md` | 8 карточек прямых | ≈2 300 + FAQ | 56 |
| `products-uglovye.md` | 8 карточек угловых | ≈2 300 + FAQ | 64 |
| `products-modulnye.md` | 3 карточки модульных | ≈1 200 + FAQ | 24 |
| `sale.md` | `/sale/` | 1 629 | 13 |
| `na-zakaz.md` | `/na-zakaz/` | 1 954 | 13 |
| `dostavka.md` | `/dostavka/` | 1 767 | 13 |
| `o-kompanii.md` | `/o-kompanii/` | 1 292 | 10 |
| `kontakty.md` | `/kontakty/` + шаблон `/kontakty/{showroom}/` | 1 574 | 17 |
| `news.md` | `/news/` + 6 записей | ≈2 400 | 10 |
| `zayavka.md` | `/zayavka/`, `/zayavka/spasibo/` (тексты интерфейса, noindex) | UI ≈200 строк | 10 |
| `privacy-404.md` | `/privacy/` (+ согласие, cookie), `/404/`, пустая категория, товар снят (410) | 2 065 | — |
| `_ui.md` | общие тексты интерфейса: шапка, кнопки, бейджи, фильтры, формы, ошибки, футер | ≈400 строк | — |

## Что нужно знать вёрстке

- Карточки товаров, таблицы характеристик, сватчи, адреса шоурумов, лента новостей и баннеры в тексты не вписаны: на их месте директивы (`:::products`, `:::spec-table`, `:::swatches`, `:::showrooms`, `:::news`, `:::promo`), данные из `catalog.json`.
- FAQ собирается из поля `faq:` последним H2 и дублируется в `FAQPage` слово в слово.
- Описание товара: поле `description_md` или тело под шапкой (у модульных — тело).
- Политика конфиденциальности требует редакции юриста клиента (`legal_review: required`), реквизиты и сроки хранения — плейсхолдеры.
