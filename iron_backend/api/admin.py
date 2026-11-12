from django.contrib import admin
from django.utils.html import format_html
from .models import HeroSlide
from django.contrib import admin
from django.utils.html import format_html
from .models import Service, ServicesSectionSettings


from .models import (
    WebsiteSettings,
    NavigationLink,
    SectionContent,
    HeroSlide,
    ContentItem,
    Service,
    Testimonial,
    ContactSettings,
    FooterSettings,
    FooterLink,
)


@admin.register(WebsiteSettings)
class WebsiteSettingsAdmin(admin.ModelAdmin):
    list_display = (
        "site_name",
        "logo_preview",
        "primary_color",
        "accent_color",
    )

    readonly_fields = ("logo_preview",)

    def logo_preview(self, obj):
        if obj and obj.logo:
            return format_html(
                '<img src="{}" style="width:75px;height:75px;'
                'object-fit:contain;border-radius:50%;" />',
                obj.logo.url,
            )
        return "No logo uploaded"

    logo_preview.short_description = "Logo Preview"




@admin.register(NavigationLink)
class NavigationLinkAdmin(admin.ModelAdmin):
    list_display = (
        "label", "url", "is_button",
        "display_order", "is_active"
    )
    list_editable = ("display_order", "is_active")
    search_fields = ("label",)


@admin.register(SectionContent)
class SectionContentAdmin(admin.ModelAdmin):
    list_display = ("section", "heading", "eyebrow")
    list_filter = ("section",)
    search_fields = ("heading", "description")



@admin.register(HeroSlide)
class HeroSlideAdmin(admin.ModelAdmin):

    list_display = (
        "heading",
        "eyebrow",
        "image_preview",
        "display_order",
        "is_active",
    )

    list_display_links = ("heading",)

    list_editable = (
        "display_order",
        "is_active",
    )

    search_fields = (
        "heading",
        "eyebrow",
        "description",
    )

    ordering = ("display_order",)

    readonly_fields = ("image_preview",)

    fieldsets = (
        ("Slide Content", {
            "fields": (
                "eyebrow",
                "heading",
                "description",
            )
        }),
        ("Background Image", {
            "fields": (
                "image",
                "image_preview",
            )
        }),
        ("Buttons", {
            "fields": (
                "button_text",
                "button_url",
                "secondary_button_text",
                "secondary_button_url",
            )
        }),
        ("Animation and Visibility", {
            "fields": (
                "animation",
                "display_order",
                "is_active",
            )
        }),
    )

    @admin.display(
        description="Image Preview",
        ordering="display_order",
    )
    def image_preview(self, obj):
        if not obj or not obj.pk:
            return "No image"

        try:
            if not obj.image:
                return "No image uploaded"

            return format_html(
                '<img src="{}" width="180" height="110" '
                'style="object-fit:cover;border-radius:8px;" />',
                obj.image.url,
            )

        except (ValueError, OSError):
            return "Image unavailable"

    @admin.display(description="Image Preview")
    def image_preview(self, obj):
        if not obj or not obj.pk:
            return "No image"

        try:
            if not obj.image:
                return "No image uploaded"

            return format_html(
                '<img src="{}" width="180" height="110" '
                'style="object-fit:cover;border-radius:8px;" />',
                obj.image.url,
            )
        except (ValueError, OSError):
            return "Image unavailable"


    @admin.display(description="Image Preview")
    def image_preview(self, obj):
        if not obj or not obj.pk:
            return "No image"

        try:
            if not obj.image:
                return "No image uploaded"

            return format_html(
                '<img src="{}" width="180" height="110" '
                'style="object-fit:cover;border-radius:8px;" />',
                obj.image.url,
            )

        except (ValueError, OSError):
            return "Image unavailable"



@admin.register(ContentItem)
class ContentItemAdmin(admin.ModelAdmin):
    list_display = (
        "title", "group", "icon_key",
        "display_order", "is_active"
    )
    list_filter = ("group", "is_active")
    list_editable = ("display_order", "is_active")
    search_fields = ("title", "description")


@admin.register(ServicesSectionSettings)
class ServicesSectionSettingsAdmin(admin.ModelAdmin):
    list_display = ("heading",)


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "price",
        "display_order",
        "is_active",
    )

    list_editable = (
        "display_order",
        "is_active",
    )

    list_filter = ("is_active",)

    search_fields = (
        "name",
        "description",
    )

    ordering = ("display_order", "id")



@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = (
        "customer_name", "rating",
        "display_order", "is_active"
    )
    list_editable = ("display_order", "is_active")
    search_fields = ("customer_name",)
    list_filter = ("is_active",)


@admin.register(ContactSettings)
class ContactSettingsAdmin(admin.ModelAdmin):
    list_display = ("phone", "whatsapp_number", "email")


@admin.register(FooterSettings)
class FooterSettingsAdmin(admin.ModelAdmin):
    list_display = ("id", "copyright_text")


@admin.register(FooterLink)
class FooterLinkAdmin(admin.ModelAdmin):
    list_display = (
        "label", "group", "url",
        "display_order", "is_active"
    )
    list_filter = ("group",)
    list_editable = ("display_order", "is_active")
    search_fields = ("label",)
