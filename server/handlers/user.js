require("dotenv").load;
const db = require("../models");
const { signToken, decodeToken } = require("../lib/common_util");

exports.UserRegister = async (req, res, next) => {
  try {
    const { body } = req;
    let user = await db.User.create(body);
    let token = await signToken(user);
    user.token = token;
    await user.save();
    return res.status(200).json(user);
  } catch (err) {
    return next({
      status: 402,
      message: err.message,
    });
  }
};

exports.UserLogin = async (req, res, next) => {
  try {
    let user = await db.User.findOne({ email: req.body.email });

    if (user) {
      let isMatch = await user.Compare(req.body.password);
      if (isMatch) {
        let token = await signToken(user);
        user.token = token;
        return res.status(200).json(user);
      }
      return next({
        status: 404,
        message: "wrong password",
      });
    }
    return next({
      status: 404,
      message: "user does not exist",
    });
  } catch (err) {
    return next({
      status: 404,
      message: err.message,
    });
  }
};

exports.getUser = async (req, res, next) => {
  try {
    let user = await decodeToken(req);
    user = await db.User.findById(user._id);
    res.send(user);
  } catch (err) {
    return next({
      status: 401,
      message: err.message,
    });
  }
};
