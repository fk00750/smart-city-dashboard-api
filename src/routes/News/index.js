const express = require("express");
const passport = require("passport");
const {
  GetNewsHeadlines,
  GetEveryNews,
  SaveNews,
  ViewSaveNews,
  DeleteSaveNews,
} = require("../../controller/News");
const Router = express.Router();

Router.get("/news-headlines", GetNewsHeadlines)
  .get("/every-news", GetEveryNews)
  .post("/save-news", passport.authenticate("jwt-refresh"), SaveNews)
  .get("/view-save-news", passport.authenticate("jwt-refresh"), ViewSaveNews)

module.exports = Router;
