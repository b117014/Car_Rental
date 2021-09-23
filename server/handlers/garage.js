const db = require("../models");
const { decodeToken } = require("../lib/common_util");

exports.getGarages = async (req, res, next) => {
  try {
    let user = await decodeToken(req);
    if (user) {
      const garages = await db.Garage.find({});
      res.send(garages);
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

exports.createGarage = async (req, res, next) => {
  try {
    let user = await decodeToken(req);
    if (user) {
      const garage = await db.Garage.create(req.body);
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

exports.getGarageSlot = async (req, res, next) => {
  try {
    let user = await decodeToken(req);
    let { body } = req;
    if (user) {
      const vehicle = await db.Vehicle.find({
        garage: body.garageId,
        reserved: {
          $not: {
            $elemMatch: {
              from: { $lt: req.body.to.substring(0, 10) },
              to: { $gt: req.body.from.substring(0, 10) },
            },
          },
        },
      });

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
