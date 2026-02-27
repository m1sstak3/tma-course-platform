# 🎓 Fullstack Telegram Mini App: Course Platform

> **Modern, high-performance educational ecosystem inside Telegram.**

![Platform Preview](https://cdni.iconscout.com/illustration/premium/thumb/coding-4488737-3738466.png)

## 💎 Project Essence
This project is a state-of-the-art **Telegram Mini App (TMA)** designed for educational platforms. It features a seamless integration between a Telegram Bot and a React-based web interface, providing a native-like experience with high-end animations and haptic feedback.

---

## 🛠 Tech Stack

### Frontend & UI
- **React 18 & TypeScript** — Type-safe, component-based development.
- **Tailwind CSS** — Modern, responsive utility-first styling.
- **Framer Motion** — Premium micro-animations and smooth transitions.
- **Telegram WebApp SDK** — Native interaction (Haptics, MainButton).

### Backend & Storage
- **Node.js** — Fast and scalable runtime.
- **Telegraf** — Robust Telegram Bot API framework.
- **Better-SQLite3** — High-performance local SQL storage.

---

## 🏗 Modular Architecture
The project follows a **Modified Feature-Sliced Design (FSD)** for scalability and maintainability.

```bash
├── backend/            # Telegraf Bot & SQLite Logic
│   ├── db.js           # Database Abstraction Layer
│   ├── index.js        # Bot Controllers & Main Logic
│   └── .env.example    # Configuration Template
├── frontend/           # React WebApp (Vite)
│   ├── src/
│   │   ├── app/        # App entry & global providers
│   │   ├── entities/   # Business logic (Roadmap, Modules)
│   │   ├── pages/      # View components
│   │   └── shared/     # UI Kit, Types & Utilities
└── .gitignore          # Production-ready safety filters
```

---

## 🚀 Key Features

### 1. Interactive Learning Roadmap
A visually stunning timeline with progress indicators and haptic engagement points.

### 2. Intelligent Onboarding (Warmup)
A dynamic pre-entry animation sequence to engage users before they see the product.

### 3. Integrated Admin Dashboard
Real-time metrics and content management accessible only to specialized IDs via a secure `admin` parameter.

### 4. Persistence Layer
Every user interaction is logged. No data is lost; every entry point is tracked via SQLite.

---

## 🚦 Quick Start Guide

### Setup Environment
1. Navigate to `/backend`.
2. Copy `.env.example` to `.env`.
3. Fill in your `BOT_TOKEN` (from @BotFather) and `ADMIN_ID`.

### Run Development
```bash
# Start Backend
cd backend && npm install && npm start

# Start Frontend
cd frontend && npm install && npm run dev
```

---

## 🔮 Future Roadmap
- [ ] **Payments (Phase 2)**: Integration with Telegram Payments for course sales.
- [ ] **Auth Layer**: JWT-based authentication for off-platform access.
- [ ] **Video Hosting**: Direct streaming integration for lessons.

---

*Designed with ❤️ for the future of EdTech.*
