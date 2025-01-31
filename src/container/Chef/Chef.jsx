import React from "react";

import "./Chef.css";

const Chef = () => {
  return (
    <section id="chef">
      <div id="chef-image">
        <img src="chef.png" alt="chef" />
      </div>
      <div id="chef-text">
        <p>Chef's Word</p>
        <p>
          <img src="spoon.svg" alt="Spoon" />
        </p>
        <h1>What we believe in</h1>
        <p>
          <img src="quote.png" alt="qoute" /> A chef is a skilled culinary
          professional responsible for preparing, cooking, and presenting food
          in a professional kitchen. Chefs often specialize in particular
          cuisines or types of dishes and work in restaurants, hotels, catering
          services, or other food establishments. Their primary responsibilities
          include creating menus, sourcing and inspecting ingredients,
          supervising kitchen staff, and ensuring food safety and quality
          standards are met.
        </p>
        <p id="name">Kevin Luo</p>
        <p>Chef & Founder</p>
        <p id="chef-sign">
          <img src="sign.png" alt="Chef-Sign-Image" />
        </p>
      </div>
    </section>
  );
};

export default Chef;
