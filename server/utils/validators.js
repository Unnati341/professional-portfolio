// VALIDATORS

// EMAIL VALIDATOR

const isValidEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailPattern.test(email);
};

// CONTACT FORM VALIDATOR

const validateContact = ({ name, email, subject, message }) => {
  const errors = {};

  // NAME

  if (!name || name.trim().length < 2) {
    errors.name = "Name must contain at least 2 characters.";
  }

  if (name && name.trim().length > 100) {
    errors.name = "Name cannot exceed 100 characters.";
  }

  // EMAIL

  if (!email || !isValidEmail(email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  // SUBJECT

  if (!subject || subject.trim().length < 3) {
    errors.subject = "Subject must contain at least 3 characters.";
  }

  if (subject && subject.trim().length > 200) {
    errors.subject = "Subject cannot exceed 200 characters.";
  }

  // MESSAGE

  if (!message || message.trim().length < 10) {
    errors.message = "Message must contain at least 10 characters.";
  }

  if (message && message.trim().length > 2000) {
    errors.message = "Message cannot exceed 2000 characters.";
  }

  // RESULT

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

// EXPORT

module.exports = {
  isValidEmail,
  validateContact,
};
