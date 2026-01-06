// RestaurentMenu.js
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const RestaurentMenu = () => {
  const { resId } = useParams();
  const [menu, setMenu] = useState(null);

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
            name: meal[key],
            price: Math.floor(Math.random() * 200) + 100, // random price
          }));

        setMenu({
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
      <img src={menu.image} width="300" alt={menu.name} style={{ borderRadius: "8px" }} />

      <h2>Menu</h2>
      {menu.items.length === 0 ? (
        <p>No menu items available</p>
      ) : (
        <ul>
          {menu.items.map((item, idx) => (
            <li key={idx}>
              {item.name} – ₹{item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RestaurentMenu;
