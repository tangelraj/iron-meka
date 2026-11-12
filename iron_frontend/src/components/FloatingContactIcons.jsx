import React, { useRef, useState } from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMusic,
  FaPause,
} from "react-icons/fa";

import "./FloatingContactIcons.css";

function FloatingContactIcons() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Replace these with your business details.
  const phoneNumber = "8792694177";
  const emailAddress = "tangelraj@gmail.com";

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

  return (
    <>
      {/* Background music - starts only after clicking */}
      <audio
        ref={audioRef}
        src="/background-music.mp3"
        loop
        preload="none"
        onEnded={() => setIsPlaying(false)}
      />

      {/* LEFT BOTTOM - MUSIC */}
      <button
        type="button"
        className="floating-music-btn"
        onClick={toggleMusic}
        aria-label={isPlaying ? "Pause music" : "Play music"}
        title={isPlaying ? "Pause Music" : "Play Music"}
      >
        {isPlaying ? <FaPause /> : <FaMusic />}
      </button>

      {/* RIGHT SIDE - CONTACT ICONS */}
      <div className="floating-contact-group">
        <a
            href={`tel:${phoneNumber}`}
            className="floating-contact-btn floating-call"
            aria-label="Call us"
            title="Call Us"
            >
            <FaPhoneAlt />
        </a>

        <a
          href={`https://wa.me/${phoneNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-contact-btn floating-whatsapp"
          aria-label="Chat on WhatsApp"
          title="WhatsApp"
        >
          <FaWhatsapp />
        </a>

        <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="floating-contact-btn floating-email"
            aria-label="Email us"
            title="Email Us"    
            >
            <FaEnvelope />
        </a>
      </div>
    </>
  );
}

export default FloatingContactIcons;