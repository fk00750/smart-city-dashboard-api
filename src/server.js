const app = require("./app");
const env = require("dotenv");
const client = require("./db/manage.database");

env.config();

const PORT = process.env.PORT || 6000;

app.listen(PORT, async () => {
  console.log(`Server is running on PORT ${PORT}`);

  try {
    await client.connect();
    console.log("Connected to database");
  } catch (error) {
    console.log("Error while connecting to database", error.message);
  }
});
