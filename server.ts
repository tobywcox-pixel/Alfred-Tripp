import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health Check Route
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", env: process.env.NODE_ENV });
  });

  // API Route for Contact Form
  app.post("/api/contact", async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      // Only attempt to send if credentials are provided
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        // Configure nodemailer
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

        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully to alfietripp@gmail.com");
        return res.status(200).json({ message: "Message sent successfully!" });
      } else {
        console.warn("Email credentials missing (EMAIL_USER/EMAIL_PASS). Skipping email send.");
        // In development or if keys are missing, we simulate success so the user doesn't see a "broken" form
        // but we log the warning.
        return res.status(200).json({ 
          message: "Message received (Simulation mode).",
          warning: "Set EMAIL_USER and EMAIL_PASS in your environment to send real emails."
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      const errorMessage = error instanceof Error ? error.message : "Internal Server Error";
      return res.status(500).json({ 
        error: "Failed to send message. Please try again later.",
        details: process.env.NODE_ENV !== 'production' ? errorMessage : undefined
      });
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
    const distPath = path.join(__dirname, "dist");
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
