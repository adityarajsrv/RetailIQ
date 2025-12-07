// routes/sync.routes.js
import express from "express";
import { backfillProducts, backfillCustomers, backfillOrders } from "../controllers/sync.controller.js";

const router = express.Router();

router.post("/sync/:shopId/products", backfillProducts);
router.post("/sync/:shopId/customers", backfillCustomers);
router.post("/sync/:shopId/orders", backfillOrders);

export default router;
