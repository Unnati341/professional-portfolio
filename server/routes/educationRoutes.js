// EDUCATION ROUTES

const express = require("express");

const {
  getEducation,
  getEducationById,
  createEducation,
  updateEducation,
  deleteEducation,
} = require("../controllers/educationController");

const router = express.Router();

// GET ALL EDUCATION

router.get("/", getEducation);

// GET SINGLE EDUCATION

router.get("/:id", getEducationById);

// CREATE EDUCATION

router.post("/", createEducation);

// UPDATE EDUCATION

router.put("/:id", updateEducation);

// DELETE EDUCATION

router.delete("/:id", deleteEducation);

// EXPORT

module.exports = router;
