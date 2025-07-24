from fastapi import APIRouter, HTTPException, status
from models.user_models import UserCreate, UserOut, UserLogin
from services.user_service import register_user
from utils.auth_utils import authenticate_user  # ✅ SADECE bu

router = APIRouter(tags=["Auth"])

@router.post("/register", response_model=UserOut)
async def register(user: UserCreate):
    return await register_user(user)

@router.post("/login")
async def login(user: UserLogin):
    result = await authenticate_user(user.email, user.password)
    if not result:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")
    return {"message": "Login successful", "user": result}
