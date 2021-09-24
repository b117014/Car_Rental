const express = require("express");
const {
  getGarages,
  createGarage,
  getGarageSlot,
  getGarage,
} = require("../handlers/garage");
const router = express.Router();

router.get("/garages", getGarages);
router.get("/garage-info/:garageId", getGarage);
router.post("/garage", createGarage);
/**
 * Get Garage Vehicle Slot
 */
router.get("/garage/:garageId", getGarageSlot);
module.exports = router;
