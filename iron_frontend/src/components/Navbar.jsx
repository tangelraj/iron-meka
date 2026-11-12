
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";
import "./Navbar.css";

function Navbar() {
  const { t } = useTranslation();
  console.log("Navbar language:", t("home"));
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  // Keep translated links inside the component
  const navLinks = [
    { label: t("home"), href: "#home" },
    { label: t("about"), href: "#about" },
    { label: t("services"), href: "#services" },
    {
      label: t("whyChoose"),
      href: "#why-choose-us",
    },
    { label: t("reviews"), href: "#reviews" },
    { label: t("contact"), href: "#contact" },
  ];

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Website Logo */}
        <a
          href="#home"
          className="navbar-logo"
          onClick={closeMenu}
        >
          <img
            src="/logo.png"
            alt="Iron Me·Ka Logo"
          />
        </a>

        {/* Navigation Links */}
        <nav
          className={
            menuOpen
              ? "nav-menu active"
              : "nav-menu"
          }
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}

          {/* Mobile Booking Button */}
          <a
            href="#booking"
            className="mobile-book-btn"
            onClick={closeMenu}
          >
            {t("book")}
          </a>
        </nav>

        {/* Right Side: Booking + Language */}
        <div className="navbar-actions">

          <a
            href="#booking"
            className="book-btn"
          >
            {t("book")}
          </a>

          <LanguageSelector />

        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="menu-toggle"
          type="button"
          aria-label={
            menuOpen
              ? "Close navigation"
              : "Open navigation"
          }
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
