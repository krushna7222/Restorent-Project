import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const BASE_URL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = async () => {
    try {
      const storedUser = localStorage.getItem("user");
      if (!storedUser) {
        toast.error("No user token found");
        return;
      }

      const userData = JSON.parse(storedUser);
      const token = userData.data;

      console.log("Parsed User Data:", userData);
      console.log("Token:", token);

      if (token) {
        const response = await fetch(`${BASE_URL}/api/v1/logout`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        });

        if (response.ok) {
          toast.success("✅ Logged out successfully");
        } else {
          toast.error("❌ Logout failed on server");
        }
      }

      localStorage.removeItem("user");
      setIsLoggedIn(false);
      navigate("/login");
    } catch (error) {
      toast.error("❌ Logout failed");
      localStorage.removeItem("user");
      setIsLoggedIn(false);
      navigate("/login");
    }
  };

  return (
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
            <Link to="/booktable" onClick={closeMenu}>
              Book Table
            </Link>
          </li>

          {!isLoggedIn ? (
            <li>
              <Link to="/login" onClick={closeMenu}>
                | &nbsp; Login / Register
              </Link>
            </li>
          ) : (
            <li>
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            </li>
          )}
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
                <Link to="/booktable" onClick={closeMenu}>
                  Book Table
                </Link>
              </li>
              {!isLoggedIn ? (
                <li>
                  <Link to="/login" onClick={closeMenu}>
                    Login / Register
                  </Link>
                </li>
              ) : (
                <li>
                  <button onClick={handleLogout} className="logout-btn">
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <>
//       <div id="navbar">
//         <div id="image">
//           <img id="navimg" src="navlogo.png" alt="Logo" />
//         </div>
//         <div id="menuitems" className={isMenuOpen ? "open-menu" : ""}>
//           <ul>
//             <li>
//               <a href="#home" onClick={closeMenu}>
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#about" onClick={closeMenu}>
//                 About
//               </a>
//             </li>
//             <li>
//               <a href="#menu" onClick={closeMenu}>
//                 Menu
//               </a>
//             </li>
//             <li>
//               <a href="#laurels" onClick={closeMenu}>
//                 Awards
//               </a>
//             </li>
//             <li>
//               <a href="#find-us" onClick={closeMenu}>
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="options" className={isMenuOpen ? "open-menu" : ""}>
//           <ul>
//             <li>
//               <Link to="/login" onClick={closeMenu}>
//                 Login / Register &nbsp;|
//               </Link>
//             </li>
//             <li>
//               <Link to="/booktable" onClick={closeMenu}>
//                 Book Table
//               </Link>
//             </li>
//           </ul>
//         </div>
//         <div className="rightmenu" onClick={toggleMenu}>
//           <ul>
//             <li>
//               <a id="menu-item">
//                 <i className="fa-solid fa-bars"></i>
//               </a>
//               <ul className={`megamenu ${isMenuOpen ? "open-megamenu" : ""}`}>
//                 <li>
//                   <a href="#home" onClick={closeMenu}>
//                     Home
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#about" onClick={closeMenu}>
//                     About
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#menu" onClick={closeMenu}>
//                     Menu
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#laurels" onClick={closeMenu}>
//                     Awards
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#find-us" onClick={closeMenu}>
//                     Contact
//                   </a>
//                 </li>
//                 <li>
//                   <Link to="/login" onClick={closeMenu}>
//                     Login / Register
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/booktable" onClick={closeMenu}>
//                     Book Table
//                   </Link>
//                 </li>
//               </ul>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;
