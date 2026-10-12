# CATALOG-MODEL — модель данных каталога, SEO-правила страниц, редиректы (прототип, v1 от 2026-10-12)

Дополняет ТЗ §4–6 и `SITE-TREE.md`. Это спецификация для разработчика и админки; дизайн и стек здесь не выбираются.

## 1. Сущности

### Категория (`category`)
| Поле | Тип | Примечание |
|---|---|---|
| name | text | «Прямые диваны» |
| slug | latin | `pryamye-divany` — фиксируется при создании, смена = 301 |
| h1, title, description | text | редактируемые, с дефолтом по шаблону (§3) |
| intro_text, seo_text | rich | короткий текст сверху, SEO-текст под листингом |
| sort | int | порядок в меню |
| is_active | bool | |

На старт: `pryamye-divany`, `uglovye-divany`, `modulnye-divany`. Новые категории — из админки (ТЗ §4).

### Товар (`product`) — модель в категории
| Поле | Тип | Примечание |
|---|---|---|
| name | text | «Эджио» |
| category_id | fk | одна категория (ТЗ). Та же модель в другой категории = другой товар; поле `model_family` (например `edzhio`) связывает их для блока «Эта модель в других исполнениях» |
| slug | latin | `edzhio` → URL `/catalog/{category}/{slug}/` |
| price_from | money, nullable | вычисляется как min(цена вариантов); если цен нет — «цена по запросу» (см. §7, вопрос 1) |
| length_cm, depth_cm, height_cm, seat_height_cm | int | Д×Г×В, высота посадки |
| sleeping_w_cm, sleeping_l_cm | int, nullable | спальное место |
| mechanism | enum | `none` / `pantograf` / `venetsiya` / `vykatnoy` (+ расширяемо) |
| has_sleeping_place | bool | = mechanism ≠ none (ключ для коллекции «Диваны-кровати») |
| filling, frame, legs | text | наполнитель, каркас, опоры |
| description | rich | |
| is_sample_sale | bool | выставочный образец со скидкой → попадает в `/sale/`; + `old_price`, `discount_pct` |
| tags | multi | `dlya-gostinoy`, `dizaynerskie`, `bolshie` (авто при length ≥ 250) — для коллекций |
| is_active, is_hit, sort | | «хит» для витрины главной |
| seo: h1, title, description, canonical | | дефолт по шаблону |

### Вариант (`variant`)
| Поле | Тип | Примечание |
|---|---|---|
| product_id | fk | |
| fabric_id | fk → справочник тканей | материал (велюр/рогожка/жаккард) + название коллекции ткани + цвет-группа |
| color_group | enum | 10 групп для фильтра/URL: `seryy, bezhevyy, zelenyy, siniy, belyy, korichnevyy, zheltyy, terrakot, bordovyy, rozovyy` |
| side | enum, nullable | `left` / `right` — только для угловых |
| size_label | text, nullable | если у модели есть размерные исполнения |
| price | money, nullable | |
| availability | enum | `in_stock` / `made_to_order` + `lead_time_days` |
| photos[] | images | свои фото на вариант; первое — обложка |
| sku | text | артикул для заявки/выгрузки |
| is_active | | |

Справочник тканей (`fabric`): name, material (велюр/рогожка/жаккард/шенилл…), color_group, swatch-изображение, properties (антикоготь, износостойкость). Из него строятся сватчи в карточке и фильтры.

### Заявка (`lead`)
type (`cart` / `one_click` / `question` / `callback`), name, phone, email, comment, items[{variant_id, qty, price_snapshot}], source_url, utm_*, status (new / in_progress / closed), created_at. Выгрузка CSV. Email-уведомление на список адресов из настроек.

### Дополнения модели по итогам структур страниц (2026-10-13, решение D-03 в QUESTIONS.md)

