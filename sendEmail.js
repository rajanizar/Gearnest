// utils/sendEmail.js  (ES module)
import nodemailer from "nodemailer";

const sendEmail = async ({ email, subject, message, html }) => {
  try {
    // Use Gmail service + app password (simple & reliable)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Optional: quick connection check
    await transporter.verify();

    const mailOptions = {
      from: `"GearNest" <${process.env.EMAIL_USER}>`,
      to: email,
      subject,
      text: message,
      html: html || `<p>${message}</p>`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", info.messageId);
    return info;
  } catch (err) {
    console.error("❌ Email sending failed:", err && err.message ? err.message : err);
    // bubble up so caller (e.g. signup) can handle or log it
    throw err;
  }
};

export default sendEmail;
