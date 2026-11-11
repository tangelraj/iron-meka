
import React from "react";
import {
  ShieldCheck,
  Flower2,
  Feather,
  Award
} from "lucide-react";

import "./WhyChooseUsSection.css";

const features = [
  {
    icon: ShieldCheck,
    title: "Professional Fabric Care",
    description: "Every fabric receives appropriate care.",
  },
  {
    icon: Flower2,
    title: "Specialized Saree Care",
    description:
      "Dedicated finishing for sarees and traditional wear.",
  },
  {
    icon: Feather,
    title: "Delicate Fabric Handling",
    description:
      "Careful treatment for premium and delicate materials.",
  },
  {
    icon: Award,
    title: "Neat Premium Finish",
    description:
      "Consistent, clean and polished results.",
  },
];

function WhyChooseUsSection() {
  return (
    <section className="why-section" id="why-choose-us">
      <div className="why-container">

        {/* Heading */}
        <div className="why-heading">
          <p className="why-eyebrow">WHY CHOOSE US</p>

          <h2>The Vastra Care Difference</h2>

          <div className="why-decoration">
            <span></span>
            <i></i>
            <span></span>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="why-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div className="why-card" key={index}>
                <div className="why-icon-circle">
                  <Icon size={34} strokeWidth={1.8} />
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUsSection;
