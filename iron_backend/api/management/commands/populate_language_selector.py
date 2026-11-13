
from django.core.management.base import BaseCommand
from api.models import LanguageSettings


class Command(BaseCommand):
    help = "Populate Language Selector settings in Django Admin"

    def handle(self, *args, **options):

        if LanguageSettings.objects.exists():
            self.stdout.write(
                self.style.WARNING(
                    "Language Selector settings already exist. "
                    "Existing content was not changed."
                )
            )
            return

        LanguageSettings.objects.create(
            default_language="en",

            enable_english=True,
            enable_tamil=True,
            enable_french=True,

            english_label="English",
            tamil_label="தமிழ்",
            french_label="Français",

            show_language_selector=True,
        )

        self.stdout.write(
            self.style.SUCCESS(
                "Language Selector settings populated successfully!"
            )
        )
