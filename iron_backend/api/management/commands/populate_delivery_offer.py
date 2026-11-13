
from django.core.management.base import BaseCommand
from api.models import DeliveryOfferBanner


class Command(BaseCommand):
    help = "Populate Delivery Offer Banner content in Django Admin"

    def handle(self, *args, **options):

        defaults = {
            # English
            "eyebrow": "DELIVERY SERVICE",
            "heading": "Convenient Pickup & Delivery",
            "description": (
                "Enjoy convenient pickup and delivery "
                "for your sarees and garments."
            ),

            # Tamil
            "eyebrow_ta": "டெலிவரி சேவை",
            "heading_ta": "எளிய பிக்கப் மற்றும் டெலிவரி",
            "description_ta": (
                "உங்கள் சேலைகள் மற்றும் ஆடைகளுக்கு "
                "எளிய பிக்கப் மற்றும் டெலிவரி சேவையைப் பெறுங்கள்."
            ),

            # French
            "eyebrow_fr": "SERVICE DE LIVRAISON",
            "heading_fr": "Collecte et livraison pratiques",
            "description_fr": (
                "Profitez d'un service pratique de collecte "
                "et de livraison pour vos saris et vêtements."
            ),

            # Button
            "button_text": "Book Now",
            "button_text_ta": "இப்போதே முன்பதிவு செய்யவும்",
            "button_text_fr": "Réserver",
            "button_url": "#booking",

            # Visibility
            "is_active": True,
        }

        if DeliveryOfferBanner.objects.exists():
            self.stdout.write(
                self.style.WARNING(
                    "Delivery Offer Banner already exists. "
                    "Existing content was not changed."
                )
            )
            return

        DeliveryOfferBanner.objects.create(**defaults)

        self.stdout.write(
            self.style.SUCCESS(
                "Delivery Offer Banner content added successfully!"
            )
        )

from django.core.management.base import BaseCommand
from api.models import DeliveryOfferItem


class Command(BaseCommand):
    help = "Populate existing delivery banner offers"

    def handle(self, *args, **options):
        offers = [
            {
                "icon_key": "truck",
                "before": "FREE PICKUP & DELIVERY WITHIN 5 KM",
                "after": "ON ORDERS ABOVE ₹1500",
                "display_order": 1,
            },
            {
                "icon_key": "wallet",
                "before": "BELOW ₹1500, JUST",
                "badge": "₹100",
                "after": "SERVICE CHARGE",
                "display_order": 2,
            },
            {
                "icon_key": "package",
                "badge": "COURIER SERVICE",
                "after": "AVAILABLE",
                "display_order": 3,
            },
            {
                "icon_key": "truck",
                "badge": "FREE",
                "after": "PICKUP & DELIVERY",
                "display_order": 4,
            },
        ]

        created_count = 0

        for offer in offers:
            _, created = DeliveryOfferItem.objects.get_or_create(
                display_order=offer["display_order"],
                defaults=offer,
            )
            if created:
                created_count += 1

        self.stdout.write(
            self.style.SUCCESS(
                f"Created {created_count} delivery offer items."
            )
        )
