
from django.db import migrations


SERVICE_NAMES = [
    "Saree Rolling",
    "Towel Ironing & Refreshing",
    "Coat & Delicate Fabric Steam Refresh",
    "Cotton Veshti Starching & Polishing",
    "Silk Veshti Polishing",
    "Bed Sheet & Cover Ironing",
    "Saree Pre-Pleating",
    "Saree Polishing",
    "Cotton Saree Care",
    "Saree Folding",
]


def populate_services(apps, schema_editor):
    Service = apps.get_model("api", "Service")
    database = schema_editor.connection.alias

    for index, name in enumerate(SERVICE_NAMES, start=1):
        Service.objects.using(database).get_or_create(
            name=name,
            defaults={
                "description": "",
                "display_order": index,
                "is_active": True,
            },
        )


class Migration(migrations.Migration):

    dependencies = [
        (
            "api",
            "0003_servicessectionsettings_remove_service_button_text_and_more",
        ),
    ]

    operations = [
        migrations.RunPython(
            populate_services,
            migrations.RunPython.noop,
        ),
    ]
