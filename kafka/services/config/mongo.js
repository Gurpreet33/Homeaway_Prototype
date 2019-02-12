const mongoose = require("mongoose");
const db = require("./mongo").mongoURI;

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("Mongodb connected"))
  .catch(err => console.log(err));

module.exports = {
  mongoURI: "mongodb://jasnoorbrar:jasnoor1@ds017672.mlab.com:17672/homeawaydb",
  secretOrKey: "secret"
};
