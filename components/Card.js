import React from "react";

const Card = ({ food }) => {
  const { name, image, price, rating } = food;

  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>₹ {price}</p>
      <p>⭐ {rating}</p>
    </div>
  );
};

export default Card;
