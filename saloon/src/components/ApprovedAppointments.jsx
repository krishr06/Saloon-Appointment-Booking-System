import React, { useEffect, useState } from "react";
import { AdminNav } from "./AdminNav";

const ApprovedAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/appointments");
        const data = await response.json();
        const approvedAppointments = data.filter(
          (appointment) => appointment.approval === "Approved"
        );
        setAppointments(approvedAppointments);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, []);

  return (
  <>
  <AdminNav/>
  <div className="p-6 w-full h-screen bg-[url(../images/5.jpg)] bg-cover bg-center bg-no-repeat">
      <center><h1 className="text-4xl font-bold text-center mb-6 text-white">Approved Appointments</h1></center>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {appointments.map((appointment) => (
          <div
            key={appointment._id}
            className="bg-white p-4 rounded-lg shadow-md border"
          >
            <h2 className="text-xl font-semibold">{appointment.service}</h2>
            <p className="text-gray-600">Name: {appointment.name}</p>
            <p className="text-gray-600">Contact: {appointment.contact}</p>
            <p className="text-gray-600">Date: {appointment.date}</p>
            <p className="text-gray-600">Time: {appointment.time}</p>
            <p className="text-gray-600">Payment Mode: {appointment.paymentMode}</p>
            <p className="text-gray-800 font-bold">Total Price: ₹{appointment.totalPrice}</p>
          </div>
        ))}
      </div>
    </div>
  </>
  );
};

export default ApprovedAppointments;
