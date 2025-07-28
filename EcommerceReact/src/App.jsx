import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Navbar from './Compnent/Include/Navbar';
import Home from './Pages/Home';
import About from './Pages/about';
import Category from './Pages/Category';
import Product from './Pages/product';
import Footer from './Compnent/Include/Footer';

const App = () => {
  const theme = useSelector(state => state.setting.theme);

  return (
    <Router>
      <div className={`${theme === 'dark' ? 'dark bg-gray-900 text-white' : 'bg-white text-black'} flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/category" element={<Category />} />
            <Route path="/products" element={<Product />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
