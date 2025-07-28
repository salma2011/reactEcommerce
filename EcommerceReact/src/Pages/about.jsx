import React from 'react';

const About = () => {
  return (
    <div className="bg-white text-gray-800 py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <img
          src="https://images.unsplash.com/photo-1542831371-29b0f74f9713"
          alt="About Us"
          className="w-full h-80 object-cover rounded-lg shadow-md mb-8"
        />

        <h1 className="text-4xl font-bold mb-6">About Us</h1>

        <p className="text-lg leading-relaxed mb-4">
          Welcome to <span className="font-semibold text-blue-600">MyApp</span>, your go-to store for quality products and great customer experience.
          Since our launch in 2025, we have worked to offer a wide range of hand-picked items across fashion, tech, and home goods.
        </p>

        <p className="text-lg leading-relaxed mb-4">
          Our goal is to make shopping seamless, secure, and fun! We believe in customer satisfaction, modern design, and constant improvement.
          Whether you’re buying for yourself or someone special, we’re happy to serve you.
        </p>

        <p className="text-lg leading-relaxed">
          Thank you for supporting <span className="text-blue-600 font-medium">MyApp</span>. For questions or suggestions, feel free to contact us any time.
        </p>
      </div>
    </div>
  );
};

export default About;
