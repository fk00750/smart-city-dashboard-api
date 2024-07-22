const client = require("../db/manage.database");

/**
 * @class ProfileManager
 * @description Class responsible for managing user profile updates such as email, phone, name, and password.
 */
class ProfileManager {
  /**
   * @async
   * @method updateEmail
   * @description Update the email address of the user with the given userId.
   * @param {string} email - The new email address.
   * @param {string} userId - The ID of the user whose email is to be updated.
   * @throws {Error} In case of any error during email update process.
   * @returns {Promise<Array|null|undefined>} Returns the result Array || null if update fails, || undefined if parameters are invalid.
   */
  async updateEmail(email, userId) {
    try {
      if (!userId || !email) return undefined;

      // Update the user's email in the database.
      const result = await client.query(
        `UPDATE users SET email = $1 WHERE userid = $2 RETURNING *;`,
        [email, userId]
      );

      // If result is null, return false indicating update failure.
      if (result.rowCount === 0) return null;

      // Return the result object of the update operation.
      return result.rows[0];
    } catch (error) {
      // Log the error and return the error object.
      console.log(
        `utils > profile.manager.js > ProfileManager > updateEmail: ${error.message}`
      );
      return error;
    }
  }

  /**
   * @async
   * @method updateName
   * @description Update the name of the user with the given userId.
   * @param {string} name - The new name.
   * @param {string} userId - The ID of the user whose name is to be updated.
   * @throws {Error} In case of any error during name update process.
   * @returns {Promise<Array|null|undefined>} Returns the result Array || null if update fails, || undefined if parameters are invalid.
   */
  async updateName(name, userId) {
    try {
      if (!name || !userId) return undefined;

      // Update the user's email in the database.
      const result = await client.query(
        `UPDATE users SET name = $1 WHERE userid = $2 RETURNING *;`,
        [name, userId]
      );

      // If result is null, return false indicating update failure.
      if (result.rowCount === 0) return null;

      // Return the result object of the update operation.
      return result.rows[0];
    } catch (error) {
      // Log the error and return the error object.
      console.log(
        `utils > profile.manager.js > ProfileManager > updateName: ${error.message}`
      );
      return error;
    }
  }
}

module.exports = ProfileManager;
