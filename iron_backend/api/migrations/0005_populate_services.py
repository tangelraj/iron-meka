
from django.db import migrations


SERVICES = [
    ("Saree Rolling", "Neat and professional rolling for easy storage and handling.", 60),
    ("Towel Ironing & Refreshing", "Fresh, neat and comfortable finishing for towels.", 20),
    ("Coat & Delicate Fabric Steam Refresh", "Gentle steam treatment for coats and delicate fabrics.", 150),
    ("Cotton Veshti Starching & Polishing", "Crisp starching and polished finishing for cotton veshti.", 80),
    ("Silk Veshti Polishing", "Careful polishing to maintain the premium silk appearance.", 120),
    ("Bed Sheet & Cover Ironing", "Smooth and neatly finished bed sheets and covers.", 40),
    ("Saree Pre-Pleating", "Ready-to-wear pre-pleating for convenient styling.", 250),
    ("Saree Polishing", "Professional polishing to enhance the saree's finish and appearance.", 150),
    ("Cotton Saree Starching & Polishing", "Crisp starching with a clean, polished finish.", 120),
    ("Saree Folding", "Neat and careful folding for organized storage.", 40),
]


def populate_services(apps, schema_editor):
    Service = apps.get_model("api", "Service")
    db = schema_editor.connection.alias

    for index, (name, description, price) in enumerate(SERVICES, start=1):
        exists = (
            Service.objects.using(db)
            .filter(name=name)
            .values_list("id", flat=True)
            .exists()
        )

        if not exists:
            Service.objects.using(db).create(
                name=name,
                description=description,
                price=price,
                icon_key="",
                display_order=index,
                is_active=True,
            )


class Migration(migrations.Migration):

    dependencies = [
        (
            "api",
            "0004_service_price_alter_service_icon_key_and_more",
        ),
    ]

    operations = [
        migrations.RunPython(
            populate_services,
            migrations.RunPython.noop,
        ),
    ]
