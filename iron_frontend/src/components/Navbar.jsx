
import React, { useState } from "react";
import "./Navbar.css";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
  { label: t("language"), href: "#language" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <a href="#home" className="navbar-logo">
          <img src="/logo.png" alt="Iron Me.Ka Logo" />
        </a>

        {/* Navigation links */}
        <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#booking"
            className="mobile-book-btn"
            onClick={closeMenu}
          >
            Book a Service
          </a>
        </nav>

        {/* Booking button */}
        <a href="#booking" className="book-btn">
          Book a Service
        </a>

        {/* Mobile menu button */}
        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>
      <div className="navbar-actions">
        <a href="#booking" className="navbar-book-btn">
          {t("book")}
        </a>

  <LanguageSelector />
</div>
    </header>
  );
}

export default Navbar;
