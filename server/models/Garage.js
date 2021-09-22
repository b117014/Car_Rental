const mongoose = require("mongoose");

const garageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    coordinates: [Number],
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  total_slot: {
    type: Number,
    default: 9,
  },
  vehicle: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vehicle",
    },
  ],
  slot: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Slot",
    },
  ],
});
garageSchema.index({ location: "2dsphere" });

const Garage = mongoose.model("Garage", garageSchema);
module.exports = Garage;
