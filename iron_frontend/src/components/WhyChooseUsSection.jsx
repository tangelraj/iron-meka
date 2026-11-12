
import React from "react";
import { Award, HeartHandshake, ShieldCheck } from "lucide-react";
import "./WhyChooseUsSection.css";

const reasons = [
  {
    title: "Premium Quality Finish",
    description:
      'A "ready-to-wear" and "ready-to-dress" result thanks to our traditional ironing techniques.',
    icon: Award,
  },
  {
    title: "Local Expertise",
    description:
      "Your trusted local workshop, proud to serve the community and local economy of Pondicherry.",
    icon: HeartHandshake,
  },
  {
    title: "Reliable & Customized Care",
    description:
      "Every item, from a delicate silk saree to a king-size bed set, is handled with the highest standards.",
    icon: ShieldCheck,
  },
];

function WhyChooseUsSection() {
  return (
    <section className="why-iron-section" id="why-choose-us">
      <div className="why-iron-container">

        <div className="why-iron-header">
          <span className="why-iron-eyebrow">
            WHY CHOOSE US
          </span>

          <h2 className="why-iron-heading">
            Why Choose IRON Me.Ka?
          </h2>

          <div className="why-iron-divider" aria-hidden="true">
            <span className="why-iron-line"></span>
            <span className="why-iron-diamond"></span>
            <span className="why-iron-line"></span>
          </div>
        </div>

        <div className="why-iron-cards">
          {reasons.map(({ title, description, icon: Icon }) => (
            <div className="why-iron-card" key={title}>
              <div className="why-iron-icon">
                <Icon strokeWidth={1.7} />
              </div>

              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUsSection;
