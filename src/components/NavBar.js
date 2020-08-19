import React from "react";
//import PropTypes from "prop-types";

import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <img
        src="https://mcrcodes.s3.eu-west-2.amazonaws.com/course/surreal-estate/logo.png"
        alt="estate-logo"
      ></img>
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <strong>View Properties</strong>
        </li>
        <li className="navbar-links-item">
          <strong>Add a Property</strong>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;
