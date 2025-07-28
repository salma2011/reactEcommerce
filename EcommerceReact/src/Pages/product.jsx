import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../Store/CartSlice';  // عدل المسار حسب مكان cartSlice عندك

const products = [
  { id: 1, name: 'Wireless Headphones', price: '$99', category: 'Electronics', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Smart Watch', price: '$149', category: 'Electronics', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Bluetooth Speaker', price: '$79', category: 'Electronics', image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Running Shoes', price: '$120', category: 'Fashion', image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Leather Jacket', price: '$199', category: 'Fashion', image: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Cooking Pan', price: '$39', category: 'Home', image: 'https://via.placeholder.com/150' },
];

const Product = () => {
  const { category } = useParams();
  const dispatch = useDispatch();

  const filteredProducts = category
    ? products.filter((p) => p.category === category)
    : products;

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-[70vh]">
      <h1 className="text-3xl font-bold text-center mb-8">
        {category ? `${category} Products` : 'All Products'}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-700">{product.price}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
