const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;

//mongodb://localhost/carRental
const url = process.env.URL;
mongoose.connect(url, {
  useNewUrlParser: true,

  useUnifiedTopology: true,
});

module.exports.User = require("./User");
module.exports.Garage = require("./Garage");
module.exports.Slot = require("./Slot");
module.exports.Vehicle = require("./Vehicle");
