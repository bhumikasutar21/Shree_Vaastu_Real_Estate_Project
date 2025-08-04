import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { BsBuildingsFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa6";
import "./Header.css";
function Header({ activeSection, scrollToSection, isMenuOpen, setIsMenuOpen }) {
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about-us", label: "About Us" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setIsMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <header className={`main-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="logo">
          <BsBuildingsFill size={32} className="logo-icon" />
          <h2>Shree Vastu</h2>
        </div>

        <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`nav-btn ${activeSection === item.id ? "active" : ""}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* <div className={`<FaBars /> ${isMenuOpen ? "open" : ""}`}></div> */}
          <FaBars size={24} className={isMenuOpen ? "open" : ""} />
        </div>
      </div>
    </header>
  );
}

export default Header;
