import React from "react";

const Navbar = ({ active, onClose }) => {
  return (
    <nav className={`navbar ${active ? "active" : ""}`} data-navbar>
      <div className="navbar-top">
        <a href="#" className="logo">
          <img
            src="./assets/images/logo.svg"
            alt="Casmart Logo"
            width="130"
            height="31"
          />
        </a>
        <button className="nav-close-btn" onClick={onClose}>
          <ion-icon name="close-outline"></ion-icon>
        </button>
      </div>
      <ul className="navbar-list">
        <li>
          <a href="#home" className="navbar-link">
            Home
          </a>
        </li>
        <li>
          <a href="#shop" className="navbar-link">
            Shop
          </a>
        </li>
        <li>
          <a href="#about" className="navbar-link">
            About
          </a>
        </li>
        <li>
          <a href="#blog" className="navbar-link">
            Blog
          </a>
        </li>
        <li>
          <a href="#contact" className="navbar-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
