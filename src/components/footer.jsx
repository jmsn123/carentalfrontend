import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-brand">
            <a href="#" className="logo">
              <img src="./assets/images/logo.svg" alt="Casmart Logo" />
            </a>
            <p className="footer-text">
              Casmart is a fashion theme for presents a complete wardrobe of
              uniquely crafted Ethnic Wear, Casuals, Edgy Denims, & Accessories
              inspired by the most contemporary trends.
            </p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; 2022 <a href="#">codewithsadee</a>. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
