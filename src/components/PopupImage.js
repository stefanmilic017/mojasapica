import React, { useState, useEffect, useCallback } from "react";

import "../styles/PopupImage.css";

const PopupImage = ({ selectedImage, onClose, slides }) => {
  const [current, setCurrent] = useState(parseInt(selectedImage.id));
  const length = slides.length;
  const [changedImage, setChangedImage] = useState(slides[current].image);

  useEffect(() => {
    setChangedImage(slides[current].image);
  }, [current, slides]);

  const prevSlide = useCallback(() => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  },[current, length]);

  const nextSlide = useCallback(() => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  },[current, length]);

  useEffect(() => {
    const handleKeyUp = (e) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      } else if (e.key === "Escape") {
        onClose();
      }
    };

    const handleClickOutside = (event) => {
      if (event.target.id === "popup-content") {
        onClose();
      }
    };

    document.addEventListener("keyup", handleKeyUp);
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("keyup", handleKeyUp);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [prevSlide, nextSlide, onClose]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="popup">
      <div id="popup-content" className="popup-content">
        <span className="arrow left-arrow" onClick={prevSlide}>
          &lt;
        </span>
        <span className="arrow right-arrow" onClick={nextSlide}>
          &gt;
        </span>
        <span className="close-image" onClick={onClose}>
          &times;
        </span>
        <img src={changedImage} alt={slides[current].name} />
      </div>
    </div>
  );
};

export default PopupImage;
