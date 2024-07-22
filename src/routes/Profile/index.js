const express = require("express");
const {
  Profile,
  updateEmail,
  updateName,
} = require("../../controller/Profile");
const passport = require("passport");
const Router = express.Router();
const {
  validateEmail,
  validatePostRequest,
  validateTempMail,
  validateName,
} = require("../../middleware/validators");

Router.get("/view-profile", passport.authenticate("jwt-refresh"), Profile)
  .patch(
    "/update-email",
    validatePostRequest,
    validateTempMail,
    validateEmail,
    passport.authenticate("jwt-refresh"),
    updateEmail
  )
  .patch(
    "/update-name",
    validatePostRequest,
    validateName,
    passport.authenticate("jwt-refresh"),
    updateName
  );

module.exports = Router;
