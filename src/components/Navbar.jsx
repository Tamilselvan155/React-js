import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiMenu, FiX, FiUser } from "react-icons/fi";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { cartItems } = useCart();

  const userMenuRef = useRef();

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Close user menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-gray-800">
            <b>Astril</b>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-gray-700">
            <li><Link to="/" className="hover:text-blue-600 transition">Home</Link></li>
            <li><Link to="/shop" className="hover:text-blue-600 transition">Offers</Link></li>
            <li><Link to="/shop/men" className="hover:text-blue-600 transition">Men</Link></li>
            <li><Link to="/shop/women" className="hover:text-blue-600 transition">Women</Link></li>
            <li><Link to="/shop/electronics" className="hover:text-blue-600 transition">Electronics</Link></li>
            <li><Link to="/about" className="hover:text-blue-600 transition">About</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600 transition">Contact</Link></li>
          </ul>

          {/* Icons */}
          <div className="flex items-center space-x-4 relative">
            {/* Cart */}
            <Link to="/cart" className="text-gray-700 hover:text-blue-600 relative">
              <FiShoppingCart size={24} />
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalQuantity}
                </span>
              )}
            </Link>

            {/* User Icon & Dropdown */}
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setUserMenuOpen(prev => !prev)}
                className="text-gray-700 hover:text-blue-600"
              >
                <FiUser size={24} />
              </button>
              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-md z-50">
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    Create Account
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white py-4 space-y-4 text-center shadow-md">
            <Link to="/" className="block text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/shop" className="block text-gray-700 hover:text-blue-600">Offers</Link>
            <Link to="/shop/men" className="block text-gray-700 hover:text-blue-600">Men</Link>
            <Link to="/shop/women" className="block text-gray-700 hover:text-blue-600">Women</Link>
            <Link to="/shop/electronics" className="block text-gray-700 hover:text-blue-600">Electronics</Link>
            <Link to="/about" className="block text-gray-700 hover:text-blue-600">About</Link>
            <Link to="/contact" className="block text-gray-700 hover:text-blue-600">Contact</Link>
            <Link to="/login" className="block text-gray-700 hover:text-blue-600">Login</Link>
            <Link to="/register" className="block text-gray-700 hover:text-blue-600">Create Account</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
