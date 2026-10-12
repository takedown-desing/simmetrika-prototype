# SITE-TREE — simmetrika-mebel.ru (прототип структуры, v1 от 2026-10-12)

**Тематика (одним абзацем).** Мебельная фабрика SIMMETRIKA (Москва / Химки) продаёт диваны собственного производства — прямые, угловые и модульные, большинство с механизмом для сна (пантограф, венеция, выкатной) — частным покупателям Москвы и области через каталог на сайте и пять точек продаж в мебельных центрах. Сайт — витрина с заявкой (без оплаты): смотрю модель → выбираю ткань/сторону → добавляю в заявку → менеджер перезванивает. Главный поисковый спрос: «купить диван (Москва)», «диван-кровать», «угловой диван», «от производителя / фабрика».

**Источники.** `research/clusters/CLUSTERS.md` (23 кластера, 2 316 фраз, ∑ 1,48 млн WS/мес Москва+МО) · `research/serp/yandex-top10-2026-10-12.md` · ТЗ §3–6 · RULE-URL-STRUCTURE (trailing slash **yes**, kebab-case, latin, depth ≤ 3).

## Дерево

```
/                                               Главная · C01 «фабрика диванов в Москве» (70 120) · P1
├── /catalog/                                   Каталог — хаб · C00 «купить диван», «диваны москва» (642 806) · P1
│   ├── /catalog/pryamye-divany/                Категория · C02 (59 876) · 8 товаров · P1
│   │   ├── /catalog/pryamye-divany/{model}/    Товар (edzhio, kembridzh, reymond, teo, kloud, oksford, milano, bombey)
│   │   └── /catalog/pryamye-divany/velyur/     SEO-фильтр ткани · C09 (4 551) · P3
│   ├── /catalog/uglovye-divany/                Категория · C03 (155 690) · 8 товаров · P1
│   │   ├── /catalog/uglovye-divany/{model}/    Товар (edzhio, kembridzh, reymond, milano, floyd, bombey, rolling, teylor)
│   │   └── /catalog/uglovye-divany/velyur/     SEO-фильтр ткани · C08 (3 164) · P3
│   ├── /catalog/modulnye-divany/               Категория «Модульные диваны и системы» · C04 (19 665) · 3 товара · P1
│   │   └── /catalog/modulnye-divany/{model}/   Товар (shanhay, edzhio, bombey)
│   ├── /catalog/divany-krovati/                Коллекция «Диваны-кровати со спальным местом» (сквозная по категориям) · C05 (293 845) · P1
│   │   ├── /catalog/divany-krovati/pantograf/  SEO-фильтр механизма · C10 (3 711) · P2
│   │   ├── /catalog/divany-krovati/venetsiya/  SEO-фильтр механизма · C11 (1 042) · P2
│   │   └── /catalog/divany-krovati/vykatnye/   SEO-фильтр механизма · C12 (14 585) · P2
│   ├── /catalog/divany-dlya-gostinoy/          Коллекция (подборка + текст) · C18 (19 572) · P2
│   ├── /catalog/bolshie-divany/                Коллекция «Большие диваны от 250 см» · C20 (27 041) · P2
│   ├── /catalog/dizaynerskie-divany/           Коллекция (лофт/современный стиль) · C19 (11 837) · P3
│   ├── /catalog/velyur/                        SEO-фильтр ткани · C06 (13 534) · P2
│   ├── /catalog/rogozhka/                      SEO-фильтр ткани · C07 (3 081) · P2
│   ├── /catalog/v-nalichii/                    SEO-фильтр наличия · C21 (1 261) · P2
│   └── /catalog/cvet/{color}/                  SEO-фильтр цвета · C17 (54 143) · P2 — seryy, bezhevyy, zelenyy, siniy, belyy, korichnevyy, zheltyy, terrakot, bordovyy, rozovyy
├── /sale/                                      Акции и распродажа выставочных образцов (скидки до 30%) · C14 (45 922) · P1
├── /na-zakaz/                                  Диваны на заказ по индивидуальным размерам · C13 (4 192) · P2
├── /dostavka/                                  Доставка, сборка, сроки изготовления, оплата · C16 (12 655) · P2
├── /o-kompanii/                                О фабрике (производство, материалы, гарантия) · service, поддерживает C01 · P2
├── /kontakty/                                  Шоурумы и контакты (5 точек, карта, форма) · C15 (2 156) · P1
│   └── /kontakty/{showroom}/                   D — отложено: himki-grand, tvoy-dom, imperiya, tri-kita, roomer (B01: «диваны химки» 617, «три кита диваны» 174, «твой дом диваны» 152)
├── /news/                                      Новости и акции (ТЗ §3) · service
│   └── /news/{slug}/                           Новость
├── /blog/                                      D — отложено, P3: как выбрать диван для ежедневного сна, механизмы, велюр vs рогожка · C22 (12 219)
│   └── /blog/{slug}/
├── /zayavka/                                   Заявка (корзина без оплаты) · noindex
│   └── /zayavka/spasibo/                       Спасибо · noindex
├── /privacy/                                   Политика конфиденциальности · service
└── /404/                                       Пустая категория / не найдено (с ссылками в категории — ТЗ §5)
```

Глубина: товар — 3 клика (/ → категория → товар). Все коммерческие страницы ≤ 3.

## Таблица страниц

