import { useCart } from "../utils/CartContext";

const Cart = () => {
  const { cartItems, totalItems, totalPrice, increaseQty, decreaseQty, removeFromCart, clearCart } = useCart();

  if (cartItems.length === 0) return <h2>Your Cart is Empty</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Cart</h2>

      {cartItems.map((item) => (
        <div key={item.id} style={{ marginBottom: "10px" }}>
          <h4>{item.name}</h4>
          <p>Price: ₹{item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => decreaseQty(item.id)}>-</button>
          <button onClick={() => increaseQty(item.id)}>+</button>
          <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: "10px"}}>
            Remove
          </button>
        </div>
      ))}

      <h3>Total Items: {totalItems}</h3>
      <h3>Total Price: ₹{totalPrice}</h3>

      <button onClick={clearCart} style={{ marginTop: "10px" }}>Clear Cart</button>
    </div>
  );
};

export default Cart;
