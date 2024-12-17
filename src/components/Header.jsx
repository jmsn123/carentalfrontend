import React, { useState } from "react";

import { Helmet } from "react-helmet";
import Navbar from "./Navbar";
import Overlay from "./Overlay";

const Header = () => {
  const [navActive, setNavActive] = useState(false);

  const toggleNavbar = () => {
    setNavActive((prev) => !prev);
  };

  return (
    <>
      <Helmet>
        <title>Casmart - Biggest Shopping Center</title>
        <meta
          name="description"
          content="Shop the best fashion products at Casmart."
        />
      </Helmet>
      <header className={`header ${navActive ? "active" : ""}`} data-header>
        <div className="container">
          <Overlay active={navActive} onClick={toggleNavbar} />
          <div className="header-search">
            <input
              type="search"
              placeholder="Search Product..."
              className="input-field"
            />
            <button className="search-btn" aria-label="Search">
              <ion-icon name="search-outline"></ion-icon>
            </button>
          </div>
          <a href="#" className="logo">
            <img
              src="./assets/images/logo.svg"
              alt="Casmart Logo"
              width="130"
              height="31"
            />
          </a>
          <div className="header-actions">
            <button className="header-action-btn">
              <ion-icon name="person-outline"></ion-icon>
              <p className="header-action-label">Sign in</p>
            </button>
            <button className="header-action-btn">
              <ion-icon name="cart-outline"></ion-icon>
              <p className="header-action-label">Cart</p>
              <div className="btn-badge green">3</div>
            </button>
          </div>
          <button className="nav-open-btn" onClick={toggleNavbar}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <Navbar active={navActive} onClose={toggleNavbar} />
        </div>
      </header>
    </>
  );
};

export default Header;
