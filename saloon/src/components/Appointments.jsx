import React, { useEffect, useState } from "react";
import { AdminNav } from "./AdminNav";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/appointments");
      const data = await response.json();
      setAppointments(data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  const updateApprovalStatus = async (id, status) => {
    try {
      const response = await fetch(`http://localhost:3000/api/appointments/${status}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
      });

      const result = await response.json();
      if (response.ok) {
        setAppointments(appointments.map(app => app._id === id ? { ...app, approval: status === "approve" ? "Approved" : "Rejected" } : app));
      } else {
        console.error(result.message);
      }
    } catch (error) {
      console.error(`Error updating appointment:`, error);
    }
  };

  const deleteAppointment = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/appointments/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setAppointments(appointments.filter(app => app._id !== id));
      } else {
        console.error("Failed to delete appointment");
      }
    } catch (error) {
      console.error("Error deleting appointment:", error);
    }
  };

  return (
    <>
      <AdminNav />
      <div className="mx-auto p-4 h-screen w-full bg-[url(../images/6.jpg)] bg-cover bg-center bg-no-repeat">
        <center><h2 className="text-4xl font-bold mb-4">Appointments</h2></center>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {appointments.map((appointment) => (
            <div key={appointment._id} className="border p-4 rounded-lg shadow-md bg-white">
              <h3 className="text-lg font-semibold">{appointment.name}</h3>
              <p><strong>Contact:</strong> {appointment.contact}</p>
              <p><strong>Service:</strong> {appointment.service}</p>
              <p><strong>Date:</strong> {appointment.date}</p>
              <p><strong>Time:</strong> {appointment.time}</p>
              <p><strong>Payment:</strong> {appointment.paymentMode}</p>
              <p><strong>Total Price:</strong> ₹{appointment.totalPrice}</p>
              <p><strong>Status:</strong> {appointment.approval}</p>
              <div className="mt-3 flex space-x-2">
                <button 
                  onClick={() => updateApprovalStatus(appointment._id, "approve")}
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700"
                  disabled={appointment.approval !== "Pending"}
                >
                  Approve
                </button>
                <button 
                  onClick={() => updateApprovalStatus(appointment._id, "reject")}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700"
                  disabled={appointment.approval !== "Pending"}
                >
                  Reject
                </button>
                <button 
                  onClick={() => deleteAppointment(appointment._id)}
                  className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Appointments;
