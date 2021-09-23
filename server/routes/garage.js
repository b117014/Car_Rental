const express = require("express");
const { getGarages, createGarage } = require("../handlers/garage");
const router = express.Router();

router.get("/garages", getGarages);
router.post("/garage", createGarage);

module.exports = router;
