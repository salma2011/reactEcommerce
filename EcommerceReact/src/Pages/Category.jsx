// Pages/Category.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const categories = ['Electronics', 'Fashion', 'Home'];

const Category = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-[60vh]">
      <h1 className="text-3xl font-bold mb-6 text-center">Shop by Category</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {categories.map((cat) => (
          <Link
            key={cat}
            to={`/products/${cat}`}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            {cat}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
