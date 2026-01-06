import { useEffect, useState } from "react";
import "./RestaurentCard.css";
import { Link, useNavigate } from "react-router-dom";

export const Title = () => (
  <img
    className="Logo"
    alt="logo"
    src="https://i.pinimg.com/474x/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg"
  />
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loginStatus === "true");
  }, []);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className="header">
      <Title />

      {/* ❌ import line removed from JSX */}
      <div className="nav-items">
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/about">ABOUT US</Link></li>
          <li><Link to="/contact">CONTACT US</Link></li>
          <li><Link to="/cards">CARDS</Link></li>
        </ul>
      </div>

      <div className="Loggin-btn">
        {isLoggedIn ? (
          <button onClick={handleLogout}>Log Out</button>
        ) : (
          <button onClick={handleLogin}>Log In</button>
        )}
      </div>
    </div>
  );
};

export default Header;
