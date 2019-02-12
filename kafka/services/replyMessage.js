const mongoose = require("mongoose");
const db = require("./mongo").mongoURI;
const User = require("./models/SignupOwner");
const Inbox = require("./models/inbox");
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
  console.log("msg from owner is: ", msg.reply);
  Inbox.findOneAndUpdate(
    {
      ownerEmail: msg.ownerEmail,
      travelerEmail: msg.travelerEmail,
      propertyHeadline: msg.propertyHeadline
    },
    { msgFromOwner: msg.reply },
    { new: true }
  )
    .then(user => {
      if (!user) {
        console.log("No");
        res.code = "204";
        res.value = "An error occured";
        callback(null, res);
      } else {
        console.log("query in reply message", user);
        console.log("Successfully found the message and traveler");
        res.code = "200";
        res.value = user;
        callback(null, res);
      }
    })
    .catch(err => callback(err, "Error"));
}

exports.handle_request = handle_request;
