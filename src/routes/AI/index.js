const express = require("express");
const { EmailNewsHeadlines } = require("../../controller/AI");
const passport = require("passport");
const Router = express.Router();

Router.post(
  "/email-top-news-headlines",
  passport.authenticate("jwt-refresh"),
  EmailNewsHeadlines
);

module.exports = Router;
