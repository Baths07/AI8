from pydantic import BaseModel, EmailStr
from typing import Optional

class UserCreate(BaseModel):
    isim: str
    soyisim: str
    email: EmailStr
    yas: int
    password: str

class UserUpdate(BaseModel):
    isim: Optional[str] = None
    soyisim: Optional[str] = None
    email: Optional[EmailStr] = None
    yas: Optional[int] = None
    password: Optional[str] = None

class UserOut(BaseModel):
    publicId: str
    isim: str
    soyisim: str
    email: EmailStr
    yas: int
    puan: Optional[float] = None
    aiTahmin: Optional[str] = None

class UserLogin(BaseModel):
    email: EmailStr
    password: str

# ✅ Swagger'da isim + soyisim göstermek için:
class UserBasicInfo(BaseModel):
    isim: str
    soyisim: str
