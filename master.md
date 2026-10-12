# master.md — SIMMETRIKA (simmetrika-mebel.ru) — сборка интернет-магазина + SEO

> Точка входа в проект. Открыл файл → Claude подтягивает правила SEO-помощника + контекст клиента.
> Модель — RULE-PROJECT-STRUCTURE. Проект типа «новый сайт по ТЗ на базе существующего домена».

## Подключение помощника

```
@import /Users/alekseyborovikov/Documents/Work/claude/seomachine/universal-support/rules/_SEO-ASSISTANT.md
```

Цепочка сборки: `/collect-queries` ✅ → `/plan-site` (шаг 1 ✅, шаги 2–3 после утверждения дерева) → `/page-research` → `/page-brief` → `/page-structure` → `/page-content` → `/design-site` → `/launch-site` → `/seo-audit`.
Поддержка: `/seo-audit` · `/seo-stats` · `/yandex-api` · `/monitor-positions` · `/competitor-analysis`. Реестр источников — RULE-DATA-SOURCES.

---

## Профиль клиента

- **Домен:** simmetrika-mebel.ru (reg.ru shared-hosting, nginx; сейчас статический экспорт Tilda 2019)
- **Ниша / тематика:** мебельная фабрика, диваны (прямые, угловые, модульные), B2C
- **Регион продвижения:** Москва и Московская область (Химки); 5 точек продаж в ТЦ
- **Целевая ПС:** Яндекс (основная), Google
- **Языки:** ru
- **CMS / стек:** новый сайт — по ТЗ, выбор за разработчиком (обязательна простая админка); не выбран
- **Что продвигаем:** каталог диванов (категории, диваны-кровати, фильтр-посадочные), главная «фабрика диванов», распродажа образцов, шоурумы
- **Ограничения клиента:** без онлайн-оплаты, без ЛК, без отзывов, без 3D, без мультиязычности (ТЗ §12). Не заявлять итальянское происхождение без подтверждения.
- **Заказчик / ТЗ:** Olga Avdeeva, ТЗ от 12.10.2026 (`source/docs/`), конспект `knowledge-base/raw/simmetrika-mebel.ru/brief-tz-2026-10-12.md`

---

## Идентификаторы источников данных

- **GSC property:** нет доступа (в нашем GSC домена нет) — запросить у клиента
- **Яндекс.Вебмастер host:** нет на аккаунтах 1 и 2 — запросить доступ/добавить после запуска
- **Яндекс.Метрика counter:** на текущем сайте счётчика нет → создать новый при запуске
- **Keys.so:** база msk, по домену данных нет (видимость 0)
- **Wordstat:** регион 1 (Москва и область) — `research/semantics/`
- **Arsenkin:** check-top задача 31646137 (2026-10-12) — `research/serp/`
- **PSI baseline:** mobile 71 / desktop 90 — `snapshots/2026-10-12/psi-*.txt`

---

## Site-agent (правки через HTTP)

- **Установлен:** no (сайт будет пересобран; агент ставится на новый движок после запуска)

---

## Конкуренты

`.claude/rules/competitors.md` — эталон pushe.ru; фабрики russdivan.ru, fabrika-stil.ru, ligadivanov.ru, zamm.ru, moon.ru; ритейл divan.ru, divano.ru, divanchik.ru, hoff.ru.

---

## Артефакты проекта

| Что | Где |
|---|---|
| Исходники клиента (ТЗ, каталог Egeo, 75 фото) | `source/docs/`, `source/photos/` |
| База знаний (конспект ТЗ, инвентарь сайта, Egeo, фото) | `knowledge-base/raw/simmetrika-mebel.ru/` |
| Снапшот текущего сайта + PSI + контакт-листы | `snapshots/2026-10-12/` |
| Аудит текущего сайта (baseline) | `audits/2026-10-12-current-site-analysis.md` |
| Семантика: сырое (5 295) → clean (2 387) → стоп-слова | `research/semantics/` |
| Кластеры (23) | `research/clusters/CLUSTERS.md`, `kw-cluster-map.csv` |
| SERP Яндекс ТОП-10 (10 запросов) | `research/serp/yandex-top10-2026-10-12.md` |
| **Дерево сайта + таблица страниц** | `research/structure/SITE-TREE.md`, `site-tree.csv` |
| **Модель каталога, URL, meta, schema, редиректы, вопросы клиенту** | `research/structure/CATALOG-MODEL.md` |
| Структуры 15 шаблонов страниц (блок-схемы, FAQ, schema, meta, перелинковка) | `drafts/structure/` + индекс `drafts/structure/README.md` |
| Реестр вопросов и допущений | `QUESTIONS.md`, контекст-пакет `drafts/_CONTEXT.md` |
| План перелинковки | `INTERLINKING.md` |
| Прототип структуры (страница для заказчика/разработчика) | `index.html` → https://takedown-desing.github.io/simmetrika-prototype/ |
| Репозиторий проекта | https://github.com/takedown-desing/simmetrika-prototype |

