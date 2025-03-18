import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-500 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-white text-3xl font-semibold tracking-wider">College Supplies</h1>

        {/* Desktop Navigation (Horizontal Layout) */}
        <div className="hidden md:flex gap-20 justify-center text-left">
  <Link to="/" className="text-white hover:text-yellow-300 px-4">Home</Link>
  <Link to="/product/1" className="text-white hover:text-yellow-300 px-4">Product</Link>
  <Link to="/about" className="text-white hover:text-yellow-300 px-4">About</Link>
  <Link to="/contact" className="text-white hover:text-yellow-300 px-4">Contact</Link>
  <Link to="/cart" className="text-white hover:text-yellow-300 flex items-center px-4">
    <ShoppingCart className="w-6 h-6 mr-2" />
    Cart
  </Link>
</div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {menuOpen && (
        <div className="md:hidden bg-blue-500 px-6 py-3 flex flex-col space-y-4">
          <Link to="/" className="text-white hover:text-yellow-300 py-2" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/product/1" className="text-white hover:text-yellow-300 py-2" onClick={() => setMenuOpen(false)}>Product</Link>
          <Link to="/about" className="text-white hover:text-yellow-300 py-2" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" className="text-white hover:text-yellow-300 py-2" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link to="/cart" className="text-white hover:text-yellow-300 flex items-center py-2" onClick={() => setMenuOpen(false)}>
            <ShoppingCart className="w-6 h-6 mr-2" />
            Cart
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
