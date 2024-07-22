const { Client } = require("pg");

const client = new Client({
  user: "me",
  host: "localhost",
  database: "api",
  password: "password",
  port: 5432,
});

module.exports = client;
