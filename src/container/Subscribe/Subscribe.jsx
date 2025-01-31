import React from "react";

import "./Subscribe.css";
const Subscribe = () => {
  return (
    <section id="subscribe">
      <div>
        <h1>Subscribe To Our NewsLetter</h1>
        <p>And Never Miss Latest Updates!</p>
        <form>
          <div>
            <input type="email" placeholder="Enter Your Email" />
          </div>
          <div>
            <button type="submit">Subscribe</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
