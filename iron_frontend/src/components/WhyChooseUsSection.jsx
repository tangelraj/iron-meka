
import React, { useEffect, useState } from "react";
import {
  ShieldCheck,
  Flower2,
  Feather,
  Award,
  Heart,
  Sparkles,
  CheckCircle,
} from "lucide-react";

import "./WhyChooseUsSection.css";

const API_BASE =
  import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

// Match these names with icon_key in Django Admin.
const iconMap = {
  "shield-check": ShieldCheck,
  shield: ShieldCheck,
  flower2: Flower2,
  flower: Flower2,
  feather: Feather,
  award: Award,
  heart: Heart,
  sparkles: Sparkles,
  "check-circle": CheckCircle,
};

const defaultSection = {
  eyebrow: "WHY CHOOSE US",
  heading: "The Iron Me·Ka Difference",
  description: "",
};

const defaultFeatures = [
  {
    id: 1,
    icon_key: "shield-check",
    title: "Professional Fabric Care",
    description: "Every fabric receives appropriate care.",
  },
  {
    id: 2,
    icon_key: "flower2",
    title: "Specialized Saree Care",
    description:
      "Dedicated finishing for sarees and traditional wear.",
  },
  {
    id: 3,
    icon_key: "feather",
    title: "Delicate Fabric Handling",
    description:
      "Careful treatment for premium and delicate materials.",
  },
  {
    id: 4,
    icon_key: "award",
    title: "Neat Premium Finish",
    description:
      "Consistent, clean and polished results.",
  },
];

function WhyChooseUsSection() {
  const [section, setSection] = useState(defaultSection);
  const [features, setFeatures] = useState(defaultFeatures);

  useEffect(() => {
    const controller = new AbortController();

    async function loadWhyChooseUs() {
      try {
        const response = await fetch(
          `${API_BASE}/api/why-choose-us/`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error(
            `Why Choose Us API error: ${response.status}`
          );
        }

        const data = await response.json();

        if (data.section) {
          setSection({
            eyebrow: data.section.eyebrow ?? "",
            heading: data.section.heading ?? "",
            description: data.section.description ?? "",
          });
        }

        if (Array.isArray(data.items)) {
          setFeatures(data.items);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(
            "Unable to load Why Choose Us content:",
            error
          );
        }
      }
    }

    loadWhyChooseUs();

    return () => controller.abort();
  }, []);

  return (
    <section className="why-section" id="why-choose-us">
      <div className="why-container">

        {/* Heading */}
        <div className="why-heading">
          <p className="why-eyebrow">
            {section.eyebrow}
          </p>

          <h2>{section.heading}</h2>

          {section.description && (
            <p className="why-description">
              {section.description}
            </p>
          )}

          <div className="why-decoration">
            <span></span>
            <i></i>
            <span></span>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="why-grid">
          {features.map((feature, index) => {
            const Icon =
              iconMap[
                (feature.icon_key || "")
                  .trim()
                  .toLowerCase()
              ] || ShieldCheck;

            return (
              <div
                className="why-card"
                key={feature.id ?? index}
              >
                <div className="why-icon-circle">
                  {feature.image ? (
                    <img
                      src={feature.image}
                      alt=""
                      className="why-feature-image"
                    />
                  ) : (
                    <Icon size={34} strokeWidth={1.8} />
                  )}
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
