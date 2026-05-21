import { sendVerificationEmail } from "../utils/mailer.js";

const Mail = async (email) => sendVerificationEmail(email);

export default Mail;
