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
  console.log("I am in search services ");
  console.log("place is", msg.place);
  Property.find({
    city: msg.place
  })
    .then(prop => {
      if (prop.length === 0) {
        console.log("fail");
        res.code = "204";
        res.value = "No properties found";
        callback(null, res);
      } else {
        console.log("Properties matching search criteria found", prop.length);
        res.code = "200";
        res.value = prop;
        callback(null, res);
      }
    })
    .catch(err => callback(err, "Error"));
}

exports.handle_request = handle_request;
