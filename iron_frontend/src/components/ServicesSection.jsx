
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./ServicesSection.css";

// Django backend URL
const API_URL = (
  import.meta.env.VITE_API_URL ||
  "http://127.0.0.1:8000"
).replace(/\/$/, "");

// Original service images
const defaultImages = {
  "Saree Rolling": "/Image_SareeRolling.png",

  "Towel Ironing & Refreshing":
    "/Image_TowelIroningRefreshing.png",

  "Coat & Delicate Fabric Steam Refresh":
    "/Image_CoatDelicateFabricSteamRefresh.png",

  "Cotton Veshti Starching & Polishing":
    "/Image_CottonVeshtiStarchingPolishing.png",

  "Silk Veshti Polishing":
    "/Image_SilkVeshtiPolishing.png",

  "Bed Sheet & Cover Ironing":
    "/Image_BedSheetCoverIroning.png",

  "Saree Pre-Pleating":
    "/Image_SareePre-Pleating.png",

  "Saree Polishing":
    "/Image_SareePolishing.png",

  "Cotton Saree Starching & Polishing":
    "/Image_CottonSareeStarchingPolishing.png",

  "Cotton Saree Care":
    "/Image_CottonSareeStarchingPolishing.png",

  "Saree Folding":
    "/hero3.png",
};

// Original fallback images
const fallbackImages = [
  "/Image_SareeRolling.png",
  "/Image_TowelIroningRefreshing.png",
  "/Image_CoatDelicateFabricSteamRefresh.png",
  "/Image_CottonVeshtiStarchingPolishing.png",
  "/Image_SilkVeshtiPolishing.png",
  "/Image_BedSheetCoverIroning.png",
  "/Image_SareePre-Pleating.png",
  "/Image_SareePolishing.png",
  "/Image_CottonSareeStarchingPolishing.png",
  "/hero3.png",
];

// Original English section content
const defaultSection = {
  eyebrow: "WHAT WE DO",
  heading: "Our Fabric Care Services",
  description:
    "Specialized care and finishing for your everyday wear and traditional fabrics.",
};

