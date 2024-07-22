const axios = require("axios");

/**
 * @function EmailNewsHeadlines
 * @description Sends an email with news headlines to the authenticated user's email address via a Zapier webhook.
 * @param {Request} req - request object
 * @param {Response} res - response object
 * @param {Function} next - next middleware function.
 * @throws {Error} In case of any error during sending the webhook.
 * @returns {Response} returns a JSON response with success or error message
 */
exports.EmailNewsHeadlines = async (req, res, next) => {
  try {
    const user = req.user;

    // Send email via Zapier webhook
    const response = await axios.post(
      "https://hooks.zapier.com/hooks/catch/19527070/22g2g4d/",
      { email: user.email }
    );
    
    if (response.status === 200) {
      return res.status(200).json({
        error: false,
        message: "Success",
      });
    } else {
      return res.status(409).json({
        error: true,
        message: "Something went wrong, please try again later",
      });
    }
  } catch (error) {
    console.error("Error sending webhook:", error);
    res.status(500).json({
      error: true,
      message: "Error sending webhook",
    });
  }
};
