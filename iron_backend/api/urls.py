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
    path("specialty/", views.specialty_api, name="specialty"),
    path("floating-buttons/", views.floating_buttons_api, name="floating-buttons"),
    path("delivery-offer/", views.delivery_offer_api, name="delivery-offer"),
    path("offer-banner/", views.offer_banner_api, name="offer-banner"),
    path("language-settings/", views.language_settings_api, name="language-settings"),
    path("b2b-services/", views.b2b_services_api, name="b2b-services"),
]