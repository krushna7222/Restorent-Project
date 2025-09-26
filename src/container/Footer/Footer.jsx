import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <div className="logo-image">
        <img src="navlogo.png" alt="Logo" />
      </div>
      <div class="row">
        <a href="#">
          <i class="fa fa-facebook"></i>
        </a>
        <a href="#">
          <i class="fa fa-instagram"></i>
        </a>
        <a href="#">
          <i class="fa fa-youtube"></i>
        </a>
        <a href="#">
          <i class="fa fa-twitter"></i>
        </a>
      </div>
      <div class="row">
        <ul>
          <li>
            <a href="#find-us">Contact us</a>
          </li>
          <li>
            <a href="#menu">Our Services</a>
          </li>
          <li>
            <a href="#">Career</a>
          </li>
        </ul>
      </div>
      <div class="row">
        FineDine Restaurant Copyright © 2025 - All rights reserved || Developed
        By:Krushna Shahane
      </div>
    </div>
  );
};

export default Footer;
