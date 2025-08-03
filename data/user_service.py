from db import user_collection

def get_user_by_public_id(publicId: str):
    print("[DEBUG] İlk kullanıcı kaydı:", user_collection.find_one())
    print(f"[DEBUG] Aranan publicId: {publicId}")  # Bu satırı ekle
    user = user_collection.find_one({"publicId": publicId})
    print(f"[DEBUG] Bulunan kullanıcı: {user}")   # Bu satırı da ekle
    return user


def update_user_puan(publicId: str, puan: float):
    result = user_collection.update_one(
        {"publicId": publicId},
        {"$set": {"puan": puan}}
    )
    return result
