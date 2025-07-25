from models.user_models import UserCreate, UserUpdate, UserOut
from utils.hashing import hash_password, verify_password
from db import user_collection
from bson import ObjectId
import uuid

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

def create_user(user_data: UserCreate):
    user_dict = user_data.dict()
    user_dict["password"] = hash_password(user_dict["password"])
    user_dict["publicId"] = str(uuid.uuid4())
    result =  user_collection.insert_one(user_dict)
    created_user =  user_collection.find_one({"_id": result.inserted_id})
    return user_helper(created_user)

# 🔥 Eksik olan fonksiyon burada:
def register_user(user_data: UserCreate):
    return  create_user(user_data)

def get_user_by_id(user_id: str):
    user =  user_collection.find_one({"publicId": user_id})
    if user:
        return user_helper(user)
    return None

def update_user(user_id: str, user_data: UserUpdate):
    update_data = {k: v for k, v in user_data.dict().items() if v is not None}
    if "password" in update_data:
        update_data["password"] = hash_password(update_data["password"])
    result =  user_collection.update_one({"publicId": user_id}, {"$set": update_data})
    return result.modified_count

def delete_user(user_id: str):
    result =  user_collection.delete_one({"publicId": user_id})
    return result.deleted_count

def authenticate_user(email: str, password: str):
    user =  user_collection.find_one({"email": email})
    if user and verify_password(password, user["password"]):
        return user_helper(user)
    return None
