
from django.core.management.base import BaseCommand
from api.models import FloatingButton


class Command(BaseCommand):
    help = "Populate floating buttons in Django Admin"

    def handle(self, *args, **options):

        buttons = [
            {
                "label": "WhatsApp",
                "label_ta": "வாட்ஸ்அப்",
                "label_fr": "WhatsApp",
                "icon_key": "message-circle",
                "url": "https://wa.me/918792694177",
                "background_color": "#25D366",
                "text_color": "#FFFFFF",
                "open_new_tab": True,
                "display_order": 1,
                "is_active": True,
            },
            {
                "label": "Call Now",
                "label_ta": "இப்போது அழைக்கவும்",
                "label_fr": "Appeler",
                "icon_key": "phone",
                "url": "tel:+919790263322",
                "background_color": "#741c3e",
                "text_color": "#FFFFFF",
                "open_new_tab": False,
                "display_order": 2,
                "is_active": True,
            },
            {
                "label": "Back to Top",
                "label_ta": "மேலே செல்லவும்",
                "label_fr": "Retour en haut",
                "icon_key": "arrow-up",
                "url": "#home",
                "background_color": "#d4ad60",
                "text_color": "#FFFFFF",
                "open_new_tab": False,
                "display_order": 3,
                "is_active": True,
            },
        ]

        created_count = 0

        for button in buttons:
            obj, created = FloatingButton.objects.get_or_create(
                label=button["label"],
                defaults=button,
            )

            if created:
                created_count += 1

        self.stdout.write(
            self.style.SUCCESS(
                f"Floating buttons populated successfully. "
                f"{created_count} new buttons created."
            )
        )
