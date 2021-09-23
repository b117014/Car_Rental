const express = require("express");
const { createVehicle } = require("../handlers/vehicle");
const router = express.Router();

/**
 * Add new Vehicle
 */
router.post("/vehicle", createVehicle);

module.exports = router;
