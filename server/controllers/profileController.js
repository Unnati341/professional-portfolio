// PROFILE CONTROLLER

const Profile = require("../models/Profile.js");

// GET PROFILE

const getProfile = async (req, res, next) => {
  try {
    const profile = await Profile.findOne();

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Profile not found",
      });
    }

    res.status(200).json({
      success: true,
      data: profile,
    });
  } catch (error) {
    next(error);
  }
};

// CREATE PROFILE

const createProfile = async (req, res, next) => {
  try {
    const existingProfile = await Profile.findOne();

    if (existingProfile) {
      return res.status(409).json({
        success: false,
        message: "Profile already exists",
      });
    }

    const profile = await Profile.create(req.body);

    res.status(201).json({
      success: true,
      message: "Profile created successfully",
      data: profile,
    });
  } catch (error) {
    next(error);
  }
};

// UPDATE PROFILE

const updateProfile = async (req, res, next) => {
  try {
    const profile = await Profile.findOneAndUpdate({}, req.body, {
      new: true,
      runValidators: true,
    });

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Profile not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      data: profile,
    });
  } catch (error) {
    next(error);
  }
};

// EXPORT CONTROLLERS

module.exports = {
  getProfile,
  createProfile,
  updateProfile,
};
