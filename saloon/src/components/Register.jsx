import React, { useState } from 'react';
import { Navbar } from "./Navbar";

export const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    username: '',
    password: '',
    confirmPassword: ''
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (formData.mobile.length !== 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Registration successful!");
        window.location.href="/login"
      } else {
        setError(data.message || "Registration failed");
      }
    } catch (error) {
      setError("Something went wrong");
    }
  };

  return (
    <>
    <Navbar/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-[url(../images/10.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="bg-white border border-black p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        {message && <p className="text-green-500 text-sm text-center">{message}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Name" onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="tel" name="mobile" placeholder="Mobile No" onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="text" name="username" placeholder="Username" onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} className="w-full p-2 border rounded" required />
          <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">Register</button>
        </form>
      </div>
    </div>
    </>
  );
};
