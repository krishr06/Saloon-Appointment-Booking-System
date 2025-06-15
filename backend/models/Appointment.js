const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: String, required: true },
  service: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  paymentMode: { type: String, required: true },
  totalPrice: { type: Number, required: true },
  approval: { type: String, default: "Pending" }, 
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
