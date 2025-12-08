// controllers/webhook.controller.js
import { shopifyRequest } from "../utils/shopifyApi.js";
import prisma from "../src/db.js";

export async function registerDefaultWebhooks(shop, accessToken) {
  const topics = [
    { topic: "orders/create", address: `${process.env.HOST}/webhooks/orders_create` },
    { topic: "products/update", address: `${process.env.HOST}/webhooks/products_update` },
    { topic: "customers/create", address: `${process.env.HOST}/webhooks/customers_create` },
  ];

  for (const t of topics) {
    const payload = { webhook: { topic: t.topic, address: t.address, format: "json" } };
    try {
      await shopifyRequest(shop, accessToken, "post", "webhooks.json", payload);
    } catch (e) {
      // console.warn("webhook error", e.response?.data || e.message);
    }
  }
}

export async function ordersCreateHandler(req, res) {
  const payload = req.body;
  const shopDomain = req.get("X-Shopify-Shop-Domain") || "";
  await prisma.webhookLog.create({ data: { topic: "orders/create", payload, shopDomain } });
  res.status(200).send("ok");
}

export async function productsUpdateHandler(req, res) {
  const payload = req.body;
  const shopDomain = req.get("X-Shopify-Shop-Domain") || "";
  await prisma.webhookLog.create({ data: { topic: "products/update", payload, shopDomain } });
  res.status(200).send("ok");
}

export async function customersCreateHandler(req, res) {
  const payload = req.body;
  const shopDomain = req.get("X-Shopify-Shop-Domain") || "";
  await prisma.webhookLog.create({ data: { topic: "customers/create", payload, shopDomain } });
  res.status(200).send("ok");
}
