const express = require("express");
const router = express.Router();
var kafka = require("../../kafka/client");
const jwt = require("jsonwebtoken");
const keys = require("../../config/mongo");
const validateLoginFields = require("../../Validations/login");

router.post("/", function(req, res) {
  console.log("req body of tr is :", req.body);
  const { errors, isValid } = validateLoginFields(req.body);

  if (!isValid) {
    return res.status(202).json(errors);
  }

  kafka.make_request("login_t", req.body, function(err, results) {
    console.log("in result of logintraveler");
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
        const payload = {
          _id: results.value._id,
          name: results.value.name,
          email: results.value.email,
          type: results.value.type
        };

        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
            console.log("Token generated");

            res.status(200).json(true);
          }
        );
      } else if (results.code === "202") {
        console.log("Login traveler error email doesn't exist");
        errors.email = "There is no user registered with this email";
        return res.status(202).json(errors);
      } else if (results.code === "204") {
        console.log("Passowrd is incorrect");
        errors.password = "Passowrd is incorrect";
        return res.status(202).json(errors);
      }
    }
  });
});

module.exports = router;
