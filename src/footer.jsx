import React from "react";
import "./index.css"; // Ensure the CSS file is imported

const Footer = () => {
  return (
    <footer>
      <div className="footers">
        <div className="online">
          <a href="#">Online Shopping</a>
          <a href="#">MEN</a>
          <a href="#">WOMEN</a>
          <a href="#">Kids</a>
          <a href="#">Beauty</a>
          <a href="#">Home and Living</a>
        </div>
        <div className="contact-info">
          <div>
            <p>Ph-No: 01125</p>
            <p>E-mail: psgusain@gmail.com</p>
          </div>
        </div>
        <div className="social">
          <a href="#" className="insta">
            Insta
          </a>
          <a href="#" className="face">
            Facebook
          </a>
          <a href="#" className="tube">
            YouTube
          </a>
          <a href="#" className="twitter">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
