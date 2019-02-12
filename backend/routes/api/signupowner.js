const express = require("express");
const router = express.Router();
var kafka = require("../../kafka/client");
const validateSignUpFields = require("../../Validations/signup");

router.post("/", (req, res) => {
  const { errors, isValid } = validateSignUpFields(req.body);

  if (!isValid) {
    return res.status(202).json(errors);
  }
  kafka.make_request("signup_o", req.body, function(err, results) {
    console.log("in result of signupowner");
    console.log(results.code);
    if (err) {
      console.log("Inside err");
      res.status(300).json({
        msg: "System Error, Try Again."
      });
    } else {
      if (results.code == "200") {
        console.log("SUccessfully entered");
        res.status(200).json(true);
      } else if (results.code == "202") {
        console.log("Email already exists");
        errors.email = "Email already exists";
        return res.status(202).json(errors);
      }
    }
  });
});

module.exports = router;
