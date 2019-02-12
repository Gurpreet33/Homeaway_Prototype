const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  email2: {
    type: String
  },
  phone: {
    type: String
  },
  gender: {
    type: String
  },
  addressLine1: {
    type: String
  },
  addressLine2: {
    type: String
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  zip: {
    type: String
  },
  fbUrl: {
    type: String
  },
  aboutMe: {
    type: String
  }
});

module.exports = User = mongoose.model("users", UserSchema);
