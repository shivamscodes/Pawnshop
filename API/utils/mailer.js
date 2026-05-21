import nodemailer from "nodemailer";

import { config, requireConfig } from "../config/env.js";

const getTransporter = () => {
  const smtpUser = requireConfig(
    config.smtpUser,
    "SMTP_USER is missing. Set your mail credentials in API/.env or Vercel environment variables."
  );
  const smtpPass = requireConfig(
    config.smtpPass,
    "SMTP_PASS is missing. Set your mail credentials in API/.env or Vercel environment variables."
  );

  return nodemailer.createTransport({
    service: config.smtpService,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });
};

export const sendVerificationEmail = async (email) => {
  const verifyUrl = `${config.clientUrl}/verifyemail/${encodeURIComponent(email)}`;

  await getTransporter().sendMail({
    from: config.mailFrom,
    to: email,
    subject: "Verify Your Pawnshop Account",
    html: `
      <h1>Welcome to Pawnshop</h1>
      <p>Your account has been created successfully.</p>
      <p>Please verify your email address to activate your account.</p>
      <a href="${verifyUrl}">Click here to verify your account</a>
    `,
  });
};

export const sendResetPasswordEmail = async (email) => {
  const resetUrl = `${config.clientUrl}/resetpassword/${encodeURIComponent(email)}`;

  await getTransporter().sendMail({
    from: config.mailFrom,
    to: email,
    subject: "Reset Your Pawnshop Password",
    html: `
      <h1>Password Reset</h1>
      <p>We received a request to reset your Pawnshop account password.</p>
      <p>Use the link below to continue.</p>
      <a href="${resetUrl}">Reset your password</a>
    `,
  });
};
