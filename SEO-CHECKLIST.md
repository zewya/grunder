# SEO Чек-лист для Grunder

## Мета-теги (уже заполнено)
- [x] Title: Grunder — Производство и продажа окон в Бишкеке
- [x] Description: краткое описание сайта
- [x] Keywords: окна Бишкек, ПВХ окна, Grunder и т.д.
- [x] Open Graph (Facebook/Telegram)
- [x] Twitter Cards
- [x] Canonical URL
- [x] JSON-LD разметка LocalBusiness
- [x] favicon / logo

## Требуют заполнения от клиента

### 1. Favicon
- [ ] Сделать иконку сайта (favicon.ico) на основе логотипа
- [ ] Добавить в `<head>`:
  ```html
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <link rel="apple-touch-icon" href="/images/logo.jpg">
  ```

### 2. Яндекс.Карты / Google Maps
- [ ] Заменить OpenStreetMap (Leaflet) на Яндекс.Карты или Google Maps — лучше индексируется
- [ ] Либо создать страницу в Яндекс.Бизнесе и добавить ссылку

### 3. Яндекс.Вебмастер и Google Search Console
- [ ] Добавить сайт в Яндекс.Вебмастер: https://webmaster.yandex.ru
- [ ] Добавить сайт в Google Search Console: https://search.google.com/search-console

### 4. Sitemap
- [ ] Создать sitemap.xml и загрузить в корень сайта
- [ ] Добавить в robots.txt
- [ ] Отправить в Яндекс.Вебмастер и Google Search Console

### 5. robots.txt
- [ ] Создать `/robots.txt`:
  ```
  User-agent: *
  Allow: /
  Sitemap: https://grunder.vercel.app/sitemap.xml
  ```

### 6. Яндекс.Бизнес
- [ ] Зарегистрироваться в https://business.yandex.ru
- [ ] Заполнить профиль (адрес, телефон, часы работы, фото)
- [ ] Добавить ссылку на сайт

### 7. 2GIS / Справочник
- [ ] Проверить и обновить карточку в 2GIS (пр. Ленина, 316)
- [ ] Добавить ссылку на сайт в профиль 2GIS

### 8. Instagram
- [ ] В шапке профиля @grunder.kg добавить ссылку на сайт: https://grunder.vercel.app

### 9. Google Analytics / Яндекс.Метрика
- [ ] Установить счётчик Яндекс.Метрики (добавить код перед `</head>`)
- [ ] Установить Google Analytics 4

### 10. Скорость загрузки
- [ ] Проверить в PageSpeed Insights: https://pagespeed.web.dev
- [ ] Оптимизировать изображения (сжать `.jpg` файлы)

### 11. Контент
- [ ] Проверить уникальность текстов (copyscape / text.ru)
- [ ] Добавить альтернативные тексты (alt) ко всем изображениям

### 12. Домены
- [ ] Если будет свой домен (например grunder.kg) — настроить редирект с grunder.vercel.app
