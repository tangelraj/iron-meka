
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { CircleCheck } from "lucide-react";
import "./SpecialtySection.css";

const API_URL = (
  import.meta.env.VITE_API_URL ||
  "http://127.0.0.1:8000"
).replace(/\/$/, "");

const fallbackItems = [
  {
    title: "Silk Saree Polish",
    description:
      "A gentle smoothing and polishing technique, ideal for bridal and party wear sarees, that protects delicate threads while restoring their original luster.",
  },
  {
    title: "Perfect Fall and Drape",
    description:
      "A targeted treatment that eliminates deep creases and ensures an elegant, flawless drape for your garment.",
  },
];

function SpecialtySection() {
  const { t, i18n } = useTranslation();

  const [specialtyData, setSpecialtyData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch content from Django
  useEffect(() => {
    const controller = new AbortController();

    async function fetchSpecialty() {
      try {
        const response = await fetch(
          `${API_URL}/api/specialty/`,
          {
            signal: controller.signal,
            cache: "no-store",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch Specialty data");
        }

        const data = await response.json();
        setSpecialtyData(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Specialty API error:", error);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchSpecialty();

    return () => controller.abort();
  }, []);

  // Get translated text from Django
  const getTranslatedText = (item, field, fallback = "") => {
    if (!item) return fallback;

    const language = i18n.resolvedLanguage ||
      i18n.language ||
      "en";

    const lang = language.split("-")[0];

    if (lang !== "en") {
      const translatedValue = item[`${field}_${lang}`];

      if (
        typeof translatedValue === "string" &&
        translatedValue.trim()
      ) {
        return translatedValue;
      }
    }

    return item[field] || fallback;
  };

  const section = specialtyData?.section;

  const translatedFallbackItems = t("specialtyItems", {
    returnObjects: true,
  });

  const displayFallbackItems =
    Array.isArray(translatedFallbackItems) &&
    translatedFallbackItems.length === fallbackItems.length
      ? translatedFallbackItems
      : fallbackItems;

  const items = specialtyData
    ? specialtyData.items || []
    : fallbackItems;

  const eyebrow = getTranslatedText(
    section,
    "eyebrow",
    t("specialtyEyebrow", "OUR SPECIALTY")
  );

  const heading = getTranslatedText(
    section,
    "heading",
    t("specialtyHeading", "Premium Saree Polish")
  );

  const defaultDescription =
    t(
      "specialtyDescriptionBefore",
      "The saree is an exceptional garment that requires specific textile care. Our exclusive "
    ) +
    t(
      "specialtyDescriptionHighlight",
      "Saree Polish service"
    ) +
    t(
      "specialtyDescriptionAfter",
      " is designed to revive the shine, color, and stiffness of your traditional fabrics, whether they are woven from silk, cotton, or blended materials."
    );

  const description = getTranslatedText(
    section,
    "description",
    defaultDescription
  );

  const highlight = t(
    "specialtyDescriptionHighlight",
    "Saree Polish service"
  );

  const highlightIndex = description.indexOf(highlight);

  return (
    <section className="specialty-section" id="specialty">
      <div className="specialty-container">

        {/* Left side */}
        <div className="specialty-content">
          <span className="specialty-eyebrow">
            {eyebrow}
          </span>

          <h2 className="specialty-heading">
            {heading}
          </h2>

          <div className="specialty-divider">
            <span className="specialty-line"></span>
            <span className="specialty-diamond"></span>
            <span className="specialty-line"></span>
          </div>

          <p className="specialty-description">
            {highlightIndex >= 0 ? (
              <>
                {description.slice(0, highlightIndex)}
                <strong>{highlight}</strong>
                {description.slice(
                  highlightIndex + highlight.length
                )}
              </>
            ) : (
              description
            )}
          </p>
        </div>

        {/* Right side */}
        <div className="specialty-cards">
          {items.map((item, index) => {
            const fallback =
              displayFallbackItems[index] || {};

            return (
              <div
                className="specialty-card"
                key={item.id || item.title || index}
              >
                <div className="specialty-card-icon">
                  <CircleCheck strokeWidth={1.8} />
                </div>

                <div className="specialty-card-content">
                  <h3>
                    {specialtyData
                      ? getTranslatedText(
                          item,
                          "title"
                        )
                      : fallback.title ||
                        fallbackItems[index]?.title}
                  </h3>

                  <p>
                    {specialtyData
                      ? getTranslatedText(
                          item,
                          "description"
                        )
                      : fallback.description ||
                        fallbackItems[index]?.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default SpecialtySection;
