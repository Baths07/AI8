from fastapi import APIRouter, Depends, HTTPException
from user_service import get_user_by_public_id
from auth_bearer import get_current_user
from user_model import UserBasicInfo  # ✅ Bunu ekle

router = APIRouter(prefix="/kullanici", tags=["Kullanıcı"])

@router.get("/bilgi", response_model=UserBasicInfo)  # ✅ Buraya model geldi
def kullanici_bilgisi_getir(current_user: dict = Depends(get_current_user)):
    user = get_user_by_public_id(current_user["publicId"])

    if not user:
        raise HTTPException(status_code=404, detail="Kullanıcı bulunamadı.")
    
    return {
        "isim": user["isim"],
        "soyisim": user["soyisim"]
    }
