from pydantic import BaseModel, EmailStr
from typing import Optional

class UserCreate(BaseModel):
    isim: str
    soyisim: str
    email: EmailStr
    yas: int
    password: str  # ✅ Şifre eklendi

class UserUpdate(BaseModel):
    isim: Optional[str]
    soyisim: Optional[str]
    email: Optional[EmailStr]
    yas: Optional[int]
    password: Optional[str]  # ✅ İstersen güncellemeye de ekleyebilirsin

class UserOut(BaseModel):
    publicId: str
    isim: str
    soyisim: str
    email: EmailStr
    yas: int
    puan: Optional[float] = None
    aiTahmin: Optional[str] = None
