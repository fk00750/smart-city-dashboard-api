const express = require("express");
const passport = require("passport");
const {
  CityWeather,
  CityWeatherByLocation,
} = require("../../controller/Weather");
const Router = express.Router();

Router.get("/city-weather", CityWeather);
Router.get("/city-weather-location", CityWeatherByLocation);

module.exports = Router;
