from fastapi import FastAPI
from routes.crud_routes import router as crud_router
from routes.auth_routes import router as auth_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # React çalıştığı port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# CRUD işlemleri için router
app.include_router(crud_router, prefix="/users", tags=["Users"])

# Auth işlemleri için router
app.include_router(auth_router, prefix="/auth", tags=["Auth"])


@app.get("/")
def read_root():
    return {"message": "FastAPI projesi çalışıyor!"}
