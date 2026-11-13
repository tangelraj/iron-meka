
from django.core.management.base import BaseCommand

from api.models import (
    B2BServiceSettings,
    B2BServiceItem,
)


class Command(BaseCommand):
    help = "Populate B2B Service content in Django Admin"

    def handle(self, *args, **options):

        # ======================================
        # B2B SECTION SETTINGS
        # ======================================

        if not B2BServiceSettings.objects.exists():

            B2BServiceSettings.objects.create(
                # English
                eyebrow="B2B SERVICES",
                heading="Professional Fabric Care for Businesses",
                description=(
                    "We provide professional fabric care "
                    "solutions for businesses, boutiques, "
                    "and organizations."
                ),
                last_description=(
                    "Contact us to discuss your business "
                    "requirements and customized service plans."
                ),

                # Tamil
                eyebrow_ta="வணிக நிறுவனங்களுக்கான சேவைகள்",
                heading_ta="வணிகங்களுக்கான தொழில்முறை துணி பராமரிப்பு",
                description_ta=(
                    "வணிக நிறுவனங்கள், ஆடை விற்பனை நிலையங்கள் "
                    "மற்றும் அமைப்புகளுக்கு தொழில்முறை "
                    "துணி பராமரிப்பு சேவைகளை வழங்குகிறோம்."
                ),
                last_description_ta=(
                    "உங்கள் வணிகத் தேவைகள் மற்றும் தனிப்பயன் "
                    "சேவைத் திட்டங்கள் குறித்து எங்களைத் தொடர்பு கொள்ளுங்கள்."
                ),

                # French
                eyebrow_fr="SERVICES B2B",
                heading_fr="Entretien textile professionnel pour les entreprises",
                description_fr=(
                    "Nous proposons des solutions professionnelles "
                    "d'entretien textile aux entreprises, "
                    "boutiques et organisations."
                ),
                last_description_fr=(
                    "Contactez-nous pour discuter de vos besoins "
                    "professionnels et de nos offres personnalisées."
                ),

                button_text="Contact Us",
                button_text_ta="எங்களைத் தொடர்பு கொள்ளுங்கள்",
                button_text_fr="Contactez-nous",
                button_url="#contact",
                is_active=True,
            )

            self.stdout.write(
                self.style.SUCCESS(
                    "B2B Service Settings created."
                )
            )
        else:
            self.stdout.write(
                "B2B Service Settings already exist. Skipped."
            )

        # ======================================
        # B2B SERVICE ITEMS
        # ======================================

        items = [
            {
                "title": "Boutique Fabric Care",
                "title_ta": "ஆடை விற்பனை நிலையங்களுக்கான துணி பராமரிப்பு",
                "title_fr": "Entretien textile pour boutiques",
                "description": (
                    "Professional finishing and fabric care "
                    "for boutique collections."
                ),
                "description_ta": (
                    "ஆடை விற்பனை நிலையங்களின் தொகுப்புகளுக்கான "
                    "தொழில்முறை பராமரிப்பு மற்றும் நேர்த்தியான முடித்தல்."
                ),
                "description_fr": (
                    "Finition et entretien textile professionnels "
                    "pour les collections de boutiques."
                ),
                "icon_key": "shirt",
                "display_order": 1,
                "is_active": True,
            },
            {
                "title": "Bulk Saree Polishing",
                "title_ta": "மொத்த சேலை பாலிஷ் சேவை",
                "title_fr": "Polissage de saris en volume",
                "description": (
                    "Reliable saree polishing services "
                    "for bulk business orders."
                ),
                "description_ta": (
                    "மொத்த வணிக ஆர்டர்களுக்கான "
                    "நம்பகமான சேலை பாலிஷ் சேவை."
                ),
                "description_fr": (
                    "Services fiables de polissage de saris "
                    "pour les commandes professionnelles en volume."
                ),
                "icon_key": "sparkles",
                "display_order": 2,
                "is_active": True,
            },
            {
                "title": "Corporate Fabric Care",
                "title_ta": "நிறுவனங்களுக்கான துணி பராமரிப்பு",
                "title_fr": "Entretien textile pour entreprises",
                "description": (
                    "Customized fabric care solutions "
                    "for corporate requirements."
                ),
                "description_ta": (
                    "நிறுவனங்களின் தேவைகளுக்கேற்ப "
                    "தனிப்பயன் துணி பராமரிப்பு சேவைகள்."
                ),
                "description_fr": (
                    "Solutions d'entretien textile adaptées "
                    "aux besoins des entreprises."
                ),
                "icon_key": "building-2",
                "display_order": 3,
                "is_active": True,
            },
        ]

        created_count = 0

        for item in items:
            _, created = B2BServiceItem.objects.get_or_create(
                title=item["title"],
                defaults=item,
            )

            if created:
                created_count += 1

        self.stdout.write(
            self.style.SUCCESS(
                f"B2B Service content populated successfully. "
                f"{created_count} new items created."
            )
        )
