
import React from "react";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock
} from "lucide-react";

import "./ContactSection.css";

const phoneNumber = "919790263322";

function ContactSection() {
  const whatsappMessage =
    "Hello Iron Me·Ka, I would like to book a fabric care service.";

  const whatsappLink =
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const openWhatsApp = () => {
  const phone = "918792694177";

  const message =
    "Hello Iron Me·Ka, I would like to book your saree and fabric care service.";

  const encodedMessage = encodeURIComponent(message);

  // Attempt to open the installed WhatsApp app
  window.location.href =
    `whatsapp://send?phone=${phone}&text=${encodedMessage}`;
};

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* LEFT PANEL */}
        <div className="contact-left">
          <p className="contact-eyebrow">
            BOOK TODAY
          </p>

          <h2>
            Give Your Clothes the Care They Deserve
          </h2>

          <p className="contact-description">
            From everyday ironing to delicate saree and
            traditional wear care, we make every piece
            look its best.
          </p>

          <div className="contact-buttons">
            <a
              href="#booking"
              className="contact-book-btn"
            >
              Book a Service
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-whatsapp-btn"
            >
              <MessageCircle size={19} />
              WhatsApp Us
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
              <span>PHONE</span>
              <a href="tel:+919790263322">
                +91 9790263322
              </a>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon">
              <MessageCircle size={23} />
            </div>

            <div className="contact-info-text">
              <span>WHATSAPP</span>
                <a href="tel:+918792694177">
                   +91 8792694177
                </a>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon">
              <MapPin size={23} />
            </div>

            <div className="contact-info-text">
              <span>ADDRESS</span>
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
              <span>BUSINESS HOURS</span>
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
