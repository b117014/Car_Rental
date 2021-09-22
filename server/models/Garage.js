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
});
garageSchema.index({ location: "2dsphere" });

const Garage = mongoose.model("Garage", garageSchema);
module.exports = Garage;
