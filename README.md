# Grunder — Сайт производства окон

Сайт-лендинг для компании Grunder (производство и продажа окон, Бишкек).

## Стек

- Статика: HTML + CSS + JavaScript
- Leaflet.js (карта)
- Vercel Serverless (отправка заявок в Telegram)
- Адаптация под все устройства

## Локальный запуск

Открыть `index.html` в браузере или через Live Server.

## Деплой на Vercel

1. Установить [Vercel CLI](https://vercel.com/docs/cli)
2. `vercel login`
3. `vercel --prod`

## Переменные окружения (Vercel → Settings → Environment Variables)

| Переменная | Описание |
|---|---|
| `TG_TOKEN` | Токен бота из @BotFather |
| `TG_CHAT` | ID чата/группы для уведомлений |

## Кнопка на сайте

Ссылка: `https://grunder.vercel.app` (или кастомный домен)

## Изображения

Все фото в `images/` — реальные фотографии компании. Чтобы заменить:
- Положите новый файл в папку `images/` с тем же именем
- Либо отредактируйте путь в `index.html` в теге `<img>`
