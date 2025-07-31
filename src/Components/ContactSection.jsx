import React from "react";

const ContactSection = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Add your Web3Forms access key
    formData.append("access_key", "30dce94f-caed-4842-bbff-cd6674985bc4");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        console.log("Success", res);
        alert("Message sent successfully!");
        event.target.reset();
      } else {
        console.error("Error:", res);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Network Error:", error);
      alert("Network error. Please try again later.");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-background">
        <div className="contact-overlay" />
      </div>

      <div className="container">
        <div className="section-header">
          <h2>Contact Us</h2>
          <p>
            Get in touch with us for any inquiries about our construction
            projects. We're here to help bring your vision to life.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Information */}
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <div className="contact-card">
              <div className="icon">📍</div>
              <div>
                <h4>Address</h4>
                <p>
                  Shree Vastu, Temghar Village, Kalyan-Bhiwandi Road, Bhiwandi –
                  421302
                </p>
                <p className="sub-text">Near ABC Petrol Pump</p>
              </div>
            </div>
            <div className="contact-card">
              <div className="icon">📞</div>
              <div>
                <h4>Phone</h4>
                <p>+91-9876543210</p>
              </div>
            </div>
            <div className="contact-card">
              <div className="icon">✉️</div>
              <div>
                <h4>Email</h4>
                <p>paintnrepair@gmail.com</p>
              </div>
            </div>
            <div className="contact-card">
              <div className="icon">🕒</div>
              <div>
                <h4>Working Hours</h4>
                <p>Mon–Sat: 9 AM – 6 PM</p>
                <p className="sub-text">Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" rows="6" required />
              </div>
              <button type="submit" className="btn-submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
