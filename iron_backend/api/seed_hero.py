
from pathlib import Path

from django.conf import settings
from django.core.files import File
from api.models import HeroSlide

FRONTEND_PUBLIC = (
    Path(settings.BASE_DIR).parent
    / "iron_frontend"
    / "public"
)

description = (
    "Professional saree care, ironing, steaming "
    "and finishing — handled with care and precision."
)

slides = [
    {
        "eyebrow": "SAREE CARE",
        "heading": "Expert Care for Every Fabric",
        "description": description,
        "image_file": "hero1.png",
        "animation": "left",
        "display_order": 1,
    },
    {
        "eyebrow": "PROFESSIONAL IRONING",
        "heading": "Expert Care for Every Fabric",
        "description": description,
        "image_file": "hero2.png",
        "animation": "fade",
        "display_order": 2,
    },
    {
        "eyebrow": "NEATLY FINISHED",
        "heading": "Expert Care for Every Fabric",
        "description": description,
        "image_file": "hero3.png",
        "animation": "bottom-left",
        "display_order": 3,
    },
]

for data in slides:
    order = data["display_order"]

    obj, created = HeroSlide.objects.get_or_create(
        display_order=order,
        defaults={
            "eyebrow": data["eyebrow"],
            "heading": data["heading"],
            "description": data["description"],
            "animation": data["animation"],
            "button_text": "Book a Service",
            "button_url": "#booking",
            "secondary_button_text": "View Services",
            "secondary_button_url": "#services",
            "is_active": True,
        },
    )

    # Only attach the original image if none is saved.
    if not obj.image:
        image_path = FRONTEND_PUBLIC / data["image_file"]

        if image_path.is_file():
            with image_path.open("rb") as image_file:
                obj.image.save(
                    data["image_file"],
                    File(image_file),
                    save=True,
                )
        else:
            print("Image missing:", image_path)

    print(
        "Created:" if created else "Already exists:",
        order,
        obj.heading,
    )

print("Total hero slides:", HeroSlide.objects.count())
