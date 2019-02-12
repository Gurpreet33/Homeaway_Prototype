const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
// const User = mongoose.model("users");
const User = require("../models/SignupOwner");
const keys = require("../config/mongo");
const db = require("../config/mongo").mongoURI;

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("Mongodb connected"))
  .catch(err => console.log(err));

module.exports = passport => {
  const options = {};
  options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  options.secretOrKey = "secret";

  passport.use(
    new JwtStrategy(options, (jwt_payload, done) => {
      console.log("JWT payload", jwt_payload);
      User.findById(jwt_payload._id)
        .then(user => {
          if (user) {
            return done(null, user);
          } else {
            return done(null, 204);
          }
        })
        .catch(err => console.log(err));
    })
  );
};
