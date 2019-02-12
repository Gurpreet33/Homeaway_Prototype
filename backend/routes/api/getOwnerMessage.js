const express = require("express");
const router = express.Router();
var kafka = require("../../kafka/client");

router.post("/", (req, res) => {
  console.log("Inside get owner message actions");
  kafka.make_request("get_msg_o", req.body, function(err, results) {
    console.log("in result of get owner message");
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
        res.status(200).json(results.value);
      } else {
        console.log("Error sending message");
        res.status(204).json({ user: "Traveler msg not found" });
      }
    }
  });
});

module.exports = router;
