const mongoose = require("mongoose");
const db = require("./mongo").mongoURI;
const User = require("./models/SignupOwner");
const Property = require("./models/properties");
const Booking = require("./models/bookings");

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("Mongodb connected"))
  .catch(err => console.log(err));

function handle_request(msg, callback) {
  var res = {};
  console.log("inside travelerdashboard services and msg body is:", msg);
  Booking.find({ travelerEmail: msg.email })
    .then(prop => {
      if (!prop) {
        console.log("Fail:");
        res.code = "204";
        res.value = "No properties found for the traveler";
        callback(null, res);
      } else {
        console.log("Properties for traveler dashboard found");
        res.code = "200";
        res.value = prop;
        callback(null, res);
      }
    })
    .catch(err => callback(err, "Error"));
}

exports.handle_request = handle_request;
