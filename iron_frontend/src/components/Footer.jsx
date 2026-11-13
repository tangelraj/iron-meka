
import React from "react";
import { useTranslation } from "react-i18next";
import "./Footer.css";

const quickLinks = [
  { name: "Home", link: "#home", key: "home" },
  { name: "About Us", link: "#about", key: "about" },
  { name: "Services", link: "#services", key: "services" },
  {
    name: "Why Choose Us",
    link: "#why-choose-us",
    key: "whyChoose",
  },
  { name: "Reviews", link: "#reviews", key: "reviews" },
  { name: "Contact", link: "#contact", key: "contact" },
];

const services = [
  "Saree Rolling",
  "Towel Ironing & Refreshing",
  "Coat & Delicate Fabric Steam Refresh",
  "Cotton Veshti Starching & Polishing",
  "Silk Veshti Polishing",
  "Bed Sheet & Cover Ironing",
];

function SocialIcon({ type }) {
  if (type === "instagram") {
    return (
      <svg
        width="19"
        height="19"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    );
  }

  if (type === "facebook") {
    return (
      <svg
        width="19"
        height="19"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M15 21v-8h3l.5-4H15V7c0-1.2.4-2 2-2h2V2.2A22 22 0 0 0 16 2c-3 0-5 1.8-5 5v2H8v4h3v8" />
      </svg>
    );
  }

  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="2" y="5" width="20" height="14" rx="4" />
      <path d="m10 9 5 3-5 3z" />
    </svg>
  );
}

function Footer() {
  const { t } = useTranslation();

  const translatedServices = t("footerServiceNames", {
    returnObjects: true,
  });

  const displayServices =
    Array.isArray(translatedServices) &&
    translatedServices.length === services.length
      ? translatedServices
      : services;

  return (
    <footer className="iron-footer">
      <div className="footer-container">

        {/* BRAND SECTION */}
        <div className="footer-brand">
          <a href="#home" className="footer-logo-link">
            <img
              src="/logo.png"
              alt="Iron Me·Ka Logo"
              className="footer-logo"
            />
          </a>

          <p>
            {t(
              "footerDescription",
              "Premium saree and fabric care — rolling, pleating, polishing, starching and steaming, done by hand with precision."
            )}
          </p>

          <div className="footer-socials">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <SocialIcon type="instagram" />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <SocialIcon type="facebook" />
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <SocialIcon type="youtube" />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-column">
          <h3>
            {t("quickLinks", "Quick Links")}
          </h3>

          <ul>
            {quickLinks.map((item) => (
              <li key={item.name}>
                <a href={item.link}>
                  {t(item.key, item.name)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div className="footer-column">
          <h3>
            {t("footerServices", "Services")}
          </h3>

          <ul>
            {services.map((service, index) => (
              <li key={service}>
                <a href="#services">
                  {displayServices[index] || service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-column footer-contact">
          <h3>
            {t("footerContact", "Contact")}
          </h3>

          <a href="tel:+919790263322">
            +91 9790263322
          </a>

          <a href="mailto:hello@vastracare.in">
            hello@vastracare.in
          </a>

          <p>
            6 Vincent de Paul street,
            <br />
            COLAS NAGAR,
            <br />
            PONDICHERRY - 605001
          </p>

          <p>Mon–Sat 9 AM – 8 PM</p>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Iron Me·Ka.{" "}
          {t("allRightsReserved", "All rights reserved.")}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