| # | url | page_type | cluster_id | H1 (черновик) | priority | статус |
|---|---|---|---|---|---|---|
| 1 | `/` | home | C01 | Диваны от производителя: фабрика SIMMETRIKA в Москве | P1 | queries |
| 2 | `/catalog/` | catalog-hub | C00 | Каталог диванов | P1 | queries |
| 3 | `/catalog/pryamye-divany/` | category | C02 | Прямые диваны | P1 | queries |
| 4 | `/catalog/uglovye-divany/` | category | C03 | Угловые диваны | P1 | queries |
| 5 | `/catalog/modulnye-divany/` | category | C04 | Модульные диваны и системы | P1 | queries |
| 6 | `/catalog/divany-krovati/` | collection | C05 | Диваны-кровати со спальным местом | P1 | queries |
| 7 | `/catalog/divany-krovati/pantograf/` | filter | C10 | Диваны с механизмом пантограф | P2 | queries |
| 8 | `/catalog/divany-krovati/venetsiya/` | filter | C11 | Диваны с механизмом венеция | P2 | queries |
| 9 | `/catalog/divany-krovati/vykatnye/` | filter | C12 | Выкатные диваны | P2 | queries |
| 10 | `/catalog/divany-dlya-gostinoy/` | collection | C18 | Диваны для гостиной | P2 | queries |
| 11 | `/catalog/bolshie-divany/` | collection | C20 | Большие диваны от 250 см | P2 | queries |
| 12 | `/catalog/dizaynerskie-divany/` | collection | C19 | Дизайнерские диваны в современном стиле | P3 | queries |
| 13 | `/catalog/velyur/` | filter | C06 | Диваны в велюре | P2 | queries |
| 14 | `/catalog/rogozhka/` | filter | C07 | Диваны в рогожке | P2 | queries |
| 15 | `/catalog/v-nalichii/` | filter | C21 | Диваны в наличии | P2 | queries |
| 16 | `/catalog/cvet/{color}/` ×10 | filter | C17 | {Цвет} диваны | P2 | queries |
| 17 | `/catalog/pryamye-divany/velyur/` | filter | C09 | Прямые диваны в велюре | P3 | queries |
| 18 | `/catalog/uglovye-divany/velyur/` | filter | C08 | Угловые диваны в велюре | P3 | queries |
| 19 | `/catalog/{category}/{model}/` ×19 | product | — (long-tail «диван {модель}») | {Тип} диван {Модель} | P1 | queries |
| 20 | `/sale/` | landing | C14 | Распродажа выставочных образцов со скидкой до 30% | P1 | queries |
| 21 | `/na-zakaz/` | service-landing | C13 | Диваны на заказ по вашим размерам | P2 | queries |
| 22 | `/dostavka/` | service | C16 | Доставка, сборка и сроки изготовления | P2 | queries |
| 23 | `/o-kompanii/` | service | — (поддержка C01) | О фабрике SIMMETRIKA | P2 | queries · service-page |
| 24 | `/kontakty/` | contact | C15 | Шоурумы и контакты | P1 | queries |
| 25 | `/kontakty/{showroom}/` ×5 | local | B01 | Диваны SIMMETRIKA в {ТЦ} | D | отложено (вернуть по требованию) |
| 26 | `/news/`, `/news/{slug}/` | news | — | Новости и акции | P2 | queries · service-page |
| 27 | `/blog/`, `/blog/{slug}/` | blog | C22 | — | D | отложено (P3) |
| 28 | `/zayavka/`, `/zayavka/spasibo/` | utility | — | Ваша заявка | P1 | queries · service-page · noindex |
| 29 | `/privacy/` | utility | — | Политика конфиденциальности | P1 | queries · service-page |

Итого к запуску (без D): **29 статических + 10 цветов + 19 товаров ≈ 57 индексируемых URL**, 2 noindex.

## Распределение кластеров
- 23 кластера → 23 страницы, все закреплены (1:1). Без страницы — 0.
- Отложено (D): B01 шоурумы (5), C22 блог (вернуть при готовности контента). Причина: нет контента на старте; спрос мал (B01) или информационный (C22).
- Служебные без спроса (`no-search-intent`): /o-kompanii/, /news/, /zayavka/, /privacy/, /404.
- Backlog B02 (ассортимент): кресла, кожаные, еврокнижка/аккордеон/книжка — см. CLUSTERS.md.

## Решения, которые надо подтвердить (STOP-точка plan-site, шаг 1)
1. Товар = модель в категории (Эджио прямой и Эджио угловой — два товара с кросс-ссылкой), а не один товар с «конфигурацией». Соответствует ТЗ §4 («товар принадлежит одной категории»).
2. «Модульные системы» → H1 «Модульные диваны и системы», slug `modulnye-divany` (спрос «модульный диван» 9 533; «модульные системы» — другая тематика).
3. «Диваны-кровати» — коллекция (сквозной фильтр «есть спальное место»), а не четвёртая категория в админке.
4. `/sale/` отдельно от `/news/`: новости — лента, распродажа образцов — постоянная посадочная с товарами-образцами.
5. Цветовые и тканевые фильтры индексируются только при ≥ 3 товарах в выборке; иначе `noindex,follow` автоматически.

Следующий шаг после утверждения: `INTERLINKING.md` (шаг 2, `/interlink`) и финализация таблицы Pages pipeline в master.md (шаг 3) — черновик уже внесён в master.md.
