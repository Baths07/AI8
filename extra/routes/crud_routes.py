from fastapi import APIRouter, HTTPException
from models.user_models import UserCreate, UserUpdate, UserOut
from services.user_service import create_user, get_user_by_id, update_user, delete_user

router = APIRouter(tags=["Users"])

@router.post("/", response_model=UserOut)
def create(user: UserCreate):
    return create_user(user)

@router.get("/{user_id}", response_model=UserOut)
def read(user_id: str):
    user =  get_user_by_id(user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

@router.put("/{user_id}", response_model=UserOut)
def update(user_id: str, user: UserUpdate):
    updated_user = update_user(user_id, user)
    if not updated_user:
        raise HTTPException(status_code=404, detail="User not found")
    return updated_user

@router.delete("/{user_id}")
def delete(user_id: str):
    success =  delete_user(user_id)
    if not success:
        raise HTTPException(status_code=404, detail="User not found")
    return {"message": "User deleted successfully"}
