import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div id="navbar">
        <div id="image">
          <img id="navimg" src="navlogo.png" alt="Logo" />
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
              <a href="#laurels">Awards</a>
            </li>
            <li>
              <a href="#find-us">Contact</a>
            </li>
          </ul>
        </div>
        <div id="options">
          <ul>
            <li>
              <Link to="/login">Login / Register &nbsp;|</Link>
            </li>
            <li>
              <Link to="/booktable">Book Table</Link>
            </li>
          </ul>
        </div>
        <div className="rightmenu">
          <ul>
            <li>
              <a href="" id="menu-item">
                <i class="fa-solid fa-bars"></i>
              </a>
              <ul className="megamenu" id="mega-menu">
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
                  <a href="#laurels">Awards</a>
                </li>
                <li>
                  <a href="#find-us">Contact</a>
                </li>
                <li>
                  <Link to="/login">Login / Register &nbsp;|</Link>
                </li>
                <li>
                  <Link to="/booktable">Book Table</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
