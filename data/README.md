# 📁 data/

This folder contains the core backend application files built with FastAPI.

## Contents

- `app.py` → Main entry point that runs the FastAPI app
- `auth_bearer.py` → JWT authentication and validation logic
- `db.py` → MongoDB connection configuration
- `kullanici_routes.py` → Endpoints for retrieving user info
- `puan_routes.py` → Endpoints for handling score submission and history
- `user_model.py` → Pydantic models for data validation
- `user_service.py` → Service layer that interacts with MongoDB
- `.env` → Environment variables such as DB URL and secret key (should be ignored via .gitignore)

## Notes

- This folder effectively acts as the backend module of the project.
- It does not contain real user data; only application logic.
- `__pycache__/` contains Python-generated cache files and can be ignored.

## Security

- `.env` file must be protected and never committed to version control.
