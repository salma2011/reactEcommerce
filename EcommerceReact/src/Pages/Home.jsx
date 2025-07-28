import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-4 py-10 rounded-md shadow-md">
      <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Welcome to the Home Page</h1>
      <p className="text-lg max-w-xl text-center opacity-90">
        This is your React app powered by <span className="font-semibold">Tailwind CSS</span>. Customize it as you like and enjoy building beautiful UIs!
      </p>
    </div>
  );
};

export default Home;
