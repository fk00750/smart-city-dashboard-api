const AuthManager = require("../../utils/auth.manager");
const PrimaryErrorHandler = require("../../utils/primary.error.handler");
const TokenManager = require("../../utils/token.manager");
const authManger = new AuthManager();
const tokenManager = new TokenManager();
const IssueAccessAndRefreshToken = require("../../utils/jwt/issue.jwt.token");

/**
 * @async
 * @function Register
 * @description Handle user registration process
 * @param {Request} req - request object
 * @param {Response} res - response object
 * @param {Function} next - next middleware function.
 * @throws {Error} In case of any error during registration.
 * @returns {Response} returns a JSON response with status and message.
 */
exports.Register = async (req, res, next) => {
  try {
    // get name, phone and password from req.body
    const { name, email, password } = req.body;

    if (!name || !email || !password)
      return next(new PrimaryErrorHandler(400, "Invalid request"));

    // check if user already exists in the database
    const user = await authManger.findByEmail(email);

    if (user)
      return next(PrimaryErrorHandler.alreadyExist("user already exist"));

    // create new user
    const isUserCreated = await authManger.createUser(name, email, password);

    // If user creation fails, response with an error that something went wrong
    if (!isUserCreated) return next(PrimaryErrorHandler.somethingWentWrong());

    // if user creation successfull, response with status code 200 and success message
    if (!isUserCreated.error)
      return res.status(200).json({
        status: 200,
        message: "success",
      });
  } catch (error) {
    console.log(
      `Error: src > controllers > Auth > index.js > Register - ${error.message}`
    );
    next(error);
  }
};

/**
 * @async
 * @function Login
 * @description Handle user login process
 * @param {Request} req - request object
 * @param {Response} res - response object
 * @param {Function} next - next middleware function.
 * @throws {Error} In case of any error during registration.
 * @returns {Response} returns a JSON response with status, message , access and refresh token.
 */
exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return next(PrimaryErrorHandler(400, "Invalid request"));

    const user = await authManger.findByEmail(email);

    if (!user) return next(PrimaryErrorHandler.notFound("user not found"));

    const isPasswordValid = await authManger.verifyPassword(
      password,
      user.password
    );

    if (!isPasswordValid)
      return next(PrimaryErrorHandler.wrongCredentials("Invalid Password"));

    // find and delete existing refresh token
    const existingRefreshToken = await tokenManager.findRefreshTokenById(
      user.userid
    );
    if (existingRefreshToken)
      await tokenManager.deleteExistingRefreshTokens(user.userid);

    const accessToken = await IssueAccessAndRefreshToken.issueAccessToken(
      user.userid
    );
    const refreshToken = await IssueAccessAndRefreshToken.issueRefreshToken(
      user.userid
    );

    if (!accessToken || !refreshToken)
      return next(PrimaryErrorHandler.somethingWentWrong());

    const decode = await tokenManager.decodeToken(refreshToken);

    if (!decode)
      return next(
        PrimaryErrorHandler.somethingWentWrong("unable to refresh the token")
      );

    const { exp: expiresAt } = decode;

    // store new refresh token
    const storeNewRefreshToken = await tokenManager.storeRefreshToken(
      refreshToken,
      user.userid,
      expiresAt
    );

    if (!storeNewRefreshToken)
      return next(
        PrimaryErrorHandler.somethingWentWrong("unable to refresh the token")
      );

    return res.status(200).json({
      success: true,
      accessToken: accessToken,
      refreshToken: refreshToken,
      message: "Login Successfully",
    });
  } catch (error) {
    console.log(
      `Error: src > controllers > Auth > index.js > Register - ${error.message}`
    );
    next(error);
  }
};
