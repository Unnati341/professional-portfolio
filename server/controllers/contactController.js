// CONTACT CONTROLLER

const Contact = require("../models/Contact");

const { validateContact } = require("../utils/validators");

const { sendContactEmail } = require("../services/emailService");

// CREATE CONTACT MESSAGE

const createContact = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    // ----------------------------------------
    // VALIDATE INPUT
    // ----------------------------------------

    const validation = validateContact({
      name,
      email,
      subject,
      message,
    });

    if (!validation.isValid) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: validation.errors,
      });
    }

    // ----------------------------------------
    // SAVE TO DATABASE
    // ----------------------------------------

    const contact = await Contact.create({
      name: name.trim(),

      email: email.trim().toLowerCase(),

      subject: subject.trim(),

      message: message.trim(),
    });

    // ----------------------------------------
    // SEND EMAIL
    // ----------------------------------------

    try {
      await sendContactEmail({
        name: name.trim(),

        email: email.trim().toLowerCase(),

        subject: subject.trim(),

        message: message.trim(),
      });
    } catch (emailError) {
      console.error("Email sending failed:", emailError.message);
    }

    // ----------------------------------------
    // RESPONSE
    // ----------------------------------------

    res.status(201).json({
      success: true,

      message: "Your message has been sent successfully.",

      data: contact,
    });
  } catch (error) {
    next(error);
  }
};

// GET ALL CONTACT MESSAGES

const getContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,

      count: contacts.length,

      data: contacts,
    });
  } catch (error) {
    next(error);
  }
};

// EXPORT

module.exports = {
  createContact,

  getContacts,
};
