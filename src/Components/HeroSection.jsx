import React from "react";
import heroImage from "../assets/building-hero.jpg"; // Update path as needed

function HeroSection({ scrollToSection }) {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <img src={heroImage} alt="Building" className="hero-img" />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">
          Welcome to <span>Shree Vastu</span>
        </h1>
        <p className="hero-subtitle">
          We are pleased to introduce our company to your esteemed organization
          with the intention of registering ourselves for your future
          requirements in interior designing, repair, maintenance,
          waterproofing, and specialized high-tech online leak-free work.
        </p>

        <div className="hero-buttons">
          <button
            className="primary-btn"
            onClick={() => scrollToSection("about-us")}
          >
            Learn More
          </button>
          <button
            className="outline-btn"
            onClick={() => scrollToSection("contact")}
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
