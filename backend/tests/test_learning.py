"""Tests for learning endpoints (/api/learning)."""

def test_learning_status(client):
    res = client.get("/api/learning")
    assert res.status_code == 200
    assert res.json() == {"ok": True}


def test_review_requires_auth(client):
    res = client.post("/api/learning/reviews", json={"algorithm_id": "bubble-sort", "rating": 2})
    assert res.status_code == 401


def test_review_with_auth(auth_client):
    from conftest import csrf_headers
    headers = csrf_headers(auth_client)
    res = auth_client.post(
        "/api/learning/reviews",
        json={"algorithm_id": "bubble-sort", "rating": 2},
        headers=headers,
    )
    assert res.status_code == 200
    data = res.json()
    assert "due_at" in data
