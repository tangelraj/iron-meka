
import React from "react";
import { Star } from "lucide-react";
import "./TestimonialsSection.css";

// Sample reviews for layout demonstration.
// Replace with genuine customer reviews before publishing.
const testimonials = [
  {
    id: 1,
    name: "Lakshmi R.",
    initial: "L",
    review:
      "My Kanjivaram silks came back beautifully polished and rolled. They treat every saree like it's their own.",
    rating: 5,
  },
  {
    id: 2,
    name: "Arun Kumar",
    initial: "A",
    review:
      "The silk veshti polishing for my wedding was flawless. Crisp, shining and on time.",
    rating: 5,
  },
  {
    id: 3,
    name: "Priya S.",
    initial: "P",
    review:
      "Pre-pleating has saved me so much time before functions. Perfect pleats every single time!",
    rating: 5,
  },
  {
    id: 4,
    name: "Meena V.",
    initial: "M",
    review:
      "Gentle with delicate fabrics and very professional. My go-to for all traditional wear.",
    rating: 5,
  },
];

function TestimonialsSection() {
  return (
    <section className="testimonials-section" id="reviews">
      <div className="testimonials-container">

        {/* Section Heading */}
        <div className="testimonials-heading">
          <p className="testimonials-eyebrow">
            TESTIMONIALS
          </p>

          <h2>Loved by Our Customers</h2>

          <div className="testimonials-decoration">
            <span></span>
            <i></i>
            <span></span>
          </div>
        </div>

        {/* Review Cards */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <article
              className="testimonial-card"
              key={testimonial.id}
            >
              {/* Gold Stars */}
              <div
                className="testimonial-stars"
                aria-label={`${testimonial.rating} out of 5 stars`}
              >
                {Array.from(
                  { length: testimonial.rating },
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
                  {testimonial.initial}
                </div>

                <div className="testimonial-customer-info">
                  <h3>{testimonial.name}</h3>
                  <span>Verified customer</span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TestimonialsSection;
