// utils/test_sendEmail.js
import dotenv from "dotenv";
dotenv.config();

import sendEmail from "./sendEmail.js";

(async () => {
  try {
    await sendEmail({
      email: process.env.EMAIL_USER,
      subject: "Test email from GearNest",
      message: "If you see this, emails are working!",
    });
    console.log("Test email sent ok");
  } catch (err) {
    console.error("Test email failed:", err);
  }
})();
