// CONTACT ROUTES

const express = require("express");

const {
  createContact,
  getContacts,
} = require("../controllers/contactController");

const validateRequest = require("../middleware/validationMiddleware");

const { validateContact } = require("../utils/validators");

const router = express.Router();

// POST CONTACT MESSAGE

router.post("/", validateRequest(validateContact), createContact);

// GET ALL CONTACT MESSAGES

router.get("/", getContacts);

module.exports = router;
