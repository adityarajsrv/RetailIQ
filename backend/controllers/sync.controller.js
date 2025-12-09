// controllers/sync.controller.js
import prisma from "../src/db.js";
import axios from "axios";

async function fetchAllPaginated(shopDomain, accessToken, path) {
  const results = [];
  let nextUrl = `https://${shopDomain}/admin/api/2025-10/${path}`;

  while (nextUrl) {
    const resp = await axios.get(nextUrl, {
      headers: { "X-Shopify-Access-Token": accessToken, "Content-Type": "application/json" },
      timeout: 20000,
    });

    const data = resp.data;
    const key = Object.keys(data).find((k) => Array.isArray(data[k]));
    if (key) results.push(...data[key]);

    const link = resp.headers["link"] || resp.headers["Link"];
    if (link && link.includes('rel="next"')) {
      const match = link.match(/<([^>]+)>;\s*rel="next"/);
      nextUrl = match ? match[1] : null;
    } else {
      nextUrl = null;
    }
  }

  return results;
}

function toBigIntSafe(v) {
  try {
    return BigInt(v);
  } catch {
    return v;
  }
}

async function findShopByIdOrDomain(shopParam) {
  if (!shopParam) return null;
  const maybeId = Number(shopParam);
  if (!Number.isNaN(maybeId)) {
    return await prisma.shop.findUnique({ where: { id: maybeId } });
  }
  return await prisma.shop.findUnique({ where: { shop: shopParam } });
}

export async function backfillProducts(req, res) {
  try {
    const shopParam = req.params.shopId; 
    const shopRec = await findShopByIdOrDomain(shopParam);
    if (!shopRec) return res.status(404).json({ error: "shop not found" });

    const token = shopRec.accessToken || process.env.ACCESS_TOKEN;
    const items = await fetchAllPaginated(shopRec.shop, token, "products.json?limit=250");
    let inserted = 0;
    for (const p of items) {
      const id = toBigIntSafe(p.id);
      await prisma.product.upsert({
        where: { id: typeof id === "bigint" ? id : Number(id) },
        update: {
          title: p.title ?? null,
          handle: p.handle ?? null,
          vendor: p.vendor ?? null,
          productJson: p,
        },
        create: {
          id,
          shopId: shopRec.id,
          title: p.title ?? null,
          handle: p.handle ?? null,
          vendor: p.vendor ?? null,
          productJson: p,
        },
      });
      inserted++;
    }
    return res.json({ success: true, count: inserted });
  } catch (e) {
    console.error("backfillProducts err:", e.message || e);
    return res.status(500).json({ error: e.message || String(e) });
  }
}

export async function backfillCustomers(req, res) {
  try {
    const shopParam = req.params.shopId;
    const shopRec = await findShopByIdOrDomain(shopParam);
    if (!shopRec) return res.status(404).json({ error: "shop not found" });

    const token = shopRec.accessToken || process.env.ACCESS_TOKEN;
    const items = await fetchAllPaginated(shopRec.shop, token, "customers.json?limit=250");
    let inserted = 0;
    for (const c of items) {
      const id = toBigIntSafe(c.id);
      await prisma.customer.upsert({
        where: { id: typeof id === "bigint" ? id : Number(id) },
        update: {
          email: c.email ?? null,
          firstName: c.first_name ?? null,
          lastName: c.last_name ?? null,
          totalSpent: c.total_spent ? c.total_spent.toString() : null,
          customerJson: c,
        },
        create: {
          id,
          shopId: shopRec.id,
          email: c.email ?? null,
          firstName: c.first_name ?? null,
          lastName: c.last_name ?? null,
          totalSpent: c.total_spent ? parseFloat(c.total_spent) : null,
          customerJson: c,
        },
      });
      inserted++;
    }
    return res.json({ success: true, count: inserted });
  } catch (e) {
    console.error("backfillCustomers err:", e.message || e);
    return res.status(500).json({ error: e.message || String(e) });
  }
}

export async function backfillOrders(req, res) {
  try {
    const shopParam = req.params.shopId;
    const shopRec = await findShopByIdOrDomain(shopParam);
    if (!shopRec) return res.status(404).json({ error: "shop not found" });

    const token = shopRec.accessToken || process.env.ACCESS_TOKEN;
    const items = await fetchAllPaginated(shopRec.shop, token, "orders.json?limit=250&status=any");
    let inserted = 0;
    for (const o of items) {
      const id = toBigIntSafe(o.id);
      await prisma.order.upsert({
        where: { id: typeof id === "bigint" ? id : Number(id) },
        update: {
          orderNumber: o.order_number ?? null,
          totalPrice: o.total_price ? o.total_price.toString() : null,
          orderJson: o,
          createdAt: o.created_at ? new Date(o.created_at) : undefined,
        },
        create: {
          id,
          shopId: shopRec.id,
          orderNumber: o.order_number ?? null,
          totalPrice: o.total_price ? parseFloat(o.total_price) : null,
          orderJson: o,
          createdAt: o.created_at ? new Date(o.created_at) : undefined,
        },
      });
      inserted++;
    }
    return res.json({ success: true, count: inserted });
  } catch (e) {
    console.error("backfillOrders err:", e.message || e);
    return res.status(500).json({ error: e.message || String(e) });
  }
}
