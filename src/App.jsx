import React, { useState, useEffect } from "react";
import "./App.css";

import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import AboutSection from "./Components/AboutSection";
import ContactSection from "./Components/ContactSection";
import MapSection from "./Components/MapSection";
import Footer from "./Components/Footer";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about-us", "contact", "map"];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll smoothly to a section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  // Handle contact form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We'll get back to you soon.");
    e.target.reset();
  };

  return (
    <div className="App">
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      <HeroSection scrollToSection={scrollToSection} />
      <AboutSection />
      <ContactSection handleSubmit={handleSubmit} />
      <MapSection />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

export default App;
