const express = require("express");
const router = express.Router();
var kafka = require("../../kafka/client");

router.post("/", function(req, res) {
  console.log("Inside update profile post request");
  kafka.make_request("profile_update", req.body, function(err, results) {
    console.log("in result of profile message");
    console.log(results.code);
    if (err) {
      console.log("Inside err");
      res.json({
        status: "error",
        msg: "System Error, Try Again."
      });
    } else {
      if (results.code === "200") {
        console.log("Successfully entered");
        res.status(200).json(true);
      } else {
        console.log("Error updating profile");
        res.status(204).json({ user: "Error updating profile" });
      }
    }
  });
});

module.exports = router;
