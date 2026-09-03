// ERROR MIDDLEWARE

const errorMiddleware = (err, req, res, next) => {
  console.error("ERROR:", err);

  // ----------------------------------------
  // DEFAULT ERROR VALUES
  // ----------------------------------------

  let statusCode = err.statusCode || 500;

  let message = err.message || "Internal Server Error";

  // ----------------------------------------
  // MONGOOSE VALIDATION ERROR
  // ----------------------------------------

  if (err.name === "ValidationError") {
    statusCode = 400;

    message = Object.values(err.errors)
      .map((error) => error.message)
      .join(", ");
  }

  // ----------------------------------------
  // MONGOOSE INVALID ID ERROR
  // ----------------------------------------

  if (err.name === "CastError") {
    statusCode = 400;

    message = "Invalid ID format";
  }

  // ----------------------------------------
  // DUPLICATE KEY ERROR
  // ----------------------------------------

  if (err.code === 11000) {
    statusCode = 409;

    const field = Object.keys(err.keyValue || {})[0];

    message = `${field || "Value"} already exists`;
  }

  // ----------------------------------------
  // SEND ERROR RESPONSE
  // ----------------------------------------

  res.status(statusCode).json({
    success: false,
    message,
  });
};

// EXPORT

module.exports = errorMiddleware;
