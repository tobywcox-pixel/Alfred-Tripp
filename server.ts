import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Contact Form
  app.post("/api/contact", async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      // Configure nodemailer
      // Note: For production, you'd use a real service like SendGrid, Mailgun, or Resend.
      // For Gmail, you might need an App Password.
      const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE || "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: `"${name}" <${email}>`,
        to: "alfietripp@gmail.com",
        subject: `Contact Form Submission: ${subject || "No Subject"}`,
        text: `
          Name: ${name}
          Email: ${email}
          Subject: ${subject || "N/A"}
          
          Message:
          ${message}
        `,
        replyTo: email,
      };

      // Only attempt to send if credentials are provided
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully to alfietripp@gmail.com");
        res.status(200).json({ message: "Message sent successfully!" });
      } else {
        console.warn("Email credentials missing. Skipping email send.");
        // In development, we might want to simulate success even if keys are missing
        // but we should be clear about it.
        res.status(200).json({ 
          message: "Message received (Email simulation mode - credentials missing).",
          warning: "Set EMAIL_USER and EMAIL_PASS in your environment to send real emails."
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send message. Please try again later." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
