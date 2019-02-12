const mongoose = require("mongoose");
const db = require("./mongo").mongoURI;
const User = require("./models/SignupOwner");
const Property = require("./models/properties");

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("Mongodb connected"))
  .catch(err => console.log(err));

function handle_request(msg, callback) {
  var res = {};
  console.log("inside ownerdashboard services and msg body is:", msg);
  Property.find({ ownerEmail: msg.email })
    .then(property => {
      if (!property) {
        res.code = "204";
        res.value = "No properties for this owner found!";
        callback(null, res);
      } else {
        console.log("Show me property");
        res.code = "200";
        res.value = property;
        callback(null, res);
      }
    })
    .catch(err => callback(err, "Error"));
}

exports.handle_request = handle_request;
