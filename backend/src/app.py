import os
from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

# .env dosyasındaki ortam değişkenlerini yükle
load_dotenv()

# FastAPI uygulamasını başlat
app = FastAPI(
    title="Emotia Backend API",
    description="Depresyonla mücadele platformu için backend API'ları.",
    version="0.1.0",
)

# CORS ayarları
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],  # Tüm HTTP metodlarına izin ver
    allow_headers=["*"],  # Tüm başlıklara izin ver
)

# sağlık kontrolü (health check) endpoint'i
@app.get('/api/health', status_code=status.HTTP_200_OK)
async def health_check():
    """
    Uygulamanın çalışıp çalışmadığını kontrol eden sağlık kontrolü endpoint'i.
    """
    return {"status": "backend ok", "message": "Backend is running!"}


if __name__ == "__main__":
    import uvicorn
    port = int(os.getenv('PORT', 5000))
    uvicorn.run(app, host="0.0.0.0", port=port)
