import React from "react";

import "./Laurels.css";

const Laurels = () => {
  return (
    <section id="laurels">
      <div id="laurel-text">
        <div id="head">
          <p>Awards & recognition</p>
          <p>
            <img src="src\assets\spoon.svg" alt="Spoon" />
          </p>
          <h1>Our Laurels</h1>
        </div>
        <div id="awards">
          <div className="award">
            <div className="award-img">
              <img src="src\assets\award01.png" alt="Award-1" />
            </div>
            <div className="award-text">
              <h2>Rising Star</h2>
              <p>
                The Rising Star Award is a prestigious recognition given to
                restaurants or individuals who demonstrate exceptional talent,
                innovation, and dedication in the food and hospitality industry.
                This award highlights emerging chefs, restaurant owners, or
                dining establishments that have made a significant impact in a
                short period.
              </p>
            </div>
          </div>
          <div className="award">
            <div className="award-img">
              <img src="src\assets\award02.png" alt="Award-2" />
            </div>
            <div className="award-text">
              <h2>Bib Gourmond</h2>
              <p>
                The Bib Gourmand award is a prestigious recognition given by the
                Michelin Guide to restaurants that offer high-quality food at a
                reasonable price. Introduced in 1997, the award highlights
                eateries that provide excellent value for money, making gourmet
                dining more accessible to a wider audience.
              </p>
            </div>
          </div>
          <div className="award">
            <div className="award-img">
              <img src="src\assets\award03.png" alt="Award-3" />
            </div>
            <div className="award-text">
              <h2>Outstanding Chef</h2>
              <p>
                The Outstanding Chef Award is a prestigious recognition given to
                culinary professionals who demonstrate exceptional skill,
                creativity, and dedication to the art of cooking. This award
                celebrates chefs who not only deliver extraordinary dining
                experiences but also inspire innovation and excellence in the
                culinary industry.
              </p>
            </div>
          </div>
          <div className="award">
            <div className="award-img">
              <img src="src\assets\award05.png" alt="Award-5" />
            </div>
            <div className="award-text">
              <h2>AA Hospitality</h2>
              <p>
                Winning an AA Hospitality Award signifies that a restaurant
                delivers an exceptional dining experience, making it a
                sought-after recognition for establishments aiming for high
                standards in the hospitality industry.Restaurants that receive
                an AA Hospitality Award are evaluated based on strict criteria,
                including food quality, service, ambiance, and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="laurel-image">
        <img src="src\assets\laurels.png" alt="laurel" />
      </div>
    </section>
  );
};

export default Laurels;
