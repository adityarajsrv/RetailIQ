// middleware/verifyWebhook.js
import crypto from "crypto";

export function verifyShopifyWebhook(req, res, next) {
  const hmac = req.get("X-Shopify-Hmac-Sha256");
  const body = req.rawBody; // set in route via raw-body
  const generated = crypto.createHmac("sha256", process.env.SHOPIFY_API_SECRET).update(body).digest("base64");
  if (!crypto.timingSafeEqual(Buffer.from(generated), Buffer.from(hmac))) {
    return res.status(401).send("invalid hmac");
  }
  next();
}
