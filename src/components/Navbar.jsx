import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Store Name */}
        <Link to="/" className="text-xl font-bold">College Supplies</Link>

        {/* Navigation Links */}
        <div className="flex gap-6">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/cart" className="relative hover:underline">
            🛒 Cart
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
