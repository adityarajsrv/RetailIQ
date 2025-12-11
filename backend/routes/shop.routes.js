// routes/shop.routes.js
import express from "express";
import {
  listShops,
  getShop,
  registerShop
} from "../controllers/shop.controller.js";

const router = express.Router();

router.get("/shops", listShops);
router.get("/shops/:id", getShop);      
router.post("/shops", registerShop);    

export default router;
