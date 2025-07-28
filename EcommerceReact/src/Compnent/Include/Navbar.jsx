import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaShoppingCart, FaMoon, FaSun } from 'react-icons/fa';
import { toggleTheme } from '../../Store/SettingSlice';  // عدّل المسار حسب مشروعك

const Navbar = () => {
  const dispatch = useDispatch();
const darkMode = useSelector(state => state.setting.theme === 'dark');
  const cartItems = useSelector(state => state.cart.items);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <nav className={`px-6 py-4 shadow-md flex justify-between items-center
      ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <h2 className="text-2xl font-bold">MyApp</h2>
      <div className="flex space-x-6 items-center">
        <Link to="/" className="hover:text-blue-400 transition">Home</Link>
        <Link to="/about" className="hover:text-blue-400 transition">About</Link>
        <Link to="/category" className="hover:text-blue-500">Categories</Link>
        <Link to="/products" className="hover:text-blue-400 transition">Products</Link>

        <button
          onClick={handleToggleTheme}
          className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
        </button>

        <Link to="/cart" className="relative hover:text-blue-400">
          <FaShoppingCart size={20} />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 rounded-full text-xs w-5 h-5 flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
