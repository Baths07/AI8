from passlib.context import CryptContext

# bcrypt kullanarak şifreleme algoritması belirleniyor
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password: str) -> str:
    """Kullanıcının şifresini hash'ler."""
    return pwd_context.hash(password)

def verify_password(plain_password: str, hashed_password: str) -> bool:
    """Kullanıcının girdiği şifre ile veritabanındaki hash'i karşılaştırır."""
    return pwd_context.verify(plain_password, hashed_password)
