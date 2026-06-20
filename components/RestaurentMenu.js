import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../utils/CartContext";

const RestaurentMenu = () => {
  const { resId } = useParams();
  const [menu, setMenu] = useState(null);
  const { addToCart } = useCart();
  const [addedItems, setAddedItems] = useState({});

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${resId}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.meals) return;
        const meal = data.meals[0];

        const items = Object.keys(meal)
          .filter((key) => key.startsWith("strIngredient") && meal[key])
          .map((key) => ({
            id: meal.idMeal + key,
            name: meal[key],
            price: Math.floor(Math.random() * 200) + 100,
          }));

        setMenu({
          id: meal.idMeal,
          name: meal.strMeal,
          image: meal.strMealThumb,
          items,
        });
      });
  }, [resId]);

  if (!menu)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-3 bg-gray-50">
        <div className="w-12 h-12 rounded-full border-4 border-orange-200 border-t-orange-500 animate-spin" />
        <p className="text-gray-500 font-medium">Loading Menu...</p>
      </div>
    );

  const handleAddToCart = (item) => {
    addToCart(item);
    setAddedItems((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [item.id]: false }));
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── Hero Banner ── */}
      <div className="relative h-64 sm:h-80 overflow-hidden">
        <img
          src={menu.image}
          alt={menu.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <span className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
            🍽️ Featured Meal
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white drop-shadow">
            {menu.name}
          </h1>
          <p className="text-orange-200 text-sm mt-1">
            {menu.items.length} ingredients available
          </p>
        </div>
      </div>

      {/* ── Menu Section ── */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">

        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-2xl font-extrabold text-gray-900">Ingredients Menu</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-orange-200 to-transparent" />
          <span className="bg-orange-50 text-orange-600 text-sm font-bold px-3 py-1 rounded-full border border-orange-200">
            {menu.items.length} items
          </span>
        </div>

        {menu.items.length === 0 ? (
          <div className="text-center py-20">
            <span className="text-5xl">🥗</span>
            <p className="text-gray-500 mt-3 font-medium">No menu items available</p>
          </div>
        ) : (
          <ul className="space-y-3">
            {menu.items.map((item, idx) => (
              <li
                key={item.id}
                className="flex items-center justify-between bg-white rounded-2xl px-5 py-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-orange-100 transition-all duration-200 group"
              >
                {/* Left */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 font-extrabold text-sm flex-shrink-0 group-hover:bg-orange-100 transition-colors">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{item.name}</p>
                    <p className="text-xs text-gray-400 mt-0.5">Fresh ingredient</p>
                  </div>
                </div>

                {/* Right */}
                <div className="flex items-center gap-4">
                  <span className="text-base font-extrabold text-gray-900">
                    ₹{item.price}
                  </span>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 active:scale-95 min-w-[90px]
                      ${addedItems[item.id]
                        ? "bg-green-500 text-white shadow-md shadow-green-200"
                        : "bg-orange-500 hover:bg-orange-600 text-white shadow-md shadow-orange-200"
                      }`}
                  >
                    {addedItems[item.id] ? "✓ Added!" : "+ Add"}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default RestaurentMenu;