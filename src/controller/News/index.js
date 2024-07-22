const { getNewsHeadlines, getEveryNews } = require("../../utils/api");
const NewsManager = require("../../utils/news.manager");
const PrimaryErrorHandler = require("../../utils/primary.error.handler");

const newsManger = new NewsManager();

/**
 * @function GetNewsHeadlines
 * @description Retrieves news headlines based on the provided country name and page size.
 * @param {Request} req - request object
 * @param {Response} res - response object
 * @param {Function} next - next middleware function.
 * @throws {Error} In case of any error during registration.
 * @returns {Response} returns a JSON response with newsHeadlines
 */
exports.GetNewsHeadlines = async (req, res, next) => {
  try {
    const { pageSize, countryName } = req.query;

    const _DefaultCountryName = countryName || "IN";
    const _DefaultPageSize = pageSize || 5;

    const newsHeadlines = await getNewsHeadlines(
      _DefaultCountryName,
      _DefaultPageSize
    );

    return res.status(200).json({
      data: newsHeadlines,
    });
  } catch (error) {
    console.log(
      `Error: src > controllers > News > index.js > GetNewsHeadlines - ${error.message}`
    );
    next(error);
  }
};

/**
 * @function GetEveryNews
 * @description Retrieves news articles based on the provided topic and page size.
 * @param {Request} req - request object
 * @param {Response} res - response object
 * @param {Function} next - next middleware function.
 * @throws {Error} In case of any error during registration.
 * @returns {Response} returns a JSON response with everyNews
 */
exports.GetEveryNews = async (req, res, next) => {
  try {
    const { pageSize, topic } = req.query;

    const _DefaultTopic = topic || "india";
    const _DefaultPageSize = pageSize || 7;

    const everyNews = await getEveryNews(_DefaultTopic, _DefaultPageSize);

    return res.status(200).json({
      data: everyNews,
    });
  } catch (error) {
    console.log(
      `Error: src > controllers > News > index.js > GetEveryNews - ${error.message}`
    );
    next(error);
  }
};

/**
 * @function SaveNews
 * @description Saves a news article for the authenticated user.
 * @param {Request} req - request object
 * @param {Response} res - response object
 * @param {Function} next - next middleware function.
 * @throws {Error} In case of any error during registration.
 * @returns {Response} returns a JSON response with status and message
 */
exports.SaveNews = async (req, res, next) => {
  try {
    const { title, description, urlToImage, url } = req.body;
    const user = req.user;

    if (!title || !description || !urlToImage || !url)
      return next(new PrimaryErrorHandler(400, "Invalid request"));

    const _savenews = await newsManger.saveNews(
      user.userid,
      title,
      description,
      urlToImage,
      url
    );

    if (!_savenews)
      return next(PrimaryErrorHandler.somethingWentWrong("Unable to bookmark"));

    return res.status(200).json({
      message: "Success",
    });
  } catch (error) {
    console.log(
      `Error: src > controllers > News > index.js > SaveNews - ${error.message}`
    );
    next(error);
  }
};

/**
 * @function ViewSaveNews
 * @description Retrieves the list of saved news articles for the authenticated user.
 * @param {Request} req - request object
 * @param {Response} res - response object
 * @param {Function} next - next middleware function.
 * @throws {Error} In case of any error during registration.
 * @returns {Response} returns a JSON response with status and saved news
 */
exports.ViewSaveNews = async (req, res, next) => {
  try {
    const user = req.user;

    const _savenews = await newsManger.viewSaveNews(user.userid);

    if (!_savenews)
      return next(PrimaryErrorHandler.notFound("No Saved News"));

    return res.status(200).json({
      status: 200,
      savenews: _savenews,
    });
  } catch (error) {
    console.log(
      `Error: src > controllers > News > index.js > ViewSaveNews - ${error.message}`
    );
    next(error);
  }
};
