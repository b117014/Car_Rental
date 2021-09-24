const express = require("express");
const { createVehicle, bookVehicle } = require("../handlers/vehicle");
const router = express.Router();

/**
 * Add new Vehicle
 */
router.post("/vehicle", createVehicle);

/**
 * Book Vehicle
 */
router.post("/vehicle-book", bookVehicle);

module.exports = router;
