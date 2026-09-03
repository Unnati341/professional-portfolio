// EMAIL SERVICE

const nodemailer = require("nodemailer");

// CREATE EMAIL TRANSPORTER

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,

  port: Number(process.env.EMAIL_PORT) || 587,

  secure: false,

  auth: {
    user: process.env.EMAIL_USER,

    pass: process.env.EMAIL_PASSWORD,
  },
});

// SEND CONTACT EMAIL

const sendContactEmail = async ({ name, email, subject, message }) => {
  // CHECK EMAIL CONFIGURATION

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    console.warn("Email configuration is missing. Email was not sent.");

    return;
  }

  // EMAIL OPTIONS

  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,

    to: process.env.EMAIL_USER,

    replyTo: email,

    subject: `Portfolio Contact: ${subject}`,

    text: `
New message received from your portfolio.

Name: ${name}

Email: ${email}

Subject: ${subject}

Message:
${message}
        `,
  };

  // SEND EMAIL

  await transporter.sendMail(mailOptions);

  console.log("Contact email sent successfully.");
};

// EXPORT

module.exports = {
  sendContactEmail,
};
