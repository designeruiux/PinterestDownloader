import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import downloadRoutes from "./routes/downloadRoutes.js";

dotenv.config();

const app = express();
const __dirname = path.resolve();

/* =========================
   CORS CONFIG
========================= */
app.use(cors({
  origin: [
    process.env.CLIENT_URL,
    "http://localhost:5173"
  ]
}));

app.use(express.json());

/* =========================
   API ROUTES
========================= */
app.use("/api", downloadRoutes);

/* =========================
   SERVE REACT FRONTEND
========================= */
app.use(express.static(path.join(__dirname, "dist")));

/* =========================
   SPA FALLBACK (FIX FOR REFRESH 404)
   ⚠️ IMPORTANT: NO "*" (Node 24 safe version)
========================= */
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

/* =========================
   START SERVER
========================= */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});