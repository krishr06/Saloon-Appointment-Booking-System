import React from 'react';
import { useNavigate } from 'react-router-dom';

export const AdminNav = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/'); // Uses React Router for smooth navigation
  };

  return (
    <nav className="flex justify-between items-center bg-black text-white py-4 px-6 shadow-lg">
      <div>
        <h1 className="text-2xl font-semibold text-yellow-500">LUXURY SALOON</h1>
      </div>
      <div className="space-x-6">
        <a href="/appointments" className="text-gray-300 hover:text-yellow-500 transition">Appointments</a>
        <a href="/scheduledAppointments" className="text-gray-300 hover:text-yellow-500 transition">Scheduled Appointments</a>
        <p 
          onClick={handleLogout} 
          className="cursor-pointer text-red-400 hover:text-red-600 transition inline-block"
        >
          Logout
        </p>
      </div>
    </nav>
  );
};
