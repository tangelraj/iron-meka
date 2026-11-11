
from django.db import transaction
from api.models import (
    SectionContent,
    ContentItem,
    Testimonial,
    HeroSlide,
    ContactSettings,
    FooterSettings,
)

# These descriptions are editable website copy.
# Existing non-placeholder descriptions are preserved.

sections = {
    "about": {
        "eyebrow": "ABOUT US",
        "heading": "Care That Makes Every Fabric Feel Special",
        "description": (
            "At Iron Me·Ka, we believe every garment deserves "
            "special attention. From delicate silk sarees to "
            "everyday cotton clothing, we provide professional "
            "ironing, rolling, polishing and fabric finishing. "
            "Our careful approach helps maintain the natural "
            "beauty, texture and appearance of your garments."
        ),
    },
    "services": {
        "eyebrow": "OUR SERVICES",
        "heading": "Our Premium Fabric Care Services",
        "description": (
            "Explore our range of professional saree and "
            "garment care services. From traditional saree "
            "rolling and polishing to everyday ironing, "
            "we provide neat finishing with attention "
            "to every fabric."
        ),
    },
    "why_choose_us": {
        "eyebrow": "WHY CHOOSE US",
        "heading": "The Iron Me·Ka Difference",
        "description": (
            "We combine careful fabric handling, specialized "
            "saree care and attention to detail to give "
            "your garments a beautiful, neat finish. "
            "Every piece receives the care it deserves."
        ),
    },
    "how_it_works": {
        "eyebrow": "HOW IT WORKS",
        "heading": "Simple, Careful, Complete",
        "description": (
            "Choose the service you need, hand over your "
            "garments and let our team take care of the "
            "finishing. We make professional fabric care "
            "simple and convenient."
        ),
    },
    "testimonials": {
        "eyebrow": "CUSTOMER REVIEWS",
        "heading": "Loved by Our Customers",
        "description": (
            "Discover customer experiences and feedback "
            "about our saree and garment care services."
        ),
    },
    "contact": {
        "eyebrow": "BOOK TODAY",
        "heading": "Give Your Clothes the Care They Deserve",
        "description": (
            "From everyday ironing to delicate saree and "
            "traditional wear care, we make every piece "
            "look its best."
        ),
        "button_text": "Book a Service",
        "button_url": "#booking",
        "secondary_button_text": "WhatsApp Us",
        "secondary_button_url": "https://wa.me/918792694177",
    },
    "footer": {
        "heading": "Iron Me·Ka",
        "description": (
            "Premium saree and fabric care — rolling, "
            "pleating, polishing, starching and steaming, "
            "done with precision and attention to detail."
        ),
    },
}

item_descriptions = {
    "about": {
        "Quality Finishing": (
            "Careful ironing and finishing for a smooth, "
            "neat and elegant appearance."
        ),
        "Gentle Fabric Care": (
            "Thoughtful handling of delicate fabrics "
            "to help preserve their texture and beauty."
        ),
        "Professional Handling": (
            "Attention to every garment, from everyday "
            "clothing to special traditional wear."
        ),
    },
    "why_choose_us": {
        "Professional Fabric Care": (
            "Dedicated garment care with attention "
            "to fabric type, texture and finish."
        ),
        "Specialized Saree Care": (
            "Rolling, pleating and polishing services "
            "designed for traditional sarees."
        ),
        "Delicate Fabric Handling": (
            "Gentle treatment for silk, cotton and "
            "other delicate garments."
        ),
        "Neat Premium Finish": (
            "Careful finishing to help your garments "
            "look polished and ready to wear."
        ),
    },
    "how_it_works": {
        "Choose Your Service": (
            "Select the fabric care service that "
            "best suits your garment."
        ),
        "Hand Over Your Clothes": (
            "Bring your garments to us for "
            "careful handling and finishing."
        ),
        "Expert Care & Finishing": (
            "We handle each item according to "
            "its fabric and finishing needs."
        ),
        "Ready to Wear": (
            "Receive your neatly finished garments "
            "ready for your next occasion."
        ),
    },
}

# These are DEMO records, not verified customer feedback.
# Keep inactive until replaced with genuine reviews.
demo_testimonials = [
    "Lakshmi R.",
    "Arun Kumar",
    "Priya S.",
    "Meena V.",
]

placeholders = {
    "",
    "Professional fabric care and finishing service.",
    "A simple process for professional fabric care.",
    "Careful handling and professional finishing for your garments.",
}

with transaction.atomic():

    print("\nUpdating section contents...")

    for section_key, data in sections.items():
        obj, created = SectionContent.objects.get_or_create(
            section=section_key
        )

        for field, value in data.items():
            current = getattr(obj, field)

            if created or current in placeholders:
                setattr(obj, field, value)

        obj.save()
        print("Ready:", obj)

    print("\nUpdating feature descriptions...")

    for group, items in item_descriptions.items():
        for title, description in items.items():
            obj, created = ContentItem.objects.get_or_create(
                group=group,
                title=title,
                defaults={
                    "description": description,
                },
            )

            if not created and not obj.description.strip():
                obj.description = description
                obj.save(update_fields=["description"])

            print("Ready:", title)

    print("\nCreating testimonial draft records...")

    for index, name in enumerate(demo_testimonials, start=1):
        obj, created = Testimonial.objects.get_or_create(
            customer_name=name,
            defaults={
                "review": (
                    "DEMO ONLY - Replace with genuine "
                    "customer feedback before publishing."
                ),
                "rating": 5,
                "display_order": index,
                "is_active": False,
            },
        )
        print("Ready:", obj)

    print("\nUpdating contact details...")

    contact = ContactSettings.objects.first()

    if contact is None:
        contact = ContactSettings()

    if not contact.phone:
        contact.phone = "+91 9790263322"

    if not contact.whatsapp_number:
        contact.whatsapp_number = "918792694177"

    if not contact.address:
        contact.address = (
            "6 Vincent de Paul street, "
            "COLAS NAGAR, PONDICHERRY - 605001"
        )

    if not contact.business_hours:
        contact.business_hours = (
            "Mon-Sat: 9:00 AM - 8:00 PM\n"
            "Sunday: 10:00 AM - 2:00 PM"
        )

    contact.save()

    footer = FooterSettings.objects.first()

    if footer is None:
        footer = FooterSettings()

    if not footer.description:
        footer.description = sections["footer"]["description"]

    footer.save()

print("\nContent update completed successfully!")
print("Testimonials:", Testimonial.objects.count())
print("Hero slides:", HeroSlide.objects.count())
print("Sections:", SectionContent.objects.count())
print("Content items:", ContentItem.objects.count())
