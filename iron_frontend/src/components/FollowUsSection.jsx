
import React from "react";
import {
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";

import "./FollowUsSection.css";

const socialLinks = [
  {
    name: "Instagram",
    icon: FaInstagram,
    className: "instagram",
    url: "https://www.instagram.com/",
  },
  {
    name: "YouTube",
    icon: FaYoutube,
    className: "youtube",
    url: "https://www.youtube.com/",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    className: "whatsapp",
    url: "https://wa.me/",
  },
  {
    name: "Telegram",
    icon: FaTelegramPlane,
    className: "telegram",
    url: "https://t.me/",
  },
];

function FollowUsSection() {
  return (
    <section className="follow-us-section" id="follow-us">
      <div className="follow-us-container">

        <div className="follow-us-heading">
          <h2>Follow Us</h2>

          <div className="follow-us-divider"></div>

          <p>
            Stay connected for offers, saree care tips
            and our latest work.
          </p>
        </div>

        <div className="follow-us-grid">
          {socialLinks.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="follow-us-card"
                aria-label={`Follow us on ${social.name}`}
              >
                <div
                  className={`follow-us-icon ${social.className}`}
                >
                  <Icon />
                </div>

                <h3>{social.name}</h3>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default FollowUsSection;
