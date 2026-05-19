import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import downloadRoutes from "./routes/downloadRoutes.js";

dotenv.config();

const app = express();
const __dirname = path.resolve();

app.use(cors({
  origin: [
    process.env.CLIENT_URL,
    "http://localhost:5173"
  ]
}));

app.use("/", downloadRoutes);

// 👉 serve frontend
app.use(express.static(path.join(__dirname, "dist")));

// 👉 SPA fallback
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});