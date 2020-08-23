import React, { useState, useEffect } from "react";
import axios from "axios";
import PropertyCard from "./PropertyCard";

import "../styles/Properties.css";
const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "" });

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("http://localhost:4000/api/v1/PropertyListing")
        .then(({ data }) => setProperties(data))
        .catch(() =>
          setAlert({ message: "Server error. Please try again later." })
        );
    };
    fetchData();
  }, []);
  return (
    <div className="Properties">
      {properties.map((property) => (
        <div key={property.id} className="item">
          <PropertyCard {...property} />
        </div>
      ))}
    </div>
  );
};

export default Properties;
