// PROFILE MODEL

const mongoose = require("mongoose");

// PROFILE SCHEMA

const profileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    objective: {
      type: String,
      required: true,
      trim: true,
    },

    location: {
      type: String,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      trim: true,
    },

    github: {
      type: String,
      trim: true,
    },

    linkedin: {
      type: String,
      trim: true,
    },

    profileImage: {
      type: String,
      default: "",
    },

    resumeUrl: {
      type: String,
      default: "",
    },

    about: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

// EXPORT MODEL

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
