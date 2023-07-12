import React from "react";
import InstagramLogo from "../images/instagram-colored.svg";

const InstagramLink = () => {
  return (
    <div className="ig-link">
      <a href="https://www.instagram.com/mojasapicaa/" target="_blank" rel="noreferrer">
        <img src={InstagramLogo} alt="instagram" />
      </a>
    </div>
  );
};

export default InstagramLink;
