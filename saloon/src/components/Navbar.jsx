import React from 'react';

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-black text-white py-4 px-6 shadow-lg">
      <div>
        <h1 className="text-2xl font-semibold text-yellow-500">LUXURY SALOON</h1>
      </div>
      <div className="space-x-6">
        <a href="/login" className="text-gray-300 hover:text-yellow-500 transition">Login</a>
        <a href="/register" className="text-gray-300 hover:text-yellow-500 transition">Register</a>
      </div>
    </nav>
  );
};
