// routes/auth.routes.js
import express from "express";
import { beginAuth, callbackAuth } from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/", beginAuth);             // /auth?shop=store.myshopify.com
router.get("/callback", callbackAuth);  // /auth/callback

export default router;
