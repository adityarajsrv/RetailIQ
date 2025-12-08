// routes/auth.routes.js
import express from "express";
import { beginAuth, callbackAuth } from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/", beginAuth);             
router.get("/callback", callbackAuth);  

export default router;