function ServicesSection() {
  const { t, i18n } = useTranslation();

  const language = (
    i18n.resolvedLanguage ||
    i18n.language ||
    "en"
  ).split("-")[0];

  const [services, setServices] = useState([]);
  const [section, setSection] = useState(defaultSection);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch services from Django
  useEffect(() => {
    const controller = new AbortController();

    const fetchServices = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `${API_URL}/api/services/`,
          {
            method: "GET",
            cache: "no-store",
            signal: controller.signal,
          }
        );

        if (!response.ok) {
          throw new Error(
            `Services API returned ${response.status}`
          );
        }

        const data = await response.json();

        if (!Array.isArray(data.services)) {
          throw new Error(
            "Invalid services API response"
          );
        }

        setServices(data.services);

        if (data.section) {
          setSection({
            ...defaultSection,
            ...data.section,
          });
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error(
            "Error loading services:",
            err
          );

          setError(
            "Unable to load services. Please try again later."
          );
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchServices();

    return () => controller.abort();
  }, []);

  // Translate section heading and subheading
  const translateSectionField = (
    field,
    translationKey
  ) => {
    const originalText = section[field] || "";

    if (language === "en") {
      return originalText;
    }

    // First check Django translations
    const backendTranslation =
      section[`${field}_${language}`];

    if (
      typeof backendTranslation === "string" &&
      backendTranslation.trim()
    ) {
      return backendTranslation;
    }

    // Translate original default content
    if (originalText === defaultSection[field]) {
      return t(translationKey, {
        defaultValue: originalText,
      });
    }

    // Preserve custom Django Admin content
    return originalText;
  };

  // Translate individual service names and descriptions
  const translateServiceField = (
    service,
    field
  ) => {
    const originalText = service[field] || "";

    if (language === "en") {
      return originalText;
    }

    // Priority 1: Django Admin translation
    const backendTranslation =
      service[`${field}_${language}`];

    if (
      typeof backendTranslation === "string" &&
      backendTranslation.trim()
    ) {
      return backendTranslation;
    }

    // Priority 2: Translation from i18n.js
    const translationKey =
      `serviceCards.${service.name}.${field}`;

    // For descriptions, verify the original English
    // content matches the translation source
    if (field === "description") {
      const storedEnglishDescription = t(
        translationKey,
        {
          lng: "en",
          defaultValue: "",
        }
      );

      if (
        !storedEnglishDescription ||
        originalText.trim() !==
          storedEnglishDescription.trim()
      ) {
        return originalText;
      }
    }

    // If translation is missing, preserve English
    return t(translationKey, {
      defaultValue: originalText,
    });
  };

  const sectionEyebrow =
    translateSectionField(
      "eyebrow",
      "servicesEyebrow"
    );

  const sectionHeading =
    translateSectionField(
      "heading",
      "servicesHeading"
    );

  const sectionDescription =
    translateSectionField(
      "description",
      "servicesDescription"
    );

  // Booking navigation
  const handleBooking = () => {
    const bookingSection =
      document.getElementById("booking");

    if (bookingSection) {
      window.location.hash = "booking";
    } else {
      window.location.hash = "contact";
    }
  };

  // Service image selection
  const getServiceImage = (service, index) => {
    if (service.image) {
      if (
        service.image.startsWith("http://") ||
        service.image.startsWith("https://")
      ) {
        return service.image;
      }

      if (service.image.startsWith("/media/")) {
        return `${API_URL}${service.image}`;
      }

      return service.image;
    }

    if (defaultImages[service.name]) {
      return defaultImages[service.name];
    }

    return fallbackImages[index] || "/hero3.png";
  };

  // Image fallback
  const handleImageError = (
    event,
    service,
    index
  ) => {
    const fallback =
      defaultImages[service.name] ||
      fallbackImages[index] ||
      "/hero3.png";

    const fallbackURL = new URL(
      fallback,
      window.location.origin
    ).href;

    if (
      event.currentTarget.src !== fallbackURL
    ) {
      event.currentTarget.src = fallback;
    }
  };

  return (
    <section
      className="services-section"
      id="services"
    >
      <div className="services-container">

        {/* Section Heading */}
        <div className="services-heading">

          <p className="services-eyebrow">
            {sectionEyebrow}
          </p>

          <h2>{sectionHeading}</h2>

          <div className="services-decoration">
            <span></span>
            <i></i>
            <span></span>
          </div>

          <p className="services-subtitle">
            {sectionDescription}
          </p>

        </div>

        {/* Loading */}
        {loading && (
          <p style={{ textAlign: "center" }}>
            {t(
              "loadingServices",
              "Loading services..."
            )}
          </p>
        )}

        {/* API Error */}
        {!loading && error && (
          <p
            role="alert"
            style={{ textAlign: "center" }}
          >
            {t(
              "servicesError",
              "Unable to load services. Please try again later."
            )}
          </p>
        )}

        {/* Service Cards */}
        {!loading && !error && (
          <div className="services-grid">

            {services.map((service, index) => (
              <article
                className="service-card"
                key={service.id ?? index}
              >

                {/* Service Image */}
                <div className="service-image-wrapper">

                  <img
                    src={getServiceImage(
                      service,
                      index
                    )}
                    alt={translateServiceField(
                      service,
                      "name"
                    )}
                    className="service-image"
                    loading="lazy"
                    onError={(event) =>
                      handleImageError(
                        event,
                        service,
                        index
                      )
                    }
                  />

                  <span className="service-number">
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </span>

                </div>

                {/* Service Details */}
                <div className="service-card-content">

                  <h3>
                    {translateServiceField(
                      service,
                      "name"
                    )}
                  </h3>

                  <p className="service-description">
                    {translateServiceField(
                      service,
                      "description"
                    )}
                  </p>

                  <div className="service-card-footer">

                    {/* Price */}
                    <div className="service-price">

                      {service.price !== null &&
                      service.price !== undefined &&
                      service.price !== "" ? (
                        <>
                          <span>
                            {t("from", "FROM")}
                          </span>

                          <strong>
                            ₹{Number(service.price)}
                          </strong>
                        </>
                      ) : (
                        <strong>
                          {t(
                            "contactForPrice",
                            "Contact for price"
                          )}
                        </strong>
                      )}

                    </div>

                    {/* Book Button */}
                    <button
                      type="button"
                      className="service-book-btn"
                      onClick={handleBooking}
                      aria-label={`${t(
                        "bookNow",
                        "Book Now"
                      )}: ${translateServiceField(
                        service,
                        "name"
                      )}`}
                    >
                      {t("bookNow", "Book Now")}
                    </button>

                  </div>

                </div>

              </article>
            ))}

          </div>
        )}

        {/* No Services */}
        {!loading &&
          !error &&
          services.length === 0 && (
            <p style={{ textAlign: "center" }}>
              {t(
                "noServices",
                "No services available."
              )}
            </p>
          )}

      </div>
    </section>
  );
}

export default ServicesSection;
