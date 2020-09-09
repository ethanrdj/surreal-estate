import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import SideBar from "./SideBar";

import "../styles/Properties.css";

const Properties = ({ userId }) => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "" });
  const { search } = useLocation();

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

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/PropertyListing${search}`)
      .then(({ data }) => setProperties(data))
      .catch((err) => console.error(err));
  }, [search]);

  const handleSaveProperty = async (propertyId) => {
    await axios.post("http://localhost:4000/api/v1/Favourite", {
      propertyListing: propertyId,
      fbUserId: userId,
    });
  };

  return (
    <div className="Properties">
      <div className="sb">
        <SideBar />
      </div>
      {properties.map((property) => (
        <div key={property.id} className="item">
          <PropertyCard
            {...property}
            userId={userId}
            onSaveProperty={handleSaveProperty}
          />
        </div>
      ))}
    </div>
  );
};

export default Properties;
