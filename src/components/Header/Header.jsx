import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header-section">
      <div className="header-container">

        {/* Logo */}
        <div className="logo">
          <a href="/">
            <img src="/images/fitness3.jpg" alt="FITNESS 3" />
          </a>
        </div>

        {/* Navigation */}
        <div className="nav-menu">

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          <nav className={`mainmenu ${menuOpen ? "mobile-open" : ""}`}>
            <ul>

              <li className="active">
                <a href="/">Home</a>
              </li>

              <li>
                <a href="/membership">Membership</a>
              </li>

              <li>
                <a href="/gallery">Classes</a>
              </li>

              <li className="dropdown-menu">
                <a href="/classes">Classes</a>

                <ul className="dropdown">
                  <li>
                    <a href="/trainer-details">Trainer Details</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="/contact">Contacts</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>

            </ul>
          </nav>

        </div>

      </div>
    </header>
  );
};

export default Header;

