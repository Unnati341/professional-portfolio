// VALIDATION MIDDLEWARE

const validateRequest = (validator) => {
  return (req, res, next) => {
    try {
      const validation = validator(req.body);

      if (!validation.isValid) {
        return res.status(400).json({
          success: false,

          message: "Validation failed",

          errors: validation.errors,
        });
      }

      next();
    } catch (error) {
      next(error);
    }
  };
};

// EXPORT

module.exports = validateRequest;
