import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import qs from "qs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "../styles/SideBar.css";

const SideBar = () => {
  const [query, setQuery] = useState();
  const [seeMoreFilter, setSeeMoreFilter] = useState(false);
  const [seeLessFilter, setSeeLessFilter] = useState(false);
  const [showSeeMoreButton, setShowSeeMoreButton] = useState(true);
  const [seeSorting, setSeeSorting] = useState(false);
  const [hideSorting, setHideSorting] = useState(false);
  const [hideSortButton, setHideSortButton] = useState(true);

  const { search } = useLocation();
  const history = useHistory();

  const handleSeeFilters = () => {
    setSeeMoreFilter(true);
    setShowSeeMoreButton(false);
    setSeeLessFilter(true);
  };

  const handleHideFilters = () => {
    setSeeMoreFilter(false);
    setShowSeeMoreButton(true);
    setSeeLessFilter(false);
  };

  const handleSort = () => {
    setSeeSorting(true);
    setHideSorting(true);
    setHideSortButton(false);
  };

  const handleHideSortButton = () => {
    setSeeSorting(false);
    setHideSorting(false);
    setHideSortButton(true);
  };

  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || "{}"),
        ...valueObj,
      }),
    };
    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newQueryString = buildQueryString("query", {
      title: { $regex: query },
    });
    history.push(newQueryString);
  };
  return (
    <div className="SideBar">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          className="type-search"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by type"
        ></input>
        <button type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
      {showSeeMoreButton && (
        <button type="submit" onClick={handleSeeFilters}>
          Filter by city:
        </button>
      )}
      {seeLessFilter && (
        <button type="submit" onClick={handleHideFilters}>
          Hide Filters
        </button>
      )}
      {seeMoreFilter && (
        <ul className="side-bar-content">
          <li>
            <Link to={buildQueryString("query", { city: "Manchester" })}>
              Manchester
            </Link>
          </li>
          <li>
            <Link to={buildQueryString("query", { city: "Leeds" })}>Leeds</Link>
          </li>
          <li>
            <Link to={buildQueryString("query", { city: "Sheffield" })}>
              Sheffield
            </Link>
          </li>
          <li>
            <Link to={buildQueryString("query", { city: "Liverpool" })}>
              Liverpool
            </Link>
          </li>
          <li>
            <Link to="/">Remove filter</Link>
          </li>
        </ul>
      )}
      {hideSortButton && (
        <button type="submit" onClick={handleSort}>
          Sort by price:
        </button>
      )}
      {hideSorting && (
        <button type="submit" onClick={handleHideSortButton}>
          Hide sorting
        </button>
      )}
      {seeSorting && (
        <ul>
          <li>
            <Link to={buildQueryString("sort", { price: -1 })}>Low-High</Link>
          </li>
          <li>
            <Link to={buildQueryString("sort", { price: 1 })}>High-Low</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default SideBar;
