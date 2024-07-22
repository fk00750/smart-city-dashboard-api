const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const passport = require("passport");
const helmet = require("helmet");
const session = require("express-session");
const swaggerUI = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerDocumentation = YAML.load('../swagger.yaml')
const cookieParser = require("cookie-parser");
const AuthRouter = require("./routes/Auth/");
const ProfileRouter = require("./routes/Profile/");
const WeatherRouter = require("./routes/Weather/");
const NewsRouter = require("./routes/News/");
const AIRouter = require("./routes/AI/");
const errorHandler = require("./middleware/error.handler");
const { passportConfig } = require("./config/passport.config");

const app = express();
env.config();

/**
 * Apply various security-related HTTP headers to the responses.
 * @see {@link https://www.npmjs.com/package/helmet} for more information about helmet middleware.
 */
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        connectSrc: ["'self'", "https://authenticate-kx0v.onrender.com"],
      },
    },
    referrerPolicy: { policy: "no-referrer" },
    hsts: {
      maxAge: 21945600, // 254 days
      includeSubDomains: false,
    },
    frameguard: {
      action: "deny",
    },
    noSniff: true,
  })
);

// cookie parser
app.use(cookieParser());

/**
 * Log HTTP requests to the console.
 */
app.use(morgan("dev"));

/**
 * Parse incoming request bodies in JSON format.
 */
app.use(express.json());

/**
 * Parse incoming request bodies in URL-encoded format.
 */
app.use(express.urlencoded({ extended: false }));

/**
 * Initialize Passport.js for authentication.
 */
passportConfig(passport);

/**
 * Configure express-session middleware.
 */
app.use(
  session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }, // for demo purpose only, set to true in a production environment
  })
);

app.use(
  cors({
    origin: "*",
  })
);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocumentation))

/**
 * Handle root endpoint.
 */
app.use(express.static(path.join(__dirname, '..', 'docs', 'jsdoc')));
app.get("/", (req, res) => {
  const filePath = path.join(__dirname, '..', 'docs', 'jsdoc', 'index.html');
  return res.sendFile(filePath);
});


/**
 * Route for authentication-related endpoints.
 */
app.use("/api/auth", AuthRouter);
app.use("/api/profile", ProfileRouter);
app.use("/api/weather", WeatherRouter);
app.use("/api/news", NewsRouter);
app.use("/api/ai", AIRouter);

/**
 * Error handling middleware.
 */
app.use(errorHandler);

module.exports = app;
