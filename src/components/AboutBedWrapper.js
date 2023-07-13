import React from "react";

const AboutBedWrapper = ({ image, headerText, altName }) => {
  return (
    <div className="bed">
      <img className="bed-image" src={image} alt={altName} />
      <h2 className="bed-header">{headerText}</h2>
    </div>
  );
};

export default AboutBedWrapper;
