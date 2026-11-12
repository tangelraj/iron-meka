
from django.db import models


# ==========================================
# WEBSITE SETTINGS
# ==========================================

class WebsiteSettings(models.Model):
    site_name = models.CharField(
        max_length=150,
        default="Iron Me·Ka"
    )

    logo = models.ImageField(
        upload_to="website/",
        blank=True
    )

    primary_color = models.CharField(
        max_length=20,
        default="#741c3e"
    )

    accent_color = models.CharField(
        max_length=20,
        default="#d4ad60"
    )

    def __str__(self):
        return self.site_name

    class Meta:
        verbose_name_plural = "Website Settings"


# ==========================================
# NAVIGATION LINKS
# ==========================================

class NavigationLink(models.Model):
    label = models.CharField(max_length=100)

    url = models.CharField(
        max_length=255,
        default="#home"
    )

    is_button = models.BooleanField(default=False)

    display_order = models.PositiveIntegerField(default=0)

    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ["display_order", "id"]

    def __str__(self):
        return self.label


# ==========================================
# SECTION CONTENT
# ==========================================

class SectionContent(models.Model):
    SECTION_CHOICES = [
        ("hero", "Hero"),
        ("about", "About"),
        ("services", "Services"),
        ("why_choose_us", "Why Choose Us"),
        ("how_it_works", "How It Works"),
        ("testimonials", "Testimonials"),
        ("contact", "Contact"),
        ("footer", "Footer"),
    ]

    section = models.CharField(
        max_length=50,
        choices=SECTION_CHOICES,
        unique=True
    )

    eyebrow = models.CharField(
        max_length=150,
        blank=True
    )

    heading = models.CharField(
        max_length=300,
        blank=True
    )

    description = models.TextField(blank=True)

    image = models.ImageField(
        upload_to="sections/",
        blank=True
    )

    background_image = models.ImageField(
        upload_to="backgrounds/",
        blank=True
    )

    background_color = models.CharField(
        max_length=20,
        blank=True
    )

    button_text = models.CharField(
        max_length=100,
        blank=True
    )

    button_url = models.CharField(
        max_length=255,
        blank=True
    )

    secondary_button_text = models.CharField(
        max_length=100,
        blank=True
    )

    secondary_button_url = models.CharField(
        max_length=255,
        blank=True
    )

    def __str__(self):
        return self.get_section_display()


# ==========================================
# HERO SLIDES
# ==========================================

class HeroSlide(models.Model):
    ANIMATION_CHOICES = [
        ("left", "Text From Left"),
        ("fade", "Text Fade"),
        ("bottom-left", "Text From Bottom Left"),
    ]

    eyebrow = models.CharField(
        max_length=150,
        blank=True
    )

    heading = models.CharField(max_length=255)

    description = models.TextField(blank=True)

    image = models.ImageField(
        upload_to="hero/",
        blank=True,
        null=True
    )

    button_text = models.CharField(
        max_length=100,
        default="Book a Service"
    )

    button_url = models.CharField(
        max_length=255,
        default="#booking"
    )

    secondary_button_text = models.CharField(
        max_length=100,
        default="View Services"
    )

    secondary_button_url = models.CharField(
        max_length=255,
        default="#services"
    )

    animation = models.CharField(
        max_length=30,
        choices=ANIMATION_CHOICES,
        default="left"
    )

    display_order = models.PositiveIntegerField(default=0)

    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ["display_order", "id"]

    def __str__(self):
        return self.heading


# ==========================================
# CONTENT ITEMS
# ==========================================

class ContentItem(models.Model):
    ITEM_GROUPS = [
        ("about", "About Features"),
        ("why_choose_us", "Why Choose Us Cards"),
        ("how_it_works", "How It Works Steps"),
    ]

    group = models.CharField(
        max_length=50,
        choices=ITEM_GROUPS
    )

    title = models.CharField(max_length=200)

    description = models.TextField(blank=True)

    icon_key = models.CharField(
        max_length=100,
        blank=True,
        help_text="Example: shield-check, flower-2, feather"
    )

    image = models.ImageField(
        upload_to="features/",
        blank=True
    )

    display_order = models.PositiveIntegerField(default=0)

    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ["display_order", "id"]

    def __str__(self):
        return self.title


# ==========================================
# SERVICES SECTION SETTINGS
# ==========================================

class ServicesSectionSettings(models.Model):
    eyebrow = models.CharField(
        max_length=100,
        default="WHAT WE DO"
    )

    heading = models.CharField(
        max_length=200,
        default="Our Fabric Care Services"
    )

    description = models.TextField(
        blank=True,
        default=(
            "Specialized care and finishing for your "
            "everyday wear and traditional fabrics."
        )
    )

    def __str__(self):
        return self.heading

    class Meta:
        verbose_name = "Services Section Settings"
        verbose_name_plural = "Services Section Settings"


# ==========================================
# SERVICES
# ==========================================

class Service(models.Model):
    name = models.CharField(max_length=200)

    description = models.TextField(blank=True)

    image = models.ImageField(
        upload_to="services/",
        blank=True,
        null=True
    )

    icon_key = models.CharField(
    max_length=100,
    blank=True,
    default=""
    )

    price = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        blank=True,
        null=True
    )

    display_order = models.PositiveIntegerField(default=0)

    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ["display_order", "id"]

    def __str__(self):
        return self.name


# ==========================================
# TESTIMONIALS
# ==========================================

class Testimonial(models.Model):
    customer_name = models.CharField(max_length=150)

    review = models.TextField()

    rating = models.PositiveSmallIntegerField(default=5)

    avatar = models.ImageField(
        upload_to="testimonials/",
        blank=True
    )

    display_order = models.PositiveIntegerField(default=0)

    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ["display_order", "id"]

    def __str__(self):
        return self.customer_name


# ==========================================
# CONTACT SETTINGS
# ==========================================

class ContactSettings(models.Model):
    phone = models.CharField(
        max_length=30,
        blank=True
    )

    whatsapp_number = models.CharField(
        max_length=30,
        default="918792694177"
    )

    whatsapp_message = models.TextField(
        default=(
            "Hello Iron Me·Ka, "
            "I would like to book your service."
        )
    )

    email = models.EmailField(blank=True)

    address = models.TextField(blank=True)

    business_hours = models.TextField(blank=True)

    def __str__(self):
        return "Contact Settings"

    class Meta:
        verbose_name_plural = "Contact Settings"


# ==========================================
# FOOTER SETTINGS
# ==========================================

class FooterSettings(models.Model):
    description = models.TextField(blank=True)

    logo = models.ImageField(
        upload_to="footer/",
        blank=True
    )

    instagram_url = models.URLField(blank=True)

    facebook_url = models.URLField(blank=True)

    youtube_url = models.URLField(blank=True)

    copyright_text = models.CharField(
        max_length=255,
        default="Iron Me·Ka. All rights reserved."
    )

    def __str__(self):
        return "Footer Settings"

    class Meta:
        verbose_name_plural = "Footer Settings"


# ==========================================
# FOOTER LINKS
# ==========================================

class FooterLink(models.Model):
    GROUP_CHOICES = [
        ("quick", "Quick Links"),
        ("services", "Services"),
        ("contact", "Contact"),
    ]

    group = models.CharField(
        max_length=30,
        choices=GROUP_CHOICES
    )

    label = models.CharField(max_length=150)

    url = models.CharField(max_length=255)

    display_order = models.PositiveIntegerField(default=0)

    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ["display_order", "id"]

    def __str__(self):
        return self.label