---

## Pages pipeline

Статусы `structure` выставлены 2026-10-13: этапы research и brief пропущены по решению пользователя (клиент не отвечает), структуры построены на допущениях `drafts/_CONTEXT.md` + `QUESTIONS.md`. Перед `/page-content` брифы заменяются ответами клиента. Файл структуры: `drafts/structure/{slug}.md` (колонка «структура»).

| slug | cluster_id | page_type | priority | status | структура |
|---|---|---|---|---|---|

| / | C01 | home | P1 | structure | home.md |
| /catalog/ | C00 | catalog-hub | P1 | structure | catalog.md |
| /catalog/pryamye-divany/ | C02 | category | P1 | structure | pryamye-divany.md |
| /catalog/uglovye-divany/ | C03 | category | P1 | structure | uglovye-divany.md |
| /catalog/modulnye-divany/ | C04 | category | P1 | structure | modulnye-divany.md |
| /catalog/divany-krovati/ | C05 | collection | P1 | structure | divany-krovati.md |
| /catalog/divany-krovati/pantograf/ | C10 | filter | P2 | structure | divany-krovati.md §13 |
| /catalog/divany-krovati/venetsiya/ | C11 | filter | P2 | structure | divany-krovati.md §13 |
| /catalog/divany-krovati/vykatnye/ | C12 | filter | P2 | structure | divany-krovati.md §13 (noindex при 1 товаре, D-02) |
| /catalog/divany-dlya-gostinoy/ | C18 | collection | P2 | structure | filter-landing.md |
| /catalog/bolshie-divany/ | C20 | collection | P2 | structure | filter-landing.md |
| /catalog/dizaynerskie-divany/ | C19 | collection | P3 | structure | filter-landing.md |
| /catalog/velyur/ | C06 | filter | P2 | structure | filter-landing.md |
| /catalog/rogozhka/ | C07 | filter | P2 | structure | filter-landing.md |
| /catalog/v-nalichii/ | C21 | filter | P2 | structure | filter-landing.md |
| /catalog/cvet/{color}/ ×10 | C17 | filter | P2 | structure | filter-landing.md |
| /catalog/pryamye-divany/velyur/ | C09 | filter | P3 | structure | filter-landing.md |
| /catalog/uglovye-divany/velyur/ | C08 | filter | P3 | structure | filter-landing.md |
| /catalog/{category}/{model}/ ×19 | — | product | P1 | structure | product.md |
| /sale/ | C14 | landing | P1 | structure | sale.md |
| /na-zakaz/ | C13 | service-landing | P2 | structure | na-zakaz.md |
| /dostavka/ | C16 | service | P2 | structure | dostavka.md |
| /o-kompanii/ | — | service-page | P2 | structure | o-kompanii.md |
| /kontakty/ | C15 | contact | P1 | structure | kontakty.md |
| /kontakty/{showroom}/ ×5 | B01 | local | D | отложено | kontakty.md §13 (шаблон) |
| /news/, /news/{slug}/ | — | service-page | P2 | structure | news.md |
| /blog/ | C22 | blog | D | отложено | — |
| /zayavka/, /zayavka/spasibo/ | — | service-page (noindex) | P1 | structure | zayavka.md |
| /privacy/ | — | service-page | P1 | structure | privacy-404.md |

Жизненный цикл: `queries → researched → brief → structure → content → built → live`.

---

## Статус работ

- [x] Папка проекта и master.md (2026-10-12)
- [x] Изучены ТЗ, описание, каталог Egeo, 75 фото
- [x] Инвентаризация и baseline-аудит текущего сайта
- [x] Семантика собрана и почищена (Wordstat, Москва+МО), кластеры
- [x] SERP ТОП-10 и список конкурентов
- [x] Дерево сайта, URL, модель каталога, meta-шаблоны, редиректы, вопросы клиенту
- [x] INTERLINKING.md (силосы, per-page план, анкоры) — 2026-10-13
- [x] Структуры 15 шаблонов страниц в `drafts/structure/` по допущениям — 2026-10-13 (research/brief пропущены по решению пользователя)
- [x] QUESTIONS.md — реестр 32 вопросов и 8 внутренних решений, пополняется
- [ ] Ответы клиента на QUESTIONS.md → замена допущений в структурах
- [ ] Утверждение дерева и структур пользователем
- [ ] Доступы: GSC, Вебмастер, reg.ru, Метрика
- [ ] `/page-research` → `/page-brief` → `/page-structure` → `/page-content`
- [ ] Выбор платформы разработчиком, `/design-site`, `/launch-site`, 301-карта, `/seo-audit` после запуска

---

*Ключи — только в env / `~/.secrets/`, не здесь.*
