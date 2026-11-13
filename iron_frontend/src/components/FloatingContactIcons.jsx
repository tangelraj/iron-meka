
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMusic,
  FaPause,
  FaArrowUp,
} from "react-icons/fa";

import "./FloatingContactIcons.css";

const API_URL = (
  import.meta.env.VITE_API_URL ||
  "http://127.0.0.1:8000"
).replace(/\/$/, "");

// Used only when API is unavailable.
const fallbackButtons = [
  {
    id: "call",
    label: "Call Us",
    icon_key: "phone",
    url: "tel:8792694177",
    background_color: "",
    text_color: "",
    open_new_tab: false,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    icon_key: "whatsapp",
    url: "https://wa.me/918792694177",
    background_color: "",
    text_color: "",
    open_new_tab: true,
  },
  {
    id: "email",
    label: "Email Us",
    icon_key: "envelope",
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=tangelraj%40gmail.com",
    background_color: "",
    text_color: "",
    open_new_tab: true,
  },
];

const iconMap = {
  phone: FaPhoneAlt,
  "phone-call": FaPhoneAlt,
  whatsapp: FaWhatsapp,
  "message-circle": FaWhatsapp,
  envelope: FaEnvelope,
  mail: FaEnvelope,
  email: FaEnvelope,
  "arrow-up": FaArrowUp,
};

function FloatingContactIcons() {
  const { i18n } = useTranslation();

  const [isPlaying, setIsPlaying] = useState(false);
  const [buttons, setButtons] = useState(fallbackButtons);
  const audioRef = useRef(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchButtons() {
      try {
        const response = await fetch(
          `${API_URL}/api/floating-buttons/`,
          {
            signal: controller.signal,
            cache: "no-store",
          }
        );

        if (!response.ok) {
          throw new Error("Unable to fetch floating buttons");
        }

        const data = await response.json();

        if (Array.isArray(data.buttons)) {
          setButtons(data.buttons);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Floating buttons API:", error);
        }
      }
    }

    fetchButtons();

    return () => controller.abort();
  }, []);

  const getTranslatedLabel = (button) => {
    const language = (
      i18n.resolvedLanguage ||
      i18n.language ||
      "en"
    ).split("-")[0];

    if (language !== "en") {
      const translation = button[`label_${language}`];

      if (translation?.trim()) {
        return translation;
      }
    }

    return button.label || "Contact";
  };

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Unable to play music:", error);
      }
    }
  };

  const getButtonClass = (button) => {
    const icon = (button.icon_key || "").toLowerCase();

    if (icon === "phone" || icon === "phone-call") {
      return "floating-call";
    }

    if (icon === "whatsapp" || icon === "message-circle") {
      return "floating-whatsapp";
    }

    if (icon === "mail" || icon === "email" || icon === "envelope") {
      return "floating-email";
    }

    return "";
  };

  return (
    <>
      {/* Background music */}
      <audio
        ref={audioRef}
        src="/background-music.mp3"
        loop
        preload="none"
        onEnded={() => setIsPlaying(false)}
      />

      {/* Music button */}
      <button
        type="button"
        className="floating-music-btn"
        onClick={toggleMusic}
        aria-label={isPlaying ? "Pause music" : "Play music"}
        title={isPlaying ? "Pause Music" : "Play Music"}
      >
        {isPlaying ? <FaPause /> : <FaMusic />}
      </button>

      {/* Contact buttons from Django Admin */}
      <div className="floating-contact-group">
        {buttons.map((button) => {
          const Icon =
            iconMap[(button.icon_key || "").toLowerCase()] ||
            FaPhoneAlt;

          const label = getTranslatedLabel(button);

          const style = {
            ...(button.background_color
              ? { backgroundColor: button.background_color }
              : {}),
            ...(button.text_color
              ? { color: button.text_color }
              : {}),
          };

          return (
            <a
              key={button.id}
              href={button.url}
              className={`floating-contact-btn ${getButtonClass(button)}`}
              target={button.open_new_tab ? "_blank" : undefined}
              rel={
                button.open_new_tab
                  ? "noopener noreferrer"
                  : undefined
              }
              aria-label={label}
              title={label}
              style={style}
            >
              <Icon />
            </a>
          );
        })}
      </div>
    </>
  );
}

export default FloatingContactIcons;
