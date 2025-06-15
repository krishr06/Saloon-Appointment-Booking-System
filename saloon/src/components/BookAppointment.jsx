import React, { useState } from "react";
import axios from "axios";
import { UserNav } from "./UserNav";
export const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    service: "Haircut",
    date: "",
    time: "",
    paymentMode: "Cash",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const services = {
    Haircut: 150,
    "Hair Coloring": 500,
    Facial: 1200,
    Manicure: 800,
    Pedicure: 900,
    Massage: 2000,
  };

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post("http://localhost:3000/api/appointments/book", formData);
      setMessage(response.data.message);
      setFormData({
        name: "",
        contact: "",
        service: "Haircut",
        date: "",
        time: "",
        paymentMode: "Cash",
      });
    } catch (error) {
      setMessage("Failed to book appointment. Please try again.");
      console.error("Error:", error);
    }

    setLoading(false);
  };

  return (
    <>
    <UserNav/>
    <section className="w-full h-screen bg-[url(../images/3.jpg)] bg-cover bg-center bg-no-repeat flex justify-center items-center">
    <div className=" w-1/4 p-6 shadow-lg rounded-lg bg-white border">
      <h2 className="text-2xl font-bold text-center mb-4">Book Appointment</h2>

      {/* Form */}
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Contact Number */}
        <div>
          <label className="block text-gray-700">Contact No</label>
          <input
            type="tel"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your contact number"
            required
          />
        </div>

        {/* Service Type */}
        <div>
          <label className="block text-gray-700">Service Type</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            {Object.keys(services).map((service) => (
              <option key={service} value={service}>
                {service} - ₹{services[service]}
              </option>
            ))}
          </select>
        </div>

        {/* Date */}
        <div>
          <label className="block text-gray-700">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Time */}
        <div>
          <label className="block text-gray-700">Time</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Payment Mode */}
        <div>
          <label className="block text-gray-700">Payment Mode</label>
          <select
            name="paymentMode"
            value={formData.paymentMode}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="Cash">Cash</option>
            <option value="Online">Online</option>
          </select>
        </div>

        {/* Total Price */}
        <div className="text-xl font-semibold text-blue-600">
          Total: ₹{services[formData.service]}
        </div>

        {/* UPI QR Code (Image Placeholder) */}
        {formData.paymentMode === "Online" && (
          <div className="text-center">
            <label className="block text-gray-700 font-semibold mb-2">Scan to Pay (UPI)</label>
            <img
              src="/src/upiQR.jpg"
              alt="UPI QR Code"
              className="w-40 mx-auto border p-2 rounded-lg shadow"
            />
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          disabled={loading}
        >
          {loading ? "Booking..." : "Book Appointment"}
        </button>
      </form>

      {/* Message Display */}
      {message && (
        <div className={`mt-4 p-2 text-center ${message.includes("successfully") ? "text-green-600" : "text-red-600"}`}>
          {message}
        </div>
      )}
    </div>
    </section>
    
    </>
  );
};

export default BookAppointment;
