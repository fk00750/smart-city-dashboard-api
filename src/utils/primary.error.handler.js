/**
 * @class PrimaryErrorHandler
 * @extends Error
 * @description Custom error class for handling various types of errors with HTTP status codes.
 */
class PrimaryErrorHandler extends Error {
  /**
   * @constructor
   * @param {number} status - The HTTP status code associated with the error.
   * @param {string} message - The error message.
   */
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }

  /**
   * @static
   * @method alreadyExist
   * @description Creates an error indicating that a resource already exists.
   * @param {string} message - The error message.
   * @returns {PrimaryErrorHandler} A PrimaryErrorHandler instance with status code 409.
   */
  static alreadyExist(message) {
    return new PrimaryErrorHandler(409, message);
  }

  /**
   * @static
   * @method wrongCredentials
   * @description Creates an error indicating incorrect credentials.
   * @param {string} [message="username and password are wrong"] - The error message.
   * @returns {PrimaryErrorHandler} A PrimaryErrorHandler instance with status code 401.
   */
  static wrongCredentials(message = "username and password are wrong") {
    return new PrimaryErrorHandler(401, message);
  }

  /**
   * @static
   * @method notFound
   * @description Creates an error indicating that the resource was not found.
   * @param {string} [message="404 User Not Found"] - The error message.
   * @returns {PrimaryErrorHandler} A PrimaryErrorHandler instance with status code 404.
   */
  static notFound(message = "404 User Not Found") {
    return new PrimaryErrorHandler(404, message);
  }

  /**
   * @static
   * @method unAuthorized
   * @description Creates an error indicating unauthorized access.
   * @param {string} [message="unAuthorized"] - The error message.
   * @returns {PrimaryErrorHandler} A PrimaryErrorHandler instance with status code 401.
   */
  static unAuthorized(message = "unAuthorized") {
    return new PrimaryErrorHandler(401, message);
  }

  /**
   * @static
   * @method somethingWentWrong
   * @description Creates an error indicating a generic failure.
   * @param {string} [message="Something Went Wrong"] - The error message.
   * @returns {PrimaryErrorHandler} A PrimaryErrorHandler instance with status code 400.
   */
  static somethingWentWrong(message = "Something Went Wrong") {
    return new PrimaryErrorHandler(400, message);
  }

  /**
   * @static
   * @method serverError
   * @description Creates an error indicating an internal server error.
   * @param {string} [message="Internal Server Error"] - The error message.
   * @returns {PrimaryErrorHandler} A PrimaryErrorHandler instance with status code 505.
   */
  static serverError(message = "Internal Server Error") {
    return new PrimaryErrorHandler(505, message);
  }
}

module.exports = PrimaryErrorHandler;
