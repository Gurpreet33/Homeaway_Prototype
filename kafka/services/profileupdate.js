const mongoose = require("mongoose");
const db = require("./mongo").mongoURI;
const User = require("./models/SignupOwner");
const Property = require("./models/properties");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../backend/config/mongo");
const passport = require("passport");

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("Mongodb connected"))
  .catch(err => console.log(err));

function handle_request(msg, callback) {
  var res = {};
  console.log("I am in profile update services ");
  User.findOneAndUpdate(
    {
      email: msg.email,
      type: "owner"
    },
    {
      email2: msg.email2,
      phone: msg.phone,
      gender: msg.gender,
      state: msg.state,
      zip: msg.zip,
      city: msg.city,
      addressLine1: msg.addressLine1,
      addressLine2: msg.addressLine2,
      fbUrl: msg.fbUrl,
      aboutMe: msg.aboutMe
    },
    { new: true }
  )
    .then(user => {
      if (!user) {
        console.log("fail");
        res.code = "204";
        res.value = "No user found";
        callback(null, res);
      } else {
        console.log("updated profile", user.length);
        res.code = "200";
        res.value = user;
        callback(null, res);
      }
    })
    .catch(err => callback(err, "Error"));
}

exports.handle_request = handle_request;
