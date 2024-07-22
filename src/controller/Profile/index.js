const ProfileManager = require("../../utils/profile.manager");
const profileManager = new ProfileManager();
const PrimaryErrorHandler = require("../../utils/primary.error.handler");

/**
 * @function Profile
 * @description Retrieves the profile information of the authenticated user.
 * @param {Request} req - request object
 * @param {Response} res - response object
 * @param {Function} next - next middleware function.
 * @throws {Error} In case of any error during fetching profile.
 * @returns {Response} returns a JSON response with user's profile information
 */
exports.Profile = async (req, res, next) => {
  try {
    const user = req.user;

    return res.status(200).json({
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    console.log(
      `Error: src > controllers > Profile > index.js > Profile - ${error.message}`
    );
    next(error);
  }
};

/**
 * @function updateEmail
 * @description Updates the email address of the authenticated user.
 * @param {Request} req - request object
 * @param {Response} res - response object
 * @param {Function} next - next middleware function.
 * @throws {Error} In case of any error during email update.
 * @returns {Response} returns a JSON response with status and message
 */
exports.updateEmail = async (req, res, next) => {
  try {
    const user = req.user;
    const email = req.body.email;

    const isEmailUpdated = await profileManager.updateEmail(email, user.userid);

    if (!isEmailUpdated) return next(PrimaryErrorHandler.somethingWentWrong());

    return res.status(200).json({
      status: 200,
      message: "Success",
    });
  } catch (error) {
    console.log(
      `Error: src > controllers > Profile > index.js > updateEmail - ${error.message}`
    );
    next(error);
  }
};

/**
 * @function updateName
 * @description Updates the name of the authenticated user.
 * @param {Request} req - request object
 * @param {Response} res - response object
 * @param {Function} next - next middleware function.
 * @throws {Error} In case of any error during name update.
 * @returns {Response} returns a JSON response with status and message
 */
exports.updateName = async (req, res, next) => {
  try {
    const user = req.user;
    const name = req.body.name;

    const isNameUpdated = await profileManager.updateName(name, user.userid);

    if (!isNameUpdated) return next(PrimaryErrorHandler.somethingWentWrong());

    return res.status(200).json({
      status: 200,
      message: "Success",
    });
  } catch (error) {
    console.log(
      `Error: src > controllers > Profile > index.js > updateName - ${error.message}`
    );
    next(error);
  }
};
