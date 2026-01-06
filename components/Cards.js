import React from "react";
import Card from "./Card";

const foodList = [
  {
    id: 1,
    name: "Pizza",
    image:
      "https://images.unsplash.com/photo-1604382355076-af4b0eb60143",
    price: 199,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Burger",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349",
    price: 149,
    rating: 4.2,
  },
  {
    id: 3,
    name: "Pasta",
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b", // ✅ WORKING IMAGE
    price: 179,
    rating: 4.3,
  },
];

const Cards = () => {
  return (
    <div className="cards-container">
      {foodList.map((item) => (
        <Card key={item.id} food={item} />
      ))}
    </div>
  );
};

export default Cards;
