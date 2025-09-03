# backend-api/models.py
from sqlalchemy import Column, Integer, String, Text
from .database import Base

class Contact(Base):
    __tablename__ = "contacts"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    email = Column(String(100), nullable=False)
    description = Column(Text, nullable=False)
