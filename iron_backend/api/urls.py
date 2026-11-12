from django.urls import path
from . import views

urlpatterns = [
    path("hero-slides/", views.hero_slides_api, name="hero-slides"),
    path("navbar/", views.navbar_api, name="navbar"),
    path("about/", views.about_api, name="about"),
    path("services/", views.services_api, name="services"),
    path("why-choose-us/", views.why_choose_us_api, name="why-choose-us"),
    path("how-it-works/", views.how_it_works_api, name="how-it-works"),
    path("testimonials/", views.testimonials_api, name="testimonials"),
    path("contact/", views.contact_api, name="contact"),
]