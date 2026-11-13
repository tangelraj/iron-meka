
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Star } from "lucide-react";
import "./TestimonialsSection.css";

const API_BASE = (
  import.meta.env.VITE_API_URL ||
  "http://127.0.0.1:8000"
).replace(/\/+$/, "");

const defaultSection = {
  eyebrow: "TESTIMONIALS",
  heading: "Loved by Our Customers",
  description: "",
};

// Original fallback reviews
const fallbackTestimonials = [
  {
    id: 1,
    name: "Lakshmi T.",
    rating: 5,
    review:
      "My Kanjivaram silks came back beautifully polished and rolled. They treat every saree like it's their own.",
    initial: "L",
  },
  {
    id: 2,
    name: "Sasikumar.A",
    rating: 5,
    review:
      "My wedding silk veshti has recovered its original luster after polishing. I weared for my family wedding, it was flawless. Crisp, shining and on time.",
    initial: "S",
  },
  {
    id: 3,
    name: "Karthiga.C",
    rating: 5,
    review:
      "Pre-pleating has saved me so much time before functions. Perfect pleats every single time!",
    initial: "K",
  },
  {
    id: 4,
    name: "Ilayavarman.P",
    rating: 5,
    review:
      "Gentle with delicate fabrics and very professional. My go-to for all traditional wear.",
    initial: "I",
  },
];

function TestimonialsSection() {
  const { t, i18n } = useTranslation();

  const language = (
    i18n.resolvedLanguage ||
    i18n.language ||
    "en"
  ).split("-")[0];

  const [section, setSection] = useState(defaultSection);
  const [testimonials, setTestimonials] = useState(
    fallbackTestimonials
  );

  useEffect(() => {
    const controller = new AbortController();

    async function loadTestimonials() {
      try {
        const response = await fetch(
          `${API_BASE}/api/testimonials/`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error(
            `Testimonials API error: ${response.status}`
          );
        }

        const data = await response.json();

        if (data?.section) {
          // Preserve translated fields from Django
          setSection({
            ...defaultSection,
            ...data.section,
          });
        }

        const reviews = Array.isArray(data)
          ? data
          : Array.isArray(data?.testimonials)
          ? data.testimonials
          : Array.isArray(data?.results)
          ? data.results
          : [];

        if (
          !controller.signal.aborted &&
          reviews.length > 0
        ) {
          setTestimonials(reviews);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(
            "Unable to load testimonials:",
            error
          );
        }
      }
    }

    loadTestimonials();

    return () => controller.abort();
  }, []);

  // Translate section heading and subheading
  const translateSectionField = (
    field,
    translationKey
  ) => {
    const originalText = section[field] || "";

    if (language === "en") {
      return originalText;
    }

    // First check Django translations
    const backendTranslation =
      section[`${field}_${language}`];

    if (
      typeof backendTranslation === "string" &&
      backendTranslation.trim()
    ) {
      return backendTranslation;
    }

    // Translate original default heading
    if (
      originalText &&
      originalText === defaultSection[field]
    ) {
      return t(translationKey, {
        defaultValue: originalText,
      });
    }

    // Keep custom Django Admin content
    return originalText;
  };

  // Translate individual customer reviews
  const translateReview = (testimonial) => {
    const originalReview = testimonial.review || "";

    if (language === "en") {
      return originalReview;
    }

    // Priority 1: Django translated review
    const backendTranslation =
      testimonial[`review_${language}`];

    if (
      typeof backendTranslation === "string" &&
      backendTranslation.trim()
    ) {
      return backendTranslation;
    }

    // Priority 2: Static translations for original reviews
    const originalIndex =
      fallbackTestimonials.findIndex(
        (item) =>
          item.name === testimonial.name &&
          item.review === originalReview
      );

    if (originalIndex !== -1) {
      return t(
        `testimonialReviews.${originalIndex}`,
        { defaultValue: originalReview }
      );
    }

    // Preserve custom Admin review when no translation exists
    return originalReview;
  };

  const getAvatarUrl = (avatar) => {
    if (!avatar || typeof avatar !== "string") {
      return null;
    }

    try {
      return new URL(
        avatar,
        `${API_BASE}/`
      ).href;
    } catch {
      return null;
    }
  };

  return (
    <section
      className="testimonials-section"
      id="reviews"
    >
      <div className="testimonials-container">

        {/* Section Heading */}
        <div className="testimonials-heading">
          <p className="testimonials-eyebrow">
            {translateSectionField(
              "eyebrow",
              "testimonialsEyebrow"
            )}
          </p>

          <h2>
            {translateSectionField(
              "heading",
              "testimonialsHeading"
            )}
          </h2>

          {section.description && (
            <p className="testimonials-description">
              {translateSectionField(
                "description",
                "testimonialsDescription"
              )}
            </p>
          )}

          <div
            className="testimonials-decoration"
            aria-hidden="true"
          >
            <span></span>
            <i></i>
            <span></span>
          </div>
        </div>

        {/* Customer Reviews */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => {
            const rating = Math.min(
              5,
              Math.max(
                0,
                Math.round(
                  Number(testimonial.rating) || 0
                )
              )
            );

            const name =
              testimonial.name || "Customer";

            const avatarUrl = getAvatarUrl(
              testimonial.avatar
            );

            return (
              <article
                className="testimonial-card"
                key={testimonial.id ?? index}
              >
                {/* Stars */}
                <div
                  className="testimonial-stars"
                  aria-label={`${rating} ${t(
                    "outOfFiveStars",
                    "out of 5 stars"
                  )}`}
                >
                  {Array.from(
                    { length: 5 },
                    (_, starIndex) => (
                      <Star
                        key={starIndex}
                        size={16}
                        fill={
                          starIndex < rating
                            ? "currentColor"
                            : "none"
                        }
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    )
                  )}
                </div>

                {/* Review */}
                <p className="testimonial-review">
                  “{translateReview(testimonial)}”
                </p>

                {/* Customer */}
                <div className="testimonial-customer">
                  <div className="testimonial-avatar">
                    {avatarUrl ? (
                      <img
                        src={avatarUrl}
                        alt={name}
                        className="testimonial-avatar-image"
                      />
                    ) : (
                      testimonial.initial ||
                      name.charAt(0).toUpperCase()
                    )}
                  </div>

                  <div className="testimonial-customer-info">
                    <h3>{name}</h3>

                    <span>
                      {t(
                        "verifiedCustomer",
                        "Verified customer"
                      )}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default TestimonialsSection;
