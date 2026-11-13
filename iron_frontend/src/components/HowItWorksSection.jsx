
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getTranslatedText } from "../utils/getTranslatedText";

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

const API_BASE = (
  import.meta.env.VITE_API_URL ||
  "http://127.0.0.1:8000"
).replace(/\/$/, "");

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

const defaultStepKeys = [
  {
    title: "howStep1Title",
    description: "howStep1Description",
  },
  {
    title: "howStep2Title",
    description: "howStep2Description",
  },
  {
    title: "howStep3Title",
    description: "howStep3Description",
  },
  {
    title: "howStep4Title",
    description: "howStep4Description",
  },
];

function HowItWorksSection() {
  const { t, i18n } = useTranslation();

  const language = (
    i18n.resolvedLanguage ||
    i18n.language ||
    "en"
  ).split("-")[0];

  const [section, setSection] = useState(defaultSection);
  const [steps, setSteps] = useState(defaultSteps);

  // Fetch content from Django Admin
  useEffect(() => {
    const controller = new AbortController();

    async function loadHowItWorks() {
      try {
        const response = await fetch(
          `${API_BASE}/api/how-it-works/`,
          {
            signal: controller.signal,
            cache: "no-store",
          }
        );

        if (!response.ok) {
          throw new Error(
            `How It Works API error: ${response.status}`
          );
        }

        const data = await response.json();

        if (data.section) {
          setSection({
            ...defaultSection,
            ...data.section,
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

  // Translate section headings and description
  const translateSectionField = (field, translationKey) => {
    const originalText = section[field] || "";

    if (language === "en") {
      return originalText;
    }

    // First preference: Django translated field
    const translatedText = getTranslatedText(
      section,
      field,
      language
    );

    if (translatedText !== originalText) {
      return translatedText;
    }

    // Use static translations for unchanged default content
    if (
      originalText &&
      originalText === defaultSection[field]
    ) {
      return t(translationKey, {
        defaultValue: originalText,
      });
    }

    return originalText;
  };

  // Translate individual step titles and descriptions
  const translateStepField = (step, field, index) => {
    const originalText = step[field] || "";

    if (language === "en") {
      return originalText;
    }

    // First preference: Django translated field
    const translatedText = getTranslatedText(
      step,
      field,
      language
    );

    if (translatedText !== originalText) {
      return translatedText;
    }

    // Match original step title if possible
    const matchedIndex = defaultSteps.findIndex(
      (defaultStep) =>
        defaultStep.title.trim().toLowerCase() ===
        (step.title || "").trim().toLowerCase()
    );

    const stepIndex =
      matchedIndex !== -1 ? matchedIndex : index;

    const translationKey =
      defaultStepKeys[stepIndex]?.[field];

    // Static translations for the four default steps
    if (
      translationKey &&
      stepIndex < defaultSteps.length &&
      originalText === defaultSteps[stepIndex][field]
    ) {
      return t(translationKey, {
        defaultValue: originalText,
      });
    }

    // Keep custom Admin content unchanged
    return originalText;
  };

  const sectionEyebrow = translateSectionField(
    "eyebrow",
    "howEyebrow"
  );

  const sectionHeading = translateSectionField(
    "heading",
    "howHeading"
  );

  const sectionDescription = translateSectionField(
    "description",
    "howDescription"
  );

  return (
    <section className="how-section" id="how-it-works">
      <div className="how-container">

        {/* Section Heading */}
        <div className="how-heading">
          <p className="how-eyebrow">
            {sectionEyebrow}
          </p>

          <h2>{sectionHeading}</h2>

          {sectionDescription && (
            <p className="how-description">
              {sectionDescription}
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

                <h3>
                  {translateStepField(
                    step,
                    "title",
                    index
                  )}
                </h3>

                <p>
                  {translateStepField(
                    step,
                    "description",
                    index
                  )}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default HowItWorksSection;
