
import React, { useEffect, useState } from "react";

import {
  ClipboardList,
  Hand,
  WandSparkles,
  CircleCheck,
  ShieldCheck,
  Heart,
  Feather,
  Award,
  Sparkles,
} from "lucide-react";

import "./HowItWorksSection.css";

const API_BASE =
  import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

// Icon names used in Django Admin
const iconMap = {
  "clipboard-list": ClipboardList,
  clipboard: ClipboardList,
  hand: Hand,
  "wand-sparkles": WandSparkles,
  wand: WandSparkles,
  "circle-check": CircleCheck,
  check: CircleCheck,
  "shield-check": ShieldCheck,
  heart: Heart,
  feather: Feather,
  award: Award,
  sparkles: Sparkles,
};

const defaultSection = {
  eyebrow: "HOW IT WORKS",
  heading: "Simple, Careful, Complete",
  description: "",
};

const defaultSteps = [
  {
    id: 1,
    number: "01",
    icon_key: "clipboard-list",
    title: "Choose Your Service",
    description: "Select the service you need.",
  },
  {
    id: 2,
    number: "02",
    icon_key: "hand",
    title: "Hand Over Your Clothes",
    description:
      "Give us your garments for professional care.",
  },
  {
    id: 3,
    number: "03",
    icon_key: "wand-sparkles",
    title: "Expert Care & Finishing",
    description:
      "Our team carefully handles and finishes them.",
  },
  {
    id: 4,
    number: "04",
    icon_key: "circle-check",
    title: "Ready to Wear",
    description:
      "Receive your fresh, neat and beautifully finished clothes.",
  },
];

function HowItWorksSection() {
  const [section, setSection] = useState(defaultSection);
  const [steps, setSteps] = useState(defaultSteps);

  useEffect(() => {
    const controller = new AbortController();

    async function loadHowItWorks() {
      try {
        const response = await fetch(
          `${API_BASE}/api/how-it-works/`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error(
            `How It Works API error: ${response.status}`
          );
        }

        const data = await response.json();

        if (data.section) {
          setSection({
            eyebrow: data.section.eyebrow ?? "",
            heading: data.section.heading ?? "",
            description: data.section.description ?? "",
          });
        }

        if (Array.isArray(data.steps)) {
          setSteps(data.steps);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(
            "Unable to load How It Works content:",
            error
          );
        }
      }
    }

    loadHowItWorks();

    return () => controller.abort();
  }, []);

  return (
    <section className="how-section" id="how-it-works">
      <div className="how-container">

        {/* Section Heading */}
        <div className="how-heading">
          <p className="how-eyebrow">
            {section.eyebrow}
          </p>

          <h2>{section.heading}</h2>

          {section.description && (
            <p className="how-description">
              {section.description}
            </p>
          )}

          <div className="how-decoration">
            <span></span>
            <i></i>
            <span></span>
          </div>
        </div>

        {/* Steps */}
        <div className="how-steps">
          {steps.map((step, index) => {
            const Icon =
              iconMap[
                (step.icon_key || "")
                  .trim()
                  .toLowerCase()
              ] || ClipboardList;

            return (
              <div
                className="how-step"
                key={step.id ?? index}
              >
                <div className="how-icon-circle">
                  {step.image ? (
                    <img
                      src={step.image}
                      alt=""
                      className="how-step-image"
                    />
                  ) : (
                    <Icon
                      size={28}
                      strokeWidth={1.8}
                    />
                  )}
                </div>

                <span className="how-number">
                  {step.number ||
                    String(index + 1).padStart(2, "0")}
                </span>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default HowItWorksSection;
