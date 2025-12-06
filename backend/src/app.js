// src/app.js
import express from "express";
import cors from "cors";
import session from "express-session";
import authRoutes from "../routes/auth.routes.js";
import shopRoutes from "../routes/shop.routes.js";
import webhookRoutes from "../routes/webhook.routes.js";
import syncRoutes from "../routes/sync.routes.js";

const app = express();
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.json());
app.use(session({ secret: process.env.SHOPIFY_API_SECRET || "secret", resave: false, saveUninitialized: false }));

app.use("/auth", authRoutes);
app.use("/api", shopRoutes);
app.use("/api", syncRoutes);
app.use("/webhooks", webhookRoutes);

export default app;
