const mongoose = require("mongoose");
const db = require("./mongo").mongoURI;
const User = require("./models/SignupOwner");
const bcrypt = require("bcryptjs");
const Property = require("./models/properties");
const Booking = require("./models/bookings");

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
  console.log("Inside booking services");
  Property.findById({ _id: msg.propertySelected._id }).then(prop => {
    if (!prop) {
      console.log("fail");
      res.code = "204";
      res.value = "Property Cannot be booked!";
      callback(null, res);
    } else {
      console.log("Property selected for booking found");
      const newBooking = new Booking({
        ownerEmail: prop.ownerEmail,
        travelerEmail: msg.travelerEmail,
        travelerName: msg.travelerName,
        address: msg.propertySelected.address,
        city: msg.propertySelected.city,
        stateZip: msg.propertySelected.stateZip,
        headline: msg.propertySelected.headline,
        description: msg.propertySelected.description,
        propertyType: msg.propertySelected.propertyType,
        bedrooms: msg.propertySelected.bedrooms,
        bathrooms: msg.propertySelected.bathrooms,
        guests: msg.guests,
        propertyType: msg.propertySelected.propertyType,
        photos: msg.propertySelected.photos,
        price: msg.propertySelected.price,
        arrivalDate: msg.arrivalDate,
        departureDate: msg.departureDate
      });
      newBooking
        .save()
        .then(property => {
          res.code = "200";
          res.value = "Booking successful!";
          callback(null, res);
        })
        .catch(err => callback(err, "Error"));
    }
  });
}

exports.handle_request = handle_request;
