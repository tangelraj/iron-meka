
import React, { useEffect, useState } from "react";
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

// Displayed when the API is unavailable or returns no reviews.
// Remove these once you want to show only published admin reviews.
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
          setSection({
            eyebrow:
              data.section.eyebrow ||
              defaultSection.eyebrow,
            heading:
              data.section.heading ||
              defaultSection.heading,
            description:
              data.section.description || "",
          });
        }

        const reviews = Array.isArray(data)
          ? data
          : Array.isArray(data?.testimonials)
          ? data.testimonials
          : Array.isArray(data?.results)
          ? data.results
          : [];

        if (!controller.signal.aborted && reviews.length > 0) {
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

  const getAvatarUrl = (avatar) => {
    if (!avatar || typeof avatar !== "string") {
      return null;
    }

    try {
      return new URL(avatar, `${API_BASE}/`).href;
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
        <div className="testimonials-heading">
          <p className="testimonials-eyebrow">
            {section.eyebrow}
          </p>

          <h2>{section.heading}</h2>

          {section.description && (
            <p className="testimonials-description">
              {section.description}
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

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => {
            const rating = Math.min(
              5,
              Math.max(
                0,
                Math.round(Number(testimonial.rating) || 0)
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
                <div
                  className="testimonial-stars"
                  aria-label={`${rating} out of 5 stars`}
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

                <p className="testimonial-review">
                  “{testimonial.review || ""}”
                </p>

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
                    <span>Verified customer</span>
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
