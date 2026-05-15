import express from "express";
import {
  homeController,
  downloadController,
  proxyController
} from "../controllers/downloadController.js";

const router = express.Router();

router.get("/", homeController);

router.get("/download", downloadController);

router.get("/proxy", proxyController);

export default router;