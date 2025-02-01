import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Hide the menu when a navigation item is clicked
  };

  return (
    <>
      <div id="navbar">
        <div id="image">
          <img id="navimg" src="navlogo.png" alt="Logo" />
        </div>
        <div id="menuitems" className={isMenuOpen ? "open-menu" : ""}>
          <ul>
            <li>
              <a href="#home" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={closeMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#menu" onClick={closeMenu}>
                Menu
              </a>
            </li>
            <li>
              <a href="#laurels" onClick={closeMenu}>
                Awards
              </a>
            </li>
            <li>
              <a href="#find-us" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div id="options" className={isMenuOpen ? "open-menu" : ""}>
          <ul>
            <li>
              <Link to="/login" onClick={closeMenu}>
                Login / Register &nbsp;|
              </Link>
            </li>
            <li>
              <Link to="/booktable" onClick={closeMenu}>
                Book Table
              </Link>
            </li>
          </ul>
        </div>
        <div className="rightmenu" onClick={toggleMenu}>
          <ul>
            <li>
              <a id="menu-item">
                <i className="fa-solid fa-bars"></i>
              </a>
              <ul className={`megamenu ${isMenuOpen ? "open-megamenu" : ""}`}>
                <li>
                  <a href="#home" onClick={closeMenu}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" onClick={closeMenu}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#menu" onClick={closeMenu}>
                    Menu
                  </a>
                </li>
                <li>
                  <a href="#laurels" onClick={closeMenu}>
                    Awards
                  </a>
                </li>
                <li>
                  <a href="#find-us" onClick={closeMenu}>
                    Contact
                  </a>
                </li>
                <li>
                  <Link to="/login" onClick={closeMenu}>
                    Login / Register
                  </Link>
                </li>
                <li>
                  <Link to="/booktable" onClick={closeMenu}>
                    Book Table
                  </Link>
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
