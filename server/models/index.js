const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;

mongoose.connect("mongodb://localhost/carRental", {
  useNewUrlParser: true,

  useUnifiedTopology: true,
});

module.exports.User = require("./user");
module.exports.Garage = require("./Garage");
module.exports.Slot = require("./Slot");
module.exports.Vehicle = require("./Vehicle");
