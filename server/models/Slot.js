const mongoose = require("mongoose");

const slotSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    vehicle: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vehicle",
    },
    pick_date: {
      type: String,
    },
    drop_date: {
      type: String,
    },
    garage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Garage",
    },
    is_dropped: {
      type: Boolean,
      default: false,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Slot = mongoose.model("Slot", slotSchema);
module.exports = Slot;
