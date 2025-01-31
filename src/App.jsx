import { useState } from "react";
import React from "react";
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

const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
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

      {/* <div>
        {isLogin ? (
          <Login onSwitch={() => setIsLogin(false)} />
        ) : (
          <Register onSwitch={() => setIsLogin(true)} />
        )}
      </div> */}
    </>
  );
};

export default App;
