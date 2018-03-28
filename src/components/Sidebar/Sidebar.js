import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="Sidebar__nav">
        <Link className="Sidebar__link Sidebar__link--landing" to="/" />
        <Link className="Sidebar__link Sidebar__link--login" to="/login" />
      </div>
    </div>
  );
};

export default Sidebar;
