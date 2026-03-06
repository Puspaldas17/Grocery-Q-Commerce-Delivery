# 🛡️ GigShield AI

**AI-powered parametric insurance platform for Grocery / Q-Commerce delivery workers.**

## 📖 1. Project Title and Description

**GigShield AI** is an innovative platform specifically designed to protect gig delivery workers' income using AI-powered parametric insurance. In the fast-paced world of Q-Commerce, delivery partners are often left vulnerable to external disruptions that severely impact their daily earnings. GigShield AI bridges this gap by providing an automated, transparent, and swift insurance safety net that guarantees income protection when the unexpected happens.

## ⚠️ 2. Problem Statement

Grocery delivery workers rely heavily on daily active deliveries to sustain their livelihood. However, they frequently lose income when external disruptions force them off the road or force operational shutdowns. These disruptions include:

- **Severe Weather:** Heavy rain, thunderstorms, and floods.
- **Environmental Hazards:** Extreme pollution (high AQI levels) causing health risks.
- **Civic Restrictions:** Sudden traffic lockdowns, curfews, or zone closures.

When these events stop deliveries, workers face immediate financial loss without any safety net or compensation.

## 🎯 3. Target Persona

Our primary focus is on **Q-Commerce delivery partners** working for platforms like **Zepto, Blinkit, and Instamart**.

- **Working Conditions:** Extremely time-sensitive (10-minute delivery models), vulnerable to on-road risks and harsh weather elements.
- **Earning Model:** Dependent on a weekly earning model based on active hours and the number of successful deliveries. Any disruption directly translates to a loss in their weekly payout.

## 💡 4. Solution Overview

GigShield AI offers a weekly insurance coverage model tailored for the gig economy. The platform automatically monitors external variables and actively cross-references them with worker locations and schedules. When a qualifying disruption occurs, the platform automatically triggers a claim and processes a payout to the affected worker—no manual claim filing, no administrative delays.

## ⚙️ 5. System Workflow

The seamless end-to-end process operates as follows:

1. **Worker Registration:** Delivery partners sign up and link their platform profile/location data.
2. **Risk Assessment:** AI evaluates the worker's geographical zone, historical data, and current environmental forecasts.
3. **Weekly Insurance Policy Purchase:** The worker opts into a micro-duration, weekly insurance policy for a nominal fee.
4. **External Disruption Detection:** The system continuously monitors real-time APIs (weather, AQI, maps) for external disruptions.
5. **Automatic Claim Trigger:** If predefined conditions are met (e.g., severe flood alert in the worker's active zone), a claim is triggered automatically.
6. **Instant Payout:** Funds are directly transferred to the delivery partner's registered account to compensate for the lost earnings.

## 🌩️ 6. Parametric Triggers

Compensation is guaranteed through specific, measurable external events (parametric triggers), including but not limited to:

- **Heavy Rainfall:** Crossing a specific mm/hr threshold.
- **Extreme AQI Levels:** Poor air quality conditions deemed hazardous for riding.
- **Flood Alerts:** Official warnings impacting navigable routes.
- **Traffic Lockdowns or Zone Closures:** Unexpected curfews or administrative road closures.

## 🧠 7. AI/ML Integration

Artificial Intelligence and Machine Learning are at the core of GigShield AI, powering:

- **Dynamic Premium Calculation:** Evaluating real-time risk factors to adjust micro-premiums dynamically.
- **Risk Prediction:** Forecasting potential disruptions based on historical weather and traffic data.
- **Fraud Detection:** Ensuring that claims match the location and timestamp of the active delivery partner.
- **Location Validation:** Verifying the worker’s presence in the affected zone during the disruption period.

## 💸 8. Weekly Premium Model

The platform introduces an affordable **weekly premium model**. Delivery workers pay a very small, manageable fraction of their weekly earnings to purchase the policy. In return, they receive guaranteed compensation for missed working hours whenever a validated external disruption occurs—ensuring their income remains stable despite unpredictable working conditions.

## 💻 9. Technology Stack

GigShield AI is built using modern, scalable, and robust technologies:

- **Frontend:** React + Tailwind CSS
- **Backend:** Node.js + Express
- **Database:** MongoDB
- **AI/ML:** Python + Scikit-learn
- **External APIs:** Weather API, AQI API, Maps API

## 🚀 10. Future Features

We aim to continuously evolve the platform. Future roadmap additions include:

- **Predictive Disruption Alerts:** Proactively notifying workers of upcoming high-risk environmental conditions.
- **Worker Analytics Dashboard:** An intuitive dashboard for partners to track their earnings, coverage history, and risk exposure.
- **Automated Claim Verification:** Enhanced computer vision or secondary data verification for even faster, dispute-free claim processing.

## 📂 11. Project Structure

The repository is meticulously organized into three main functional microservices to ensure scalability, ease of deployment, and clear separation of concerns:

```text
📦 GigShield-AI
├── 📁 frontend/          # React + Vite application (Frontend UI)
│   ├── 📄 src/           # Responsive dashboards, UI components, Tailwind CSS v4
│   └── 📄 package.json   # Frontend dependencies and scripts
├── 📁 backend/           # Node.js + Express application (Core API)
│   ├── 📄 models/        # MongoDB data schemas (e.g., Worker profiles, Policies)
│   ├── 📄 routes/        # API endpoints for user registration, claims, etc.
│   └── 📄 server.js      # Main server entry point
└── 📁 ai_service/        # Python FastAPI microservice (AI computations)
    ├── 📄 app.py         # Endpoints for dynamic risk assessment & premium calculation
    └── 📄 requirements.txt # AI/ML dependencies (Scikit-learn, Pandas, etc.)
```

---

_GigShield AI — Protecting the Gig Economy, Rain or Shine._
