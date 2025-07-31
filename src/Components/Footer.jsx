import React from "react";
import { BsBuildingsFill } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { FaPhone } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const Footer = ({ scrollToSection }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* Company Info */}
        <div className="footer-section">
          <div className="footer-brand">
            <BsBuildingsFill className="icon" />
            <span className="brand-text"> Shree Vastu</span>
          </div>
          <p className="footer-description">
            A landmark of trust and modern construction. We redefine skyline
            excellence with our commitment to quality, innovation, and customer
            satisfaction.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            {["home", "about-us", "contact"].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section);
                  }}
                >
                  {section === "about-us"
                    ? "About Us"
                    : section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4 className="footer-heading">Contact Info</h4>
          <div className="contact-item">
            <FiMapPin className="icon small" style={{ color: "#d87d4a" }} />
            <span>
              Temghar Village, Kalyan-Bhiwandi Road,
              <br />
              Bhiwandi – 421302
            </span>
          </div>
          <div className="contact-item">
            <FaPhone className="icon small" style={{ color: "#d87d4a" }} />
            <span> +91-9876543210</span>
          </div>
          <div className="contact-item">
            <SiGmail className="icon small" style={{ color: "#d87d4a" }} />
            <span> paintnrepair@gmail.com</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {currentYear} Shree Vastu. All rights reserved. | Building
          Excellence Since Day One.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
