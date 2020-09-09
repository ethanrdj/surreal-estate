import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faBath, faPoundSign } from "@fortawesome/free-solid-svg-icons";

import "../styles/SavedCard.css";

const SavedCard = ({
  propertyId,
  title,
  type,
  bathrooms,
  bedrooms,
  price,
  city,
  handleDeleteSaved,
}) => {
  const [seeMore, setSeeMore] = useState(false);
  const [seeLessButton, setSeeLessButton] = useState(true);

  const handleSeeMore = () => {
    setSeeMore(true);
    setSeeLessButton(false);
  };

  const handleSeeLess = () => {
    setSeeLessButton(true);
    setSeeMore(false);
  };
  return (
    <div className="SavedCard">
      <div>
        <div className="title-only">
          <div>
            {title} in {city}
          </div>
          {seeLessButton && (
            <>
              <button type="submit" onClick={handleSeeMore}>
                More Details
              </button>
              <button
                className="remove-button"
                type="submit"
                onClick={() => handleDeleteSaved(propertyId)}
              >
                Remove
              </button>
            </>
          )}
        </div>

        {seeMore && (
          <div className="more-details">
            <div>{type}</div>
            <div>
              <FontAwesomeIcon icon={faBath} />
              &nbsp;
              {bathrooms}
            </div>
            <div>
              <FontAwesomeIcon icon={faBed} />
              &nbsp;
              {bedrooms}
            </div>
            <div>
              <FontAwesomeIcon icon={faPoundSign} />
              &nbsp;
              {price}
            </div>
            <button type="submit" onClick={handleSeeLess}>
              See Less
            </button>
            <button
              className="remove-button"
              type="submit"
              onClick={() => handleDeleteSaved(propertyId)}
            >
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedCard;
