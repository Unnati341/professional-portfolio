// ENVIRONMENT CONFIGURATION

const path = require("path");
const dotenv = require("dotenv");

// LOAD .ENV FILE

dotenv.config({
  path: path.resolve(__dirname, "../../.env"),
});

// ENVIRONMENT VARIABLES

const config = {
  port: process.env.PORT || 5000,

  mongoUri: process.env.MONGO_URI,

  email: {
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT) || 587,
    user: process.env.EMAIL_USER,
    password: process.env.EMAIL_PASSWORD,
  },

  clientUrl: process.env.CLIENT_URL || "http://localhost:5500",
};

// VALIDATE REQUIRED VARIABLES

if (!config.mongoUri) {
  throw new Error("MONGO_URI is missing in .env file");
}

// EXPORT CONFIG

module.exports = config;
