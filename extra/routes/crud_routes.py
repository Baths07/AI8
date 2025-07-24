from fastapi import APIRouter, HTTPException
from models.user_models import UserCreate, UserUpdate, UserOut
from services.user_service import create_user, get_user_by_id, update_user, delete_user

router = APIRouter(tags=["Users"])


@router.post("/", response_model=UserOut)
async def create(user: UserCreate):
    return await create_user(user)

@router.get("/{user_id}", response_model=UserOut)
async def read(user_id: str):
    user = await get_user_by_id(user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

@router.put("/{user_id}", response_model=UserOut)
async def update(user_id: str, user: UserUpdate):
    updated_user = await update_user(user_id, user)
    if not updated_user:
        raise HTTPException(status_code=404, detail="User not found")
    return updated_user

@router.delete("/{user_id}")
async def delete(user_id: str):
    success = await delete_user(user_id)
    if not success:
        raise HTTPException(status_code=404, detail="User not found")
    return {"message": "User deleted successfully"}
