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
  console.log("I am in search results services ");
  Property.findById({ _id: msg.id })
    .then(prop => {
      if (!prop) {
        console.log("fail");
        res.code = "204";
        res.value = "No properties found";
        callback(null, res);
      } else {
        console.log("Property selected matching search criteria found");
        res.code = "200";
        res.value = prop;
        callback(null, res);
      }
    })
    .catch(err => callback(err, "Error"));
}

exports.handle_request = handle_request;
