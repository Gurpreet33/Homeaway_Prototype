const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating schema
const PropertiesSchema = new Schema({
  ownerEmail: {
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
  accomodates: {
    type: Number,
    required: true
  },
  bookingType: {
    type: String,
    required: true
  },
  photos: {
    type: String,
    required: true
  },
  checkIn: {
    type: String,
    required: true
  },
  checkOut: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

module.exports = Property = mongoose.model("properties", PropertiesSchema);
