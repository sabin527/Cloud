# backend-api/main.py
from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from . import models, schemas, database

# Create database tables
models.Base.metadata.create_all(bind=database.engine)

# Initialize app
app = FastAPI(title="ISMT Backend API")

# CORS (allow frontend to access API)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # You can restrict to ["http://localhost:3000"] for Next.js
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency for DB session
def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Root route
@app.get("/")
def read_root():
    return {"message": "Welcome to ISMT Backend API 🚀"}

# Create new contact (from Contact Us form)
@app.post("/contact", response_model=schemas.ContactResponse)
def create_contact(contact: schemas.ContactCreate, db: Session = Depends(get_db)):
    db_contact = models.Contact(
        name=contact.name,
        email=contact.email,
        description=contact.description,
    )
    db.add(db_contact)
    db.commit()
    db.refresh(db_contact)
    return db_contact

# Get all contact submissions
@app.get("/contact")
def list_contacts(db: Session = Depends(get_db)):
    return db.query(models.Contact).all()
