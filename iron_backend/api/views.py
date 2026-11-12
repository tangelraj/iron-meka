
from django.http import JsonResponse
from .models import HeroSlide
from .models import SectionContent, Service
from .models import SectionContent, ContentItem
from .models import SectionContent, Testimonial

def hero_slides_api(request):
    slides = HeroSlide.objects.filter(
        is_active=True
    ).order_by("display_order", "id")

    data = []

    for slide in slides:
        data.append({
            "id": slide.id,
            "eyebrow": slide.eyebrow,
            "title": slide.heading,
            "description": slide.description,
            "image": f"/hero{slide.display_order}.png",
            "button_text": slide.button_text,
            "button_url": slide.button_url,
            "secondary_button_text": slide.secondary_button_text,
            "secondary_button_url": slide.secondary_button_url,
            "animation": slide.animation,
        })

    return JsonResponse({"slides": data})

from .models import NavigationLink, WebsiteSettings

def navbar_api(request):
    links = NavigationLink.objects.filter(
        is_active=True
    ).order_by("display_order", "id")

    settings = WebsiteSettings.objects.first()

    return JsonResponse({
        "logo": (
            request.build_absolute_uri(settings.logo.url)
            if settings and settings.logo else "/logo.png"
        ),
        "links": [
            {
                "id": link.id,
                "label": link.label,
                "href": link.url,
                "is_button": link.is_button,
            }
            for link in links
        ],
    })

from django.http import JsonResponse
from .models import SectionContent, ContentItem


def about_api(request):
    section = SectionContent.objects.filter(
        section="about"
    ).first()

    features = ContentItem.objects.filter(
        group="about",
        is_active=True
    ).order_by("display_order", "id")

    return JsonResponse({
        "section": {
            "eyebrow": section.eyebrow if section else "",
            "heading": section.heading if section else "",
            "description": section.description if section else "",
            "image": (
                request.build_absolute_uri(section.image.url)
                if section and section.image else ""
            ),
        },
        "features": [
            {
                "id": item.id,
                "title": item.title,
                "description": item.description,
                "icon_key": item.icon_key,
                "image": (
                    request.build_absolute_uri(item.image.url)
                    if item.image else ""
                ),
            }
            for item in features
        ],
    })
def services_api(request):
    section = SectionContent.objects.filter(
        section="services"
    ).first()

    services = Service.objects.filter(
        is_active=True
    ).order_by("display_order", "id")

    return JsonResponse({
        "section": {
            "eyebrow": section.eyebrow if section else "",
            "heading": section.heading if section else "",
            "description": section.description if section else "",
            "image": (
                request.build_absolute_uri(section.image.url)
                if section and section.image else ""
            ),
        },
        "services": [
            {
                "id": service.id,
                "name": service.name,
                "description": service.description,
                "image": (
                    request.build_absolute_uri(service.image.url)
                    if service.image else ""
                ),
                "starting_price": (
                    str(service.starting_price)
                    if service.starting_price is not None else ""
                ),
                "button_text": service.button_text,
                "button_url": service.button_url,
            }
            for service in services
        ],
    })
def why_choose_us_api(request):
    section = SectionContent.objects.filter(
        section="why_choose_us"
    ).first()

    items = ContentItem.objects.filter(
        group="why_choose_us",
        is_active=True
    ).order_by("display_order", "id")

    return JsonResponse({
        "section": {
            "eyebrow": section.eyebrow if section else "",
            "heading": section.heading if section else "",
            "description": section.description if section else "",
            "image": (
                request.build_absolute_uri(section.image.url)
                if section and section.image else ""
            ),
            "background_image": (
                request.build_absolute_uri(
                    section.background_image.url
                )
                if section and section.background_image else ""
            ),
        },
        "items": [
            {
                "id": item.id,
                "title": item.title,
                "description": item.description,
                "icon_key": item.icon_key,
                "image": (
                    request.build_absolute_uri(item.image.url)
                    if item.image else ""
                ),
            }
            for item in items
        ],
    })
def how_it_works_api(request):
    section = SectionContent.objects.filter(
        section="how_it_works"
    ).first()

    steps = ContentItem.objects.filter(
        group="how_it_works",
        is_active=True
    ).order_by("display_order", "id")

    return JsonResponse({
        "section": {
            "eyebrow": section.eyebrow if section else "",
            "heading": section.heading if section else "",
            "description": section.description if section else "",
        },
        "steps": [
            {
                "id": step.id,
                "number": str(index).zfill(2),
                "title": step.title,
                "description": step.description,
                "icon_key": step.icon_key,
                "image": (
                    request.build_absolute_uri(step.image.url)
                    if step.image else ""
                ),
            }
            for index, step in enumerate(steps, start=1)
        ],
    })
def testimonials_api(request):
    section = SectionContent.objects.filter(
        section="testimonials"
    ).first()

    testimonials = Testimonial.objects.filter(
        is_active=True
    ).order_by("display_order", "id")

    return JsonResponse({
        "section": {
            "eyebrow": section.eyebrow if section else "",
            "heading": section.heading if section else "",
            "description": section.description if section else "",
        },
        "testimonials": [
            {
                "id": item.id,
                "name": item.customer_name,
                "initial": (
                    item.customer_name[:1].upper()
                    if item.customer_name else "?"
                ),
                "review": item.review,
                "rating": item.rating,
                "avatar": (
                    request.build_absolute_uri(item.avatar.url)
                    if item.avatar else ""
                ),
            }
            for item in testimonials
        ],
    })
