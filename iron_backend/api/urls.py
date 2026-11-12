
from django.urls import path
from . import views

urlpatterns = [
    path(
        "navbar/",
        views.navbar_api,
        name="navbar_api"
    ),
    path(
        "hero-slides/",
        views.hero_slides_api,
        name="hero_slides_api"
    ),
    path("about/", views.about_api, name="about_api"),
    path("services/", views.services_api, name="services-api"),
    path(
    "why-choose-us/",
    views.why_choose_us_api,
    name="why_choose_us_api"
    ),
    path("how-it-works/", views.how_it_works_api, name="how_it_works_api"),
    path(
    "testimonials/",
    views.testimonials_api,
    name="testimonials_api"
    ),
]

