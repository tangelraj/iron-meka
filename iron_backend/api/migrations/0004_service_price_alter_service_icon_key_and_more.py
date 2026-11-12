
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        (
            "api",
            "0003_servicessectionsettings_remove_service_button_text_and_more",
        ),
    ]

    operations = [
        migrations.SeparateDatabaseAndState(
            database_operations=[
                migrations.RunSQL(
                    sql="""
                    SELECT 1;
                    """,
                    reverse_sql=migrations.RunSQL.noop,
                ),
            ],
            state_operations=[
                migrations.AddField(
                    model_name="service",
                    name="price",
                    field=models.DecimalField(
                        max_digits=10,
                        decimal_places=2,
                        blank=True,
                        null=True,
                    ),
                ),
            ],
        ),

        migrations.AlterField(
            model_name="service",
            name="icon_key",
            field=models.CharField(
                max_length=100,
                blank=True,
                default="",
            ),
        ),

        migrations.AlterField(
            model_name="servicessectionsettings",
            name="description",
            field=models.TextField(
                blank=True,
                default="Specialized care and finishing for your everyday wear and traditional fabrics.",
            ),
        ),

        migrations.AlterField(
            model_name="servicessectionsettings",
            name="eyebrow",
            field=models.CharField(
                max_length=100,
                default="WHAT WE DO",
            ),
        ),

        migrations.AlterField(
            model_name="servicessectionsettings",
            name="heading",
            field=models.CharField(
                max_length=200,
                default="Our Fabric Care Services",
            ),
        ),
    ]
