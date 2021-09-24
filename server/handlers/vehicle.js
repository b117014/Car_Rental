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
      slot.vehicle = body.vehicleId;
      slot.garage = body.garageId;
      slot.pick_date = body.startDate;
      slot.drop_date = body.endDate;
      const vehicle = await db.Vehicle.findByIdAndUpdate(
        body.vehicleId,
        {
          $push: { reserved: { from: body.startDate, to: body.endDate } },
        },
        {
          useFindAndModify: false,
        }
      );
      vehicle.garage = body.garageId;
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

exports.dropVehicle = async (req, res, next) => {
  try {
    /**
     * Return Vehicle
     */
    let user = await decodeToken(req);
    const { body } = req;
    if (user) {
      const vehicle = await db.Vehicle.findById(body.vehicleId);
      vehicle.garage = body.garageId;
      vehicle.is_available = true;
      vehicle.save();

      res.send(vehicle);
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
exports.getUserBookedSlot = async (req, res, next) => {
  try {
    let user = await decodeToken(req);
    const { body } = req;
    if (user) {
      console.log(user);
      const bookedSlot = await db.Slot.find({ user: user._id })
        .populate("vehicle")
        .populate("garage");
      console.log(bookedSlot);
      res.send(bookedSlot);
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
