import React, { useState } from "react";
import axios from "axios";
import Alert from "./Alert";

import "../styles/AddProperty.css";

const initialState = {
  fields: {
    title: "",
    type: "Flat",
    bedrooms: "",
    bathrooms: "",
    price: "",
    city: "Manchester",
    email: "",
  },
  alert: {
    message: "",
    isSuccess: false,
  },
};

const AddProperties = () => {
  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const postProperty = async () => {
    await axios
      .post("http://localhost:4000/api/v1/PropertyListing", fields)
      .then(() => {
        setAlert({
          message: "Success, thank you for adding a property!",
          isSuccess: true,
        });
        console.log("hello");
      })
      .catch(() => {
        setAlert({
          message: "Server error. Please try again later.",
          isSuccess: false,
        });
      });
  };

  const handleAddProperty = (event) => {
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });
    postProperty();
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };
  return (
    <div className="AddProperty">
      <div className="outer-div">
        <h1>Add a Property</h1>
        <div className="full-form">
          <form onSubmit={handleAddProperty}>
            <Alert message={alert.message} success={alert.isSuccess} />
            <label htmlFor="title" className="select-boxes">
              Property Description
              <input
                id="title"
                name="title"
                value={fields.title}
                onChange={handleFieldChange}
                placeholder="Tell us about your property"
              />
            </label>
            <br></br>
            <label htmlFor="type">
              Property Type
              <select
                id="type"
                name="type"
                value={fields.type}
                onChange={handleFieldChange}
              >
                <option value="Flat">Flat</option>
                <option value="Detached">Detached</option>
                <option value="Semi-Detached">Semi-Detached</option>
                <option value="Terraced">Terraced</option>
                <option value="End of Terraced">End of Terraced</option>
                <option value="Cottage">Cottage</option>
                <option value="Bungalow">Bungalow</option>
              </select>
            </label>
            <br></br>

            <label htmlFor="bedrooms">
              Number of Bedrooms
              <input
                id="bedrooms"
                name="bedrooms"
                value={fields.bedrooms}
                onChange={handleFieldChange}
              />
            </label>
            <br></br>
            <label htmlFor="bathrooms">
              Number of bathrooms
              <input
                id="bathrooms"
                name="bathrooms"
                value={fields.bathrooms}
                onChange={handleFieldChange}
              />
            </label>
            <br></br>

            <label htmlFor="price">
              Price
              <input
                id="price"
                name="price"
                value={fields.price}
                onChange={handleFieldChange}
              />
            </label>
            <br></br>
            <label htmlFor="city" className="select-boxes">
              Select city
              <select
                id="city"
                name="city"
                value={fields.city}
                onChange={handleFieldChange}
              >
                <option value="Manchester">Manchester</option>
                <option value="Leeds">Leeds</option>
                <option value="Sheffield"> Sheffield</option>
                <option value="liverpool">Liverpool</option>
              </select>
            </label>
            <br></br>
            <label htmlFor="email">
              Your email address
              <input
                id="email"
                name="email"
                value={fields.email}
                onChange={handleFieldChange}
                placeholder="e.g. perd@YaHeard.com"
              />
            </label>
            <br></br>
            <button className="addProperty-Button" type="submit">
              Add
            </button>
          </form>
        </div>
        <img
          src="https://i.picsum.photos/id/448/2000/3000.jpg?hmac=tSsxjB3CM8n9sedYhJUXy1bpiSsDP3x6qVJtw72rei8"
          alt="house pictures"
          className="houses"
        ></img>
      </div>
    </div>
  );
};

export default AddProperties;
