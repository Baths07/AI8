from fastapi import Request, HTTPException, Depends
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from jose import jwt
from db import user_collection
import os
from dotenv import load_dotenv

load_dotenv()
SECRET_KEY = os.getenv("SECRET_KEY")

oauth2_scheme = HTTPBearer()

# 🔐 Kullanıcıyı token'dan alıp dönen fonksiyon
def get_current_user(request: Request, credentials: HTTPAuthorizationCredentials = Depends(oauth2_scheme)):
    if credentials:
        try:
            token = credentials.credentials
            payload = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
            public_id = payload.get("publicId")

            if not public_id:
                raise HTTPException(status_code=403, detail="Token geçersiz.")

            user = user_collection.find_one({"publicId": public_id})
            if not user:
                raise HTTPException(status_code=404, detail="Kullanıcı bulunamadı.")

            return user
        except Exception as e:
            raise HTTPException(status_code=403, detail=f"Geçersiz token: {str(e)}")
    else:
        raise HTTPException(status_code=403, detail="Token bulunamadı.")
