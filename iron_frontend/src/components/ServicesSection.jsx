
import React from "react";
import "./ServicesSection.css";

const services = [
  {
    id: 1,
    title: "Saree Rolling",
    description:
      "Neat and professional rolling for easy storage and handling.",
    price: 60,
    image: "/Image_SareeRolling.png",
  },
  {
    id: 2,
    title: "Towel Ironing & Refreshing",
    description:
      "Fresh, neat and comfortable finishing for towels.",
    price: 20,
    image: "/Image_TowelIroningRefreshing.png",
  },
  {
    id: 3,
    title: "Coat & Delicate Fabric Steam Refresh",
    description:
      "Gentle steam treatment for coats and delicate fabrics.",
    price: 150,
    image: "/Image_CoatDelicateFabricSteamRefresh.png",
  },
  {
    id: 4,
    title: "Cotton Veshti Starching & Polishing",
    description:
      "Crisp starching and polished finishing for cotton veshti.",
    price: 80,
    image: "/Image_CottonVeshtiStarchingPolishing.png",
  },
  {
    id: 5,
    title: "Silk Veshti Polishing",
    description:
      "Careful polishing to maintain the premium silk appearance.",
    price: 120,
    image: "/Image_SilkVeshtiPolishing.png",
  },
  {
    id: 6,
    title: "Bed Sheet & Cover Ironing",
    description:
      "Smooth and neatly finished bed sheets and covers.",
    price: 40,
    image: "/Image_BedSheetCoverIroning.png",
  },
  {
    id: 7,
    title: "Saree Pre-Pleating",
    description:
      "Ready-to-wear pre-pleating for convenient styling.",
    price: 250,
    image: "/Image_SareePre-Pleating.png",
  },
  {
    id: 8,
    title: "Saree Polishing",
    description:
      "Professional polishing to enhance the saree's finish and appearance.",
    price: 150,
    image: "/Image_SareePolishing.png",
  },
  {
    id: 9,
    title: "Cotton Saree Starching & Polishing",
    description:
      "Crisp starching with a clean, polished finish.",
    price: 120,
    image: "/Image_CottonSareeStarchingPolishing.png",
  },
  {
    id: 10,
    title: "Saree Folding",
    description:
      "Neat and careful folding for organized storage.",
    price: 40,
    image: "/hero3.png",
  },
];

function ServicesSection() {
  const handleBooking = (service) => {
    const bookingSection = document.getElementById("booking");

    if (bookingSection) {
      window.location.hash = "booking";
    } else {
      window.location.hash = "contact";
    }
  };

  return (
    <section className="services-section" id="services">
      <div className="services-container">

        {/* Section Heading */}
        <div className="services-heading">
          <p className="services-eyebrow">WHAT WE DO</p>

          <h2>Our Fabric Care Services</h2>

          <div className="services-decoration">
            <span></span>
            <i></i>
            <span></span>
          </div>

          <p className="services-subtitle">
            Specialized care and finishing for your everyday
            wear and traditional fabrics.
          </p>
        </div>

        {/* Service Cards */}
        <div className="services-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.id}>

              <div className="service-image-wrapper">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                  loading="lazy"
                />

                <span className="service-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="service-card-content">
                <h3>{service.title}</h3>

                <p className="service-description">
                  {service.description}
                </p>

                <div className="service-card-footer">
                  <div className="service-price">
                    <span>FROM</span>
                    <strong>₹{service.price}</strong>
                  </div>

                  <button
                    type="button"
                    className="service-book-btn"
                    onClick={() => handleBooking(service)}
                    aria-label={`Book ${service.title}`}
                  >
                    Book Now
                  </button>
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ServicesSection;
