import React, { useState, useEffect } from "react";
import axios from "axios";
import SavedCard from "./SavedCard";

import "../styles/SavedProperties.css";

const SavedProperties = ({ userId }) => {
  const [savedProperties, setSavedProperties] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/Favourite?populate=propertyListing")
      .then(({ data }) => {
        setSavedProperties(data);
      });
  }, [savedProperties]);

  const handleDeleteSaved = (propertyId) => {
    axios.delete(`http://localhost:4000/api/v1/Favourite/${propertyId}`);
  };

  return (
    <div className="SavedProperties">
      <h1>Saved Properties</h1>
      {savedProperties.map((property) => (
        <div key={property.propertyListing.id} className="saved-item">
          <SavedCard
            {...property.propertyListing}
            propertyId={property._id}
            handleDeleteSaved={handleDeleteSaved}
          />
        </div>
      ))}
    </div>
  );
};

export default SavedProperties;
