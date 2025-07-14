import os
from fastapi import FastAPI, HTTPException, status, Body
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv

# .env dosyasındaki ortam değişkenlerini yükle
load_dotenv()

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


# İstek gövdesi için Pydantic modeli
class TextAnalysisRequest(BaseModel):
    text: str


# Yanıt gövdesi için Pydantic modeli (placeholder)
class TextAnalysisResponse(BaseModel):
    label: str
    explanation: str
    confidence: float
    message: str


# Basit bir sağlık kontrolü (health check) endpoint'i
@app.get('/ai/health', status_code=status.HTTP_200_OK)
async def ai_health_check():
    """
    AI servisinin çalışıp çalışmadığını kontrol eden sağlık kontrolü endpoint'i.
    """
    return {"status": "Gemini ok", "message": "AI service is running!"}


# Duygu analizi için placeholder endpoint
@app.post('/ai/analyze', response_model=TextAnalysisResponse, status_code=status.HTTP_200_OK)
async def analyze_text(request_body: TextAnalysisRequest = Body(...)):
    """
    Kullanıcı metnini alıp duygu analizi yapan placeholder endpoint.
    Gerçek Gemini entegrasyonu daha sonra eklenecek.
    """
    user_text = request_body.text

    # Şimdilik sabit bir yanıt dönüyoruz.
    # Gerçek entegrasyon ai-service/src/services/gemini_service.py içinde yapılacak.
    dummy_response = {
        "label": "nötr",
        "explanation": "Bu bir placeholder yanıttır. Gerçek analiz Gemini API ile yapılacak.",
        "confidence": 0.5,
        "message": "Metniniz alındı. Analiz ediliyor..."
    }

    return dummy_response


# Uygulama doğrudan çalıştırıldığında
if __name__ == "__main__":
    import uvicorn

    port = int(os.getenv('PORT', 8000))
    uvicorn.run(app, host="0.0.0.0", port=port)