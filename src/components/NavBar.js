import React from "react";
//import PropTypes from "prop-types";

import "../styles/NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <img
        src="https://mcrcodes.s3.eu-west-2.amazonaws.com/course/surreal-estate/logo.png"
        alt="estate-logo"
      ></img>
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link to="/" data-testid="link-test">
            View Properties
          </Link>
        </li>
        <li className="navbar-links-item">
          <Link to="/add-property">Add a Property</Link>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;
