import React from "react";
import { Link } from "react-router-dom";

const RestaurentCard = ({ meal }) => {
  return (
    <Link
      to={`/restaurant/${meal.idMeal}`}
      className="group block no-underline"
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 cursor-pointer">

        {/* Image */}
        <div className="relative overflow-hidden aspect-square">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Category Badge */}
          <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow">
            {meal.strCategory}
          </span>
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Info */}
        <div className="p-3">
          <h3 className="font-bold text-gray-900 text-sm leading-snug line-clamp-2 mb-1 group-hover:text-orange-500 transition-colors duration-200">
            {meal.strMeal}
          </h3>
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <span className="text-orange-400">📍</span>
            <span className="truncate">{meal.strArea}</span>
          </div>

          {/* CTA */}
          <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
            <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
              Free Delivery
            </span>
            <span className="text-orange-500 text-xs font-bold group-hover:translate-x-0.5 transition-transform duration-200">
              View →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurentCard;