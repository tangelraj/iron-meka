
from django.core.management.base import BaseCommand
from api.models import SectionContent, SpecialtyItem


class Command(BaseCommand):
    help = "Populate existing Specialty section content"

    def handle(self, *args, **options):
        SectionContent.objects.update_or_create(
            section="specialty",
            defaults={
                "eyebrow": "OUR SPECIALTY",
                "heading": "Premium Saree Polish",
                "description": (
                    "The saree is an exceptional garment that requires "
                    "specific textile care. Our exclusive Saree Polish "
                    "service is designed to revive the shine, color, "
                    "and stiffness of your traditional fabrics, whether "
                    "they are woven from silk, cotton, or blended materials."
                ),
            },
        )

        items = [
            {
                "title": "Silk Saree Polish",
                "description": (
                    "A gentle smoothing and polishing technique, ideal "
                    "for bridal and party wear sarees, that protects "
                    "delicate threads while restoring their original luster."
                ),
            },
            {
                "title": "Perfect Fall and Drape",
                "description": (
                    "A targeted treatment that eliminates deep creases "
                    "and ensures an elegant, flawless drape for your garment."
                ),
            },
        ]

        for index, item in enumerate(items):
            SpecialtyItem.objects.update_or_create(
                title=item["title"],
                defaults={
                    "description": item["description"],
                    "icon_key": "circle-check",
                    "display_order": index,
                    "is_active": True,
                },
            )

        self.stdout.write(
            self.style.SUCCESS(
                "Specialty content populated successfully."
            )
        )
