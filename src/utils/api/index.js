const axios = require("axios");
const env = require("dotenv");
env.config();

const NEWS_API = "https://newsapi.org/v2";
const NEW_APIKEY = process.env.NEW_APIKEY;

const WEATHER_API = "http://api.openweathermap.org/data/2.5/weather";
const WEATHER_APIKEY = process.env.WEATHER_APIKEY;

const getCityWeather = async (cityName) => {
  try {
    const url = `${WEATHER_API}?q=${cityName}&appid=${WEATHER_APIKEY}&units=imperial`;

    const response = await axios.get(url);

    if (!response) throw error;

    return response.data;
  } catch (error) {
    console.log(
      `Error: src > utils > api > index.js > getCityWeather - ${error.message}`
    );
    throw error;
  }
};

const getCityWeatherByLocation = async (lat, lon) => {
  try {
    const url = `${WEATHER_API}?lat=${lat}&lon=${lon}&appid=${WEATHER_APIKEY}&units=imperial`;

    const response = await axios.get(url);

    if (!response) throw error;

    return response.data;
  } catch (error) {
    console.log(
      `Error: src > utils > api > index.js > getCityWeather - ${error.message}`
    );
    throw error;
  }
};

const getNewsHeadlines = async (countryName = "IN", pageSize = 5) => {
  try {
    const url = `${NEWS_API}/top-headlines?country=${countryName}&pageSize=${pageSize}&apiKey=${NEW_APIKEY}`;

    const response = await axios.get(url);

    if (!response) throw error;

    return response.data;
  } catch (error) {
    console.log(
      `Error: src > utils > api > index.js > getNewsHeadlines - ${error.message}`
    );
    throw error;
  }
};

const getEveryNews = async (topic = "india", pageSize = 7) => {
  try {
    const url = `${NEWS_API}/everything?q=${topic}&pageSize=${pageSize}&apiKey=${NEW_APIKEY}`;

    const response = await axios.get(url);

    if (!response) throw error;

    return response.data;
  } catch (error) {
    console.log(
      `Error: src > utils > api > index.js > getNewsHeadlines - ${error.message}`
    );
    throw error;
  }
};

module.exports = {
  getCityWeather,
  getCityWeatherByLocation,
  getNewsHeadlines,
  getEveryNews,
};
