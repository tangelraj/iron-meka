
from django.urls import path
from .views import hero_slides_api

urlpatterns = [
    path(
        "hero-slides/",
        hero_slides_api,
        name="hero-slides"
    ),
]
