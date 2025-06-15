import React, { useState } from 'react';
import { UserNav } from './UserNav'
export const Notification = () => {
  const [contact, setContact] = useState('');
  const [notification, setNotification] = useState(null);
  const [error, setError] = useState('');

  const handleCheckNotifications = async () => {
    setError('');
    setNotification(null);

    try {
      const response = await fetch("http://localhost:3000/api/appointments");
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch notifications");
      }

      const userAppointments = data.filter(
        (appointment) => appointment.contact === contact && appointment.approval !== "Pending"
      );

      if (userAppointments.length > 0) {
        setNotification(userAppointments);
      } else {
        setError("No approved or rejected appointments found for this contact number.");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
   <>
    <UserNav/>
   <div className="flex flex-col items-center justify-center h-screen p-6 bg-[url(../images/7.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 border">
        <h2 className="text-2xl font-bold mb-4 text-center">Check Appointment Status</h2>
        <input
          type="text"
          placeholder="Enter Contact Number"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        <button
          onClick={handleCheckNotifications}
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Check Notifications
        </button>
        {error && <p className="text-red-500 text-sm text-center mt-4">{error}</p>}
        {notification && (
          <div className="mt-4">
            <h3 className="text-lg font-bold text-center">Appointment Status</h3>
            {notification.map((appointment) => (
              <p key={appointment._id} className={`text-center mt-2 ${appointment.approval === "Approved" ? "text-green-500" : "text-red-500"}`}>
                {appointment.service} appointment is {appointment.approval}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
   </>
  );
};
