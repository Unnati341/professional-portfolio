// PORTFOLIO SERVER

// Load environment variables first
require("./config/env");

const app = require("./app");
const connectDB = require("./config/db");

// SERVER CONFIGURATION

const PORT = process.env.PORT || 5000;

// START SERVER

const startServer = async () => {
  try {
    // Connect to MongoDB
    await connectDB();

    // Start Express server
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);

    process.exit(1);
  }
};

// START APPLICATION

startServer();
