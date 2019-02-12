const express = require("express");
const router = express.Router();
var kafka = require("../../kafka/client");
const passport = require("passport");
var app = express();

app.use(passport.initialize());

//Passport Config
require("../../config/passport")(passport);

router.post(
  "/",

  passport.authenticate("jwt", {
    session: false,
    failureMessage: "invalid login"
  }),

  (req, res) => {
    console.log("inside ownerdashboard request");
    kafka.make_request("ownerdashboard", req.body, function(err, results) {
      console.log("in result of ownerdashboard");
      console.log(results.code);
      if (err) {
        console.log("Inside err");
        res.json({
          status: "error",
          msg: "System Error, Try Again."
        });
      } else {
        if (results.code === "200") {
          console.log("SUccessfully found prop in ownerdashboard");
          res.status(200).json(results.value);
        } else {
          console.log("No properties found");
          res.status(204).json({ properties: "No Properties Found" });
        }
      }
    });
  }
);

module.exports = router;
