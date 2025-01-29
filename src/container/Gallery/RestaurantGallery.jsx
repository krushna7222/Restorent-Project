import React, { useState } from "react";
import "./RestaurantGallery.css";

const RestaurantGallery = () => {
  const images = [
    "gallery01.png",
    "gallery02.png",
    "gallery03.png",
    "gallery04.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < images.length - 2) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="sliding-gallery">
      <button
        className="nav-btn prev"
        onClick={prevSlide}
        // disabled={currentIndex === 0}
      >
        &#8592;
      </button>
      <div className="gallery-wrapper">
        <div
          className="gallery-slides"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className="slide-image"
            />
          ))}
        </div>
      </div>
      <button
        className="nav-btn next"
        onClick={nextSlide}
        // disabled={currentIndex === images.length - 2} // Disable when only the last image is fully visible
      >
        &#8594;
      </button>
    </div>
  );
};

export default RestaurantGallery;
