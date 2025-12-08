// routes/dashboard.routes.js
import express from "express";
import { getDashboard } from "../controllers/dashboard.controller.js";

const router = express.Router();

router.get("/:shopId", getDashboard); 

export default router;
