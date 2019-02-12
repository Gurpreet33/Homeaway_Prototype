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
  console.log("reached in  handle request of send message");
  Inbox.findOneAndUpdate(
    {
      ownerEmail: msg.ownerEmail,
      travelerEmail: msg.travelerEmail,
      propertyType: msg.propertySelected.propertyType,
      propertyHeadline: msg.propertySelected.headline,
      propertyDescription: msg.propertySelected.description
    },
    {
      msgFromTraveler: msg.message
    },
    { upsert: true, new: true }
  )
    .then(user => {
      if (!user) {
        console.log("Query is: ", user);
        console.log("No");
        res.code = "204";
        res.value = "An error occured";
        callback(null, res);
      } else {
        console.log("Query is: ", user);
        console.log("Successfully updated the inbox of user with your query");
        res.code = "200";
        res.value = user;
        callback(null, res);
      }
    })
    .catch(err => callback(err, "Error"));
}

exports.handle_request = handle_request;
