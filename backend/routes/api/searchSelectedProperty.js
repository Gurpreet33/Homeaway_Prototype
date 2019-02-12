const express = require("express");
const router = express.Router();
var kafka = require("../../kafka/client");

router.get("/:id", function(req, res) {
  console.log("Inside search results post request");
  console.log(req.params.id);
  kafka.make_request("search_results", req.params, function(err, results) {
    console.log("in result of search results");
    console.log(results.code);
    if (err) {
      console.log("Inside err");
      res.json({
        status: "error",
        msg: "System Error, Try Again."
      });
    } else {
      if (results.code === "200") {
        console.log("Found property matching search criteria");
        res.status(200).json(results.value);
      } else {
        console.log("Property is not currently there.");
        res.status(204).json({ property: "Property not currently there" });
      }
    }
  });
});

module.exports = router;
