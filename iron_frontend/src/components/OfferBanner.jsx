
import React from "react";
import "./OfferBanner.css";

const OfferBanner = () => {
  return (
    <div className="opening-offer-banner">
      <div className="offer-running-light" aria-hidden="true" />

      <div className="offer-sparkles" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="opening-offer-content">
        <span className="opening-offer-badge">
          <span className="offer-lightning">ϟ</span>
          SHOP OPENING OFFER
        </span>

        <span className="opening-offer-text">
          Get 10% OFF on your first saree polishing order
        </span>
      </div>
    </div>
  );
};

export default OfferBanner;
