
import React, { useEffect, useState } from "react";
import "./HeroSection.css";

const slides = [
  {
    image: "/hero1.png",
    eyebrow: "SAREE CARE",
    title: "Expert Care for Every Fabric",
    description:
      "Professional saree care, ironing, steaming and finishing — handled with care and precision.",
  },
  {
    image: "/hero2.png",
    eyebrow: "PROFESSIONAL IRONING",
    title: "Expert Care for Every Fabric",
    description:
      "Professional saree care, ironing, steaming and finishing — handled with care and precision.",
  },
  {
    image: "/hero3.png",
    eyebrow: "NEATLY FINISHED",
    title: "Expert Care for Every Fabric",
    description:
      "Professional saree care, ironing, steaming and finishing — handled with care and precision.",
  },
];

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const animationClass =
    currentSlide === 0
      ? "hero-text-left"
      : currentSlide === 1
      ? "hero-text-fade"
      : "hero-text-bottom-left";

  return (
    <section className="hero-section" id="home">
      {/* Background slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${
            index === currentSlide ? "active" : ""
          } ${index === 0 ? "hero-first-slide" : ""}`}
          style={{
            backgroundImage: `url("${slide.image}")`,
          }}
        />
      ))}

      <div className="hero-overlay"></div>

      {/* Animated text */}
      <div
        key={currentSlide}
        className={`hero-content ${animationClass}`}
      >
        <p className="hero-eyebrow">
          {slides[currentSlide].eyebrow}
        </p>

        <h1>{slides[currentSlide].title}</h1>

        <p className="hero-description">
          {slides[currentSlide].description}
        </p>

        <div className="hero-buttons">
          <a href="#booking" className="hero-book-btn">
            Book a Service
          </a>

          <a href="#services" className="hero-view-btn">
            View Services
          </a>
        </div>
      </div>

      {/* Slider arrows */}
      <button
        type="button"
        className="hero-arrow hero-prev"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        &#10094;
      </button>

      <button
        type="button"
        className="hero-arrow hero-next"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        &#10095;
      </button>

      {/* Slider dots */}
      <div className="hero-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`hero-dot ${
              index === currentSlide ? "active" : ""
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
