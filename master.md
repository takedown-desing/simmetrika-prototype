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
- **CMS / стек:** превью на Astro + админка Sveltia CMS (git-based, `/admin/`), с 2026-10-23; боевая платформа (бэкенд заявок, email) не выбрана
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
| Сайт (превью, Astro) | `site/` → https://github.com/takedown-desing/simmetrika-site · https://takedown-desing.github.io/simmetrika-site/ |
| Админка сайта (Sveltia CMS) | https://takedown-desing.github.io/simmetrika-site/admin/ · SEO-проверка `/admin/seo/` · инструкция для менеджера `site/docs/admin-guide/SIMMETRIKA-admin-guide.pdf` (65 стр., скриншоты), техническая в `site/README.md` |
| Источник правды по текстам и каталогу | с 2026-10-23 `site/src/cms/*.json` (правится в админке); `drafts/content/` и `drafts/data/catalog.json` больше не синхронизируются с сайтом |

---

## Pages pipeline

Статусы `content` выставлены 2026-10-13 (тексты в `drafts/content/`, формат `drafts/_CONTENT-FORMAT.md`). Статусы `structure` выставлены 2026-10-13: этапы research и brief пропущены по решению пользователя (клиент не отвечает), структуры построены на допущениях `drafts/_CONTEXT.md` + `QUESTIONS.md`. Перед `/page-content` брифы заменяются ответами клиента. Файл структуры: `drafts/structure/{slug}.md` (колонка «структура»).

| slug | cluster_id | page_type | priority | status | структура |
|---|---|---|---|---|---|

| / | C01 | home | P1 | built | home.md |
| /catalog/ | C00 | catalog-hub | P1 | built | catalog.md |
| /catalog/pryamye-divany/ | C02 | category | P1 | built | pryamye-divany.md |
| /catalog/uglovye-divany/ | C03 | category | P1 | built | uglovye-divany.md |
| /catalog/modulnye-divany/ | C04 | category | P1 | built | modulnye-divany.md |
| /catalog/kresla/ + 2 товара | — | category | P3 | built | drafts/content/kresla.md (Q-08) |
| /catalog/divany-krovati/ | C05 | collection | P1 | built | divany-krovati.md |
| /catalog/divany-krovati/pantograf/ | C10 | filter | P2 | built | divany-krovati.md §13 |
| /catalog/divany-krovati/venetsiya/ | C11 | filter | P2 | built | divany-krovati.md §13 |
| /catalog/divany-krovati/vykatnye/ | C12 | filter | P2 | built | divany-krovati.md §13 (noindex при 1 товаре, D-02) |
| /catalog/divany-dlya-gostinoy/ | C18 | collection | P2 | built | filter-landing.md |
| /catalog/bolshie-divany/ | C20 | collection | P2 | built | filter-landing.md |
| /catalog/dizaynerskie-divany/ | C19 | collection | P3 | built | filter-landing.md |
| /catalog/velyur/ | C06 | filter | P2 | built | filter-landing.md |
| /catalog/rogozhka/ | C07 | filter | P2 | built | filter-landing.md |
| /catalog/v-nalichii/ | C21 | filter | P2 | built | filter-landing.md |
| /catalog/cvet/{color}/ ×10 | C17 | filter | P2 | built | filter-landing.md |
| /catalog/pryamye-divany/velyur/ | C09 | filter | P3 | built | filter-landing.md |
| /catalog/uglovye-divany/velyur/ | C08 | filter | P3 | built | filter-landing.md |
| /catalog/{category}/{model}/ ×19 | — | product | P1 | built | product.md |
| /sale/ | C14 | landing | P1 | built | sale.md |
| /na-zakaz/ | C13 | service-landing | P2 | built | na-zakaz.md |
| /dostavka/ | C16 | service | P2 | built | dostavka.md |
| /o-kompanii/ | — | service-page | P2 | built | o-kompanii.md |
| /kontakty/ | C15 | contact | P1 | built | kontakty.md |
| /kontakty/{showroom}/ ×5 | B01 | local | D | отложено | kontakty.md §13 (шаблон) |
| /news/, /news/{slug}/ | — | service-page | P2 | built | news.md |
| /blog/ | C22 | blog | D | отложено | — |
| /zayavka/, /zayavka/spasibo/ | — | service-page (noindex) | P1 | built | zayavka.md |
| /privacy/ | — | service-page | P1 | built | privacy-404.md |

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
- [x] Тексты 66 страниц в `drafts/content/` (42 тыс. слов, 451 FAQ) + тексты интерфейса `_ui.md` + данные каталога `drafts/data/catalog.json` — 2026-10-13; проверка `python3 scripts/check-content.py`
- [ ] Ответы клиента на QUESTIONS.md → замена допущений в данных, структурах и текстах (по полю `assumptions`)
- [x] `/design-site` (2026-10-13): дизайн по референсу из папки `дизайн/` (главная divanchik.ru), DESIGN.md, Astro-сборка 62 страниц, QA 0 критичных, адаптив 360–1920 без горизонтальной прокрутки. Репозиторий https://github.com/takedown-desing/simmetrika-site, превью https://takedown-desing.github.io/simmetrika-site/
- [x] Админка Sveltia CMS (2026-10-23): товары, категории, подборки, страницы, новости, настройки, SEO-блок у всех страниц; проверка данных перед сборкой, SEO-отчёт `/admin/seo/`, автопереадресации при смене адреса; сквозной тест `npm run test:admin` (117 проверок). Без выгрузки/загрузки Excel по просьбе пользователя
- [x] Повторное тестирование админки перед показом менеджеру и PDF-инструкция (2026-10-26): одна медиатека `public/img/p`, исправлены превью фото, обложки, плашка на телефоне, падежи кнопок; вход с настоящим токеном, сохранение через API и «Опубликовать» на боевом репозитории не проверялись
- [ ] Обтравка фото на единый фон (требование клиента из описания задачи)
- [ ] Выбор боевой платформы (бэкенд заявок, админка, email по ТЗ §9–10) и перенос шаблонов
- [ ] `/launch-site` → 301 со старых URL → `/seo-audit`
- [ ] Утверждение дерева и структур пользователем
- [ ] Доступы: GSC, Вебмастер, reg.ru, Метрика
- [ ] `/page-research` → `/page-brief` → `/page-structure` → `/page-content`
- [ ] Выбор платформы разработчиком, `/design-site`, `/launch-site`, 301-карта, `/seo-audit` после запуска

---

*Ключи — только в env / `~/.secrets/`, не здесь.*