| Сущность / поле | Назначение | Используется |
|---|---|---|
| `showroom` (name, slug, mall, address, floor_note, hours, phone, geo_lat/lng, how_to_get, parking, photos[], is_main, is_active) | Единый источник NAP для контактов, футера, главной, карточек («где посмотреть»), JSON-LD `FurnitureStore` ×5 и отложенных страниц `/kontakty/{slug}/` | kontakty, home, product, footer |
| `promo` (title, text, image, link, date_from, date_to, is_active, sort) | Баннеры акций на главной и `/sale/` (ТЗ §9 «баннеры») | home, sale |
| `seo_landing` (slug, parent_url, h1, title, description, intro, seo_text, filter_rule JSON, faq[], cover, is_active) | SEO-подборки и фильтр-посадочные из SITE-TREE без участия программиста | filter-landing ×12, механизмы ×3 |
| `product.has_storage` (bool) | Ящик для белья: фильтр и FAQ (спрос ≈ 10 тыс.) `[Q-17]` | category, product |
| `product.is_hit`, `product.sort` | Витрина «Хиты» и сортировка «популярность» `[Q-27]` | home, catalog |
| `variant.sample_*` (sample_price, old_price, discount_pct, sample_showroom_id, sample_status: available/reserved/sold, sample_reserved_until, sample_condition, sample_photos[]) | Выставочные образцы живут на варианте, а не на товаре: образец — конкретная ткань в конкретном шоуруме `[Q-26]` | sale, product |
| `lead.sizes` (length_cm, depth_cm, side, notes) или структурированный `comment`; `lead.subtype` (sample_reserve, dealer, custom_size) | Заявки со страниц `/na-zakaz/`, `/sale/`, `/o-kompanii/` | zayavka, na-zakaz, sale |
| `site_settings.legal` (legal_name, inn, ogrn, address, email_pd, policy_date) | Один источник для `/privacy/`, футера и `Organization` `[Q-11]` | privacy, footer, o-kompanii |
| `site_settings.delivery` (тарифы, сроки, `delivery_prices_public` bool, lead_time_days) | Тексты доставки во всех блоках из одного места `[Q-02, Q-24]` | dostavka, product, category |
| `news` (title, slug, type: news/promo, date, date_end, cover, announce, body, product_ids[], is_active, seo) | Раздел «Новости и акции» | news |

## 2. URL-правила (RULE-URL-STRUCTURE)
- Trailing slash: **да**. Lowercase, kebab-case, латиница (транслит по ГОСТ-подобной схеме: Эджио → `edzhio`, Кембридж → `kembridzh`, Реймонд → `reymond`, ТЭО → `teo`, Клоуд → `kloud`, Оксфорд → `oksford`, Милано → `milano`, Бомбей → `bombey`, Флоид → `floyd`, Роллинг → `rolling`, Тейлор → `teylor`, Шанхай → `shanhay`).
- Товар: `/catalog/{category}/{product}/`. Вариант **не** имеет своего URL: выбор варианта меняет состояние через `?variant={sku}` (canonical → товар без параметра) или через JS-state. Для шаринга менеджером ссылка с `?variant=` допустима.
- Статические SEO-фильтры (из SITE-TREE): свой URL, свой H1/title/текст, self-canonical, в sitemap. Правило индексации: **≥ 3 активных товаров в выборке → index; иначе `noindex,follow`** (автоматически).
- Любые другие комбинации фильтров и сортировка — GET-параметры (`?price=…&length=…&sort=…`): `<meta name="robots" content="noindex,follow">` + canonical на страницу без параметров.
- Пагинация `?page=N`: self-canonical, индексируется, `rel=prev/next` необязательно; «показать ещё» должно иметь fallback-ссылку на `?page=N`.
- Без `.html`, без `index`, без параметров в контентных URL. Один URL = одна сущность.

## 3. Шаблоны meta (дефолты, редактируемые в админке)
| Тип | Title | H1 | Description |
|---|---|---|---|
| Главная | Диваны от производителя в Москве: фабрика SIMMETRIKA | Диваны от производителя: фабрика SIMMETRIKA в Москве | Прямые, угловые и модульные диваны собственного производства. 5 шоурумов в Москве и Химках, скидки на образцы до 30%, изготовление под ваш размер. |
| Категория | {Категория} от производителя купить в Москве \| SIMMETRIKA | {Категория} | {Категория} фабрики SIMMETRIKA: {N} моделей, механизмы {список}, ткани велюр и рогожка. Цены от {price_from} ₽. Шоурумы в Москве и Химках. |
| Коллекция/фильтр | {Название} купить от производителя в Москве \| SIMMETRIKA | {Название} | аналогично, с уточнением признака |
| Товар | {Тип} диван {Модель}: купить от производителя, цена \| SIMMETRIKA | {Тип} диван {Модель} | Диван {Модель}: {Д}×{Г}×{В} см, спальное место {ШxД}, механизм {механизм}. {N} вариантов ткани. В наличии / под заказ от {lead_time} дней. |
| Шоурумы | Шоурумы диванов SIMMETRIKA в Москве и Химках: адреса, часы | Шоурумы и контакты | … |
| Sale | Распродажа выставочных образцов диванов: скидки до 30% \| SIMMETRIKA | Распродажа выставочных образцов со скидкой до 30% | … |

Тип в H1 товара: «Прямой» / «Угловой» / «Модульный». Длина title ≤ 65 симв., description 120–160. Разделитель только `|` или `:`; длинное тире в title/description/H1 запрещено (constraints §5). Хаб каталога: `Каталог диванов: купить в Москве, цены | SIMMETRIKA`.

