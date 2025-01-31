import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <>
      <section id="home">
        <div className="info">
          <p>Chase the new flavour</p>
          <p>
            <img src="spoon.svg" alt="Spoon" />
          </p>
          <h1>The Key to Fine Dining</h1>
          <p>
            Welcome to FineDine Restaurant, where culinary excellence meets a
            luxurious dining experience. Indulge in our carefully curated menu
            featuring exquisite flavors, crafted with the finest ingredients,
            and served in an elegant ambiance. Whether it's a special occasion
            or a casual outing, we promise to make every moment unforgettable.
          </p>
          <button>Explore Menu</button>
        </div>
        <div className="image">
          <img id="homeimage" src="welcome.png" alt="Top Image" />
        </div>
      </section>
    </>
  );
};

export default Header;
