// backend/server.js

import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Allow only your custom domain
app.use(cors({
    origin: "https://rodriguezcodesolutions.tech",
    methods: ["GET","POST"]
}));

app.use(express.json());

const PORT = process.env.PORT || 5000;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

// Proxy route to GitHub GraphQL API
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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
