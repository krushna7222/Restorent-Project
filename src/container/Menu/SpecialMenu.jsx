import React from "react";
import "./SpecialMenu.css";

const SpecialMenu = () => {
  return (
    <>
      <section id="menu">
        <div id="top">
          <div>
            <h3 id="menumsg">Menu that fits you palatte</h3>
            <p align="center">
              <img src="src\assets\spoon.svg" alt="Spoon" />
            </p>
            <h1 align="center" id="menuid">
              Today's Special
            </h1>
          </div>
        </div>
        <div id="menu-container">
          <div id="winebeer">
            <h2>Wine & Beer</h2>
          </div>
          <div id="menuimg">
            <img src="src\assets\menu.png" alt="Menu Image" />
          </div>
          <div id="cocktail">
            <h2>Cocktails</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default SpecialMenu;
