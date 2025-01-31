import React from "react";

import "./Gallery.css";
import RestaurantGallery from "./RestaurantGallery";

const Gallery = () => {
  return (
    <section id="gallary">
      <div id="gallary-description">
        <p>Instagram</p>
        <p>
          <img src="spoon.svg" alt="Spoon" />
        </p>
        <h1>Photo Gallery</h1>
        <h4>"Welcome to Our Culinary Wonderland!"</h4>
        <p>
          Step into our restaurant through this exquisite photo gallery. Explore
          the artistry and ambiance that make dining with us an unforgettable
          experience. From our chef-crafted dishes bursting with flavor to the
          warm and inviting interiors designed for comfort and elegance, every
          detail reflects our passion for hospitality.
        </p>
        <button>View More</button>
      </div>
      <div id="image-gallary">
        <RestaurantGallery></RestaurantGallery>
      </div>
    </section>
  );
};

export default Gallery;
