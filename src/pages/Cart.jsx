import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  if (cart.length === 0) {
    return <h2 className="text-center text-xl">Your cart is empty.</h2>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold">Shopping Cart</h1>
      {cart.map((item) => (
        <div key={item.id} className="flex justify-between border-b py-4">
          <div>
            <h2 className="text-lg">{item.name}</h2>
            <p>${item.price} x {item.quantity}</p>
          </div>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      ))}
      <button className="mt-4 bg-gray-600 text-white px-4 py-2 rounded" onClick={clearCart}>
        Clear Cart
      </button>
      <Link to="/checkout" className="ml-4 bg-green-500 text-white px-4 py-2 rounded">
        Proceed to Checkout
      </Link>
    </div>
  );
};

export default Cart;
