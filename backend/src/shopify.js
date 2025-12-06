import { shopifyApp } from "@shopify/shopify-app-express";
import { Shopify, LATEST_API_VERSION } from "@shopify/shopify-api";
import { PrismaSessionStorage } from "@shopify/shopify-app-session-storage-prisma";
import prisma from "./db.js";

const sessionStorage = new PrismaSessionStorage(prisma);

export const shopify = shopifyApp({
  api: {
    apiKey: process.env.SHOPIFY_API_KEY,
    apiSecretKey: process.env.SHOPIFY_API_SECRET,
    apiVersion: LATEST_API_VERSION,
    isEmbeddedApp: true,
    scopes: process.env.SCOPES.split(","),
    hostName: process.env.HOST.replace("https://", "")
  },
  auth: {
    path: "/auth",
    callbackPath: "/auth/callback"
  },
  sessionStorage
});

export const apiClient = Shopify;
