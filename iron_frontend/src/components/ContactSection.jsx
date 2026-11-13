
import React from "react";
import { useTranslation } from "react-i18next";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock
} from "lucide-react";

import "./ContactSection.css";

const phoneNumber = "919790263322";
const whatsappNumber = "918792694177";

function ContactSection() {
  const { t } = useTranslation();

  const whatsappMessage =
    "Hello Iron Me·Ka, I would like to book a fabric care service.";

  const whatsappLink =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* LEFT PANEL */}
        <div className="contact-left">
          <p className="contact-eyebrow">
            {t("contactEyebrow", "BOOK TODAY")}
          </p>

          <h2>
            {t(
              "contactHeading",
              "Give Your Clothes the Care They Deserve"
            )}
          </h2>

          <p className="contact-description">
            {t(
              "contactDescription",
              "From everyday ironing to delicate saree and traditional wear care, we make every piece look its best."
            )}
          </p>

          <div className="contact-buttons">
            <a
              href="#booking"
              className="contact-book-btn"
            >
              {t("book", "Book a Service")}
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-whatsapp-btn"
            >
              <MessageCircle size={19} />
              {t("whatsappUs", "WhatsApp Us")}
            </a>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="contact-right">

          <div className="contact-info-item">
            <div className="contact-info-icon">
              <Phone size={23} />
            </div>

            <div className="contact-info-text">
              <span>
                {t("phoneLabel", "PHONE")}
              </span>
              <a href={`tel:+${phoneNumber}`}>
                +91 9790263322
              </a>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon">
              <MessageCircle size={23} />
            </div>

            <div className="contact-info-text">
              <span>
                {t("whatsappLabel", "WHATSAPP")}
              </span>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                +91 8792694177
              </a>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon">
              <MapPin size={23} />
            </div>

            <div className="contact-info-text">
              <span>
                {t("addressLabel", "ADDRESS")}
              </span>
              <p>
                6 Vincent de Paul street,
                <br />
                COLAS NAGAR,
                <br />
                PONDICHERRY - 605001
              </p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon">
              <Clock size={23} />
            </div>

            <div className="contact-info-text">
              <span>
                {t("hoursLabel", "BUSINESS HOURS")}
              </span>
              <p>
                Mon–Sat 9:00 AM – 8:00 PM
                <br />
                Sun 10:00 AM – 2:00 PM
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ContactSection;
