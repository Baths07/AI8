from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

MONGO_URL = os.getenv("MONGO_URL")
client = MongoClient(MONGO_URL)

# Veritabanı adı
db = client["veritabani"]

# Kullanıcı koleksiyonu
user_collection = db["users"]

# Puan geçmişini tutacak yeni koleksiyon
puan_collection = db["puanlama"]
