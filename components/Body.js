// Body.js
import React, { useState, useEffect } from "react";
import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
import useOnline from "../utils/useOnline";
import "./Body.css";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurantData, setRestaurantData] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => res.json())
      .then((data) => {
        setRestaurantData(data.meals || []);
        setAllRestaurants(data.meals || []);
      });
  }, []);

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>Offline, please check your internet connection</h1>;
  }

  if (!restaurantData || restaurantData.length === 0) {
    return <Shimmer />;
  }

  return (
    <>
      {/* Search */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search meal"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const filtered = allRestaurants.filter((item) =>
              item.strMeal.toLowerCase().includes(searchText.toLowerCase())
            );
            setRestaurantData(filtered);
          }}
        >
          Search
        </button>
      </div>

      {/* Cards */}
      <div className="Restaurent-List" style={{ display: "flex", flexWrap: "wrap" }}>
        {restaurantData.map((item) => (
          <RestaurentCard key={item.idMeal} meal={item} />
        ))}
      </div>
    </>
  );
};

export default Body;
