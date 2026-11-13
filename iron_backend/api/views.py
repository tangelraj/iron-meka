
from django.http import JsonResponse
from .models import ContactSettings

from .models import (
    WebsiteSettings,
    NavigationLink,
    HeroSlide,
    SectionContent,
    ContentItem,
    Service,
    ServicesSectionSettings,
    Testimonial,
    SpecialtyItem,
    FloatingButton,
    DeliveryOfferBanner,
    OfferBannerSettings,
    LanguageSettings,
    B2BServiceSettings,
    B2BServiceItem,
)


# ---------------------------------
# Helper: Generate image URLs
# ---------------------------------

def get_image_url(request, image_field, fallback=""):
    if not image_field:
        return fallback

    try:
        return request.build_absolute_uri(image_field.url)
    except (ValueError, AttributeError):
        return fallback


# ---------------------------------
# 1. HERO SLIDES API
# ---------------------------------

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
            "heading": slide.heading,
            "description": slide.description,
            "image": get_image_url(
                request,
                slide.image,
                f"/hero{slide.display_order}.png"
            ),
            "button_text": slide.button_text,
            "button_url": slide.button_url,
            "secondary_button_text": slide.secondary_button_text,
            "secondary_button_url": slide.secondary_button_url,
            "animation": slide.animation,
            "display_order": slide.display_order,
        })

    return JsonResponse({
        "slides": data
    })


# ---------------------------------
# 2. NAVBAR API
# ---------------------------------

def navbar_api(request):
    links = NavigationLink.objects.filter(
        is_active=True
    ).order_by("display_order", "id")

    settings = WebsiteSettings.objects.first()

    return JsonResponse({
        "logo": get_image_url(
            request,
            settings.logo if settings else None,
            "/logo.png"
        ),
        "site_name": (
            settings.site_name
            if settings else "Iron Me·Ka"
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


# ---------------------------------
# 3. ABOUT API
# ---------------------------------

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
            "eyebrow": (
                section.eyebrow if section else ""
            ),
            "heading": (
                section.heading if section else ""
            ),
            "description": (
                section.description if section else ""
            ),
            "image": get_image_url(
                request,
                section.image if section else None
            ),
        },
        "features": [
            {
                "id": item.id,
                "title": item.title,
                "description": item.description,
                "icon_key": item.icon_key,
                "image": get_image_url(
                    request,
                    item.image
                ),
            }
            for item in features
        ],
    })


# ---------------------------------
# 4. SERVICES API
# ---------------------------------

def services_api(request):
    section_settings = (
        ServicesSectionSettings.objects.first()
    )

    services = Service.objects.filter(
        is_active=True
    ).order_by("display_order", "id")

    services_data = []

    for service in services:
        services_data.append({
            "id": service.id,
            "name": service.name,
            "description": service.description,
            "image": get_image_url(
                request,
                service.image
            ),
            "icon_key": service.icon_key,
            "price": (
                str(service.price)
                if service.price is not None
                else None
            ),
            "display_order": service.display_order,
            "is_active": service.is_active,
        })

    return JsonResponse({
        "section": {
            "eyebrow": (
                section_settings.eyebrow
                if section_settings
                else "WHAT WE DO"
            ),
            "heading": (
                section_settings.heading
                if section_settings
                else "Our Fabric Care Services"
            ),
            "description": (
                section_settings.description
                if section_settings
                else (
                    "Specialized care and finishing "
                    "for your everyday wear and "
                    "traditional fabrics."
                )
            ),
        },
        "services": services_data,
    })


# ---------------------------------
# 5. WHY CHOOSE US API
# ---------------------------------

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
            "eyebrow": (
                section.eyebrow if section else ""
            ),
            "heading": (
                section.heading if section else ""
            ),
            "description": (
                section.description if section else ""
            ),
            "image": get_image_url(
                request,
                section.image if section else None
            ),
            "background_image": get_image_url(
                request,
                section.background_image if section else None
            ),
        },
        "items": [
            {
                "id": item.id,
                "title": item.title,
                "description": item.description,
                "icon_key": item.icon_key,
                "image": get_image_url(
                    request,
                    item.image
                ),
            }
            for item in items
        ],
    })


# ---------------------------------
# 6. HOW IT WORKS API
# ---------------------------------

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
            "eyebrow": (
                section.eyebrow if section else ""
            ),
            "heading": (
                section.heading if section else ""
            ),
            "description": (
                section.description if section else ""
            ),
        },
        "steps": [
            {
                "id": step.id,
                "number": str(index).zfill(2),
                "title": step.title,
                "description": step.description,
                "icon_key": step.icon_key,
                "image": get_image_url(
                    request,
                    step.image
                ),
            }
            for index, step in enumerate(
                steps, start=1
            )
        ],
    })


# ---------------------------------
# 7. TESTIMONIALS API
# ---------------------------------

def testimonials_api(request):
    section = SectionContent.objects.filter(
        section="testimonials"
    ).first()

    testimonials = Testimonial.objects.filter(
        is_active=True
    ).order_by("display_order", "id")

    return JsonResponse({
        "section": {
            "eyebrow": (
                section.eyebrow if section else ""
            ),
            "heading": (
                section.heading if section else ""
            ),
            "description": (
                section.description if section else ""
            ),
        },
        "testimonials": [
            {
                "id": item.id,
                "name": item.customer_name,
                "initial": (
                    item.customer_name[:1].upper()
                    if item.customer_name
                    else "?"
                ),
                "review": item.review,
                "rating": item.rating,
                "avatar": get_image_url(
                    request,
                    item.avatar
                ),
            }
            for item in testimonials
        ],
    })
