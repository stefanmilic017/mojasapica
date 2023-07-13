import React from "react";

const AboutBedWrapper = ({ image, headerText }) => {
  return (
    <div className="bed">
      <img className="bed-image" src={image} />
      <h2 className="bed-header">{headerText}</h2>
    </div>
  );
};

export default AboutBedWrapper;
