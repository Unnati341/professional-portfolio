// EXPRESS APPLICATION

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

// ROUTES

const profileRoutes = require("./routes/profileRoutes");
const projectRoutes = require("./routes/projectRoutes");
const skillRoutes = require("./routes/skillRoutes");
const educationRoutes = require("./routes/educationRoutes");
const contactRoutes = require("./routes/contactRoutes");

// MIDDLEWARE

const errorMiddleware = require("./middleware/errorMiddleware");

// CREATE EXPRESS APP

const app = express();

// SECURITY

app.use(helmet());

// CORS

app.use(
  cors({
    origin: ["http://localhost:5500", "http://127.0.0.1:5500"],

    methods: ["GET", "POST", "PUT", "DELETE"],

    allowedHeaders: ["Content-Type"],
  }),
);

// BODY PARSER

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  }),
);

// RATE LIMITING

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,

  message: {
    success: false,
    message: "Too many requests. Please try again later.",
  },
});

app.use("/api", apiLimiter);

// BASIC ROUTE

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Unnati Portfolio API is running 🚀",
  });
});

// HEALTH CHECK

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is healthy",
    timestamp: new Date().toISOString(),
  });
});

// API ROUTES

app.use("/api/profile", profileRoutes);

app.use("/api/projects", projectRoutes);

app.use("/api/skills", skillRoutes);
app.use("/api/education", educationRoutes);

app.use("/api/contact", contactRoutes);

// 404 HANDLER

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// GLOBAL ERROR HANDLER
// IMPORTANT: KEEP THIS LAST

app.use(errorMiddleware);

// EXPORT APP

module.exports = app;
