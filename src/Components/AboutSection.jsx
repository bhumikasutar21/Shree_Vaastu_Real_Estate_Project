import React from "react";
// import { FiMapPin } from "react-icons/fi";
// import { FaPhone } from "react-icons/fa6";
// import { SiGmail } from "react-icons/si";
// import { FaClock } from "react-icons/fa";
import aboutImage from "../assets/building-about.jpg";

// const contactInfo = [
//   {
//     icon: <FiMapPin size={24} />,
//     title: "Office Address",
//     content:
//       "Shree Vastu, Temghar Village, Kalyan-Bhiwandi Road, Temghar, Bhiwandi – 421302",
//   },
//   {
//     icon: <FaPhone size={24} />,
//     title: "Phone",
//     content: "+91-98217 72233",
//   },
//   {
//     icon: <SiGmail size={24} />,
//     title: "Email",
//     content: "paintnrepair@gmail.com",
//   },
//   {
//     icon: <FaClock size={24} />,
//     title: "Working Hours",
//     content: "Mon–Sat: 9 AM – 6 PM",
//   },
// ];

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
          {/* Left: Image */}
          <div className="about-image-wrapper">
            <img src={aboutImage} alt="Construction Office" />
            <div className="image-overlay" />
          </div>

          {/* Right: Content */}
          <div className="about-content">
            <p>
              At Shree Vastu, we maintain a comprehensive project management
              office that oversees every aspect of construction. Our experienced
              team ensures that each project meets the highest standards of
              quality, safety, and timelines.
            </p>
            <p className="muted">
              From initial planning to final delivery, our office coordinates
              with architects, engineers, contractors, and clients to bring
              architectural visions to life with precision and excellence.
            </p>

            {/* <div className="contact-grid">
              {contactInfo.map((info, i) => (
                <div className="contact-card" key={i}>
                  <div className="icon">{info.icon}</div>
                  <div className="contact-details">
                    <h4>{info.title}</h4>
                    <p>{info.content}</p>
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
