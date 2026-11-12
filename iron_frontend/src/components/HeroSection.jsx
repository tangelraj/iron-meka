
import React, { useEffect, useState } from "react";
import "./HeroSection.css";

const API_URL = (
  import.meta.env.VITE_API_URL ||
  "http://127.0.0.1:8000"
).replace(/\/$/, "");

// Background images stored in React public folder
const heroImages = [
  "/hero1.png",
  "/hero2.png",
  "/hero3.png",
];

// Original fallback slides
const fallbackSlides = [
  {
    id: 1,
    eyebrow: "SAREE CARE",
    title: "Expert Care for Every Fabric",
    description:
      "Professional saree care, ironing, steaming and finishing — handled with care and precision.",
    button_text: "Book a Service",
    button_url: "#booking",
    secondary_button_text: "View Services",
    secondary_button_url: "#services",
    animation: "left",
  },
  {
    id: 2,
    eyebrow: "PROFESSIONAL IRONING",
    title: "Expert Care for Every Fabric",
    description:
      "Professional saree care, ironing, steaming and finishing — handled with care and precision.",
    button_text: "Book a Service",
    button_url: "#booking",
    secondary_button_text: "View Services",
    secondary_button_url: "#services",
    animation: "fade",
  },
  {
    id: 3,
    eyebrow: "NEATLY FINISHED",
    title: "Expert Care for Every Fabric",
    description:
      "Professional saree care, ironing, steaming and finishing — handled with care and precision.",
    button_text: "Book a Service",
    button_url: "#booking",
    secondary_button_text: "View Services",
    secondary_button_url: "#services",
    animation: "bottom-left",
  },
];

const animationClasses = {
  left: "hero-text-left",
  fade: "hero-text-fade",
  "bottom-left": "hero-text-bottom-left",
};

function HeroSection() {
  const [slides, setSlides] = useState(fallbackSlides);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Fetch Hero content from Django Admin
  useEffect(() => {
    const controller = new AbortController();

    const fetchHeroSlides = async () => {
      try {
        const response = await fetch(
          `${API_URL}/api/hero-slides/`,
          {
            method: "GET",
            cache: "no-store",
            signal: controller.signal,
          }
        );

        if (!response.ok) {
          throw new Error(
            `Hero API error: ${response.status}`
          );
        }

        const data = await response.json();

        // Expected response: { slides: [...] }
        const apiSlides = Array.isArray(data)
          ? data
          : data.slides;

        if (
          Array.isArray(apiSlides) &&
          apiSlides.length > 0
        ) {
          setSlides(apiSlides);
          setCurrentSlide(0);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(
            "Failed to load Hero slides:",
            error
          );
        }
      }
    };

    fetchHeroSlides();

    return () => controller.abort();
  }, []);

  // Automatic slide change every 5 seconds
  useEffect(() => {
    if (slides.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentSlide(
        (prev) => (prev + 1) % slides.length
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide(
      (prev) => (prev + 1) % slides.length
    );
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + slides.length) % slides.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Use local images to avoid broken Render media URLs
  const getSlideImage = (index) => {
    return heroImages[index % heroImages.length];
  };

  if (slides.length === 0) {
    return null;
  }

  const activeSlide =
    slides[currentSlide] || slides[0];

  const animationClass =
    animationClasses[activeSlide.animation] ||
    animationClasses[
      fallbackSlides[
        currentSlide % fallbackSlides.length
      ].animation
    ];

  return (
    <section className="hero-section" id="home">

      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id ?? index}
          className={`hero-slide ${
            index === currentSlide ? "active" : ""
          } ${
            index === 0 ? "hero-first-slide" : ""
          }`}
          style={{
            backgroundImage: `url("${getSlideImage(
              index
            )}")`,
          }}
        />
      ))}

      {/* Dark Overlay */}
      <div className="hero-overlay"></div>

      {/* Hero Text */}
      <div
        key={`${activeSlide.id ?? currentSlide}-${currentSlide}`}
        className={`hero-content ${animationClass}`}
      >

        <p className="hero-eyebrow">
          {activeSlide.eyebrow ||
            fallbackSlides[
              currentSlide % fallbackSlides.length
            ].eyebrow}
        </p>

        <h1>
          {activeSlide.title ||
            activeSlide.heading ||
            "Expert Care for Every Fabric"}
        </h1>

        <p className="hero-description">
          {activeSlide.description ||
            fallbackSlides[0].description}
        </p>

        {/* Hero Buttons */}
        <div className="hero-buttons">

          <a
            href={
              activeSlide.button_url ||
              "#booking"
            }
            className="hero-book-btn"
          >
            {activeSlide.button_text ||
              "Book a Service"}
          </a>

          <a
            href={
              activeSlide.secondary_button_url ||
              "#services"
            }
            className="hero-view-btn"
          >
            {activeSlide.secondary_button_text ||
              "View Services"}
          </a>

        </div>
      </div>

      {/* Slider Arrows */}
      {slides.length > 1 && (
        <>
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
        </>
      )}

      {/* Slider Dots */}
      {slides.length > 1 && (
        <div className="hero-dots">
          {slides.map((slide, index) => (
            <button
              key={slide.id ?? index}
              type="button"
              className={`hero-dot ${
                index === currentSlide
                  ? "active"
                  : ""
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

    </section>
  );
}

export default HeroSection;
