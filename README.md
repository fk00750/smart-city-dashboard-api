# Smart City Dashboard API

<img src="https://res.cloudinary.com/dqx0fhscj/image/upload/v1721626636/wmtnmmslzsefkpgkcjsh.jpg">

Welcome to **Smart City Dashboard API**, a robust REST API designed to power a Smart City Dashboard, providing features for user authentication, profile management, news retrieval, weather information, and email notifications.

## Table of Contents

1. [Getting Started](#📌-getting-started)
2. [Tech Stack](#🧰-tech-stack)
2. [API Endpoints](#✨-api-endpoints)
3. [Additional Features](#additional-features)
4. [Security Enhancements](#security-enhancements)
4. [Future Enhancements](#🚀-future-enhancements)

## 📌 Getting Started

To get started with the Smart City Dashboard API, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-repo/smart-city-dashboard-api.git
   cd smart-city-dashboard-api
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add the necessary environment variables:

   ```
   PORT=3001
   NEW_APIKEY=YOUR NEWS API KEY
   WEATHER_APIKEY=YOUR WEATHER API KEY
   SESSION_KEY=YOUR SECRET SESSION KEY
   ```

4. **Set up the PostgreSQL and create necessary tables**:

   - Set up PostgreSQL connection variables

   ```
   // manage.database.js

   const { Client } = require("pg");

   const client = new Client({
     user: "me",
     host: "localhost",
     database: "api",
     password: "password",
     port: 5432,
   });

   module.exports = client;

   ```

   - Create necessary tables:

   ```
   // create users table
   CREATE TABLE IF NOT EXISTS users (
       id SERIAL PRIMARY KEY,
       userId VARCHAR(255) NOT NULL,
       name VARCHAR(255),
       email VARCHAR(255),
       password VARCHAR(255),
       role VARCHAR(255) DEFAULT user,
       createdAt TIMESTAMP NOT NULL,
       updatedAt TIMESTAMP NOT NULL
   )

   // create table to save news
   CREATE TABLE IF NOT EXISTS savenews (
       id SERIAL PRIMARY KEY,
       userId VARCHAR(255) NOT NULL,
       newsId VARCHAR(255) NOT NULL,
       title VARCHAR(255),
       description VARCHAR(255),
       urltoimage VARCHAR(255),
       url VARCHAR(255),
       createdAt TIMESTAMP NOT NULL,
       updatedAt TIMESTAMP NOT NULL
   )

   // create table to save refresh token
   CREATE TABLE IF NOT EXISTS refresh (
       id SERIAL PRIMARY KEY,
       userId VARCHAR(255) NOT NULL,
       refreshToken VARCHAR(1000) NOT NULL,
       status BOOLEAN NOT NULL,
       expiresAt VARCHAR(255) NOT NULL,
       createdAt TIMESTAMP NOT NULL DEFAULT NOW(),
       updatedAt TIMESTAMP NOT NULL DEFAULT NOW()
   );
   ```

5. **Run the server**:
   ```bash
   npm start
   ```

## 🧰 Tech Stack

- Node.js
- Express.js
- PostgreSQL

## ✨ API Endpoints

- **POST** Register: Registers a new user with name, email, and password.
- **POST** Login: Authenticates a user and issues access and refresh tokens.
- **GET** Profile: Retrieves the authenticated user's profile information.
- **GET** News Headlines: Fetches top news headlines based on the specified country and page size.
- **GET** Every News: Fetches news articles based on the specified topic and page size.
- **POST** Save News: Saves a news article to the authenticated user's account.
- **GET** View Save News: Retrieves the list of news articles saved by the authenticated user.
- **PATCH** Update Email: Updates the authenticated user's email address.
- **PATCH** Update Name: Updates the authenticated user's name.
- **GET** City Weather: Fetches weather information for a specified city.
- **GET** Location Weather: Fetches weather information based on specified latitude and longitude.
- **POST** Email Top News Headlines: Sends an email with the top news headlines to the authenticated user via a Zapier webhook.

## Additional Features

- **Password Hashing & Verification**: Passwords are securely hashed and verified during login.
- **JWT Token Issuance**: Upon successful login, JWT tokens (access and refresh tokens) are issued for authentication.
- **Access Control**: Using `passport-jwt`, access to protected routes is provided only with a valid JWT token.
- **Error Handling**: Proper error management system is implemented for graceful handling of errors.
- **Database Integration**: PostgreSQL database is used with Sequelize ORM for efficient data storage and retrieval.
- **Data Validation**: Validators are implemented to ensure data integrity and security.

## 🔐 Security Enhancements

- **Helmet Middleware**: Various security headers such as Content Security Policy, Referrer Policy, HSTS, Frameguard, and X-Content-Type-Options are implemented using the Helmet middleware.
- **CORS Policy**: CORS (Cross-Origin Resource Sharing) policy is implemented to restrict unauthorized access to resources.
- **Refresh Token Rotation**: Refresh tokens are rotated to enhance security.
- **Refresh Token Management**: Proper management of refresh tokens is implemented to ensure secure authentication.
- **Request Validation**: Requests are validated to prevent unauthorized or malformed requests.

## 📋 API Documentation

Detailed API documentation including endpoints, request/response formats, and usage examples can be found [here](https://smartcityserver-prod.onrender.com/api-docs).

# 🚀 Future Enhancements
To further improve the functionality and scalability of SpamBee API, the following features can be considered for future development:

- Pagination: Implement pagination for endpoints that return lists of data to handle large datasets more efficiently and improve response times.
- Containerization: Use Docker to containerize the application, ensuring consistent environments for development, testing, and production, and simplifying deployment processes.
- Microservices Architecture: Refactor the application into microservices to improve scalability, maintainability, and ease of deployment. Each service can handle a specific aspect of the application (e.g., user management, contacts management, spam detection).
- IP Monitoring: Implement IP monitoring and rate limiting to enhance security by detecting and preventing abuse or malicious activities. This includes tracking IP addresses for login attempts and requests to identify patterns of misuse.

## Contact

For any questions or issues, please contact [Faiz Ali Khan](mailto:faiz@example.com).