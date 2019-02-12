const express = require("express");
const router = express.Router();
var kafka = require("../../kafka/client");

router.post("/", (req, res) => {
  console.log("Inside reply actions", req.body);
  kafka.make_request("reply_msg", req.body, function(err, results) {
    console.log("in result of reply message");
    console.log(results.code);
    if (err) {
      console.log("Inside err");
      res.json({
        status: "error",
        msg: "System Error, Try Again."
      });
    } else {
      if (results.code === "200") {
        console.log("SUccessfully entered");
        res.status(200).json(results.value);
      } else {
        console.log("Error sending message");
        res.status(204).json({ user: "Traveler not found" });
      }
    }
  });
});

module.exports = router;
