const { getCityWeather, getCityWeatherByLocation } = require("../../utils/api");
const PrimaryErrorHandler = require("../../utils/primary.error.handler");

/**
 * @function CityWeather
 * @description Retrieves weather information for a specified city.
 * @param {Request} req - request object
 * @param {Response} res - response object
 * @param {Function} next - next middleware function.
 * @throws {Error} In case of any error during fetching weather information.
 * @returns {Response} returns a JSON response with city weather data
 */
exports.CityWeather = async (req, res, next) => {
  try {
    const { cityName } = req.query;

    const _DefaultCity = cityName || "delhi";

    const CityWeatherData = await getCityWeather(_DefaultCity);

    return res.status(200).json({
      data: CityWeatherData,
    });
  } catch (error) {
    console.log(
      `Error: src > controllers > Weather > index.js > CityWeather - ${error.message}`
    );
    next(error);
  }
};

/**
 * @function CityWeatherByLocation
 * @description Retrieves weather information based on the provided latitude and longitude.
 * @param {Request} req - request object
 * @param {Response} res - response object
 * @param {Function} next - next middleware function.
 * @throws {Error} In case of any error during fetching weather information.
 * @returns {Response} returns a JSON response with city weather data
 */
exports.CityWeatherByLocation = async (req, res, next) => {
  try {
    const { lat, lon } = req.query;

    const _DefaultLat = lat || "28.6667";
    const _DefaultLon = lon || "77.2167";

    const CityWeatherData = await getCityWeatherByLocation(
      _DefaultLat,
      _DefaultLon
    );

    return res.status(200).json({
      data: CityWeatherData,
    });
  } catch (error) {
    console.log(
      `Error: src > controllers > Weather > index.js > CityWeatherByLocation - ${error.message}`
    );
    next(error);
  }
};
