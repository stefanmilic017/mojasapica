import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="logo-footer">
        <div className="logo-footer-img">
          <a
            href="https://www.instagram.com/mojasapicaa/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={require("../images/MojaSapicaBela200x200.png")} alt="logo"/>
          </a>
        </div>
      </div>

      <div className="copyright">
        <p>&copy; 2023 designed by stefanmilic017</p>
      </div>
    </footer>
  );
};

export default Footer;
