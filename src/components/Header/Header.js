import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="Header__nav">
        <Link className="Header__link Header__link--landing" to="/">
          Landing
        </Link>
        <Link className="Header__link Header__link--login" to="/login">
          login
        </Link>
        <Link className="Header__link Header__link--about" to="/Home">
          Home
        </Link>
        <Link className="Header__link Header__link--vault" to="/vault">
          Vault
        </Link>
      </div>
    </div>
  );
};

export default Header;
