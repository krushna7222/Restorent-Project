import { useState } from "react";
import React from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
  Subscribe,
} from "./container";
import { Navbar } from "./components";
import "./App.css";
import Login from "./container/Login/Login";
import Register from "./container/Register/Register";
import BookTable from "./container/BookTable/BookTable";
import Booking from "./container/BookTable/Booking";

const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Header />
                <AboutUs />
                <SpecialMenu />
                <Chef />
                <Intro />
                <Laurels />
                <Gallery />
                <FindUs />
                <Subscribe />
                <Footer />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <div>
                {isLogin ? (
                  <Login onSwitch={() => setIsLogin(false)} />
                ) : (
                  <Register onSwitch={() => setIsLogin(true)} />
                )}
              </div>
            }
          />
          <Route path="/mybooking" element={<Booking />} />
          <Route path="/booktable" element={<BookTable />} />
        </Routes>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default App;
