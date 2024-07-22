/**
 * @file auth.manager.js
 * @description manager the following opertions: finding user, creating user, hashing and verifying password, creating and verifying unique id's
 */

const client = require("../db/manage.database");
const crypto = require("crypto");

/**
 * @class AuthManager
 * @description manages authentication
 */
class AuthManager {
  async findByEmail(email) {
    try {
      if (!email) return undefined;

      const result = await client.query(
        "SELECT * FROM users WHERE email = $1",
        [email]
      );

      if (result.rowCount === 0) return null;

      return result.rows[0];
    } catch (error) {
      console.log(
        `utils > auth.manager.js > AuthManager > findByEmail: ${error.message}`
      );
      throw error;
    }
  }

  /**
   * @async
   * @method createUser
   * @description Create user with name, email and password
   * @param {string} name
   * @param {string} email
   * @param {string} password
   * @throws {Error} trows error in case of any failure
   * @returns {undefined|boolean|Array} - undefined if name,phone and password not provided, and if user created, returns user object
   */
  async createUser(name, email, password) {
    try {
      if (!name || !email || !password) return undefined;

      // create unique id
      const userId = await this.createUniqueId("user");

      if (!userId) return null;

      // hash password
      const hashedPassword = await this.hashedPassword(password);

      if (!hashedPassword) return null;

      // inserting user
      const result = await client.query(
        "INSERT INTO users (userId, name, email, password, createdAt, updatedAt) VALUES ($1, $2, $3, $4, NOW(), NOW()) RETURNING *",
        [userId, name, email, hashedPassword]
      );

      if (result.rowCount !== 1) return null;

      return result.rows[0];
    } catch (error) {
      console.log(
        `utils > auth.manager.js > AuthManager > createUser: ${error.message}`
      );
      throw error;
    }
  }

  /**
   * @async
   * @method hashedPassword
   * @description salt and hash the password
   * @param {string} password
   * @throws {Error} trows error in case of any failure
   * @returns {string} salted and hashed password
   */
  async hashedPassword(password) {
    try {
      // create a salt
      const salt = crypto.randomBytes(16).toString("hex");

      // create a hash
      const hashedPassword = crypto
        .pbkdf2Sync(password, salt, 10000, 64, "sha256")
        .toString("hex");

      // combine salt with hash
      const storedPassword = `${salt}:${hashedPassword}`;

      return storedPassword;
    } catch (error) {
      console.log(
        `src > utils > auth.manager.js > hashedPassword : ${error.message}`
      );
      throw error;
    }
  }

  /**
   * @async
   * @method verifyPassword
   * @description Verify salted and hashed the password
   * @param {string} enteredPassword - entered password
   * @param {string} storedPassword - stored password
   * @throws {Error} trows error in case of any failure
   * @returns {boolean} True if password is correct
   */
  async verifyPassword(enteredPassword, storedPassword) {
    try {
      const [salt, storedHash] = storedPassword.split(":");

      const enteredHash = crypto
        .pbkdf2Sync(enteredPassword, salt, 10000, 64, "sha256")
        .toString("hex");

      return enteredHash === storedHash;
    } catch (error) {
      console.log(
        `src > utils > auth.manager.js > verifyPassword : ${error.message}`
      );
      throw error;
    }
  }

  /**
   * @async
   * @method createUniqueId
   * @description Create unique id for different purpose
   * @param {string} type - unique id type
   * @throws {Error} trows error in case of any failure
   * @returns {string} unique id
   */
  async createUniqueId(type = "user") {
    try {
      // create unqiue id string
      const unique_string = Date.now().toString(16);
      let id;

      // check the id format
      switch (type) {
        case "user":
          id = `${unique_string}/u`;
          break;
        case "spam":
          id = `${unique_string}/s`;
          break;
        case "news":
          id = `${unique_string}/n`;
          break;
        default:
          id = `${unique_string}/u`;
          break;
      }

      if (id) return id;
    } catch (error) {
      console.log(
        `src > utils > auth.manager.js > createUniqueId : ${error.message}`
      );
      throw error;
    }
  }

  /**
   * @async
   * @method validateUserId
   * @description validates unique or user id format
   * @param {string} id - unique id
   * @throws {Error} trows error in case of any failure
   * @returns {boolean} True if id format is correct
   */
  async validateUserId(id) {
    try {
      const userTypes = ["u", "c", "s", "n"];

      const splitId = id.split("/");

      if (splitId.length !== 2) throw new Error("Invalid user id format");

      const [dateString, specialSymbol] = splitId;

      if (!userTypes.includes(specialSymbol))
        throw new Error("Invalid user id format");

      const dateStringRegex = /^[0-9a-f]{11}$/i;

      if (!dateStringRegex.test(dateString))
        throw new Error("Invalid user id format");

      return true;
    } catch (error) {
      console.log(
        `src > utils > auth.manager.js > validateUserId : ${error.message}`
      );
      throw error;
    }
  }
}

module.exports = AuthManager;
