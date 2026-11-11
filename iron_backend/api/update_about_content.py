
from django.db import transaction
from api.models import SectionContent, ContentItem

with transaction.atomic():

    # ABOUT SECTION
    about, created = SectionContent.objects.get_or_create(
        section="about"
    )

    about.eyebrow = "ABOUT US"
    about.heading = "Care That Makes Every Fabric Feel Special"

    about.description = (
        "At Vastra Care, we believe every garment carries "
        "a story — from the silk saree worn at a wedding "
        "to the crisp veshti for a festival morning. "
        "Our trained team handles each fabric by hand, "
        "choosing the right heat, steam and finish "
        "for its weave.\n\n"
        "With a deep respect for traditional wear and "
        "an eye for detail, we deliver pieces that "
        "look, feel and drape their very best."
    )

    about.save()
    print("Updated About Us description")

    # ABOUT FEATURE CARDS
    features = [
        {
            "title": "Quality Finishing",
            "icon_key": "award",
            "description": (
                "Careful finishing for a smooth, "
                "neat and elegant appearance."
            ),
        },
        {
            "title": "Gentle Fabric Care",
            "icon_key": "feather",
            "description": (
                "Gentle handling to help maintain "
                "the beauty and texture of fabrics."
            ),
        },
        {
            "title": "Professional Handling",
            "icon_key": "hand",
            "description": (
                "Experienced attention to every garment "
                "and its individual care requirements."
            ),
        },
    ]

    for index, feature in enumerate(features, start=1):
        obj, created = ContentItem.objects.update_or_create(
            group="about",
            title=feature["title"],
            defaults={
                "description": feature["description"],
                "icon_key": feature["icon_key"],
                "display_order": index,
                "is_active": True,
            }
        )

        print("Updated:", obj.title)

print("\nAbout Us content updated successfully!")
