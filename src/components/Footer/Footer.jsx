import React from "react";
import "./Footer.css";

const Footer = () => {
return ( <footer className="footer-section">


  <div className="footer-top">
    <div className="map-location">

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.0737726580533!2d76.26226882703413!3d9.875979725000036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b086e04941ec5f9%3A0xf0b4485767419ca7!2sFitness3%20Kannamaly!5e1!3m2!1sen!2sin!4v1788146535679!5m2!1sen!2sin"
        title="Gym Location"
        allowFullScreen=""
        loading="lazy"
      ></iframe>

      

    </div>


    {/* Callback Form */}
    <div className="footer-form">

      <div className="form-content">

        <div className="section-title">
          <h2>Request A Call Back</h2>

          <p>
            Shape your body and burn fat with strength training.
            With the right equipment such as free weights or
            resistance machines.
          </p>
        </div>

        <form>
          <div className="form-row">

            <div className="form-half">
              <input
                type="text"
                placeholder="Name"
              />
            </div>

            <div className="form-half">
              <input
                type="email"
                placeholder="Email"
              />
            </div>

            <div className="form-full">
              <input
                type="text"
                placeholder="Subject"
              />

              <textarea
                placeholder="Message"
              ></textarea>

              <button type="submit">
                Submit <span>»</span>
              </button>
            </div>

          </div>
        </form>

      </div>

    </div>

  </div>


  {/* Footer Bottom */}
  <div className="footer-bottom">

    <div className="footer-container">

      <div className="copyright">
        Copyright © {new Date().getFullYear()} All rights reserved
        <span> | </span>
        This template is made with ♥ by Colorlib
      </div>


      {/* Footer Links */}
      <div className="footer-widget">
        <ul>
          <li>Privacy Policy</li>
          <li>Terms Of Service</li>
          <li>Careers</li>
        </ul>
      </div>


      {/* Social Links */}
      <div className="footer-links">
        <a href="#" aria-label="Facebook">
          f
        </a>

        <a href="#" aria-label="Twitter">
          t
        </a>

        <a href="#" aria-label="Instagram">
          ◎
        </a>
      </div>

    </div>

  </div>

</footer>

);
};

export default Footer;
