
import React, { useEffect, useState } from "react";
import "./ServicesSection.css";

// Django backend URL
const API_URL = (
  import.meta.env.VITE_API_URL ||
  "http://127.0.0.1:8000"
).replace(/\/$/, "");

// Existing images used when no image is uploaded in Django Admin
const defaultImages = {
  "Saree Rolling": "/Image_SareeRolling.png",
  "Towel Ironing & Refreshing": "/Image_TowelIroningRefreshing.png",
  "Coat & Delicate Fabric Steam Refresh":
    "/Image_CoatDelicateFabricSteamRefresh.png",
  "Cotton Veshti Starching & Polishing":
    "/Image_CottonVeshtiStarchingPolishing.png",
  "Silk Veshti Polishing": "/Image_SilkVeshtiPolishing.png",
  "Bed Sheet & Cover Ironing":
    "/Image_BedSheetCoverIroning.png",
  "Saree Pre-Pleating": "/Image_SareePre-Pleating.png",
  "Saree Polishing": "/Image_SareePolishing.png",
  "Cotton Saree Starching & Polishing":
    "/Image_CottonSareeStarchingPolishing.png",
  "Cotton Saree Care":
    "/Image_CottonSareeStarchingPolishing.png",
  "Saree Folding": "/hero3.png",
};

// Original images in display order
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

const defaultSection = {
  eyebrow: "WHAT WE DO",
  heading: "Our Fabric Care Services",
  description:
    "Specialized care and finishing for your everyday wear and traditional fabrics.",
};

function ServicesSection() {
  const [services, setServices] = useState([]);
  const [section, setSection] = useState(defaultSection);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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
          throw new Error("Invalid services API response");
        }

        setServices(data.services);

        if (data.section) {
          setSection({
            eyebrow:
              data.section.eyebrow ??
              defaultSection.eyebrow,
            heading:
              data.section.heading ??
              defaultSection.heading,
            description:
              data.section.description ??
              defaultSection.description,
          });
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Error loading services:", err);
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

  const handleBooking = () => {
    const bookingSection =
      document.getElementById("booking");

    if (bookingSection) {
      window.location.hash = "booking";
    } else {
      window.location.hash = "contact";
    }
  };

  const getServiceImage = (service, index) => {
    // Image uploaded through Django Admin
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

    // Original image based on service name
    if (defaultImages[service.name]) {
      return defaultImages[service.name];
    }

    // Original image based on display order
    return fallbackImages[index] || "/hero3.png";
  };

  return (
    <section className="services-section" id="services">
      <div className="services-container">

        {/* Section Heading */}
        <div className="services-heading">
          <p className="services-eyebrow">
            {section.eyebrow}
          </p>

          <h2>{section.heading}</h2>

          <div className="services-decoration">
            <span></span>
            <i></i>
            <span></span>
          </div>

          <p className="services-subtitle">
            {section.description}
          </p>
        </div>

        {/* Loading Message */}
        {loading && (
          <p style={{ textAlign: "center" }}>
            Loading services...
          </p>
        )}

        {/* API Error */}
        {!loading && error && (
          <p
            role="alert"
            style={{ textAlign: "center" }}
          >
            {error}
          </p>
        )}

        {/* Service Cards */}
        {!loading && !error && (
          <div className="services-grid">
            {services.map((service, index) => (
              <article
                className="service-card"
                key={service.id}
              >

                <div className="service-image-wrapper">
                  <img
                    src={getServiceImage(service, index)}
                    alt={service.name}
                    className="service-image"
                    loading="lazy"
                    onError={(event) => {
                      const fallback =
                        defaultImages[service.name] ||
                        fallbackImages[index] ||
                        "/hero3.png";

                      if (
                        event.currentTarget.src !==
                        new URL(
                          fallback,
                          window.location.origin
                        ).href
                      ) {
                        event.currentTarget.src = fallback;
                      }
                    }}
                  />

                  <span className="service-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="service-card-content">
                  <h3>{service.name}</h3>

                  <p className="service-description">
                    {service.description}
                  </p>

                  <div className="service-card-footer">
                    <div className="service-price">
                      {service.price !== null &&
                      service.price !== undefined &&
                      service.price !== "" ? (
                        <>
                          <span>FROM</span>
                          <strong>
                            ₹{Number(service.price)}
                          </strong>
                        </>
                      ) : (
                        <strong>Contact for price</strong>
                      )}
                    </div>

                    <button
                      type="button"
                      className="service-book-btn"
                      onClick={handleBooking}
                      aria-label={`Book ${service.name}`}
                    >
                      Book Now
                    </button>
                  </div>
                </div>

              </article>
            ))}
          </div>
        )}

        {!loading && !error && services.length === 0 && (
          <p style={{ textAlign: "center" }}>
            No services available.
          </p>
        )}

      </div>
    </section>
  );
}

export default ServicesSection;
