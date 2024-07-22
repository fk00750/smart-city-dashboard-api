const client = require("../db/manage.database");
const AuthManager = require("./auth.manager");
const authManager = new AuthManager();

/**
 * @class NewsManager
 * @description Class responsible for managing news data, including saving and viewing saved news.
 */
class NewsManager {
  /**
   * @async
   * @method saveNews
   * @description Save a news item to the database.
   * @param {string} userId - The ID of the user saving the news.
   * @param {string} title - The title of the news item.
   * @param {string} description - The description of the news item.
   * @param {string} urlToImage - The URL of the image associated with the news item.
   * @param {string} url - The URL of the news item.
   * @returns {object|null|undefined} Returns the saved news object, null if saving fails, or undefined if parameters are invalid.
   */
  async saveNews(userId, title, description, urlToImage, url) {
    try {
      if (!title || !description || !urlToImage || !url) return undefined;

      // Generate a unique news ID.
      const newsId = await authManager.createUniqueId("news");

      // If newsId is null, return null indicating ID generation failure.
      if (!newsId) return null;

      // Save the news item to the database.
      const result = await client.query(
        "INSERT INTO savenews (userid, newsid, title, description, urltoimage, url, createdAt, updatedAt) VALUES ($1, $2, $3, $4, $5, $6, NOW(), NOW()) RETURNING *",
        [userId, newsId, title, description, urlToImage, url]
      );

      // If result is null or no rows were affected, return null indicating saving failure.
      if (result.rowCount !== 1) return null;

      // Return the saved news object.
      return result.rows[0];
    } catch (error) {
      // Log the error and re-throw.
      console.log(error);
      console.log(
        `utils > news.manager.js > NewsManager > saveNews: ${error.message}`
      );
      throw error;
    }
  }

  /**
   * @async
   * @method viewSaveNews
   * @description Retrieve saved news items for a specific user.
   * @param {string} userId - The ID of the user whose saved news items are to be retrieved.
   * @returns {Array<object>|null|undefined} Returns an array of saved news items, null if no news items found, or undefined if no user ID provided.
   */
  async viewSaveNews(userId) {
    try {
      if (!userId) return undefined;

      // Retrieve saved news items for the user from the database.
      const result = await client.query(
        "SELECT * FROM savenews WHERE userid = $1",
        [userId]
      );

      // If result is null or no rows were found, return null indicating no news items found.
      if (result.rowCount === 0) return null;

      // Return the array of saved news items.
      return result.rows;
    } catch (error) {
      // Log the error and re-throw.
      console.log(
        `utils > news.manager.js > NewsManager > viewSaveNews: ${error.message}`
      );
      throw error;
    }
  }
}

module.exports = NewsManager;
