// SKILL MODEL

const mongoose = require("mongoose");

// SKILL SCHEMA

const skillSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
      trim: true,
    },

    icon: {
      type: String,
      default: "💻",
    },

    skills: {
      type: [String],
      required: true,
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

const Skill = mongoose.model("Skill", skillSchema);

module.exports = Skill;
