
from django.http import JsonResponse
from .models import HeroSlide


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
            "image": (
                request.build_absolute_uri(slide.image.url)
                if slide.image else ""
            ),
            "button_text": slide.button_text,
            "button_url": slide.button_url,
            "secondary_button_text": slide.secondary_button_text,
            "secondary_button_url": slide.secondary_button_url,
            "animation": slide.animation,
        })

    return JsonResponse({"slides": data})
