from fastapi import APIRouter, HTTPException, status
from models.user_models import UserCreate, UserOut, UserLogin
from services.user_service import register_user
from utils.auth_utils import authenticate_user  # ✅ SADECE bu

router = APIRouter(tags=["Auth"])

@router.post("/register", response_model=UserOut)
async def register(user: UserCreate):
    return await register_user(user)  # ❗️register_user zaten async, buna dokunmuyoruz

@router.post("/login")
def login(user: UserLogin):  # 🔁 async kaldırıldı
    result = authenticate_user(user.email, user.password)  # ✅ await kaldırıldı
    if not result:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")
    return {"message": "Login successful", "user": result}
