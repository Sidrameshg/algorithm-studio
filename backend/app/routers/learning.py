"""Learning and spaced-repetition review endpoints."""

from datetime import datetime, timedelta, timezone
from fastapi import APIRouter, Depends
from pydantic import BaseModel, Field

from ..models import User
from ..security import get_current_user

router = APIRouter(prefix="/learning", tags=["learning"])


class Rating(BaseModel):
    algorithm_id: str = Field(max_length=64)
    rating: int = Field(ge=0, le=3)


INTERVALS = [1, 3, 7, 14]


@router.get("")
def learning():
    return {"ok": True}


@router.post("/reviews")
def review(rating: Rating, user: User = Depends(get_current_user)):
    days = INTERVALS[rating.rating]
    due_at = datetime.now(timezone.utc) + timedelta(days=days)
    return {"due_at": due_at.isoformat()}
