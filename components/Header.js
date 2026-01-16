import { useState, useEffect } from "react";
import "./RestaurentCard.css";
import { Link } from "react-router-dom";
import { LoginButton } from "./LoginButton"; // new component

export const Title = () => (
  <img
    className="Logo"
    alt="logo"
    src="https://i.pinimg.com/474x/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg"
  />
);

const Header = () => {
  return (
    <div className="header">
      <Title />

      <div className="nav-items">
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/about">ABOUT US</Link></li>
          <li><Link to="/contact">CONTACT US</Link></li>
          <li><Link to="/cart">CART</Link></li>
        </ul>
      </div>

      {/* ✅ LoginButton component added */}
      <div className="Loggin-btn">
        <LoginButton />
      </div>
    </div>
  );
};

export default Header;
