from fastapi import APIRouter, HTTPException, status
from models.user_models import UserCreate, UserOut, UserLogin
from services.user_service import register_user
from utils.auth_utils import authenticate_user  # ✅ SADECE bu
from fastapi.responses import JSONResponse
from fastapi import status

router = APIRouter(tags=["Auth"])

@router.post("/register", response_model=UserOut)
def register(user: UserCreate):
    return register_user(user)  # ❗️register_user zaten async, buna dokunmuyoruz

@router.post("/login")
def login(user: UserLogin):  # 🔁 async kaldırıldı
    result = authenticate_user(user.email, user.password)  # ✅ await kaldırıldı
    if not result:
       return JSONResponse(
            #status_code=status.HTTP_401_UNAUTHORIZED,
            content={"message": "Email ya da şifre yanlış!"}
        )
    return {"message": "Login successful", "user": result}
