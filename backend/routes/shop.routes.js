// routes/shop.routes.js
import express from "express";
import {
  listShops,
  getShop,
  registerShop
} from "../controllers/shop.controller.js";

const router = express.Router();

router.get("/shops", listShops);        // GET /api/shops
router.get("/shops/:id", getShop);      // GET /api/shops/:id
router.post("/shops", registerShop);    // POST /api/shops  <-- NEW

export default router;
