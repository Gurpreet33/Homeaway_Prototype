//import the require dependencies
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var session = require("express-session");
var cookieParser = require("cookie-parser");
var cors = require("cors");
const multer = require("multer");
const uuidv4 = require("uuid/v4");
const path = require("path");
const fs = require("fs");
var mysql = require("mysql");
var pool = require("./pool");
const mongoose = require("mongoose");
const db = require("./config/mongo").mongoURI;
const User = require("./models/SignupOwner");
const Booking = require("./models/bookings");
const Property = require("./models/properties");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("./config/mongo");
const passport = require("passport");
var kafka = require("./kafka/client");
const Schema = mongoose.Schema;
const loginowner = require("./routes/api/loginowner");
const logintraveller = require("./routes/api/logintraveller");
const signuptraveler = require("./routes/api/signuptraveler");
const signupowner = require("./routes/api/signupowner");
const confirmlisting = require("./routes/api/confirmlisting");
const search = require("./routes/api/search");
const searchSelectedProperty = require("./routes/api/searchSelectedProperty");
const ownerdashboard = require("./routes/api/ownerdashboard");
const booking = require("./routes/api/booking");
const sendmessage = require("./routes/api/sendMessage");
const reply = require("./routes/api/reply");
const getTravelerMessage = require("./routes/api/getTravelerMessage");
const getOwnerMessage = require("./routes/api/getOwnerMessage");
const updateProfile = require("./routes/api/updateProfile");
const searchresults = require("./routes/api/searchSelectedProperty");
const travelerdashboard = require("./routes/api/travelerdashboard");

var aws = require("aws-sdk"),
  multerS3 = require("multer-s3");
//connection to mongodb through mongoose
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("Mongodb connected"))
  .catch(err => console.log(err));

//Passport middleware
app.use(passport.initialize());

//Passport Config
require("./config/passport")(passport);

//using express routing

//Client-server connection
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Cache-Control", "no-cache");
  next();
});

app.use(
  session({
    secret: "cmpe273_kafka_passport_mongo",
    resave: false, // Forces the session to be saved back to the session store, even if the session was never modified during the request
    saveUninitialized: false, // Force to save uninitialized session to db. A session is uninitialized when it is new but not modified.
    duration: 60 * 60 * 1000, // Overall duration of Session : 30 minutes : 1800 seconds
    activeDuration: 5 * 60 * 1000
  })
);

app.use(cookieParser());

app.set("view engine", "ejs");

app.use("/loginowner", loginowner);
app.use("/logintraveller", logintraveller);
app.use("/signuptraveler", signuptraveler);
app.use("/signupowner", signupowner);
app.use("/confirmListing", confirmlisting);
app.use("/search", search);
app.use("/searchresults/:id", searchSelectedProperty);
app.use("/ownerdashboard", ownerdashboard);
app.use("/booking", booking);
app.use("/sendmessage", sendmessage);
app.use("/reply", reply);
app.use("/gettravelermessage", getTravelerMessage);
app.use("/getownermessage", getOwnerMessage);
app.use("/updateprofile", updateProfile);
app.use("/searchresults", searchresults);
app.use("/travelerdashboard", travelerdashboard);

// app.use(bodyParser.urlencoded({
//     extended: true
//   }));

/*/aws.config.update({
  secretAccessKey: "AKIAI2QFVZ73PBSNY6CA",
  accessKeyId: "aDgxVEP7BpmXjOzNsi3VJQ0yQLTeVk8Zfdfd2ETU",
  region: "us-east-2"
});*/

const awsCredentials = {
  accessKeyId: "AKIAJCSXYW4DSISAYFIQ",
  secretAccessKey: "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"
};

aws.config.loadFromPath("./config/aws.json");

var s3 = new aws.S3({ region: aws.config.region });

// var upload = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: "bucket-name",
//     key: function(req, file, cb) {
//       console.log(file);
//       cb(null, file.originalname); //use Date.now() for unique file keys
//     }
//   })
// });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../frontend/public/uploads");
  },
  filename: (req, file, cb) => {
    newFilename = file.originalname;
    cb(null, newFilename);
    console.log("File path is: ", newFilename);
  }
});

upload = multer({ storage });

app.post("/image", upload.single("selectedFile"), (req, res) => {
  console.log("Inside image post request");
  console.log("Req : ", req.body);
  return res.status(200);
});

app.post("/searchModified", (req, res) => {
  console.log("I am in searchModified post ");

  const place = req.body.place;
  console.log("Value is :", value);
  Property.find({
    city: place
  }).then(prop => {
    if (!prop) {
      console.log("fail");
      return res.status(204).json({ Properties: "No properties found" });
    } else {
      console.log("Properties matching search criteria found", prop);
      return res.status(200).json(prop);
    }
  });
});

app.listen(3001);
console.log("Server Listening on port 3001");
