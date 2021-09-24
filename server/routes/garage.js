const express = require("express");
const {
  getGarages,
  createGarage,
  getGarageSlot,
} = require("../handlers/garage");
const router = express.Router();

router.get("/garages", getGarages);
router.post("/garage", createGarage);
/**
 * Get Garage Vehicle Slot
 */
router.get("/garage/:garageId", getGarageSlot);
module.exports = router;
