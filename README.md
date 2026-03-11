<div align="center">

# 🛡️ GigShield AI

### *AI-Powered Parametric Insurance for Gig Economy Delivery Workers*

[![React](https://img.shields.io/badge/Frontend-React%20%2B%20Vite-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Backend-Node.js%20%2B%20Express-339933?style=for-the-badge&logo=nodedotjs)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
[![Python](https://img.shields.io/badge/AI%2FML-Python%20%2B%20FastAPI-3776AB?style=for-the-badge&logo=python)](https://www.python.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](./LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen?style=for-the-badge)](https://github.com/)
[![Hackathon](https://img.shields.io/badge/Hackathon%202026-Finalist%20Project-blueviolet?style=for-the-badge)](./PROJECT_DETAILS.md)

> **Hackathon Project 2026** — Protecting gig delivery workers from income loss caused by real-world disruptions using automated, AI-driven parametric insurance.

</div>

---

## 🔗 Quick Links

| Resource | Description | Link |
|---|---|---|
| 📋 **Project Details** | Full feature breakdown, architecture, API reference & business model | [📄 View PROJECT_DETAILS.md](./PROJECT_DETAILS.md) |
| 🌐 **Live Frontend** | React app running locally | `http://localhost:5173` |
| 🔧 **Backend API** | Express server running locally | `http://localhost:5000/api/health` |
| 🤖 **AI Service** | FastAPI risk scoring service | `http://localhost:8000/health` |
| ⭐ **GitHub Repo** | Star and fork the project | [GitHub](https://github.com/) |

> 💡 **New here?** Start with the [📋 Project Details](./PROJECT_DETAILS.md) file — it has user journeys, complete feature descriptions, data flow architecture, and the full API reference.

---

## 📋 Table of Contents

1. [Project Overview](#-project-overview)
2. [Problem Statement](#-problem-statement)
3. [Target Persona & Scenarios](#-target-persona--scenarios)
4. [Solution Overview](#-solution-overview)
5. [System Workflow](#-system-workflow)
6. [Parametric Triggers](#-parametric-triggers)
7. [Weekly Premium Model](#-weekly-premium-model)
8. [Smart Premium Calculation & Fraud Detection](#-smart-premium-calculation--fraud-detection)
9. [AI/ML Integration](#-aiml-integration)
10. [Technology Stack](#-technology-stack)
11. [Deployment Strategy](#-deployment-strategy)
12. [Phased Development Roadmap](#-phased-development-roadmap)
13. [Project Structure](#-project-structure)
14. [Quick Start](#-quick-start)
15. [Future Features](#-future-features)

---

## 🌟 Project Overview

**GigShield AI** is an innovative **parametric insurance platform** built to protect Q-Commerce delivery partners — Zepto, Blinkit, and Instamart riders — from sudden income loss caused by external disruptions.

Unlike traditional insurance that requires filing claims and waiting for approvals, GigShield AI uses **real-time environmental data** and **AI prediction models** to automatically detect disruption events and trigger **instant payouts** to affected workers — no paperwork, no delays.

---

## ⚠️ Problem Statement

Grocery delivery workers depend entirely on completing deliveries to earn their living. External events completely out of their control can zero out their weekly income overnight:

| Disruption Type | Real-World Impact |
|---|---|
| 🌧️ Heavy Rainfall (>40mm/hr) | Roads flood, deliveries halted, zero earnings |
| 🌫️ Extreme AQI (>300) | Health risk forces workers off the road |
| 🌊 Flood Alerts | Entire zones become unnavigable |
| 🚫 Traffic Lockdowns / Curfews | Administrative road closures stop all deliveries |

**The core problem:** Gig workers are classified as independent contractors — they bear 100% of income risk with zero safety net.

---

## 🎯 Target Persona & Scenarios

**Primary Users:** Q-Commerce delivery partners on platforms like Zepto, Blinkit, and Instamart.

| Persona | Profile | Weekly Earnings Model |
|---|---|---|
| Rajan, Delivery Partner | 28 yrs, Bangalore, Blinkit rider, 2 yrs experience | ~₹4,000–₹6,000/week based on 8–10 hrs/day |
| Sunita, Freelance Rider | 35 yrs, Mumbai, Zepto partner, primary breadwinner | ~₹3,500–₹5,500/week, supports family of 4 |
| Arjun, Student Rider | 21 yrs, Pune, Instamart part-time | ~₹1,500–₹2,500/week, college expenses |

### Real-World Scenarios

- **Scenario 1 — Mumbai Monsoon:** Rajan is on a delivery streak on a Tuesday afternoon. Sudden heavy rainfall (55mm/hr) hits his zone. GigShield AI detects the trigger, validates his active zone, and auto-deposits ₹350 compensation within minutes.

- **Scenario 2 — Delhi Pollution Emergency:** Sunita can't ride during a severe AQI alert (AQI 320) declared by the city. GigShield AI flags the event and processes a payout for 4 lost working hours.

- **Scenario 3 — Curfew / Zone Lockdown:** Arjun's delivery zone is suddenly closed due to a local civic event. The platform detects the zone closure via Maps API and triggers compensation automatically.

---

## 💡 Solution Overview

GigShield AI delivers a **weekly micro-insurance** product specifically designed for gig economy workers:

- ✅ **Zero-friction enrollment** — sign up once, coverage starts immediately
- ✅ **Automatic claim triggers** — no forms, no waiting
- ✅ **AI-adjusted premiums** — priced fairly based on zone-level risk
- ✅ **Instant payouts** — money reaches the worker within minutes of a trigger event
- ✅ **Transparent conditions** — workers always know exactly what triggers a payout

---

## ⚙️ System Workflow

```
  Worker Registration
         │
         ▼
   AI Risk Assessment
  (zone + weather + AQI)
         │
         ▼
  Purchase Weekly Policy
     (₹39–₹79/week)
         │
         ▼
  Real-Time API Monitoring
  (Weather / AQI / Maps)
         │
    Disruption Detected?
       ┌──┴──┐
      YES    NO
       │      │
       ▼      └──→ Continue Monitoring
  Claim Auto-Triggered
       │
       ▼
  Worker Verified
  (Location + Active Status)
       │
       ▼
  ⚡ Instant Payout Released
```

---

## 🌩️ Parametric Triggers

Payouts are determined by objective, measurable thresholds — no ambiguity, no disputes:

| Trigger Event | Measurement | Threshold | Payout Level |
|---|---|---|---|
| 🌧️ Heavy Rainfall | Rainfall rate (mm/hr) | > 40 mm/hr | ₹200–₹400 |
| 🌫️ Extreme AQI | Air Quality Index | AQI > 300 | ₹150–₹350 |
| 🌊 Flood Alert | Official flood advisory issued | Zone-level alert | ₹300–₹500 |
| 🚫 Zone Lockdown / Curfew | Traffic closure + Maps API | Zone closed > 2 hrs | ₹250–₹450 |

> **Parametric insurance advantage:** Because payouts are based on objective data, claims are processed automatically without manual review — ensuring speed, fairness, and trust.

---

## 💸 Weekly Premium Model

Workers pay a small, affordable weekly premium. Premiums are dynamically calculated based on the risk profile of their primary delivery zone.

| Risk Category | Zone Example | Weekly Premium | Max Weekly Payout |
|---|---|---|---|
| 🟢 Low Risk | Dry city zones (Oct–Feb) | ₹39/week | ₹800 |
| 🟡 Medium Risk | Urban zones during monsoon season | ₹59/week | ₹1,200 |
| 🔴 High Risk | Flood-prone / polluted zones | ₹79/week | ₹2,000 |

**Example:** A worker paying ₹59/week gets up to ₹1,200 in compensation if qualifying triggers occur — a **20x return** on their premium investment.

---

## 🔐 Smart Premium Calculation & Fraud Detection

### Smart Premium Calculation
Premiums are not static. The AI engine dynamically adjusts them weekly based on:
- **Historical disruption frequency** for the worker's zone
- **7-day weather forecast** from Weather API
- **Current AQI trend** data
- **Platform activity level** (active riders reduce pool cost)

### Automated Fraud Detection
The system uses multi-layer validation to prevent fraudulent claims:

| Validation Layer | Method |
|---|---|
| 📍 Location Validation | GPS coordinates must be within the declared active zone |
| ⏰ Timestamp Matching | Worker must have been active within 1 hour of the trigger event |
| 📱 Platform Activity Check | Cross-referenced with delivery platform session status |
| 🤖 ML Anomaly Detection | Flags statistically unusual claim patterns across the worker pool |

---

## 🧠 AI/ML Integration

| AI Feature | Technology | Purpose |
|---|---|---|
| Risk Score Prediction | Scikit-learn (Gradient Boosting) | Predicts zone-level disruption probability |
| Dynamic Premium Engine | Python + Pandas | Calculates fair, real-time premiums per worker |
| Fraud Detection Model | Isolation Forest (Anomaly Detection) | Identifies suspicious claim patterns |
| Location Validator | Maps API + Geocoding | Verifies worker was present in the disruption zone |

---

## 💻 Technology Stack

| Layer | Technology | Role |
|---|---|---|
| **Frontend** | React 18, Vite, Tailwind CSS v4 | Responsive worker-facing dashboard and UI |
| **Backend** | Node.js, Express.js | REST API server — auth, claims, worker management |
| **Database** | MongoDB (Mongoose ODM) | Worker profiles, policies, claims records |
| **AI Engine** | Python, FastAPI, Scikit-learn | Risk scoring, premium calculation, fraud detection |
| **Weather Data** | OpenWeatherMap API | Real-time rainfall and weather conditions |
| **Air Quality** | AQICN / OpenAQ API | Live AQI monitoring per city zone |
| **Geolocation** | Google Maps API / Mapbox | Zone validation, location verification |
| **Hosting (Web)** | Vercel (Frontend) + Render (Backend) | Cloud deployment |

---

## 🚀 Deployment Strategy

### Why Web over Mobile?

| Factor | Web App | Native Mobile App |
|---|---|---|
| **Development Speed** | ✅ Faster with React | ❌ Separate Android/iOS codebases |
| **Cost** | ✅ Single codebase | ❌ Higher development cost |
| **Accessibility** | ✅ Works on any browser | ❌ Requires app install |
| **PWA Support** | ✅ Installable on home screen | Not needed |
| **Hackathon Scope** | ✅ Ideal for prototype demo | ❌ Too time-intensive |

> **Decision:** GigShield AI is deployed as a **Progressive Web App (PWA)** — accessible via any browser, installable on the home screen, and optimized for mobile viewports. This provides a native-app-like experience without platform-specific development overhead.

---

## 📅 Phased Development Roadmap

| Phase | Milestone | Timeline | Status |
|---|---|---|---|
| **Phase 1** | Core prototype — Worker registration, policy purchase, mock claims | Week 1 | ✅ Done |
| **Phase 2** | Real API integration — Weather, AQI, Maps | Week 2 | 🔧 In Progress |
| **Phase 3** | AI/ML engine — Risk scoring, dynamic premiums | Week 3 | 📋 Planned |
| **Phase 4** | Fraud detection model + automated payout logic | Week 4 | 📋 Planned |
| **Phase 5** | Worker analytics dashboard + PWA optimization | Week 5 | 📋 Planned |
| **Phase 6** | Production deployment + beta testing with real riders | Week 6+ | 📋 Planned |

---

## 📂 Project Structure

```text
📦 GigShield-AI/
├── 📁 frontend/                  # React + Vite application
│   ├── 📄 index.html
│   ├── 📄 vite.config.js
│   └── 📁 src/
│       ├── 📄 main.jsx           # App entry point
│       ├── 📄 App.jsx            # Router + global layout
│       ├── 📄 index.css          # Global styles (Tailwind v4)
│       ├── 📁 pages/
│       │   ├── 📄 Landing.jsx    # Hero, features, how it works
│       │   ├── 📄 Dashboard.jsx  # Worker dashboard + risk monitor
│       │   └── 📄 Register.jsx   # Worker registration form
│       └── 📁 components/
│           └── 📄 Navbar.jsx     # Sticky navigation bar
│
├── 📁 backend/                   # Node.js + Express API server
│   ├── 📄 server.js              # Main entry point
│   ├── 📁 models/
│   │   └── 📄 Worker.js          # Worker Mongoose schema
│   └── 📄 package.json
│
└── 📁 ai_service/                # Python FastAPI microservice
    ├── 📄 app.py                 # Risk scoring + premium API
    └── 📄 requirements.txt       # Python dependencies
```

---

## ⚡ Quick Start

### 1. Run the Backend
```bash
cd backend
npm install
npm run dev
# API available at http://localhost:5000
```

### 2. Run the Frontend
```bash
cd frontend
npm install
npm run dev
# UI available at http://localhost:5173
```

### 3. Run the AI Service
```bash
cd ai_service
pip install -r requirements.txt
uvicorn app:app --host 0.0.0.0 --port 8000 --reload
# AI API available at http://localhost:8000
```

### API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Server status check |
| `POST` | `/api/workers/register` | Register a new delivery worker |
| `GET` | `/api/risk/monitor` | Get live risk data for a zone |
| `GET` | `/api/claims` | Get list of active/past claims |

---

## 🔭 Future Features

- 🔔 **Predictive Disruption Alerts** — Notify workers before a trigger event hits
- 📊 **Worker Analytics Dashboard** — Earnings history, coverage timeline, risk heatmap
- 🤝 **Platform API Integration** — Direct integration with Zepto/Blinkit partner APIs
- 📱 **PWA Offline Mode** — Basic functionality even without internet
- 💳 **UPI Auto-Payout** — Instant UPI transfers to worker's bank account

---

<div align="center">

**GigShield AI** — *Protecting the Gig Economy, Rain or Shine.* 🛡️

*Built with ❤️ for Hackathon 2026*

</div>
