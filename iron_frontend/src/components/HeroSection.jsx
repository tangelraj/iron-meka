
import React, { useEffect, useState } from "react";
import "./HeroSection.css";

const API_URL = (
  import.meta.env.VITE_API_URL ||
  "http://127.0.0.1:8000"
).replace(/\/$/, "");

// Original slides used if the API is unavailable
const fallbackSlides = [
  {
    id: 1,
    image: "/hero1.png",
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
    image: "/hero2.png",
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
    image: "/hero3.png",
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

  // Load Hero slides from Django Admin
  useEffect(() => {
    const controller = new AbortController();

    async function loadSlides() {
      try {
        const response = await fetch(
          `${API_URL}/api/hero-slides/`,
          {
            cache: "no-store",
            signal: controller.signal,
          }
        );

        if (!response.ok) {
          throw new Error(
            `Hero API returned ${response.status}`
          );
        }

        const data = await response.json();

        if (Array.isArray(data.slides)) {
          setSlides(data.slides);
          setCurrentSlide(0);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(
            "Unable to load Hero slides:",
            error
          );
        }
      }
    }

    loadSlides();

    return () => controller.abort();
  }, []);

  // Automatically change slides every 5 seconds
  useEffect(() => {
    if (slides.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentSlide(
        (previous) => (previous + 1) % slides.length
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    if (slides.length === 0) return;

    setCurrentSlide(
      (previous) => (previous + 1) % slides.length
    );
  };

  const prevSlide = () => {
    if (slides.length === 0) return;

    setCurrentSlide(
      (previous) =>
        (previous - 1 + slides.length) % slides.length
    );
  };

  const getSlideImage = (slide, index) => {
    if (!slide.image) {
      return `/hero${index + 1}.png`;
    }

    if (
      slide.image.startsWith("https://") ||
      slide.image.startsWith("http://")
    ) {
      return slide.image;
    }

    if (slide.image.startsWith("/media/")) {
      return `${API_URL}${slide.image}`;
    }

    return slide.image;
  };

  // Prevent errors if no active slides exist
  if (slides.length === 0) {
    return null;
  }

  const activeSlide = slides[currentSlide] || slides[0];

  const animationClass =
    animationClasses[activeSlide.animation] ||
    "hero-text-left";

  return (
    <section className="hero-section" id="home">

      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id ?? index}
          className={`hero-slide ${
            index === currentSlide ? "active" : ""
          } ${index === 0 ? "hero-first-slide" : ""}`}
          style={{
            backgroundImage: `url("${getSlideImage(
              slide,
              index
            )}")`,
          }}
        />
      ))}

      <div className="hero-overlay"></div>

      {/* Animated Text */}
      <div
        key={`${activeSlide.id ?? currentSlide}-${currentSlide}`}
        className={`hero-content ${animationClass}`}
      >
        <p className="hero-eyebrow">
          {activeSlide.eyebrow}
        </p>

        <h1>
          {activeSlide.title || activeSlide.heading}
        </h1>

        <p className="hero-description">
          {activeSlide.description}
        </p>

        <div className="hero-buttons">
          <a
            href={activeSlide.button_url || "#booking"}
            className="hero-book-btn"
          >
            {activeSlide.button_text || "Book a Service"}
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
                index === currentSlide ? "active" : ""
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

    </section>
  );
}

export default HeroSection;
