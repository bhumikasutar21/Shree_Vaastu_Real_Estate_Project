import React from "react";

const MapSection = () => {
  const siteAddress =
    "Shree Vastu, Temghar Village, Kalyan-Bhiwandi Road, Temghar, Bhiwandi – 421302";

  const officeAddress =
    "Laxmi Niwas, 06, Mahatma Gandhi Rd, behind jupiter scan center, Naupada, Thane West, Thane, Maharashtra 400602";

  // Google Maps links (for buttons)
  const officeMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    officeAddress
  )}`;
  const siteMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    siteAddress
  )}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
    officeAddress
  )}&destination=${encodeURIComponent(siteAddress)}`;

  // Directions embed map (iframe)
  const directionsEmbed = `https://www.google.com/maps/embed/v1/directions?key=YOUR_API_KEY&origin=${encodeURIComponent(
    officeAddress
  )}&destination=${encodeURIComponent(siteAddress)}&mode=driving`;

  return (
    <section id="map" className="map-section">
      <div className="container">
        <div className="map-header">
          <h2>Find Us</h2>
          <p>
            View our office in Thane and our construction site in Temghar, along
            with the travel route between them.
          </p>
        </div>

        <br />

        <div className="map-grid">
          {/* Office Map */}
          <div className="map-embed card">
            <h3>🏢 Our Sells Office (Thane - Naupada)</h3>
            <br />
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                officeAddress
              )}&output=embed`}
              width="600"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <br />
            <a
              href={officeMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              View Office in Google Maps
            </a>
          </div>

          {/* Site Map */}
          <div className="map-embed card">
            <h3>🏗️ Our Site (Temghar)</h3>
            <br />
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                siteAddress
              )}&output=embed`}
              width="600"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <br />
            <a
              href={siteMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              View Site in Google Maps
            </a>
          </div>
        </div>

        <br />

        {/* Directions Map */}
        <div className="directions card">
          <h3>📍 Route & Distance</h3>
          <p>
            Below map shows the travel route from our Office (Naupada, Thane) to
            our Site (Temghar, Bhiwandi).
          </p>
          <br />
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3768.3708!2d72.9707!3d19.2183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s${encodeURIComponent(
              officeAddress
            )}!2sOffice!3m2!1d19.2183!2d72.9707!4m5!1s${encodeURIComponent(
              siteAddress
            )}!2sSite!3m2!1d19.2588!2d72.9551!5e0!3m2!1sen!2sin!4v1234567890`}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Open Full Directions in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
