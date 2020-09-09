import React from "react";
//import PropTypes from "prop-types";
import FaceBookLogin from "react-facebook-login/dist/facebook-login-render-props";

import "../styles/NavBar.css";
import { Link } from "react-router-dom";

const NavBar = ({ onLogin, userId, onLogout }) => {
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
        <li className="navbar-links-item">
          {userId && <Link to="saved-properties">Saved Properties</Link>}
        </li>
      </ul>
      {userId ? (
        <button className="signout" onClick={onLogout}>
          LOG OUT
        </button>
      ) : (
        <div>
          <FaceBookLogin
            appId="925122757975357"
            autoLoad={true}
            fields="name,email,picture"
            callback={onLogin}
            render={(renderProps) => (
              <button className="facebook" onClick={renderProps.onClick}>
                LOGIN WITH FACEBOOK
              </button>
            )}
          />
        </div>
      )}
    </div>
  );
};
export default NavBar;
