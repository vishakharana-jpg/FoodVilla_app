import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../utils/CartContext";

const RestaurentMenu = () => {
  const { resId } = useParams();
  const [menu, setMenu] = useState(null);
  const { addToCart } = useCart(); // useCart hook for addToCart

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${resId}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.meals) return;

        const meal = data.meals[0];

  // Ingredients as menu items
        const items = Object.keys(meal)
          .filter((key) => key.startsWith("strIngredient") && meal[key])
          .map((key) => ({
            id: meal.idMeal + key, // unique id for CartContext
            name: meal[key],
            price: Math.floor(Math.random() * 200) + 100, // random price
          }));

        setMenu({
          id: meal.idMeal,
          name: meal.strMeal,
          image: meal.strMealThumb,
          items,
        });
      });
  }, [resId]);

  if (!menu) return <h2>Loading Menu...</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{menu.name}</h1>
      <img
        src={menu.image}
        width="300"
        alt={menu.name}
        style={{ borderRadius: "8px" }}
      />

      <h2>Menu</h2>
      {menu.items.length === 0 ? (
        <p>No menu items available</p>
      ) : (
        <ul>
          {menu.items.map((item) => (
            <li key={item.id} style={{ marginBottom: "10px" }}>
              {item.name} – ₹{item.price}{" "}
            <button
  onClick={() => {
    addToCart(item);
    alert(`${item.name} added to cart`);
  }}
  style={{
    marginLeft: "10px",
    padding: "6px 12px",
    backgroundColor: "green",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  }}
>
  Add to Cart
</button>

            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RestaurentMenu;
