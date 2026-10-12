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
| Прототип структуры (страница для заказчика/разработчика) | `index.html` → https://takedown-desing.github.io/simmetrika-prototype/ |
| Репозиторий проекта | https://github.com/takedown-desing/simmetrika-prototype |

---

## Pages pipeline (черновик — утверждается вместе с SITE-TREE.md)

| slug | cluster_id | page_type | priority | status |
|---|---|---|---|---|
| / | C01 | home | P1 | queries |
| /catalog/ | C00 | catalog-hub | P1 | queries |
| /catalog/pryamye-divany/ | C02 | category | P1 | queries |
| /catalog/uglovye-divany/ | C03 | category | P1 | queries |
| /catalog/modulnye-divany/ | C04 | category | P1 | queries |
| /catalog/divany-krovati/ | C05 | collection | P1 | queries |
| /catalog/divany-krovati/pantograf/ | C10 | filter | P2 | queries |
| /catalog/divany-krovati/venetsiya/ | C11 | filter | P2 | queries |
| /catalog/divany-krovati/vykatnye/ | C12 | filter | P2 | queries |
| /catalog/divany-dlya-gostinoy/ | C18 | collection | P2 | queries |
| /catalog/bolshie-divany/ | C20 | collection | P2 | queries |
| /catalog/dizaynerskie-divany/ | C19 | collection | P3 | queries |
| /catalog/velyur/ | C06 | filter | P2 | queries |
| /catalog/rogozhka/ | C07 | filter | P2 | queries |
| /catalog/v-nalichii/ | C21 | filter | P2 | queries |
| /catalog/cvet/{color}/ ×10 | C17 | filter | P2 | queries |
| /catalog/pryamye-divany/velyur/ | C09 | filter | P3 | queries |
| /catalog/uglovye-divany/velyur/ | C08 | filter | P3 | queries |
| /catalog/{category}/{model}/ ×19 | — | product | P1 | queries |
| /sale/ | C14 | landing | P1 | queries |
| /na-zakaz/ | C13 | service-landing | P2 | queries |
| /dostavka/ | C16 | service | P2 | queries |
| /o-kompanii/ | — | service-page | P2 | queries |
| /kontakty/ | C15 | contact | P1 | queries |
| /kontakty/{showroom}/ ×5 | B01 | local | D | отложено |
| /news/, /news/{slug}/ | — | service-page | P2 | queries |
| /blog/ | C22 | blog | D | отложено |
| /zayavka/, /zayavka/spasibo/ | — | service-page (noindex) | P1 | queries |
| /privacy/ | — | service-page | P1 | queries |

Жизненный цикл: `queries → researched → brief → structure → content → built → live`.

---

## Статус работ

- [x] Папка проекта и master.md (2026-10-12)
- [x] Изучены ТЗ, описание, каталог Egeo, 75 фото
- [x] Инвентаризация и baseline-аудит текущего сайта
- [x] Семантика собрана и почищена (Wordstat, Москва+МО), кластеры
- [x] SERP ТОП-10 и список конкурентов
- [x] Дерево сайта, URL, модель каталога, meta-шаблоны, редиректы, вопросы клиенту
- [ ] Утверждение дерева пользователем → `/interlink` (INTERLINKING.md) → финализация Pages pipeline
- [ ] Ответы клиента на 12 вопросов (CATALOG-MODEL.md §7) — блокируют `/page-research`
- [ ] Доступы: GSC, Вебмастер, reg.ru, Метрика
- [ ] `/page-research` → `/page-brief` → `/page-structure` → `/page-content`
- [ ] Выбор платформы разработчиком, `/design-site`, `/launch-site`, 301-карта, `/seo-audit` после запуска

---

*Ключи — только в env / `~/.secrets/`, не здесь.*
