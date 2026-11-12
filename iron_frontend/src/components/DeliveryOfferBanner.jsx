
import React from "react";
import "./DeliveryOfferBanner.css";

const offers = [
  {
    icon: "truck",
    before: "FREE PICKUP & DELIVERY WITHIN 5 KM",
    after: "ON ORDERS ABOVE ₹1500",
  },
  {
    icon: "wallet",
    before: "BELOW ₹1500, JUST",
    badge: "₹100",
    after: "SERVICE CHARGE",
  },
  {
    icon: "package",
    badge: "COURIER SERVICE",
    after: "AVAILABLE",
  },
  {
    icon: "truck",
    badge: "FREE",
    after: "PICKUP & DELIVERY",
  },
];

function OfferIcon({ type }) {
  if (type === "wallet") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="15" rx="2" />
        <path d="M3 9h18" />
        <path d="M16 13h5v4h-5a2 2 0 0 1 0-4Z" />
      </svg>
    );
  }

  if (type === "package") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 2 9 5-9 5-9-5 9-5Z" />
        <path d="M3 7v10l9 5 9-5V7" />
        <path d="M12 12v10" />
        <path d="m7.5 4.5 9 5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 6h11v11H3z" />
      <path d="M14 10h4l3 4v3h-7z" />
      <circle cx="7.5" cy="18" r="2" />
      <circle cx="17.5" cy="18" r="2" />
    </svg>
  );
}

function OfferItem({ offer }) {
  return (
    <div className="delivery-offer-item">
      <span className="delivery-offer-icon">
        <OfferIcon type={offer.icon} />
      </span>

      {offer.before && (
        <span className="delivery-offer-text">
          {offer.before}
        </span>
      )}

      {offer.badge && (
        <span className="delivery-offer-badge">
          {offer.badge}
        </span>
      )}

      {offer.after && (
        <span className="delivery-offer-text">
          {offer.after}
        </span>
      )}

      <span className="delivery-offer-star">✦</span>
    </div>
  );
}

export default function DeliveryOfferBanner() {
  return (
    <div className="delivery-offer-banner">
      <div className="delivery-offer-track">
        {[0, 1].map((copy) => (
          <div
            className="delivery-offer-group"
            key={copy}
            aria-hidden={copy === 1}
          >
            {offers.map((offer, index) => (
              <OfferItem
                key={`${copy}-${index}`}
                offer={offer}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
