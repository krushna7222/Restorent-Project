import React from "react";

import "./Navbar.css";

const Navbar = () => (
  <div id="navbar">
    <div id="image">
      <img src="src\assets\navlogo.png" alt="" />
    </div>
    <div id="menuitems">
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#awards">Awards</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
    <div id="options">
      <ul>
        <li>
          <a href="#login">Login/Register /</a>
        </li>
        <li>
          <a href="#booktable">Book Table</a>
        </li>
      </ul>
    </div>
  </div>
);

export default Navbar;
