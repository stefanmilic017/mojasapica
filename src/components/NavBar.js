import React, { useState } from "react";
import "../styles/NavBar.css";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);

  if(!isActive) {
    document.body.style.overflow = "auto";
  } else {
    document.body.style.overflow = "hidden";
  }

  const handleHamburgerClick = () => {
    setIsActive(!isActive);
  };
  
  const handleNavItemClick = () => {
    setIsActive(false);
  };

  return (
    <nav>
      <div className="navbar">
        <img src={require("../images/MojaSapicaBela200x200.png")} alt="logo" />
        <ul className={`nav-menu ${isActive ? "active" : ""}`}>
          <li className="nav-item">
            <a href="." className="nav-link" onClick={handleNavItemClick}>
              Početna
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#gallery"
              className="nav-link"
              onClick={handleNavItemClick}
            >
              Galerija
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              className="nav-link"
              onClick={handleNavItemClick}
            >
              Kontakt
            </a>
          </li>
        </ul>
        <div
          className={`hamburger ${isActive ? "active" : ""}`}
          onClick={handleHamburgerClick}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
