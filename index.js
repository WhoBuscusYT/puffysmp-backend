import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "PuffySMP backend online" });
});

app.get("/api/profile/:username", (req, res) => {
  const username = req.params.username;

  // TEMP fake data
  res.json({
    minecraftUsername: username,
    votes: 12,
    prefix: "[DEV]",
    balance: 42000,
    baltopRank: 2,
    createdAt: "2026-02-22T03:00:00Z",
    tags: ["DEVELOPER", "YOUTUBER"]
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
