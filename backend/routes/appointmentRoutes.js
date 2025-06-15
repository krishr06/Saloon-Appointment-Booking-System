const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");

// Submit an appointment
router.post("/book", async (req, res) => {
  try {
    const { name, contact, service, date, time, paymentMode } = req.body;

    const servicePrices = {
      Haircut: 150,
      "Hair Coloring": 500,
      Facial: 1200,
      Manicure: 800,
      Pedicure: 900,
      Massage: 2000,
    };

    const totalPrice = servicePrices[service] || 0;

    const newAppointment = new Appointment({
      name,
      contact,
      service,
      date,
      time,
      paymentMode,
      totalPrice,
      approval: "Pending",
    });

    await newAppointment.save();
    res.status(201).json({ message: "Appointment booked successfully", newAppointment });
  } catch (error) {
    res.status(500).json({ message: "Error booking appointment", error });
  }
});

// Get all appointments
router.get("/", async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching appointments", error });
  }
});

// Approve an appointment
router.put("/approve/:id", async (req, res) => {
  try {
    const appointmentId = req.params.id;
    const updatedAppointment = await Appointment.findByIdAndUpdate(
      appointmentId,
      { approval: "Approved" },
      { new: true }
    );

    if (!updatedAppointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    res.status(200).json({ message: "Appointment approved", updatedAppointment });
  } catch (error) {
    res.status(500).json({ message: "Error approving appointment", error });
  }
});

// Reject an appointment
router.put("/reject/:id", async (req, res) => {
  try {
    const appointmentId = req.params.id;
    const updatedAppointment = await Appointment.findByIdAndUpdate(
      appointmentId,
      { approval: "Rejected" },
      { new: true }
    );

    if (!updatedAppointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    res.status(200).json({ message: "Appointment rejected", updatedAppointment });
  } catch (error) {
    res.status(500).json({ message: "Error rejecting appointment", error });
  }
});

// Delete an appointment
router.delete("/:id", async (req, res) => {
  try {
    const appointmentId = req.params.id;
    const deletedAppointment = await Appointment.findByIdAndDelete(appointmentId);

    if (!deletedAppointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    res.status(200).json({ message: "Appointment deleted successfully", deletedAppointment });
  } catch (error) {
    res.status(500).json({ message: "Error deleting appointment", error });
  }
});

module.exports = router;
