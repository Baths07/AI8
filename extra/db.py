import os
from pymongo import MongoClient
from dotenv import load_dotenv

load_dotenv()
client = MongoClient(os.getenv("MONGO_URI"))
db = client["veritabani"]
user_collection = db["users"]

try:
    print("Bağlantı başarılı:", client.server_info())
except Exception as e:
    print("Bağlantı hatası:", e)