
from django.core.management.base import BaseCommand
from api.models import OfferBannerSettings


class Command(BaseCommand):
    help = "Populate Offer Banner content in Django Admin"

    def handle(self, *args, **options):

        if OfferBannerSettings.objects.exists():
            self.stdout.write(
                self.style.WARNING(
                    "Offer Banner already exists. "
                    "Existing content was not changed."
                )
            )
            return

        OfferBannerSettings.objects.create(
            # English
            eyebrow="SHOP OPENING OFFER",
            heading="10% OFF",
            description=(
                "Get 10% OFF on your first "
                "saree polishing order"
            ),

            # Tamil
            eyebrow_ta="கடை திறப்பு சிறப்புச் சலுகை",
            heading_ta="10% தள்ளுபடி",
            description_ta=(
                "உங்கள் முதல் சேலை பாலிஷ் "
                "ஆர்டருக்கு 10% தள்ளுபடி பெறுங்கள்"
            ),

            # French
            eyebrow_fr="OFFRE D'OUVERTURE",
            heading_fr="10 % DE RÉDUCTION",
            description_fr=(
                "Profitez de 10 % de réduction sur "
                "votre première commande de "
                "polissage de sari"
            ),

            discount_text="10% OFF",
            button_text="Book Now",
            button_url="#booking",
            is_active=True,
        )

        self.stdout.write(
            self.style.SUCCESS(
                "Offer Banner populated successfully!"
            )
        )
