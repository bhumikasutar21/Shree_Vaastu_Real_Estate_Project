import React from "react";
import beforeImage from "../assets/Build1.jpg";
import afterImage from "../assets/building-about.jpg";
import { FaArrowRight } from "react-icons/fa6";

const AboutSection = () => {
  return (
    <section id="about-us" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2>Construction Office</h2>
          <p>
            Our dedicated site office serves as the central hub for project
            management, ensuring seamless coordination and quality control
            throughout the construction process.
          </p>
        </div>

        <div className="about-grid">
          {/* Before Image */}
          <div className="about-image-wrapper">
            <img src={beforeImage} alt="Before Construction" />
            <div className="image-label">Before</div>
          </div>

          {/* Arrow Between */}
          <div className="arrow-wrapper">
            <FaArrowRight style={{ color: "grey" }} />
          </div>

          {/* After Image */}
          <div className="about-image-wrapper">
            <img src={afterImage} alt="After Construction" />
            <div className="image-label">After</div>
          </div>
        </div>

        <div className="about-content">
          <p>
            At Shree Vastu, we maintain a comprehensive project management
            office that oversees every aspect of construction. Our experienced
            team ensures that each project meets the highest standards of
            quality, safety, and timelines.
          </p>
          <p className="muted">
            From initial planning to final delivery, our office coordinates with
            architects, engineers, contractors, and clients to bring
            architectural visions to life with precision and excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
