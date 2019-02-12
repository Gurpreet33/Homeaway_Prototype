const express = require("express");
const router = express.Router();
var kafka = require("../../kafka/client");

router.post("/", (req, res) => {
  kafka.make_request("search", req.body, function(err, results) {
    console.log("in result of search");
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
      } else if (results.code === "204") {
        console.log("No properties found");
        res.status(204).json({ properties: "No Properties Found" });
      }
    }
  });
});

module.exports = router;
