import React from "react";
//import PropTypes from "prop-types";

import image from "../styles/PropertyCard-placeholder.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faPoundSign,
  faEnvelopeOpen,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/PropertyCard.css";

const PropertyCard = ({
  _id,
  title,
  type,
  bathrooms,
  bedrooms,
  price,
  city,
  email,
  userId,
  onSaveProperty,
}) => {
  return (
    <div className="PropertyCard">
      <img className="flat-img" src={image} alt="placeholder"></img>
      <br></br>
      <div className="property-info">
        <div className="indi-item">{title}</div>
        <br></br>
        <div className="indi-item">{type}</div>
        <br></br>
        <div className="indi-item">
          <FontAwesomeIcon icon={faBath} /> {bathrooms}
        </div>
        <br></br>
        <div className="indi-item">
          <FontAwesomeIcon icon={faBed} /> {bedrooms}
        </div>
        <br></br>
        <div className="indi-item">
          <FontAwesomeIcon icon={faPoundSign} /> {price}
        </div>
        <br></br>
        <div className="indi-item">{city}</div>
        <br></br>
        <a href={`mailto=${email}`}>
          <button className="email-button" type="submit" data-testid="email">
            <FontAwesomeIcon icon={faEnvelopeOpen} /> Email
          </button>
        </a>
        {userId && (
          // eslint-disable-next-line
          <a href="#" className="save">
            <button type="submit" onClick={() => onSaveProperty(_id)}>
              <FontAwesomeIcon icon={faStar} />
              Save
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default PropertyCard;
