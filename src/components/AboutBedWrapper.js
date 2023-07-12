import React from "react";

const AboutBedWrapper = ({ add, image, alt, header }) => {
  if (add === undefined) add = "";

  return (
    <div className="bed-wrapper">
      <div className="bed-content">
        <img className={`${add} ui fluid image`.trim()} src={image} alt={alt} />
        <h2>{header}</h2>
      </div>
    </div>
  );
};

export default AboutBedWrapper;
