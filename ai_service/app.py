from fastapi import FastAPI
from pydantic import BaseModel
import random
import uvicorn

app = FastAPI(title="GigShield AI Engine")

class RiskAssessmentRequest(BaseModel):
    zone: str
    weather_condition: str
    aqi: int

@app.get("/health")
def health_check():
    return {"status": "active", "service": "AI Engine Running"}

@app.post("/predict-risk")
def predict_risk(request: RiskAssessmentRequest):
    # Mock AI prediction logic
    risk_score = min(100, (request.aqi / 5) + (20 if request.weather_condition == "Rain" else 0))
    premium_suggested = round(max(5.0, risk_score * 0.2), 2)
    
    return {
        "zone": request.zone,
        "risk_score": risk_score,
        "suggested_weekly_premium": premium_suggested,
        "high_risk": risk_score > 70
    }

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
