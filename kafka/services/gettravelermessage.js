const mongoose = require("mongoose");
const db = require("./mongo").mongoURI;
const User = require("./models/SignupOwner");
const Inbox = require("./models/inbox");
const Property = require("./models/properties");
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
  Inbox.find({
    ownerEmail: msg.email
  })
    .then(message => {
      if (message.length === 0) {
        console.log("No");
        res.code = "204";
        res.value = "No message found";
        callback(null, res);
      } else {
        console.log("Successfully found the message");
        res.code = "200";
        res.value = message;
        callback(null, res);
      }
    })
    .catch(err => callback(err, "Error"));
}

exports.handle_request = handle_request;
