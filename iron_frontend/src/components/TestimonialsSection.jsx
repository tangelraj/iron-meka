
import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";
import "./TestimonialsSection.css";

const API_BASE =
  import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

const defaultSection = {
  eyebrow: "TESTIMONIALS",
  heading: "Loved by Our Customers",
  description: "",
};

function TestimonialsSection() {
  const [section, setSection] = useState(defaultSection);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

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

        if (data.section) {
          setSection({
            eyebrow:
              data.section.eyebrow || defaultSection.eyebrow,
            heading:
              data.section.heading || defaultSection.heading,
            description:
              data.section.description || "",
          });
        }

        if (Array.isArray(data.testimonials)) {
          setTestimonials(data.testimonials);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(
            "Unable to load testimonials:",
            error
          );
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadTestimonials();

    return () => controller.abort();
  }, []);

  // Hide the section when there are no published reviews.
  if (!loading && testimonials.length === 0) {
    return null;
  }

  return (
    <section
      className="testimonials-section"
      id="reviews"
    >
      <div className="testimonials-container">

        {/* Section Heading */}
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

          <div className="testimonials-decoration">
            <span></span>
            <i></i>
            <span></span>
          </div>
        </div>

        {/* Review Cards */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => {
            const rating = Math.min(
              5,
              Math.max(
                0,
                Number(testimonial.rating) || 0
              )
            );

            return (
              <article
                className="testimonial-card"
                key={testimonial.id}
              >
                {/* Gold Stars */}
                <div
                  className="testimonial-stars"
                  aria-label={`${rating} out of 5 stars`}
                >
                  {Array.from(
                    { length: rating },
                    (_, index) => (
                      <Star
                        key={index}
                        size={20}
                        fill="currentColor"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    )
                  )}
                </div>

                {/* Review Text */}
                <p className="testimonial-review">
                  “{testimonial.review}”
                </p>

                {/* Customer */}
                <div className="testimonial-customer">
                  <div className="testimonial-avatar">
                    {testimonial.avatar ? (
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="testimonial-avatar-image"
                      />
                    ) : (
                      testimonial.initial ||
                      testimonial.name?.charAt(0) ||
                      "?"
                    )}
                  </div>

                  <div className="testimonial-customer-info">
                    <h3>{testimonial.name}</h3>
                    <span>Customer review</span>
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
