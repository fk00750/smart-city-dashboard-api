const { Client } = require("pg");

const client = new Client({
  user: "me",
  host: "localhost",
  database: "api",
  password: "password",
  port: 5432,
});

// Connect to the PostgreSQL server
client
  .connect()
  .then(() => {
    console.log("Connected to PostgreSQL database");
    // Call function to create schema
    // createSchema()
    //   .then(() => {
    //     console.log("Schema creation successful");
    //   })
    //   .catch((error) => {
    //     console.error("Error creating schema:", error);
    //   })
    //   .finally(() => {
    //     // Close the client connection
    //     client.end();
    //   });

    createSaveNewsSchema()
      .then(() => {
        console.log("Schema creation successful");
      })
      .catch((error) => {
        console.error("Error creating schema:", error);
      })
      .finally(() => {
        // Close the client connection
        client.end();
      });

    createRefreshTokenSchema()
      .then(() => {
        console.log("Schema creation successful");
      })
      .catch((error) => {
        console.error("Error creating schema:", error);
      })
      .finally(() => {
        // Close the client connection
        client.end();
      });
  })
  .catch((error) => {
    console.error("Error connecting to PostgreSQL:", error);
  });

// Function to create schema
async function createSchema() {
  try {
    const query = `
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
    `;
    await client.query(query);
    console.log("Users table created successfully");
  } catch (error) {
    throw error;
  }
}

async function createSaveNewsSchema() {
  try {
    const query = `
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
    `;
    await client.query(query);
    console.log("News Bookmark table created successfully");
  } catch (error) {
    throw error;
  }
}

async function createRefreshTokenSchema() {
  try {
    const query = `
      CREATE TABLE IF NOT EXISTS refresh (
          id SERIAL PRIMARY KEY,
          userId VARCHAR(255) NOT NULL,
          refreshToken VARCHAR(1000) NOT NULL,
          status BOOLEAN NOT NULL,
          expiresAt VARCHAR(255) NOT NULL,
          createdAt TIMESTAMP NOT NULL DEFAULT NOW(),
          updatedAt TIMESTAMP NOT NULL DEFAULT NOW()
      );
    `;
    await client.query(query);
    console.log("News Bookmark table created successfully");
  } catch (error) {
    throw error;
  }
}
