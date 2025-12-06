// controllers/auth.controller.js
import crypto from "crypto";
import axios from "axios";
import prisma from "../src/db.js";
import { registerDefaultWebhooks } from "../controllers/webhook.controller.js"

const STATE_STORE = new Map();

function genState() {
  return crypto.randomBytes(16).toString("hex");
}

export async function beginAuth(req, res) {
  const shop = (req.query.shop || "").trim();
  if (!shop) return res.status(400).send("shop param required");
  const state = genState();
  STATE_STORE.set(state, { shop, created: Date.now() });
  const scopes = encodeURIComponent(process.env.SCOPES);
  const redirect = encodeURIComponent(`${process.env.HOST}/auth/callback`);
  const installUrl = `https://${shop}/admin/oauth/authorize?client_id=${process.env.SHOPIFY_API_KEY}&scope=${scopes}&redirect_uri=${redirect}&state=${state}`;
  return res.redirect(installUrl);
}

export async function callbackAuth(req, res) {
  try {
    const { shop, code, state } = req.query;
    if (!shop || !code || !state) return res.status(400).send("missing params");
    const saved = STATE_STORE.get(state);
    if (!saved || saved.shop !== shop) return res.status(400).send("invalid state");
    STATE_STORE.delete(state);

    const tokenRes = await axios.post(`https://${shop}/admin/oauth/access_token`, {
      client_id: process.env.SHOPIFY_API_KEY,
      client_secret: process.env.SHOPIFY_API_SECRET,
      code,
    });

    const accessToken = tokenRes.data.access_token;
    if (!accessToken) return res.status(500).send("no access token");

    const shopRecord = await prisma.shop.upsert({
      where: { shop },
      update: { accessToken, scope: process.env.SCOPES, isActive: true },
      create: { shop, accessToken, scope: process.env.SCOPES },
    });

    try {
      await registerDefaultWebhooks(shop, accessToken);
    } catch (e) {
      console.warn("webhook register failed", e.message);
    }

    const frontend = process.env.FRONTEND_URL;
    return res.redirect(`${frontend}/?installed=1&shop=${encodeURIComponent(shop)}&tenantId=${shopRecord.id}`);
  } catch (err) {
    console.error(err);
    return res.status(500).send("auth callback error");
  }
}
