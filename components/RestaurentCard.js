
// RestaurentCard.js
import React from "react";
import { Link } from "react-router-dom";

const RestaurentCard = ({ meal }) => {
  return (
    <Link to={`/restaurant/${meal.idMeal}`} style={{ textDecoration: "none", color: "black" }}>
      <div className="card" style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "8px", width: "200px", margin: "10px" }}>
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          width="180"
          style={{ borderRadius: "6px" }}
        />
        <h3>{meal.strMeal}</h3>
        <p>{meal.strCategory} | {meal.strArea}</p>
      </div>
    </Link>
  );
};

export default RestaurentCard;
