
import React from "react";
import { CircleCheck } from "lucide-react";
import "./B2BServiceSection.css";

const services = [
  {
    title: "Bed and Bath Linen Care",
    description:
      "Impeccable pressing of your bedsheets, duvet covers, pillowcases, tablecloths, and towels to guarantee your guests a prestigious hotel experience.",
  },
  {
    title: "Bulk Ironing and Pro Rates",
    description:
      "Customized packages adapted to the large volumes and regular needs of property managers and tourism professionals.",
  },
  {
    title: "Quality and Responsiveness",
    description:
      "We understand your turnover constraints and guarantee perfectly fresh linen, sanitized with our professional steam technology, ready to be presented.",
  },
];

function B2BServiceSection() {
  return (
    <section className="b2b-section" id="b2b-services">
      <div className="b2b-container">

        {/* Left: Service cards */}
        <div className="b2b-cards">
          {services.map((service) => (
            <div className="b2b-card" key={service.title}>
              <div className="b2b-card-icon">
                <CircleCheck strokeWidth={1.8} />
              </div>

              <div className="b2b-card-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Heading and description */}
        <div className="b2b-content">
          <span className="b2b-eyebrow">
            FOR PROFESSIONALS
          </span>

          <h2 className="b2b-heading">
            Hotels, Guesthouses, and Airbnb (B2B Service)
          </h2>

          <div className="b2b-divider">
            <span className="b2b-line"></span>
            <span className="b2b-diamond"></span>
            <span className="b2b-line"></span>
          </div>

          <p className="b2b-description">
            Do you manage a tourist accommodation, a luxury
            villa, or a short-term rental in Pondicherry?
            Your guests' experience begins with flawless
            bedding and household linen.
          </p>

          <p className="b2b-description b2b-last-paragraph">
            IRON Me.Ka offers a{" "}
            <strong>
              dedicated B2B ironing service for hotels,
              guesthouses, and Airbnb concierge services.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}

export default B2BServiceSection;
