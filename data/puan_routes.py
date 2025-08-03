from fastapi import APIRouter, HTTPException
from user_service import update_user_puan, get_user_by_public_id
from db import puan_collection
from datetime import datetime

router = APIRouter(prefix="/puan", tags=["Puanlama"])

# 🔘 1. Puan Ver
@router.post("/ver")
def puan_ver(publicId: str, puan: float):
    user = get_user_by_public_id(publicId)
    if not user:
        raise HTTPException(status_code=404, detail="Kullanıcı bulunamadı. publicId yanlış olabilir.")
    
    # Güncel puanı kullanıcı kaydına yaz
    result = update_user_puan(publicId, puan)

    # Puan geçmişi koleksiyonuna kayıt ekle
    puan_collection.insert_one({
        "publicId": publicId,
        "puan": puan,
        "timestamp": datetime.utcnow()
    })

    return {"message": "Puan başarıyla güncellendi.", "modified_count": result.modified_count}


# 🔘 2. Mevcut Puanı Getir
@router.get("/guncel")
def puan_getir(publicId: str):
    user = get_user_by_public_id(publicId)
    if not user:
        raise HTTPException(status_code=404, detail="Kullanıcı bulunamadı.")
    
    return {
        "publicId": publicId,
        "puan": user.get("puan", "Henüz puan verilmemiş.")
    }


# 🔘 3. Puan Geçmişini Getir (isteğe bağlı ama önerilir)
@router.get("/gecmis")
def puan_gecmisi_getir(publicId: str):
    puanlar = list(puan_collection.find({"publicId": publicId}, {"_id": 0}))
    if not puanlar:
        raise HTTPException(status_code=404, detail="Bu kullanıcı için puan geçmişi bulunamadı.")
    
    return {
        "publicId": publicId,
        "gecmis": puanlar
    }
