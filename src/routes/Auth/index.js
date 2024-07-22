const express = require("express");
const { Register, Login } = require("../../controller/Auth");
const {
  validateEmail,
  validatePassword,
  validateName,
  validatePostRequest,
  validateTempMail,
} = require("../../middleware/validators");
const Router = express.Router();

Router.post(
  "/register",
  validatePostRequest,
  validateName,
  validateEmail,
  validateTempMail,
  validatePassword,
  Register
).post(
  "/login",
  validatePostRequest,
  validateEmail,
  validateTempMail,
  validatePassword,
  Login
);

module.exports = Router;
