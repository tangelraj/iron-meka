
import React, { useEffect, useState } from "react";
import "./AboutSection.css";

const API_BASE =
  import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

const defaultFeatures = [
  { id: 1, title: "Quality Finishing", icon_key: "award" },
  { id: 2, title: "Gentle Fabric Care", icon_key: "feather" },
  { id: 3, title: "Professional Handling", icon_key: "heart" },
];

const defaultSection = {
  eyebrow: "ABOUT US",
  heading: "Care That Makes Every Fabric Feel Special",
  description:
    "At Iron Me·Ka, we believe every garment deserves special care. Our trained team handles each fabric carefully, choosing the right heat, steam and finish for its weave.\n\nWith respect for traditional wear and attention to detail, we deliver garments that look, feel and drape their very best.",
  image: "/about.png",
};

function FeatureIcon({ type }) {
  if (type === "award") {
    return (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="5" />
        <path d="M8.5 12L7 22l5-3 5 3-1.5-10" />
      </svg>
    );
  }

  if (type === "feather") {
    return (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M20 4c-5-2-10 1-13 6-2 3-2 6-2 9" />
        <path d="M20 4c2 7-3 13-10 13H5" />
        <path d="M3 21L17 7" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M3 14l5-3 4 2 5-5a2 2 0 0 1 3 3l-6 7-6 2-5-3z" />
      <path d="M12 8l2-3a2 2 0 0 1 4 1" />
      <path d="M8 11l3-3" />
    </svg>
  );
}

function AboutSection() {
  const [section, setSection] = useState(defaultSection);
  const [features, setFeatures] = useState(defaultFeatures);

  useEffect(() => {
    const controller = new AbortController();

    async function loadAbout() {
      try {
        const response = await fetch(`${API_BASE}/api/about/`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`About API error: ${response.status}`);
        }

        const data = await response.json();

        if (data.section) {
          setSection({
            eyebrow: data.section.eyebrow ?? "",
            heading: data.section.heading ?? "",
            description: data.section.description ?? "",
            image: data.section.image || "/about.png",
          });
        }

        if (Array.isArray(data.features)) {
          setFeatures(data.features);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Unable to load About content:", error);
        }
      }
    }

    loadAbout();

    return () => controller.abort();
  }, []);

  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* Left Image */}
        <div className="about-image-wrapper">
          <div className="about-image-border"></div>

          <img
            src={section.image}
            alt="Garment care at Iron Me·Ka"
            className="about-image"
          />

          <div className="about-experience">
            <span className="about-years">12+</span>
            <span className="about-years-label">
              YEARS OF CARE
            </span>
          </div>
        </div>

        {/* Right Content */}
        <div className="about-content">
          <p className="about-eyebrow">
            {section.eyebrow}
          </p>

          <h2>{section.heading}</h2>

          {section.description
            .split(/\n\s*\n/)
            .filter(Boolean)
            .map((paragraph, index) => (
              <p className="about-description" key={index}>
                {paragraph}
              </p>
            ))}

          {/* Feature Cards */}
          <div className="about-features">
            {features.map((feature) => (
              <div
                className="about-feature-card"
                key={feature.id ?? feature.title}
              >
                {feature.image ? (
                  <img
                    src={feature.image}
                    alt=""
                    className="about-feature-icon"
                  />
                ) : (
                  <FeatureIcon type={feature.icon_key} />
                )}

                <span>{feature.title}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;
