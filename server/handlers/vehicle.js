const db = require("../models");
const { decodeToken } = require("../lib/common_util");

exports.createVehicle = async (req, res, next) => {
  try {
    let user = await decodeToken(req);
    if (user) {
      const garage = await db.Vehicle.create(req.body);
      res.send(garage);
    } else {
      return next({
        message: "UnAuthorized",
        status: 401,
      });
    }
  } catch (err) {
    return next({
      message: err.message || "Something went wrong",
    });
  }
};

exports.bookVehicle = async (req, res, next) => {
  try {
    /**
     * Book Vehicle by providing this data
     * pickup_date
     * drop_date
     * Vehicle_id
     * user_id
     * Garage Id
     */
    let user = await decodeToken(req);
    const { body } = req;
    if (user) {
      const slot = await db.Slot.create(req.body);
      slot.user = user._id;

      const vehicle = await db.Vehicle.findByIdAndUpdate(body.vehicleId, {
        $push: { reserved: { from: body.from, to: body.to } },
      });
      vehicle.garage = garageId;
      vehicle.is_available = false;

      vehicle.save();
      slot.save();
      res.send(slot);
    } else {
      return next({
        message: "UnAuthorized",
        status: 401,
      });
    }
  } catch (err) {
    return next({
      message: err.message || "Something went wrong",
    });
  }
};

exports.returnVehicle = async (req, res, next) => {
  try {
    /**
     * Return Vehicle
     */
    let user = await decodeToken(req);
    const { body } = req;
    if (user) {
      const vehicle = await db.Vehicle.findById(body.vehicleId);
      vehicle.garage = garageId;
      vehicle.is_available = true;
      vehicle.save();
      slot.save();
      res.send(slot);
    } else {
      return next({
        message: "UnAuthorized",
        status: 401,
      });
    }
  } catch (err) {
    return next({
      message: err.message || "Something went wrong",
    });
  }
};
