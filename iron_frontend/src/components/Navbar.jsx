
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";
import "./Navbar.css";

function Navbar() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { label: t("home"), href: "#home" },
    { label: t("about"), href: "#about" },
    { label: t("services"), href: "#services" },
    { label: t("whyChoose"), href: "#why-choose-us" },
    { label: t("reviews"), href: "#reviews" },
    { label: t("contact"), href: "#contact" },
  ];

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a
          href="#home"
          className="navbar-logo"
          onClick={closeMenu}
        >
          <img src="/logo.png" alt="Iron Me·Ka Logo" />
        </a>

        {/* Navigation */}
        <nav
          className={`nav-menu ${menuOpen ? "active" : ""}`}
          aria-label="Main navigation"
        >
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={index === 0 ? "nav-link-active" : ""}
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
            {t("book")}
          </a>
        </nav>

        {/* Booking and Language */}
        <div className="navbar-actions">
          <a href="#booking" className="book-btn">
            {t("book")}
          </a>

          <LanguageSelector />
        </div>

        {/* Mobile Menu */}
        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
