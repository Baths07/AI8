from fastapi import FastAPI
from puan_routes import router as puan_router
from kullanici_routes import router as kullanici_router  

app = FastAPI()

app.include_router(puan_router)
app.include_router(kullanici_router)  

@app.get("/")
def root():
    return {"message": "API çalışıyor🚀"}
