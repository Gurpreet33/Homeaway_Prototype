const express = require("express");
const router = express.Router();
var kafka = require("../../kafka/client");

router.post("/", (req, res) => {
  kafka.make_request("confirm_listing", req.body, function(err, results) {
    console.log("in result of confirm listing");
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
        res.status(200).json(true);
      } else {
        console.log("Some error in listing properrty");
        res.status(204).json(true);
      }
    }
  });
});

module.exports = router;
