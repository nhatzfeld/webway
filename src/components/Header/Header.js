import React, { Component } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div style={{ display: "flex " }}>
      <Link to="/"> Home </Link>
      <Link to="/myfiles"> My Files </Link>
      <Link to="/about"> About </Link>
      <Link to="/upload">Upload Files</Link>
      <Link to="/download">Download Files</Link>
    </div>
  );
};

export default Header;
