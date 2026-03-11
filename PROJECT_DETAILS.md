<div align="center">

# 📋 GigShield AI — Project Details

### Complete feature breakdown, technical architecture, and product vision.

> 📌 Part of the [GigShield AI](./README.md) hackathon project.

</div>

---

## 🧭 Table of Contents

- [What is GigShield AI?](#-what-is-gigshield-ai)
- [Core Features](#-core-features)
- [User Journeys](#-user-journeys)
- [Parametric Insurance Explained](#-parametric-insurance-explained)
- [AI/ML Feature Breakdown](#-aiml-feature-breakdown)
- [Data Flow Architecture](#-data-flow-architecture)
- [Security and Fraud Prevention](#-security-and-fraud-prevention)
- [API Reference](#-api-reference)
- [UI Pages and Screens](#-ui-pages-and-screens)
- [Business Model](#-business-model)
- [Social Impact](#-social-impact)

---

## 🌐 What is GigShield AI?

GigShield AI is a **parametric micro-insurance platform** designed to address a critical gap in the gig economy: the complete absence of income protection for delivery workers. 

Unlike traditional insurance products which require manual claim filing, evidence submission, and weeks of processing — GigShield AI uses **real-time external data, AI prediction models, and automated decision logic** to pay delivery workers the moment a disruption occurs in their zone.

> **Parametric insurance** pays based on objective, measurable external events (like rainfall crossing a threshold) rather than subjective loss assessments. This makes payouts instant, transparent, and dispute-free.

---

## ✨ Core Features

### 🔐 Worker Registration & Onboarding
- Delivery partners sign up with their name, phone, platform, and primary delivery zone
- AI immediately generates a personalized risk profile based on the zone's historical data
- Workers are issued a unique `WKR-XXXX` Worker ID for all future interactions

### 📊 AI Risk Assessment Engine
- Zone-level risk scoring based on historical weather, AQI, flood records, and lockdown events
- Runs weekly to update risk profiles and premium calculations
- Outputs a **0–100 Risk Score** that directly determines the tier of weekly premium offered

### 🛡️ Weekly Policy Purchase
- Workers choose from three weekly coverage tiers (Low / Medium / High Risk)
- Premiums range from ₹39 to ₹79 per week — affordable for any income level
- Coverage activates instantly after payment
- No paperwork, no medical checks, no rejection criteria

### 🌩️ Real-Time Disruption Monitoring
- Continuous polling of **Weather APIs** (OpenWeatherMap) for rainfall intensity
- **AQI APIs** (AQICN / OpenAQ) checked every 15 minutes for air quality spikes
- **Maps/Traffic APIs** (Google / Mapbox) for live zone closure detection
- Official flood authority alerts cross-referenced for flood trigger validation

### ⚡ Automatic Claim Trigger
- When a monitored parameter crosses its threshold in a covered worker's active zone, the system:
  1. Logs the trigger event with timestamp and zone data
  2. Validates against active policies for that zone
  3. Locates and verifies eligible workers via GPS + activity status
  4. Queues the compensation payout automatically

### 💸 Instant Payout System
- Funds are transferred to the worker's registered UPI / bank account
- Target payout time: **under 5 minutes** from trigger detection
- Workers receive an in-app notification confirming the transfer

### 📈 Worker Analytics Dashboard
- Live Risk Monitor showing current Rainfall, AQI, Zone Status, and Flood Alerts
- Active policy details and coverage expiry
- Historical claims — date, event type, and amount paid
- Earnings summary — total payouts received, weeks covered
- AI-powered weekly recommendation based on upcoming forecast

### 🤖 Fraud Detection System
- Multi-layer validation pipeline:
  - **GPS Verification** — worker coordinates must be within the declared active zone
  - **Timestamp Analysis** — worker must have been active ≤ 1 hour before the trigger
  - **Activity Cross-check** — platform session status verified (where API is available)
  - **ML Anomaly Detection** — Isolation Forest algorithm flags statistically unusual claim patterns

---

## 🚶 User Journeys

### Journey 1 — First-Time Registration

```
Open App → Landing Page → Click "Get Protected"
    → Register Page → Fill Name, Phone, Platform, Zone
    → Submit → AI Risk Assessment runs (2s)
    → Worker ID Generated → Dashboard Activated → Policy Selection
```

### Journey 2 — Purchasing Weekly Cover

```
Dashboard → "Renew Coverage / Buy Policy"
    → View AI-recommended tier → Select plan (₹39 / ₹59 / ₹79)
    → Payment via UPI → Policy Activated Instantly
    → Confirmation screen with policy ID and expiry date
```

### Journey 3 — Automatic Payout (Core Value Prop)

```
Disruption Event Detected (e.g., rainfall spike at 11 AM)
    → System checks active policies for affected zone
    → Worker Rajan's GPS confirms he's in the zone
    → Claim queued automatically — no action needed from Rajan
    → ₹300 transferred to Rajan's UPI within 5 minutes
    → Push notification: "₹300 credited — Heavy Rain Payout"
```

---

## 📐 Parametric Insurance Explained

| Aspect | Traditional Insurance | GigShield AI (Parametric) |
|---|---|---|
| **Claim Process** | Manual — fill forms and submit evidence | Automatic — no action needed |
| **Payout Time** | Days to weeks | Under 5 minutes |
| **Disputes** | Common — subjective damage assessments | None — data-driven triggers |
| **Transparency** | Opaque policy language | Clear published thresholds |
| **Cost** | High premiums, many exclusions | Micro-premiums from ₹39/week |

### Trigger Thresholds (Current v1.0)

| Event | API Source | Threshold | Payout |
|---|---|---|---|
| 🌧️ Heavy Rainfall | OpenWeatherMap | > 40 mm/hr | ₹200–₹400 |
| 🌫️ Extreme AQI | AQICN / OpenAQ | AQI > 300 | ₹150–₹350 |
| 🌊 Flood Alert | NDMA / State Alerts | Official advisory issued | ₹300–₹500 |
| 🚫 Zone Lockdown | Google Maps / Traffic | Closure > 2 hours | ₹250–₹450 |

---

## 🧠 AI/ML Feature Breakdown

### 1. Risk Score Prediction
- **Model:** Gradient Boosting Classifier (Scikit-learn)
- **Input Features:** Historical rainfall frequency, AQI averages, flood incidents, lockdown history for a given zone
- **Output:** Risk Score (0–100) — used to categorize the worker into Low / Medium / High tier
- **Training Data Source:** Public weather archives + NDMA flood records + traffic APIs

### 2. Dynamic Premium Engine
- **Approach:** Rule-based pricing anchored by AI risk score
- **Formula:** `Base Premium × Zone Risk Multiplier × Seasonal Adjustment`
- **Low Risk Zone (0–40):** ₹39 / week
- **Medium Risk Zone (41–70):** ₹59 / week
- **High Risk Zone (71–100):** ₹79 / week

### 3. Fraud Detection
- **Model:** Isolation Forest (Anomaly Detection, Scikit-learn)
- **Triggers review when:**
  - Worker's GPS is > 5km from the affected zone center
  - Worker has not had any platform activity in the last 3 hours
  - Claim frequency is statistically higher than the zone average
- **Outcome:** Suspicious claims are flagged for human review before payout

### 4. Location Validation
- Uses **reverse geocoding** to map GPS coordinates to zone boundaries
- Zone boundaries are pre-defined polygons stored in MongoDB
- A claim is only processed if the worker's coordinates fall within the active zone boundary during the trigger window

### 5. Predictive Alert System (Planned — Phase 5)
- Forecasts disruption probability 24–48 hrs in advance using 7-day weather data
- Sends proactive push notifications to workers reminding them to purchase coverage

---

## 🏗️ Data Flow Architecture

```
                ┌─────────────────────────────────┐
                │     External Data Sources        │
                │  Weather API · AQI API · Maps API │
                └──────────────┬──────────────────┘
                               │  (Polling every 15 min)
                               ▼
                ┌─────────────────────────────────┐
                │     AI Engine (Python / FastAPI) │
                │  Risk Score · Premium · Fraud    │
                └──────────────┬──────────────────┘
                               │  (REST API calls)
                               ▼
                ┌─────────────────────────────────┐
                │   Backend API (Node.js/Express)  │
                │  Workers · Policies · Claims     │
                └──────┬──────────────┬───────────┘
                       │              │
              ┌────────▼──┐    ┌──────▼────────┐
              │  MongoDB  │    │ Frontend React │
              │(Database) │    │  (Worker UI)  │
              └───────────┘    └───────────────┘
```

---

## 🔒 Security and Fraud Prevention

| Layer | Implementation |
|---|---|
| **Input Validation** | All API inputs are validated and sanitized server-side |
| **Rate Limiting** | Express rate limiter on all public endpoints (planned) |
| **GPS Validation** | Worker's coordinates cross-checked with zone polygon on every claim |
| **Anomaly Detection** | Isolation Forest ML model for pattern-based fraud flagging |
| **Data Encryption** | HTTPS enforced; sensitive data (phone, UPI) encrypted at rest (planned) |
| **Audit Logs** | Every trigger event, claim, and payout is immutably logged |

---

## 🔌 API Reference

| Method | Endpoint | Body / Params | Description |
|---|---|---|---|
| `GET` | `/api/health` | — | Server status and uptime |
| `POST` | `/api/workers/register` | `{ name, phone, platform, zone }` | Register a new delivery worker |
| `GET` | `/api/risk/monitor` | `?zone=<zone_name>` | Get live risk metrics for a zone |
| `GET` | `/api/claims` | — | Get list of all past claims |
| `POST` | `/api/premium/calculate` | `{ zone, platform }` | AI-calculated weekly premium suggestion |

### Sample Response — `/api/risk/monitor?zone=Bangalore South`

```json
{
  "zone": "Bangalore South",
  "timestamp": "2026-03-11T14:00:00.000Z",
  "rainfall_mm_per_hr": 12,
  "aqi": 112,
  "flood_alert": false,
  "zone_locked": false,
  "overall_risk": "low",
  "risk_score": 28,
  "triggers_active": []
}
```

---

## 📱 UI Pages and Screens

### Landing Page (`/`)
- Hero banner with headline, subtext, and two CTA buttons
- Key stats bar (from ₹39, ₹2,000/week max payout, <5 mins, platform logos)
- Features grid (6 feature cards with icons)
- How It Works — 5-step visual timeline
- Parametric Triggers table
- Weekly pricing plans (3 tiers with Most Popular badge)
- CTA section + Footer

### Dashboard (`/dashboard`)
- Active Policy Card (gradient premium card with tier, expiry, max payout)
- Live AI Risk Monitor (4 cards: Rainfall, AQI, Zone Traffic, Flood Alerts)
- Recent Claims table (date, event, amount, status)
- Quick Stats sidebar (earned, total payouts, weeks covered, risk score)
- AI Recommendation card (next-week risk forecast)
- Zone Overview (platform, zone, risk category, expiry)

### Register (`/register`)
- Two-column layout: left info panel + right form panel
- Form: Name, Phone (+91 prefix), Platform (dropdown), Delivery Zone (dropdown)
- Loading spinner animation on submit
- Success screen: Worker ID display + navigation to Dashboard

---

## 💼 Business Model

| Revenue Stream | Details |
|---|---|
| **Weekly Premiums** | ₹39–₹79 per worker per week |
| **Risk Pool Management** | Premiums fund a collective pool; payouts distributed from pool |
| **Platform Partnerships** | Revenue-sharing with Zepto/Blinkit/Instamart (B2B white-label option) |
| **Data Insights (Future)** | Zone-level risk analytics sold to logistics companies |

---

## 🌍 Social Impact

GigShield AI directly addresses **UN SDG 8 — Decent Work and Economic Growth** by:

- 🛡️ Providing India's 10M+ gig delivery workers with their **first real income safety net**
- 💸 Ensuring **zero income loss** during unavoidable environmental and civic disruptions
- 🤝 Reducing financial anxiety and improving **quality of life** for low-income delivery partners
- 📊 Creating a **data-driven ecosystem** for evidence-based policy design around gig worker welfare

---

<div align="center">

← [Back to README](./README.md)

*GigShield AI — Protecting the Gig Economy, Rain or Shine.* 🛡️

</div>
