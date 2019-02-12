const mongoose = require("mongoose");
const db = require("./mongo").mongoURI;
const User = require("./models/SignupOwner");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../backend/config/mongo");
const passport = require("passport");

mongoose.Promise = global.Promise;

const options = {
  poolSize: 1000
};

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("Mongodb connected"))
  .catch(err => console.log(err));

function handle_request(msg, callback) {
  var res = {};
  console.log("I am in logintraveler post request");
  const email = msg.email;
  const password = msg.password;

  //Search owner by email
  User.findOne({ email, type: "traveler" })
    .then(user => {
      if (!user) {
        console.log("fail");
        res.code = "202";
        res.value = "User doen't exist";
        callback(null, res);
      }
      bcrypt.compare(password, user.password).then(match => {
        if (match) {
          console.log("bcrypt compare in login services");
          //Send token when there is a match
          //Set a payload first
          res.code = "200";
          res.value = user;
          callback(null, res);
        } else {
          console.log("reached here in else of login services");
          res.code = "204";
          res.value = "Password is incorrect";
          callback(null, res);
          // return res.status(400).json({ password: "Password Incorrect" });
        }
      });
    })
    .catch(err => callback(err, "Error"));
}

exports.handle_request = handle_request;
