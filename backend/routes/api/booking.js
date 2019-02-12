const express = require("express");
const router = express.Router();
var kafka = require("../../kafka/client");

router.post("/", (req, res) => {
  console.log("I entered in booking post request");
  console.log(req.body.arrivalDate);
  kafka.make_request("booking", req.body, function(err, results) {
    console.log("in result of booking");
    console.log(results.code);
    if (err) {
      console.log("Inside err");
      res.json({
        status: "error",
        msg: "System Error, Try Again."
      });
    } else {
      if (results.code === "200") {
        console.log("Successful Booking");
        res.status(200).json(true);
      } else if (results.code === "204") {
        console.log("Some error in booking");
        res.status(204).json(true);
      } else {
        console.log("Booking Credentials were not right");
        res.status(208).json(true);
      }
    }
  });
});

module.exports = router;
