# Python'ın hafif bir sürümünü temel imaj olarak kullan
FROM python:3.9-slim-buster

# Çalışma dizinini /app olarak ayarla
WORKDIR /app

# Bağımlılıkları kopyala ve yükle
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Tüm uygulama kodunu kopyala
COPY . .

# Uygulamanın çalışacağı portu belirt
EXPOSE 8000

# Uygulamayı başlatma komutu (Uvicorn ile)
# src.app:app -> src dizinindeki app.py dosyasındaki 'app' FastAPI objesini çalıştır
CMD ["uvicorn", "src.app:app", "--host", "0.0.0.0", "--port", "8000"]