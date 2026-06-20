import { useCart } from "../utils/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cartItems,
    totalItems,
    totalPrice,
    increaseQty,
    decreaseQty,
    removeFromCart,
    clearCart,
  } = useCart();

  if (cartItems.length === 0)
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-4 px-4">
        <div className="w-28 h-28 bg-orange-50 rounded-full flex items-center justify-center">
          <span className="text-6xl">🛒</span>
        </div>
        <h2 className="text-2xl font-extrabold text-gray-800">Your cart is empty</h2>
        <p className="text-gray-400 text-center max-w-xs">
          Looks like you haven't added anything yet. Go explore our menu!
        </p>
        <Link
          to="/"
          className="mt-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all duration-200 active:scale-95 shadow-md shadow-orange-200"
        >
          Explore Meals
        </Link>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900">My Cart</h2>
            <p className="text-sm text-gray-400 mt-0.5">{totalItems} item{totalItems !== 1 ? "s" : ""} in your cart</p>
          </div>
          <button
            onClick={clearCart}
            className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-red-500 bg-red-50 hover:bg-red-100 rounded-xl transition-all duration-200 border border-red-100"
          >
            🗑️ Clear All
          </button>
        </div>

        {/* Cart Items */}
        <div className="space-y-3 mb-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white rounded-2xl px-5 py-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200"
            >
              {/* Left: Item Info */}
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 text-lg flex-shrink-0">
                  🥗
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-gray-800 text-sm truncate">{item.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">₹{item.price} each</p>
                </div>
              </div>

              {/* Middle: Qty Controls */}
              <div className="flex items-center gap-2 mx-4">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-orange-100 hover:text-orange-600 text-gray-700 font-bold text-lg flex items-center justify-center transition-all duration-150 active:scale-90"
                >
                  −
                </button>
                <span className="w-8 text-center font-extrabold text-gray-800 text-sm">
                  {item.quantity}
                </span>
                <button
                  onClick={() => increaseQty(item.id)}
                  className="w-8 h-8 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg flex items-center justify-center transition-all duration-150 active:scale-90 shadow-sm"
                >
                  +
                </button>
              </div>

              {/* Right: Price + Remove */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className="font-extrabold text-gray-900 text-sm w-16 text-right">
                  ₹{item.price * item.quantity}
                </span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="w-8 h-8 rounded-lg bg-red-50 hover:bg-red-100 text-red-400 hover:text-red-500 flex items-center justify-center transition-all duration-150 text-base"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
          <h3 className="font-extrabold text-gray-900 text-base mb-4">Order Summary</h3>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-gray-500">
              <span>Items ({totalItems})</span>
              <span className="font-semibold text-gray-700">₹{totalPrice}</span>
            </div>
            <div className="flex justify-between text-gray-500">
              <span>Delivery fee</span>
              <span className="font-semibold text-green-500">FREE</span>
            </div>
            <div className="flex justify-between text-gray-500">
              <span>Taxes & charges</span>
              <span className="font-semibold text-gray-700">₹{Math.round(totalPrice * 0.05)}</span>
            </div>
          </div>

          <div className="border-t border-dashed border-gray-200 my-4" />

          <div className="flex justify-between items-center mb-5">
            <span className="font-extrabold text-gray-900 text-base">Total</span>
            <span className="font-extrabold text-orange-500 text-xl">
              ₹{totalPrice + Math.round(totalPrice * 0.05)}
            </span>
          </div>

          <button className="w-full py-4 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-extrabold rounded-2xl text-base transition-all duration-200 active:scale-[0.98] shadow-lg shadow-orange-200">
            Place Order 🎉
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;