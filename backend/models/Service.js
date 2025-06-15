const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    duration: { type: String, required: true }
});

module.exports = mongoose.model("Service", ServiceSchema);
