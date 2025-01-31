import React from "react";

import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <section id="about">
        <div className="about">
          <h1>About Us</h1>
          <p>
            <img src="spoon.svg" alt="Spoon" />
          </p>
          <p>
            At FineDine Restaurant, we take pride in offering a unique blend of
            exceptional cuisine, impeccable service, and a warm, inviting
            atmosphere. Our menu showcases a diverse range of dishes, crafted by
            expert chefs using the freshest, high-quality ingredients. Whether
            you're seeking a romantic dinner, a family gathering, or a business
            lunch, our restaurant provides the perfect setting for any occasion.
            Experience a journey of flavors and hospitality that will leave you
            coming back for more.
          </p>
          <button>Know More</button>
        </div>
        <div className="image" id="bgimg">
          <img id="knifeimage" src="knife.png" alt="Knife" />
        </div>
        <div className="history">
          <h1>Our History</h1>
          <p>
            <img src="spoon.svg" alt="Spoon" />
          </p>
          <p>
            Our story began with a passion for food and a dream to create a
            dining experience that feels like home. FineDine Restaurant was
            founded in 2017 by Krushna Shahane, who believed in combining
            traditional culinary techniques with modern innovation. Starting as
            a small eatery, we have grown over the years, becoming a beloved
            destination for food enthusiasts. Every dish we serve reflects our
            journey, crafted with love, and inspired by flavors from around the
            world. We remain committed to preserving our heritage while
            embracing new ideas to delight our guests.
          </p>
          <button>Know More</button>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
