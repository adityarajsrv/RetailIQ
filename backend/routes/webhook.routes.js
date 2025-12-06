// routes/webhook.routes.js
import express from "express";
import getRawBody from "raw-body";
import { verifyShopifyWebhook } from "../middleware/verifyWebhook.js";
import {
  ordersCreateHandler,
  productsUpdateHandler,
  customersCreateHandler,
} from "../controllers/webhook.controller.js";

const router = express.Router();

router.post("/orders_create", async (req, res, next) => {
  try {
    req.rawBody = await getRawBody(req);
    verifyShopifyWebhook(req, res, () => ordersCreateHandler(req, res));
  } catch (e) {
    res.status(400).send("bad request");
  }
});

router.post("/products_update", async (req, res, next) => {
  try {
    req.rawBody = await getRawBody(req);
    verifyShopifyWebhook(req, res, () => productsUpdateHandler(req, res));
  } catch (e) {
    res.status(400).send("bad request");
  }
});

router.post("/customers_create", async (req, res, next) => {
  try {
    req.rawBody = await getRawBody(req);
    verifyShopifyWebhook(req, res, () => customersCreateHandler(req, res));
  } catch (e) {
    res.status(400).send("bad request");
  }
});

export default router;
