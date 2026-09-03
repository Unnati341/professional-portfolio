// PROJECT ROUTES

const express = require("express");

const {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");

const router = express.Router();

// GET ALL PROJECTS

router.get("/", getProjects);

// GET SINGLE PROJECT

router.get("/:id", getProjectById);

// CREATE PROJECT

router.post("/", createProject);

// UPDATE PROJECT

router.put("/:id", updateProject);

// DELETE PROJECT

router.delete("/:id", deleteProject);

// EXPORT

module.exports = router;
