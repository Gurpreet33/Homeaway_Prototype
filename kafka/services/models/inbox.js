const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating schema
const Inbox = new Schema({
  msgFromTraveler: {
    type: String
  },
  msgFromOwner: {
    type: String
  },
  ownerEmail: {
    type: String
  },
  travelerEmail: {
    type: String
  },
  propertyHeadline: {
    type: String
  },
  propertyType: {
    type: String
  },
  propertyDescription: {
    type: String
  }
});

module.exports = Inboxx = mongoose.model("inbox", Inbox);
