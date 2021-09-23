require("dotenv").config();
const express = require("express"),
  cors = require("cors"),
  morgan = require("morgan"),
  bodyParser = require("body-parser"),
  app = express();

const userRoutes = require("./routes/user");
const garageRoute = require("./routes/garage");

app.use(cors());
app.use(morgan("tiny"));
app.use(bodyParser.json());

app.use("/api", userRoutes, garageRoute);

app.use(function (req, res, next) {
  let err = new Error("not found");
  err.status = 404;
  next(err);
});
app.use(errorHandler);

app.listen(5000, () => {
  console.log("done");
});
