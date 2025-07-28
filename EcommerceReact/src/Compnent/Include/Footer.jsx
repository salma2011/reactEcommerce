import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-70 text-white py-10 min-h-[180px]">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">

        {/* Navigation Links */}
        <div className="mb-6 md:mb-0 flex flex-wrap gap-6 justify-center md:justify-start">
          <Link to="/" className="hover:text-blue-400 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-400 transition">About</Link>
          <Link to="/products" className="hover:text-blue-400 transition">Products</Link>
          <Link to="/categories" className="hover:text-blue-400 transition">Categories</Link>
          <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
          <Link to="/faq" className="hover:text-blue-400 transition">FAQ</Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-8 text-2xl mb-6 md:mb-0">
          <a href="https://wa.me/96891234567" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
            <FaWhatsapp />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* حقوق @ اقد */}
      <div className="text-center text-sm opacity-70 mt-8">
        &copy; {new Date().getFullYear()} جميع الحقوق محفوظة @ اقد
      </div>
    </footer>
  );
};

export default Footer;
