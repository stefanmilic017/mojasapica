import React, { useState } from "react";
import "../styles/Gallery.css";
import PopupImage from "./PopupImage";
import { ListOfGalleryImages } from "./ListOfGalleryImages";

const Gallery = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const slides = ListOfGalleryImages;

  const onImageClick = (event) => {
    setSelectedImage(event.target);
    setShowPopup(true);
    document.body.style.overflow = "hidden";
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    document.body.style.overflow = "auto";
  };
  const renderImages = ListOfGalleryImages.map((slide, index) => {
    return (
      <img
        className="gallery-img"
        key={index}
        id={index}
        src={slide.image}
        alt={slide.name}
        onClick={onImageClick}
      />
    );
  });

  return (
    <section id="gallery" className="image-list">
      <h1>Galerija krevetića</h1>
      <div className="rendered-images">{renderImages}</div>
      {showPopup && (
        <PopupImage
          selectedImage={selectedImage}
          onClose={handleClosePopup}
          slides={slides}
        />
      )}
    </section>
  );
};

export default Gallery;
