import React, { useState, useEffect } from "react";
import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
import useOnline from "../utils/useOnline";

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
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-50">
        <span className="text-6xl">📡</span>
        <h1 className="text-2xl font-bold text-gray-700">You're Offline</h1>
        <p className="text-gray-500">Please check your internet connection</p>
      </div>
    );
  }

  if (!restaurantData || restaurantData.length === 0) {
    return <Shimmer />;
  }

  const handleSearch = () => {
    const filtered = allRestaurants.filter((item) =>
      item.strMeal.toLowerCase().includes(searchText.toLowerCase())
    );
    setRestaurantData(filtered);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <main className="min-h-screen bg-gray-50">

      {/* ── Hero Section ── */}
      <section className="relative bg-gradient-to-br from-orange-500 via-orange-400 to-pink-500 overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-pink-600/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

        <div className="relative max-w-4xl mx-auto px-4 py-16 sm:py-24 text-center">
          <p className="text-orange-100 text-sm font-semibold tracking-widest uppercase mb-3">
            🍽️ Fresh &amp; Fast Delivery
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
            Hungry? We've Got <br />
            <span className="text-yellow-300">You Covered.</span>
          </h1>
          <p className="text-orange-100 text-lg mb-10 max-w-xl mx-auto">
            Explore hundreds of delicious meals — from street food to gourmet. Order in minutes.
          </p>

          {/* Search Bar */}
          <div className="flex items-center bg-white rounded-2xl shadow-2xl shadow-orange-900/20 overflow-hidden max-w-xl mx-auto">
            <span className="pl-5 text-gray-400 text-xl">🔍</span>
            <input
              type="text"
              className="flex-1 px-4 py-4 text-gray-800 text-base placeholder-gray-400 outline-none bg-transparent"
              placeholder="Search for meals, cuisines..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              className="m-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-bold rounded-xl transition-all duration-200 shadow-md"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>

          {/* Quick filters hint */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {["Chicken", "Pasta", "Seafood", "Vegetarian", "Dessert"].map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  setSearchText(tag);
                  const filtered = allRestaurants.filter((item) =>
                    item.strMeal.toLowerCase().includes(tag.toLowerCase()) ||
                    item.strCategory?.toLowerCase().includes(tag.toLowerCase())
                  );
                  setRestaurantData(filtered);
                }}
                className="px-4 py-1.5 bg-white/20 hover:bg-white/30 text-white text-sm font-medium rounded-full backdrop-blur-sm border border-white/30 transition-all duration-200 cursor-pointer"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Meals Grid ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900">
              {searchText ? `Results for "${searchText}"` : "All Meals"}
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              {restaurantData.length} meals available
            </p>
          </div>
          {searchText && (
            <button
              onClick={() => { setSearchText(""); setRestaurantData(allRestaurants); }}
              className="text-sm text-orange-500 hover:text-orange-700 font-semibold underline underline-offset-2 transition-colors"
            >
              Clear filter
            </button>
          )}
        </div>

        {restaurantData.length === 0 ? (
          <div className="text-center py-24">
            <span className="text-6xl">🍽️</span>
            <h3 className="text-xl font-bold text-gray-700 mt-4">No meals found</h3>
            <p className="text-gray-400 mt-2">Try a different search term</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {restaurantData.map((item) => (
              <RestaurentCard key={item.idMeal} meal={item} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default Body;