
from api.models import Testimonial

testimonials = [
    {
        "name": "Lakshmi R.",
        "review": (
            "My Kanjivaram silks came back beautifully polished "
            "and rolled. They treat every saree like it's their own."
        ),
        "rating": 5,
    },
    {
        "name": "Arun Kumar",
        "review": (
            "The silk veshti polishing for my wedding was flawless. "
            "Crisp, shining and on time."
        ),
        "rating": 5,
    },
    {
        "name": "Priya S.",
        "review": (
            "Pre-pleating has saved me so much time before functions. "
            "Perfect pleats every single time!"
        ),
        "rating": 5,
    },
    {
        "name": "Meena V.",
        "review": (
            "Gentle with delicate fabrics and very professional. "
            "My go-to for all traditional wear."
        ),
        "rating": 5,
    },
]

for index, item in enumerate(testimonials, start=1):
    testimonial, created = Testimonial.objects.get_or_create(
        customer_name=item["name"],
        defaults={
            "review": item["review"],
            "rating": item["rating"],
            "display_order": index,
            "is_active": False,
        },
    )

    if not created:
        testimonial.review = item["review"]
        testimonial.rating = item["rating"]
        testimonial.display_order = index
        testimonial.save(
            update_fields=[
                "review",
                "rating",
                "display_order",
            ]
        )

    print("Updated:", testimonial.customer_name)

print("All 4 testimonial paragraphs updated successfully!")
