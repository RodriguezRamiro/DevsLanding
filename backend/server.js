// backend/server.js
// ---------------------------------------
// Express Server - GitHub API Proxy
// ---------------------------------------
// Purpose: Securely proxy GitHub GraphQL API requests
// without exposing the GitHub token to the frontend.
// ---------------------------------------

import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// ---------------------------------------
// Middleware
// ---------------------------------------

// Allow requests from custom domain & local dev
app.use(
    cors({
      origin: [
        "https://rodriguezcodesolutions.tech", // Production domain
        "http://localhost:3000",               // Local development
      ],
      methods: ["GET", "POST"],
      allowedHeaders: ["Content-Type", "Authorization"],
    })
  );


// Parse incoming JSON requests
app.use(express.json());


// ---------------------------------------
// Config
// ---------------------------------------
const PORT = process.env.PORT || 5000;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

// ---------------------------
// Health Check Endpoint
// ---------------------------
app.get("/health", (req, res) => {
    res.status(200).json({
      status: "ok",
      service: "DevsLanding Backend",
      timestamp: new Date().toISOString(),
    });
  });


// Validate GitHub token presence
if (!GITHUB_TOKEN) {
    console.error("❌ ERROR: GITHUB_TOKEN not found in environment variables.");
    process.exit(1); // Stop server if token is missing
  }

 // ---------------------------------------
// Routes
// ---------------------------------------

// Proxy route for GitHub GraphQL API
app.post("/api/github", async (req, res) => {
    const { query } = req.body;

    if (!query) {
      return res.status(400).json({ error: "GraphQL query is required." });
    }

    try {
        const response = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${GITHUB_TOKEN}`,
          },
          body: JSON.stringify({ query }),
        });

    const data = await response.json();

    // Handle GitHub API errors
    if (data.errors) {
        console.error("⚠️ GitHub API returned errors:", data.errors);
        return res.status(500).json({ error: "GitHub API error", details: data.errors });
      }

    res.json(data);
  } catch (err) {
    console.error("❌ GitHub proxy error:", err);
    res.status(500).json({ error: "Failed to fetch from GitHub API" });
  }
});


// ---------------------------------------
// Start Server
// ---------------------------------------
app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
  });
