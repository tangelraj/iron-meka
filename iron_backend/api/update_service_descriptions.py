
from api.models import Service

service_descriptions = {
    "Saree Rolling": (
        "Give your sarees a smooth, elegant and wrinkle-free "
        "finish with our professional saree rolling service. "
        "We carefully handle each saree to maintain its natural "
        "texture, beautiful drape and neat appearance, making "
        "it ready for any special occasion."
    ),

    "Towel Ironing & Refreshing": (
        "Keep your towels fresh, soft and neatly finished "
        "with our professional towel ironing and refreshing "
        "service. We carefully remove wrinkles and provide "
        "a clean, organized finish for everyday comfort."
    ),

    "Coat & Delicate Fabric Steam Refresh": (
        "Refresh your coats and delicate garments with "
        "gentle steam treatment designed to reduce wrinkles "
        "and improve their appearance. Our careful handling "
        "helps maintain the shape, texture and elegance "
        "of your special clothing."
    ),

    "Cotton Veshti Starching & Polishing": (
        "Give your traditional cotton veshti a crisp, "
        "neat and polished appearance with our specialized "
        "starching and finishing service. We carefully "
        "treat each garment to achieve a structured finish "
        "while preserving its traditional elegance."
    ),

    "Silk Veshti Polishing": (
        "Maintain the graceful appearance of your silk "
        "veshti with our specialized polishing service. "
        "Our gentle handling and careful finishing help "
        "enhance its natural sheen, smoothness and elegant "
        "drape, making it suitable for celebrations "
        "and traditional occasions."
    ),

    "Bed Sheet & Cover Ironing": (
        "Enjoy neatly pressed bed sheets and covers with "
        "our professional ironing service. We carefully "
        "smooth wrinkles and folds to provide a clean, "
        "fresh-looking finish that keeps your bedding "
        "organized and ready to use."
    ),

    "Saree Pre-Pleating": (
        "Save time while getting ready with our professional "
        "saree pre-pleating service. We carefully arrange "
        "uniform, elegant pleats to make saree draping "
        "easier, quicker and more comfortable for weddings, "
        "functions and other special occasions."
    ),

    "Saree Polishing": (
        "Restore a beautifully finished appearance to "
        "your favorite sarees with our professional "
        "saree polishing service. We use careful handling "
        "and suitable finishing techniques to enhance "
        "smoothness, improve presentation and maintain "
        "the elegance of your sarees."
    ),

    "Cotton Saree Care": (
        "Keep your cotton sarees looking neat and elegant "
        "with our dedicated cotton saree care service. "
        "We carefully handle, press and finish each saree "
        "to reduce wrinkles while maintaining its natural "
        "texture and comfortable drape."
    ),

    "Saree Folding": (
        "Keep your sarees neatly arranged with our "
        "professional saree folding service. We carefully "
        "fold each saree with attention to its fabric "
        "and design, helping maintain an organized "
        "appearance for convenient storage and handling."
    ),
}

created_count = 0
updated_count = 0

for index, (service_name, description) in enumerate(
    service_descriptions.items(), start=1
):
    service, created = Service.objects.update_or_create(
        name=service_name,
        defaults={
            "description": description,
        },
        create_defaults={
            "description": description,
            "display_order": index,
            "is_active": True,
        },
    )

    if created:
        print(f"Created: {service_name}")
        created_count += 1
    else:
        print(f"Updated: {service_name}")
        updated_count += 1

print("\nService import completed!")
print(f"Created: {created_count}")
print(f"Updated: {updated_count}")
print(f"Total processed: {created_count + updated_count}")
