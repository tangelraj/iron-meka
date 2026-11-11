
import React from "react";
import "./AboutSection.css";

const features = [
  {
    title: "Quality Finishing",
    icon: "award",
  },
  {
    title: "Gentle Fabric Care",
    icon: "feather",
  },
  {
    title: "Professional Handling",
    icon: "heart",
  },
];

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
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* Left Image */}
        <div className="about-image-wrapper">
          <div className="about-image-border"></div>

          <img
            src="/about.png"
            alt="Traditional saree being carefully handled"
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
          <p className="about-eyebrow">ABOUT US</p>

          <h2>
            Care That Makes Every Fabric Feel Special
          </h2>

          <p className="about-description">
            At Vastra Care, we believe every garment carries a
            story — from the silk saree worn at a wedding to
            the crisp veshti for a festival morning. Our
            trained team handles each fabric by hand,
            choosing the right heat, steam and finish for
            its weave.
          </p>

          <p className="about-description">
            With a deep respect for traditional wear and an
            eye for detail, we deliver pieces that look,
            feel and drape their very best.
          </p>

          {/* Feature Cards */}
          <div className="about-features">
            {features.map((feature) => (
              <div className="about-feature-card" key={feature.title}>
                <FeatureIcon type={feature.icon} />
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
