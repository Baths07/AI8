from fastapi import FastAPI
from routes.crud_routes import router as crud_router
from routes.auth_routes import router as auth_router

app = FastAPI()

# CRUD işlemleri için router
app.include_router(crud_router, prefix="/users", tags=["Users"])

# Auth işlemleri için router
app.include_router(auth_router, prefix="/auth", tags=["Auth"])


@app.get("/")
def read_root():
    return {"message": "FastAPI projesi çalışıyor!"}
