import React from "react";
import "./SpecialMenu.css";
import data from "./data.jsx";

const { wines, cocktails } = data;

const SpecialMenu = () => {
  return (
    <>
      <section id="menu">
        <div id="top">
          <div>
            <h3 id="menumsg">Menu that fits you palatte</h3>
            <p align="center">
              <img src="spoon.svg" alt="Spoon" />
            </p>
            <h1 align="center" id="menuid">
              Today's Special
            </h1>
          </div>
        </div>
        <div id="menu-container">
          <div id="winebeer">
            <h2>Wine & Beer</h2>
            {wines.map((wine, index) => (
              <div className="menu-container">
                <div key={index} className="wine-item">
                  <h3>{wine.title}</h3>
                  <div className="line-price">
                    <div className="golden-line"></div>
                    <p className="price" style={{ fontSize: "25px" }}>
                      {wine.price}
                    </p>
                  </div>
                </div>
                <p>{wine.tags}</p>
              </div>
            ))}
          </div>
          <div id="menuimg">
            <img src="menu.png" alt="Menu Image" />
          </div>
          <div id="cocktail">
            <h2>Cocktails</h2>
            {cocktails.map((cocktail, index) => (
              <div className="menu-container">
                <div key={index} className="cocktail-item">
                  <h3>{cocktail.title}</h3>
                  <div className="line-price">
                    <div className="golden-line"></div>
                    <p className="price" style={{ fontSize: "25px" }}>
                      {cocktail.price}
                    </p>
                  </div>
                </div>
                <p>{cocktail.tags}</p>
              </div>
            ))}
          </div>
        </div>
        <div id="menubtn">
          <button>View More</button>
        </div>
      </section>
    </>
  );
};

export default SpecialMenu;
