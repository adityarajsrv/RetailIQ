// controllers/shop.controller.js
import prisma from "../src/db.js";

export async function listShops(req, res) {
  const shops = await prisma.shop.findMany({ orderBy: { installedAt: "desc" } });
  res.json({ count: shops.length, shops });
}

export async function getShop(req, res) {
  const id = Number(req.params.id);
  const shop = await prisma.shop.findUnique({ where: { id } });
  if (!shop) return res.status(404).json({ error: "not found" });
  res.json(shop);
}

export async function registerShop(req, res) {
  try {
    const { shop, accessToken, scope } = req.body;

    if (!shop || !accessToken) {
      return res.status(400).json({ error: "shop and accessToken required" });
    }

    const saved = await prisma.shop.upsert({
      where: { shop },
      update: { accessToken, scope },
      create: { shop, accessToken, scope }
    });

    res.json({ success: true, shop: saved });
  } catch (err) {
    console.error("registerShop error:", err);
    res.status(500).json({ error: err.message });
  }
}
