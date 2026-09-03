// SKILL ROUTES

const express = require("express");

const {
  getSkills,
  getSkillById,
  createSkill,
  updateSkill,
  deleteSkill,
} = require("../controllers/skillController");

const router = express.Router();

// GET ALL SKILLS

router.get("/", getSkills);

// GET SINGLE SKILL

router.get("/:id", getSkillById);

// CREATE SKILL

router.post("/", createSkill);

// UPDATE SKILL

router.put("/:id", updateSkill);

// DELETE SKILL

router.delete("/:id", deleteSkill);

// EXPORT

module.exports = router;
