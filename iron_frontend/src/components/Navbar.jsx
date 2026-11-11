
import React, { useEffect, useState } from "react";
import "./Navbar.css";

const API_BASE = (
  import.meta.env.VITE_API_URL ||
  "http://127.0.0.1:8000"
).replace(/\/$/, "");

const defaultLinks = [
  { id: 1, label: "Home", href: "#home", is_button: false },
  { id: 2, label: "About Us", href: "#about", is_button: false },
  { id: 3, label: "Services", href: "#services", is_button: false },
  { id: 4, label: "Why Choose Us", href: "#why-choose-us", is_button: false },
  { id: 5, label: "Reviews", href: "#reviews", is_button: false },
  { id: 6, label: "Contact", href: "#contact", is_button: false },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [links, setLinks] = useState(defaultLinks);
  const [logo, setLogo] = useState("/logo.png");

  useEffect(() => {
    fetch(`${API_BASE}/api/navbar/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Navbar API failed");
        }
        return response.json();
      })
      .then((data) => {
        setLinks(Array.isArray(data.links) ? data.links : []);
        if (data.logo) {
          setLogo(
            data.logo.startsWith("/")
              ? `${API_BASE}${data.logo}`
              : data.logo
          );
        }
      })
      .catch((error) => {
        console.error("Navbar loading error:", error);
      });
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const normalLinks = links.filter((link) => !link.is_button);
  const buttonLink = links.find((link) => link.is_button);

  return (
    <header className="navbar">
      <div className="navbar-container">

        <a href="#home" className="navbar-logo">
          <img src={logo} alt="Iron Me·Ka Logo" />
        </a>

        <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
          {normalLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}

          {buttonLink && (
            <a
              href={buttonLink.href}
              className="mobile-book-btn"
              onClick={closeMenu}
            >
              {buttonLink.label}
            </a>
          )}
        </nav>

        {buttonLink && (
          <a href={buttonLink.href} className="book-btn">
            {buttonLink.label}
          </a>
        )}

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
    </header>
  );
}

export default Navbar;
