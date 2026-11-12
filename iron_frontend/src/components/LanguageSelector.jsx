
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSelector.css";

const languages = [
  { code: "en", label: "English" },
  { code: "ta", label: "தமிழ்" },
  { code: "fr", label: "Français" },
];

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  const selected =
    languages.find((lang) => lang.code === i18n.language) ||
    languages[0];

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);

    return () => {
      document.removeEventListener(
        "pointerdown",
        handleOutsideClick
      );
    };
  }, []);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem("ironMekaLanguage", code);
    document.documentElement.lang = code;
    setOpen(false);
  };

  return (
    <div className="language-selector" ref={containerRef}>
      <button
        type="button"
        className="language-toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="true"
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
        <span className={`language-chevron ${open ? "open" : ""}`}>
          ⌄
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
