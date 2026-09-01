import React from "react";
import "./Header.css";

const Header = () => {
return ( <header className="header-section"> <div className="header-container">
    
    <div className="logo">
      <a href="/">
        <img src="/assets/fitness3.jpg" alt="FITNESS 3" />
      </a>
    </div>

    {/* Navigation */}
    <div className="nav-menu">
      <nav className="mainmenu">
        <ul>
          <li className="active">
            <a href="/">Home</a>
          </li>

          <li>
            <a href="/about">About</a>
          </li>

          <li>
            <a href="/schedule">Schedule</a>
          </li>

          <li>
            <a href="/gallery">Portfolio</a>
          </li>

          <li className="dropdown-menu">
            <a href="/blog">Blog</a>

            <ul className="dropdown">
              <li>
                <a href="/blog-details">Blog Details</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="/contact">Contacts</a>
          </li>
        </ul>
      </nav>

      {/* Search */}
      <div className="nav-right">
        <button className="search-btn" type="button">
          🔍
        </button>
      </div>
    </div>

    {/* Mobile Menu */}
    <div id="mobile-menu-wrap"></div>

  </div>
</header>

);
};

export default Header;

