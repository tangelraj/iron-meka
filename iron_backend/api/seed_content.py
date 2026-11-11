
from django.db import transaction

from api.models import (
    WebsiteSettings,
    NavigationLink,
    SectionContent,
    HeroSlide,
    ContentItem,
    Service,
    ContactSettings,
    FooterSettings,
    FooterLink,
)

def create_if_missing(model, lookup, defaults):
    obj, created = model.objects.get_or_create(
        **lookup,
        defaults=defaults
    )
    print(
        ("Created: " if created else "Already exists: ")
        + str(obj)
    )
    return obj


with transaction.atomic():

    # WEBSITE SETTINGS
    create_if_missing(
        WebsiteSettings,
        {"site_name": "Iron Me·Ka"},
        {
            "primary_color": "#741c3e",
            "accent_color": "#d4ad60",
        },
    )

    # NAVIGATION
    navigation = [
        ("Home", "#home"),
        ("About Us", "#about"),
        ("Services", "#services"),
        ("Why Choose Us", "#why-choose-us"),
        ("Reviews", "#reviews"),
        ("Contact", "#contact"),
        ("Book a Service", "#booking"),
    ]

    for index, (label, url) in enumerate(navigation):
        create_if_missing(
            NavigationLink,
            {"label": label},
            {
                "url": url,
                "display_order": index,
                "is_button": label == "Book a Service",
            },
        )

    # SECTION HEADINGS AND DESCRIPTIONS
    sections = [
        {
            "section": "about",
            "eyebrow": "ABOUT US",
            "heading": "Care That Makes Every Fabric Feel Special",
            "description": (
                "Professional saree and fabric care "
                "with attention to every detail."
            ),
        },
        {
            "section": "services",
            "eyebrow": "OUR SERVICES",
            "heading": "Our Services",
            "description": (
                "Professional ironing, rolling, "
                "polishing, and fabric finishing."
            ),
        },
        {
            "section": "why_choose_us",
            "eyebrow": "WHY CHOOSE US",
            "heading": "The Vastra Care Difference",
            "description": (
                "Careful handling and professional "
                "finishing for your garments."
            ),
        },
        {
            "section": "how_it_works",
            "eyebrow": "HOW IT WORKS",
            "heading": "Simple, Careful, Complete",
            "description": (
                "A simple process for professional "
                "fabric care."
            ),
        },
        {
            "section": "testimonials",
            "eyebrow": "TESTIMONIALS",
            "heading": "Loved by Our Customers",
            "description": "",
        },
        {
            "section": "contact",
            "eyebrow": "BOOK TODAY",
            "heading": (
                "Give Your Clothes the Care "
                "They Deserve"
            ),
            "description": (
                "From everyday ironing to delicate "
                "saree and traditional wear care, "
                "we make every piece look its best."
            ),
            "button_text": "Book a Service",
            "button_url": "#booking",
            "secondary_button_text": "WhatsApp Us",
            "secondary_button_url": (
                "https://wa.me/918792694177"
            ),
        },
        {
            "section": "footer",
            "heading": "Iron Me·Ka",
            "description": (
                "Premium saree and fabric care — "
                "rolling, pleating, polishing, "
                "starching and steaming."
            ),
        },
    ]

    for section in sections:
        section_name = section["section"]
        defaults = {
            key: value
            for key, value in section.items()
            if key != "section"
        }

        create_if_missing(
            SectionContent,
            {"section": section_name},
            defaults,
        )

    # SERVICES
    services = [
        ("Saree Rolling", 60, "saree-rolling.jpg"),
        ("Towel Ironing & Refreshing", 20, "towel-ironing.jpg"),
        ("Coat & Delicate Fabric Steam Refresh", 150, "coat-steaming.jpg"),
        ("Cotton Veshti Starching & Polishing", 80, "cotton-veshti.jpg"),
        ("Silk Veshti Polishing", 120, "silk-veshti.jpg"),
        ("Bed Sheet & Cover Ironing", 40, "bedsheet-ironing.jpg"),
        ("Saree Pre-Pleating", 250, "saree-prepleating.jpg"),
        ("Saree Polishing", 150, "saree-polishing.jpg"),
        ("Cotton Saree Care", 120, "cotton-saree.jpg"),
        ("Saree Folding", 40, "saree-folding.jpg"),
    ]

    for index, (name, price, filename) in enumerate(services):
        create_if_missing(
            Service,
            {"name": name},
            {
                "description": (
                    "Professional fabric care and "
                    "finishing service."
                ),
                "starting_price": price,
                "display_order": index + 1,
                "button_text": "Book Now",
                "button_url": "#contact",
            },
        )

    # ABOUT FEATURES
    about_features = [
        ("Quality Finishing", "award"),
        ("Gentle Fabric Care", "flower-2"),
        ("Professional Handling", "shield-check"),
    ]

    # WHY CHOOSE US
    why_features = [
        ("Professional Fabric Care", "shield-check"),
        ("Specialized Saree Care", "flower-2"),
        ("Delicate Fabric Handling", "feather"),
        ("Neat Premium Finish", "award"),
    ]

    # HOW IT WORKS
    work_steps = [
        ("Choose Your Service", "clipboard-list"),
        ("Hand Over Your Clothes", "package"),
        ("Expert Care & Finishing", "sparkles"),
        ("Ready to Wear", "check-circle"),
    ]

    groups = [
        ("about", about_features),
        ("why_choose_us", why_features),
        ("how_it_works", work_steps),
    ]

    for group, items in groups:
        for index, (title, icon) in enumerate(items):
            create_if_missing(
                ContentItem,
                {"group": group, "title": title},
                {
                    "icon_key": icon,
                    "display_order": index + 1,
                },
            )

    # CONTACT SETTINGS
    if not ContactSettings.objects.exists():
        ContactSettings.objects.create(
            phone="+91 9790263322",
            whatsapp_number="918792694177",
            whatsapp_message=(
                "Hello Iron Me·Ka, I would like "
                "to book your saree and fabric "
                "care service."
            ),
            address=(
                "6 Vincent de Paul street, "
                "COLAS NAGAR, "
                "PONDICHERRY - 605001"
            ),
            business_hours=(
                "Mon-Sat: 9:00 AM - 8:00 PM\n"
                "Sunday: 10:00 AM - 2:00 PM"
            ),
        )
        print("Created: Contact Settings")

    # FOOTER SETTINGS
    if not FooterSettings.objects.exists():
        FooterSettings.objects.create(
            description=(
                "Premium saree and fabric care — "
                "rolling, pleating, polishing, "
                "starching and steaming."
            ),
            copyright_text=(
                "Iron Me·Ka. All rights reserved."
            ),
        )
        print("Created: Footer Settings")

    # FOOTER QUICK LINKS
    for index, (label, url) in enumerate(navigation[:-1]):
        create_if_missing(
            FooterLink,
            {"group": "quick", "label": label},
            {
                "url": url,
                "display_order": index + 1,
            },
        )

    # FOOTER SERVICE LINKS
    for index, (name, price, filename) in enumerate(services):
        create_if_missing(
            FooterLink,
            {"group": "services", "label": name},
            {
                "url": "#services",
                "display_order": index + 1,
            },
        )

print("Website content seeding completed!")
