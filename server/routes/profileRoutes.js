// PROFILE ROUTES

const express = require("express");

const {
  getProfile,
  createProfile,
  updateProfile,
} = require("../controllers/profileController");

const router = express.Router();

// GET PROFILE

router.get("/", getProfile);

// CREATE PROFILE

router.post("/", createProfile);

// UPDATE PROFILE

router.put("/", updateProfile);

// EXPORT

module.exports = router;
