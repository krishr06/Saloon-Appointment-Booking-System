import React from 'react';
import { useNavigate } from 'react-router-dom';

export const UserNav = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/'); 
  };

  return (
    <nav className="flex justify-between items-center bg-black text-white py-4 px-6 shadow-lg">
      <div>
        <h1 className="text-2xl font-semibold text-yellow-500">LUXURY SALOON</h1>
      </div>
      <div className="space-x-6">
        <a href="/services" className="text-gray-300 hover:text-yellow-500 transition">Services</a>
        <a href="/booking" className="text-gray-300 hover:text-yellow-500 transition">Book Appointment</a>
        <a href="/notifications" className="text-gray-300 hover:text-yellow-500 transition">Notifications</a>
        <a onClick={handleLogout} className="cursor-pointer text-red-400 hover:text-red-600 transition">
          Logout
        </a>
      </div>
    </nav>
  );
};
