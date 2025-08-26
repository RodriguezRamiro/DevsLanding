//backend/server.js


import express from 'express';
import fetch from 'node-fetch';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors({ origin: "https://yourcustomdomain.com" }));
app.use(express.json());

const PORT = process.env.PORT || 5000;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

// Proxy route
app.post("/api/github", async (req, res) => {
  const { query } = req.body;
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
    res.json(data);
  } catch (err) {
    console.error("GitHub proxy error:", err);
    res.status(500).json({ error: "Failed to fetch from GitHub API" });
  }
});

// Serve React build safely
const buildPath = path.resolve(__dirname, "../build");
app.use(express.static(buildPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
