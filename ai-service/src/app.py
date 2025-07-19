import os
from fastapi import FastAPI, HTTPException, status, Body
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from services.gemini_service import analyze_sentiment_with_gemini
from dotenv import load_dotenv
from pathlib import Path

# .env dosyasını yükle
env_path = Path(__file__).resolve().parent.parent / '.env'
load_dotenv(dotenv_path=env_path)

# FastAPI uygulamasını başlat
app = FastAPI(
    title="Emotia AI Service API",
    description="Google Gemini API ile duygu analizi servisi.",
    version="0.1.0",
)

# CORS ayarları
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ----------- Pydantic Modelleri -----------

class TextAnalysisRequest(BaseModel):
    text: str


class TextAnalysisResponse(BaseModel):
    label: str
    explanation: str
    confidence: float
    message: str


class EntryRequest(BaseModel):
    user_id: int
    text: str
    user_prediction: str
    timestamp: str  # ISO 8601 formatı: "2025-07-16T19:30:00Z"


class EntryResponse(BaseModel):
    ai_label: str
    user_label: str
    match_score: int
    confidence: float
    empathy: str
    message: str


class ReportResponse(BaseModel):
    total_entries: int
    positive: int
    neutral: int
    negative: int
    last_update: str


# ----------- Endpoint'ler -----------

@app.get('/ai/health', status_code=status.HTTP_200_OK)
async def ai_health_check():
    return {"status": "Gemini ok", "message": "AI service is running!"}


@app.post('/ai/analyze', response_model=TextAnalysisResponse, status_code=status.HTTP_200_OK)
async def analyze_text(request_body: TextAnalysisRequest = Body(...)):
    user_text = request_body.text
    result = analyze_sentiment_with_gemini(user_text)
    return result


@app.post('/ai/entry', response_model=EntryResponse, status_code=status.HTTP_201_CREATED)
async def create_entry(entry: EntryRequest):
    # AI analizi
    ai_result = analyze_sentiment_with_gemini(entry.text)

    ai_label = ai_result.get("label", "")
    confidence = ai_result.get("confidence", 0.0)
    empathy = ai_result.get("message", "Kendine iyi bak. Bugün biraz nefes almak iyi gelebilir.")

    match_score = 100 if ai_label == entry.user_prediction else 50

    return {
        "ai_label": ai_label,
        "user_label": entry.user_prediction,
        "match_score": match_score,
        "confidence": confidence,
        "empathy": empathy,
        "message": "Girdi başarıyla alındı"
    }


@app.get('/ai/report', response_model=ReportResponse, status_code=status.HTTP_200_OK)
async def get_report():
    return {
        "total_entries": 123,
        "positive": 45,
        "neutral": 50,
        "negative": 28,
        "last_update": "2025-07-15T22:00:00Z"
    }


# ----------- Sunucu Başlat -----------

if __name__ == "__main__":
    import uvicorn

    port = int(os.getenv('PORT', 8000))
    uvicorn.run(app, host="0.0.0.0", port=port)