def contact_api(request):
    settings = ContactSettings.objects.first()

    return JsonResponse({
        "phone": settings.phone if settings else "",
        "whatsapp_number": (
            settings.whatsapp_number if settings else ""
        ),
        "whatsapp_message": (
            settings.whatsapp_message if settings else ""
        ),
        "email": settings.email if settings else "",
        "address": settings.address if settings else "",
        "business_hours": (
            settings.business_hours if settings else ""
        ),
    })

# ==========================================
# MULTILINGUAL API HELPERS
# ==========================================

def translated_fields(obj, fields):
    """
    Return English, Tamil and French values.
    Only include fields that exist on the model.
    """
    data = {}

    for field in fields:
        data[field] = getattr(obj, field, "") if obj else ""

        for lang in ("ta", "fr"):
            field_name = f"{field}_{lang}"

            if obj and hasattr(obj, field_name):
                data[field_name] = getattr(
                    obj, field_name, ""
                ) or ""
            else:
                data[field_name] = ""

    return data


# ==========================================
# 9. SPECIALTY API
# ==========================================

def specialty_api(request):
    section = SectionContent.objects.filter(
        section="specialty"
    ).first()

    items = SpecialtyItem.objects.filter(
        is_active=True
    ).order_by("display_order", "id")

    section_data = translated_fields(
        section,
        ["eyebrow", "heading", "description"]
    )

    section_data["image"] = get_image_url(
        request,
        section.image if section else None
    )

    return JsonResponse({
        "section": section_data,
        "items": [
            {
                "id": item.id,
                **translated_fields(
                    item,
                    ["title", "description"]
                ),
                "icon_key": item.icon_key,
                "display_order": item.display_order,
            }
            for item in items
        ],
    })


# ==========================================
# 10. FLOATING BUTTONS API
# ==========================================

def floating_buttons_api(request):
    buttons = FloatingButton.objects.filter(
        is_active=True
    ).order_by("display_order", "id")

    return JsonResponse({
        "buttons": [
            {
                "id": button.id,
                **translated_fields(
                    button,
                    ["label"]
                ),
                "icon_key": button.icon_key,
                "url": button.url,
                "background_color": button.background_color,
                "text_color": button.text_color,
                "open_new_tab": button.open_new_tab,
                "display_order": button.display_order,
            }
            for button in buttons
        ]
    })


# ==========================================
# 11. DELIVERY OFFER BANNER API
# ==========================================


def delivery_offer_api(request):
    banner = DeliveryOfferBanner.objects.filter(
        is_active=True
    ).first()

    offers = DeliveryOfferItem.objects.filter(
        is_active=True
    ).order_by("display_order", "id")

    banner_data = None

    if banner:
        banner_data = {
            "id": banner.id,
            **translated_fields(
                banner,
                ["eyebrow", "heading", "description", "button_text"]
            ),
            "image": get_image_url(request, banner.image),
            "button_url": banner.button_url,
            "is_active": banner.is_active,
        }

    return JsonResponse({
        "banner": banner_data,
        "offers": [
            {
                "id": item.id,
                "icon": item.icon_key,
                **translated_fields(
                    item,
                    ["before", "badge", "after"]
                ),
                "display_order": item.display_order,
            }
            for item in offers
        ],
    })



# ==========================================
# 12. OFFER BANNER API
# ==========================================

def offer_banner_api(request):
    banner = OfferBannerSettings.objects.filter(
        is_active=True
    ).first()

    if not banner:
        return JsonResponse({
            "banner": None
        })

    return JsonResponse({
        "banner": {
            "id": banner.id,
            **translated_fields(
                banner,
                ["eyebrow", "heading", "description"]
            ),
            "discount_text": banner.discount_text,
            "image": get_image_url(
                request,
                banner.image
            ),
            "button_text": banner.button_text,
            "button_url": banner.button_url,
            "is_active": banner.is_active,
        }
    })


# ==========================================
# 13. LANGUAGE SELECTOR API
# ==========================================

def language_settings_api(request):
    settings = LanguageSettings.objects.first()

    if not settings:
        return JsonResponse({
            "default_language": "en",
            "enable_english": True,
            "enable_tamil": True,
            "enable_french": True,
            "english_label": "English",
            "tamil_label": "தமிழ்",
            "french_label": "Français",
            "show_language_selector": True,
        })

    return JsonResponse({
        "default_language": settings.default_language,
        "enable_english": settings.enable_english,
        "enable_tamil": settings.enable_tamil,
        "enable_french": settings.enable_french,
        "english_label": settings.english_label,
        "tamil_label": settings.tamil_label,
        "french_label": settings.french_label,
        "show_language_selector":
            settings.show_language_selector,
    })


# ==========================================
# 14. B2B SERVICES API
# ==========================================

def b2b_services_api(request):
    section = B2BServiceSettings.objects.filter(
        is_active=True
    ).first()

    items = B2BServiceItem.objects.filter(
        is_active=True
    ).order_by("display_order", "id")

    if not section:
        return JsonResponse({
            "section": None,
            "items": [],
        })

    section_data = translated_fields(
        section,
        [
            "eyebrow",
            "heading",
            "description",
            "last_description",
            "button_text",
        ]
    )

    section_data.update({
        "image": get_image_url(
            request,
            section.image
        ),
        "button_url": section.button_url,
        "is_active": section.is_active,
    })

    return JsonResponse({
        "section": section_data,
        "items": [
            {
                "id": item.id,
                **translated_fields(
                    item,
                    ["title", "description"]
                ),
                "icon_key": item.icon_key,
                "image": get_image_url(
                    request,
                    item.image
                ),
                "display_order": item.display_order,
            }
            for item in items
        ],
    })
