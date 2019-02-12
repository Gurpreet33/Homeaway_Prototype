const mongoose = require("mongoose");
const db = require("./mongo").mongoURI;
const User = require("./models/SignupOwner");
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
  console.log("Inside confirm listing services");
  const newProperty = new Property({
    ownerEmail: msg.ownerEmail,
    address: msg.LocationEntries.address + " " + msg.LocationEntries.building,
    city: msg.LocationEntries.city,
    stateZip: msg.LocationEntries.stat + " " + msg.LocationEntries.zip,
    headline: msg.Details.headline,
    description: msg.Details.description,
    propertyType: msg.Details.propertyType,
    bedrooms: msg.Details.bedrooms,
    bathrooms: msg.Details.bathrooms,
    accomodates: msg.Details.accomodates,
    bookingType: msg.bookingData.bookingType,
    photos: msg.photosData.propphotos,
    checkIn: msg.checkIn,
    checkOut: msg.checkOut,
    price: msg.price
  });
  newProperty
    .save()
    .then(prop => {
      console.log("Listing Confirmed");
      res.code = "200";
      res.value = "Listing Confirmed";
      callback(null, res);
    })
    .catch(err => callback(err, "Error"));
}

exports.handle_request = handle_request;
