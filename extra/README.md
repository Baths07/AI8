🔐 Extra Auth API (FastAPI + MongoDB)
Bu modül, kullanıcı kimlik doğrulama ve güvenli veri erişimi amacıyla hazırlanmış bir mikroservistir.FastAPI ile geliştirilmiş olup, MongoDB Atlas üzerinde kullanıcı verilerini tutar.JWT token yapısı ve bcrypt hashing ile güvenlik ön planda tutulmuştur.


🚀 Özellikler
✅ Kullanıcı kaydı (/auth/register)
🔑 Giriş yapma (JWT token üretimi) (/auth/login)
🔐 Hashlenmiş şifre ile saklama
🧾 JWT ile korunan endpoint'lere hazırlık
🔎 Public ID ile kimlik gizleme



⚙️ Kullanılan Teknolojiler
FastAPI
MongoDB Atlas
PyMongo / Motor
passlib[bcrypt]
python-jose (JWT)
Docker + Docker Compose


🔧 Kurulum
.env dosyasını oluştur:

MONGODB_URL=mongodb+srv://<username>:<password>@<cluster-url>
SECRET_KEY=emotia-secret

Uygulamayı Docker ile başlat:

docker compose up --build

Uygulama şu adreste çalışır: http://localhost:5001/docs



📬 API Endpoint'leri

➕ /auth/register
Yeni kullanıcı kaydı oluşturur.

Request:

{
  "isim": "Mehmet",
  "soyisim": "Demir",
  "email": "mehmet.demir@example.com",
  "yas": 22,
  "password": "giril1234"
}


🔑 /auth/login
Giriş yapar ve geçerli kullanıcı için JWT token döner.

Request:

{
  "email": "mehmet.demir@example.com",
  "password": "giril1234"
}

Response:

{
  "message": "Login successful",
  "user": {
    "publicId": "...",
    "isim": "Mehmet",
    "soyisim": "Demir",
    "email": "mehmet.demir@example.com",
    "yas": 22,
    "puan": null,
    "aiTahmin": null
  }
}

🔐 Güvenlik
Parolalar bcrypt ile hashlenerek saklanır.
JWT tokenlar HS256 algoritması ile imzalanır.
Gerçek MongoDB _id yerine publicId kullanılır.
Token ile korumalı route yapısı hazırdır.

📌 Not
Bu servis, projenin extra güvenlik ihtiyaçlarına ve kimlik doğrulama süreçlerine yönelik geliştirilmiş olup ana API’den bağımsız çalışabilir.Kapsamlı güvenlik önlemlerinin yanı sıra register/login temel CRUD altyapıları da hazırlanmıştır.

