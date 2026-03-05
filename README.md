<div align="center">
  <h1>🎓 EdTech Telegram Mini App (TMA)</h1>
  <p><b>Современная высокопроизводительная образовательная экосистема внутри Telegram (Fullstack).</b></p>

  <div>
    <img src="https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
    <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
    <img src="https://img.shields.io/badge/Telegraf-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white" alt="Telegraf" />
    <img src="https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white" alt="SQLite" />
  </div>
  <br>
  <img src="https://cdni.iconscout.com/illustration/premium/thumb/coding-4488737-3738466.png" width="400" alt="Превью платформы" />
</div>

---

## 💎 Суть проекта

Данный проект представляет собой современное **Telegram Mini App (TMA)**, разработанное для образовательных платформ. Оно обеспечивает бесшовную интеграцию между Telegram-ботом и веб-интерфейсом на базе React, предоставляя нативный пользовательский опыт с высококачественными анимациями и тактильной отдачей (Haptic Feedback).

---

## ✨ Ключевые особенности

* 🗺 **Интерактивная дорожная карта:** Визуально впечатляющая временная шкала обучения с индикаторами прогресса и тактильными точками взаимодействия.
* 🚀 **Интеллектуальный онбординг (Warmup):** Динамическая анимационная последовательность для максимального вовлечения пользователей перед показом основного продукта.
* 🛡 **Интегрированная админ-панель:** Метрики в реальном времени и управление контентом, защищенные проверкой ID через параметр `admin`.
* 💾 **Слой персистентности:** Надежное отслеживание прогресса и действий пользователей через высокопроизводительное локальное хранилище (`Better-SQLite3`).
* ⚡ **Премиальный UI/UX:** Микро-анимации и плавные переходы на базе `Framer Motion` с нативной интеграцией `Telegram WebApp SDK`.

---

## 🏗 Архитектура (Feature-Sliced Design)

Проект разделен на Backend (бот) и Frontend (WebApp) и следует модифицированному принципу **FSD** для обеспечения масштабируемости и удобства поддержки.

<details>
<summary><b>📂 Посмотреть структуру монорепозитория</b></summary>
<br>

```text
├── backend/            # Логика бота Telegraf и SQLite
│   ├── db.js           # Уровень абстракции базы данных
│   ├── index.js        # Контроллеры бота и основная логика
│   └── .env.example    # Шаблон конфигурации
├── frontend/           # React WebApp (Vite)
│   ├── src/
│   │   ├── app/        # Точка входа и глобальные провайдеры
│   │   ├── entities/   # Бизнес-логика (Дорожная карта, модули)
│   │   ├── pages/      # Компоненты страниц
│   │   └── shared/     # UI Kit, типы и утилиты
└── .gitignore          # Правила игнорирования для продакшена
```
</details>

---

## 🚀 Быстрый старт

### 1. Настройка окружения
Перейдите в папку `backend` и создайте файл конфигурации:
```bash
cd backend
cp .env.example .env
```
*Укажите в `.env` ваш `BOT_TOKEN` (полученный у @BotFather) и `ADMIN_ID`.*

### 2. Запуск Backend (Бот)
Откройте первый терминал:
```bash
cd backend
npm install
npm start
```

### 3. Запуск Frontend (Mini App)
Откройте второй терминал:
```bash
cd frontend
npm install
npm run dev
```

---

<div align="center">
  <b>Разработано с ❤️ для будущего EdTech</b>
</div>
