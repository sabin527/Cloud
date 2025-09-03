# backend-api/schemas.py
from pydantic import BaseModel, EmailStr

# Base schema for contact form
class ContactBase(BaseModel):
    name: str
    email: EmailStr
    description: str

# For creating new contact (same as base)
class ContactCreate(ContactBase):
    pass

# For returning response with ID
class ContactResponse(ContactBase):
    id: int

    class Config:
        orm_mode = True
