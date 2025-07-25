import os
from pymongo import MongoClient
from dotenv import load_dotenv

load_dotenv()

# .env içindeki "MONGO_URL" değerini al
MONGO_URL = os.getenv("MONGO_URL")

# Bağlantıyı kur
client = MongoClient(MONGO_URL)

# Veritabanı ve koleksiyon seç
db = client["veritabani"]
user_collection = db["users"]
