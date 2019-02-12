const express = require("express");
const router = express.Router();
var kafka = require("../../kafka/client");

router.post("/", (req, res) => {
  console.log("Inside send message actions");
  kafka.make_request("send_msg", req.body, function(err, results) {
    console.log("in result of send message");
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
        res.status(204).json({ properties: "Error sending message" });
      }
    }
  });
});

module.exports = router;
