import React from "react";
import "./FindUs.css";

const FindUs = () => {
  return (
    <section id="find-us">
      <div id="findus-text">
        <p>Contact</p>
        <p>
          <img src="src\assets\spoon.svg" alt="Spoon" />
        </p>
        <h1>Find Us</h1>
        <p>Worli Mumbai</p>
        <h4>Opening Hours</h4>
        <p>Mon - Fri: 10:00 Am - 02:00 Am</p>
        <p>Sat - Sun: 10:00 Am - 03:00 Am</p>
        <button>Visit Us</button>
      </div>
      <div id="findus-image">
        <img src="src\assets\findus.png" alt="" />
      </div>
    </section>
  );
};

export default FindUs;
