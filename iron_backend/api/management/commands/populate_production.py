
from django.core.management.base import BaseCommand
from django.core.management import call_command


class Command(BaseCommand):
    help = "Populate existing website content in production"

    def handle(self, *args, **options):

        commands = [
            "populate_specialty",
            "populate_floating",
            "populate_delivery_offer",
            "populate_offer_banner",
            "populate_language_selector",
            "populate_b2b",
            "populate_delivery_items",
        ]

        for command in commands:
            self.stdout.write(
                f"Running {command}..."
            )

            call_command(command)

        self.stdout.write(
            self.style.SUCCESS(
                "Production content population completed successfully."
            )
        )
