from passlib.context import CryptContext
from jose import jwt
from datetime import datetime, timedelta
import os
from db import user_collection
from bson import ObjectId

# Şifreleme ayarı
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# JWT ayarları
SECRET_KEY = os.getenv("SECRET_KEY", "emotia-secret")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 24  # 24 saat

# Şifre hash'leme
def hash_password(password: str) -> str:
    return pwd_context.hash(password)

# Şifre doğrulama
def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)

# JWT token oluşturma
def create_access_token(data: dict) -> str:
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

# DB'deki kullanıcıyı frontend'e uygun hale getir
def user_helper(user) -> dict:
    return {
        "publicId": user.get("publicId"),
        "isim": user.get("isim"),
        "soyisim": user.get("soyisim"),
        "email": user.get("email"),
        "yas": user.get("yas"),
        "puan": user.get("puan"),
        "aiTahmin": user.get("aiTahmin")
    }

# 🔐 Login kontrolü
def authenticate_user(email: str, password: str):
    print(f"🔍 Login deneniyor: {email}")
    
    try:
        user = user_collection.find_one({"email": email})
        if not user:
            print(f"❌ Kullanıcı bulunamadı: {email}")
            return None

        if "password" not in user:
            print("❌ Şifre alanı eksik.")
            return None

        print("🔑 Şifre kontrolü yapılıyor...")
        if verify_password(password, user["password"]):
            print("✅ Şifre doğru!")
            return user_helper(user)

        print("❌ Şifre yanlış.")
        return None

    except Exception as e:
        print(f"💥 Hata oluştu: {str(e)}")
        return None
