import { sendResetPasswordEmail } from "../utils/mailer.js";

const ResetPasswordMail = async (req,res)=> {
  try {
    const email = req.body.email;

    if (!email) {
      return res.status(400).json({
        status: false,
        message: "Email is required",
      });
    }

    await sendResetPasswordEmail(email);

    res.status(200).json({ status: true });
  } catch (error) {
    console.error("Reset password email error:", error);
    res.status(error.statusCode || 500).json({
      status: false,
      message: error.message || "Failed to send reset password email",
    });
  }
}

export default ResetPasswordMail;
