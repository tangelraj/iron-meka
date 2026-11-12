
import React from "react";
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
  return (
    <section className="specialty-section" id="specialty">
      <div className="specialty-container">
        {/* Left side */}
        <div className="specialty-content">
          <span className="specialty-eyebrow">
            OUR SPECIALTY
          </span>

          <h2 className="specialty-heading">
            Premium Saree Polish
          </h2>

          <div className="specialty-divider">
            <span className="specialty-line"></span>
            <span className="specialty-diamond"></span>
            <span className="specialty-line"></span>
          </div>

          <p className="specialty-description">
            The saree is an exceptional garment that requires
            specific textile care. Our exclusive{" "}
            <strong>Saree Polish service</strong> is designed to
            revive the shine, color, and stiffness of your
            traditional fabrics, whether they are woven from
            silk, cotton, or blended materials.
          </p>
        </div>

        {/* Right side */}
        <div className="specialty-cards">
          {specialtyItems.map((item) => (
            <div className="specialty-card" key={item.title}>
              <div className="specialty-card-icon">
                <CircleCheck strokeWidth={1.8} />
              </div>

              <div className="specialty-card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SpecialtySection;