## 4. Структурированные данные (JSON-LD, @graph)
- Все страницы: `Organization` (+ `FurnitureStore` как `@type` массив) с `name`, `url`, `logo`, `telephone`, `sameAs` (VK), `BreadcrumbList`.
- `/kontakty/` и (D) страницы шоурумов: `LocalBusiness`/`FurnitureStore` на каждую точку с `address`, `geo`, `openingHoursSpecification`.
- Категория/коллекция: `CollectionPage` + `ItemList` (ссылки на товары).
- Товар: `Product` (name, image[], description, sku, brand SIMMETRIKA, additionalProperty: габариты/механизм) + `AggregateOffer` (lowPrice/highPrice/offerCount, `availability`) — **только если цены публикуются**; без цен — `Product` без Offer.
- `/dostavka/`: `FAQPage` (синхронно с видимым FAQ).

## 5. Технические SEO-требования к движку (к ТЗ §11)
- robots.txt: `Disallow: /zayavka/`, `/admin/`, `/*?sort=`, `/*?page=` не запрещать; `Sitemap:` абсолютный URL. 
- sitemap.xml: все index-страницы, `lastmod` из updated_at, без noindex-URL; регенерация при публикации.
- 301: `www → non-www`, `http → https`, `/index.html → /`, `/straight.html → /catalog/pryamye-divany/`, `/angular.html → /catalog/uglovye-divany/`, `/modular.html → /catalog/modulnye-divany/`, trailing-slash нормализация. Все — single-hop.
- Пустая категория/фильтр: 200 с сообщением и ссылками (ТЗ §5), но `noindex`.
- Изображения: WebP + fallback, `srcset`, lazy-load ниже первого экрана, alt = «{Тип} диван {Модель}, {ткань} {цвет}», имена файлов латиницей `divan-edzhio-pryamoy-velyur-seryy-1.webp`.
- Метрика + GA4: цели `lead_cart`, `lead_one_click`, `lead_question`, `lead_callback`; ecommerce `purchase`-аналог с составом заявки (ТЗ §10).
- Core Web Vitals: LCP ≤ 2.5 s mobile; hero-картинка главной с `fetchpriority=high`.

## 6. Перелинковка (черновик силосов, финал — INTERLINKING.md)
- Главная → 3 категории, `/catalog/divany-krovati/`, `/sale/`, `/kontakty/`, хиты.
- Хаб `/catalog/` → все категории и коллекции (плитки с количеством).
- Категория → товары, свои фильтр-посадочные (блок «Подборки»: велюр, пантограф, в наличии), соседние категории.
- Товар → «Похожие» (та же категория, 4–6), «Эта модель в других исполнениях» (model_family), ссылки на ткань/цвет-фильтры из сватчей, `/dostavka/`, `/na-zakaz/`, ближайший шоурум.
- Коллекции/фильтры → родительская категория (хлебные крошки) + 2–3 смежных фильтра.
- Футер: категории, коллекции P1–P2, `/sale/`, `/dostavka/`, `/o-kompanii/`, `/kontakty/`, `/privacy/`.
- Цель: каждая P1-страница ≥ 8 входящих внутренних ссылок, товары — ≥ 3, нет orphan-страниц.

## 7. Открытые вопросы к заказчику (блокируют наполнение)
1. **Цены.** Будут ли публиковаться цены («от … ₽») по вариантам? Без цен не работают фильтр по цене, сортировка по цене, `Offer` в schema и кластер «недорого/цена».
2. **Фото ↔ модель ↔ ткань/цвет.** Таблица соответствия для 75 кадров; какие модели в каких тканях; фото сторон L/R.
3. **Точки продаж.** На сайте 5 адресов, в ТЗ «2 шоурума». Актуальный список, часы, телефон каждой точки, координаты.
4. **Телефоны.** Четыре номера — какой основной, какой для «обратного звонка», есть ли WhatsApp/Telegram.
5. **Ткани.** Полный справочник: названия коллекций, материал, цвета, сватчи, свойства (антикоготь).
6. **Характеристики моделей.** Подтвердить таблицу «модель ↔ габариты ↔ механизм» (на старом сайте привязка нестрогая), наполнитель, каркас, опоры, гарантия.
7. **Наличие и сроки.** Что реально в наличии, срок изготовления под заказ (акция «сроки сокращены» — до скольких дней).
8. **Эджио / Egeo (CTS Salotti).** Какая связь; можно ли писать «итальянский дизайн».
9. **Аналитика/Вебмастер.** Счётчиков на сайте нет — создаём новые; есть ли доступ к Яндекс.Вебмастеру и GSC домена, кто владелец домена на reg.ru.
10. **Юрлицо.** Название, ИНН/ОГРН, адрес производства — для `/privacy/`, футера и `Organization`.
11. **Ассортимент.** Кресла и пуфы (есть на фото) — добавляем категории? Оптовые/дилерские запросы («диваны оптом» 88) — нужна ли страница для дилеров?
12. **Instagram.** Убираем; какие соцсети актуальны (VK, Telegram, Дзен)?
