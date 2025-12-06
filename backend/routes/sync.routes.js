import express from "express";
import { backfillProducts, backfillCustomers, backfillOrders } from "../controllers/sync.controller.js";

const router = express.Router();

// POST /api/sync/:shopId/products
router.post("/sync/:shopId/products", backfillProducts);

// POST /api/sync/:shopId/customers
router.post("/sync/:shopId/customers", backfillCustomers);

// POST /api/sync/:shopId/orders
router.post("/sync/:shopId/orders", backfillOrders);

export default router;
