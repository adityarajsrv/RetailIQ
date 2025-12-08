// controllers/dashboard.controller.js
import prisma from "../src/db.js";

export async function getDashboard(req, res) {
  try {
    const shopParam = req.params.shopId;
    const shopRec = isNaN(Number(shopParam))
      ? await prisma.shop.findUnique({ where: { shop: shopParam } })
      : await prisma.shop.findUnique({ where: { id: Number(shopParam) } });

    if (!shopRec) return res.status(404).json({ error: "shop not found" });

    const shopId = shopRec.id;

    const [totalCustomers, totalProducts, totalOrders] = await Promise.all([
      prisma.customer.count({ where: { shopId } }),
      prisma.product.count({ where: { shopId } }),
      prisma.order.count({ where: { shopId } }),
    ]);

    const revenueAgg = await prisma.order.aggregate({
      where: { shopId },
      _sum: { totalPrice: true },
    });

    const topCustomers = await prisma.customer.findMany({
      where: { shopId },
      orderBy: { totalSpent: "desc" },
      take: 5,
      select: { id: true, email: true, firstName: true, lastName: true, totalSpent: true },
    });

    const orders = await prisma.order.findMany({
      where: { shopId },
      select: { id: true, totalPrice: true, createdAt: true },
      orderBy: { createdAt: "asc" },
    });

    const ordersByDate = {};
    orders.forEach((o) => {
      const d = new Date(o.createdAt).toISOString().slice(0, 10);
      ordersByDate[d] = (ordersByDate[d] || 0) + (o.totalPrice || 0);
    });

    const ordersByDateArr = Object.entries(ordersByDate).map(([date, revenue]) => ({ date, revenue }));

    res.json({
      totalCustomers,
      totalProducts,
      totalOrders,
      revenue: revenueAgg._sum.totalPrice || 0,
      topCustomers,
      ordersByDate: ordersByDateArr,
    });
  } catch (e) {
    console.error("getDashboard err:", e.message || e);
    res.status(500).json({ error: e.message || String(e) });
  }
}
