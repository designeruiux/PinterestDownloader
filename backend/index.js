import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import downloadRoutes from "./routes/downloadRoutes.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: [
    process.env.CLIENT_URL,
    "http://localhost:5173"
  ]
}));

app.use("/", downloadRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on http://localhost:${PORT}`
  );
});