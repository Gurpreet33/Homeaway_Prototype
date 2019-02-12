const mongoose = require("mongoose");
const db = require("./mongo").mongoURI;
const User = require("./models/SignupOwner");
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

  User.findOne({ email: msg.email, type: "traveler" })
    .then(owner => {
      if (owner) {
        console.log("I am in if block because email already exists");
        res.code = "202";
        res.value = "Email already exists";
        callback(null, res);
      } else {
        const newOwner = new User({
          name: msg.firstName + " " + msg.lastName,
          email: msg.email,
          password: msg.password,
          type: msg.type
        });
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newOwner.password, salt, (err, hash) => {
            if (err) callback(err, "Error");
            newOwner.password = hash;
            newOwner
              .save()
              .then(owner => {
                console.log("User successfully signed up");
                res.code = "200";
                res.value = "User successfully signed up";
                callback(null, res);
              })
              .catch(err => callback(err, "Error"));
          });
        });
      }
    })
    .catch(err => callback(err, "Error"));
}

exports.handle_request = handle_request;
