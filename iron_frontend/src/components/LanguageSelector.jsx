
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSelector.css";

const languages = [
  { code: "en", label: "English" },
  { code: "ta", label: "தமிழ்" },
  { code: "fr", label: "Français" },
];

function LanguageSelector() {
  const { i18n } = useTranslation();

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLanguage =
    i18n.resolvedLanguage || i18n.language || "en";

  const selected =
    languages.find((lang) => lang.code === currentLanguage) ||
    languages[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  useEffect(() => {
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  const changeLanguage = async (code) => {
    try {
      await i18n.changeLanguage(code);

      localStorage.setItem("ironMekaLanguage", code);
      document.documentElement.lang = code;

      console.log("Selected language:", code);
      console.log("Translated Home:", i18n.t("home"));

      setOpen(false);
    } catch (error) {
      console.error("Language change failed:", error);
    }
  };

  return (
    <div className="language-selector" ref={dropdownRef}>
      <button
        type="button"
        className="language-toggle"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label="Select language"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
        </svg>

        <span>{selected.label}</span>

        <span className="language-chevron">
          {open ? "⌃" : "⌄"}
        </span>
      </button>

      {open && (
        <div className="language-dropdown">
          {languages.map((lang) => (
            <button
              key={lang.code}
              type="button"
              className={`language-option ${
                selected.code === lang.code ? "selected" : ""
              }`}
              onClick={() => changeLanguage(lang.code)}
            >
              <span>{lang.label}</span>

              {selected.code === lang.code && (
                <span className="language-check">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSelector;
