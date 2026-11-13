
import React from "react";
import { useTranslation } from "react-i18next";
import { CircleCheck } from "lucide-react";
import "./SpecialtySection.css";

const specialtyItems = [
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
  const { t } = useTranslation();

  const translatedItems = t("specialtyItems", {
    returnObjects: true,
  });

  const displayItems =
    Array.isArray(translatedItems) &&
    translatedItems.length === specialtyItems.length
      ? translatedItems
      : specialtyItems;

  return (
    <section className="specialty-section" id="specialty">
      <div className="specialty-container">
        {/* Left side */}
        <div className="specialty-content">
          <span className="specialty-eyebrow">
            {t("specialtyEyebrow", "OUR SPECIALTY")}
          </span>

          <h2 className="specialty-heading">
            {t("specialtyHeading", "Premium Saree Polish")}
          </h2>

          <div className="specialty-divider">
            <span className="specialty-line"></span>
            <span className="specialty-diamond"></span>
            <span className="specialty-line"></span>
          </div>

          <p className="specialty-description">
            {t(
              "specialtyDescriptionBefore",
              "The saree is an exceptional garment that requires specific textile care. Our exclusive "
            )}
            <strong>
              {t(
                "specialtyDescriptionHighlight",
                "Saree Polish service"
              )}
            </strong>
            {t(
              "specialtyDescriptionAfter",
              " is designed to revive the shine, color, and stiffness of your traditional fabrics, whether they are woven from silk, cotton, or blended materials."
            )}
          </p>
        </div>

        {/* Right side */}
        <div className="specialty-cards">
          {specialtyItems.map((item, index) => (
            <div className="specialty-card" key={item.title}>
              <div className="specialty-card-icon">
                <CircleCheck strokeWidth={1.8} />
              </div>

              <div className="specialty-card-content">
                <h3>
                  {displayItems[index]?.title || item.title}
                </h3>

                <p>
                  {displayItems[index]?.description ||
                    item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SpecialtySection;
