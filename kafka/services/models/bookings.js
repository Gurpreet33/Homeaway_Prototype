const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating schema
const BookingsSchema = new Schema({
  ownerEmail: {
    type: String,
    required: true
  },
  travelerEmail: {
    type: String,
    required: true
  },
  travelerName: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  stateZip: {
    type: String,
    required: true
  },
  headline: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  propertyType: {
    type: String,
    required: true
  },
  bedrooms: {
    type: Number,
    required: true
  },
  bathrooms: {
    type: Number,
    required: true
  },
  guests: {
    type: Number,
    required: true
  },
  arrivalDate: {
    type: Date,
    required: true
  },
  departureDate: {
    type: Date,
    required: true
  },
  photos: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

module.exports = Bookings = mongoose.model("bookings", BookingsSchema);
