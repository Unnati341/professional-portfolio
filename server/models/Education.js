// EDUCATION MODEL

const mongoose = require("mongoose");

// EDUCATION SCHEMA

const educationSchema = new mongoose.Schema(
  {
    year: {
      type: String,
      required: true,
      trim: true,
    },

    degree: {
      type: String,
      required: true,
      trim: true,
    },

    institute: {
      type: String,
      required: true,
      trim: true,
    },

    cgpa: {
      type: String,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
      default: "",
    },

    order: {
      type: Number,
      default: 0,
    },
  },

  {
    timestamps: true,
  },
);

// EXPORT MODEL

const Education = mongoose.model("Education", educationSchema);

module.exports = Education;
