const express = require("express");
const {
  createVehicle,
  bookVehicle,
  getUserBookedSlot,
  dropVehicle,
} = require("../handlers/vehicle");
const router = express.Router();

/**
 * Add new Vehicle
 */
router.post("/vehicle", createVehicle);

/**
 * Book Vehicle
 */
router.post("/vehicle-book", bookVehicle);

router.get("/user/vehicle-booked", getUserBookedSlot);
router.put("/vehicle-drop", dropVehicle);

module.exports = router;
