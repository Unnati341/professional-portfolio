// EDUCATION CONTROLLER

const Education = require("../models/Education");

// GET ALL EDUCATION

const getEducation = async (req, res, next) => {
  try {
    const education = await Education.find().sort({
      order: 1,
      createdAt: 1,
    });

    res.status(200).json({
      success: true,

      count: education.length,

      data: education,
    });
  } catch (error) {
    next(error);
  }
};

// GET SINGLE EDUCATION

const getEducationById = async (req, res, next) => {
  try {
    const education = await Education.findById(req.params.id);

    if (!education) {
      return res.status(404).json({
        success: false,

        message: "Education record not found",
      });
    }

    res.status(200).json({
      success: true,

      data: education,
    });
  } catch (error) {
    next(error);
  }
};

// CREATE EDUCATION

const createEducation = async (req, res, next) => {
  try {
    const education = await Education.create(req.body);

    res.status(201).json({
      success: true,

      message: "Education record created successfully",

      data: education,
    });
  } catch (error) {
    next(error);
  }
};

// UPDATE EDUCATION

const updateEducation = async (req, res, next) => {
  try {
    const education = await Education.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );

    if (!education) {
      return res.status(404).json({
        success: false,

        message: "Education record not found",
      });
    }

    res.status(200).json({
      success: true,

      message: "Education record updated successfully",

      data: education,
    });
  } catch (error) {
    next(error);
  }
};

// DELETE EDUCATION

const deleteEducation = async (req, res, next) => {
  try {
    const education = await Education.findByIdAndDelete(req.params.id);

    if (!education) {
      return res.status(404).json({
        success: false,

        message: "Education record not found",
      });
    }

    res.status(200).json({
      success: true,

      message: "Education record deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

// EXPORT

module.exports = {
  getEducation,

  getEducationById,

  createEducation,

  updateEducation,

  deleteEducation,
};
