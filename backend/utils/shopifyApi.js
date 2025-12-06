// src/utils/shopifyApi.js
import axios from "axios";

export async function shopifyRequest(shop, accessToken, method, path, data = null) {
  const url = `https://${shop}/admin/api/2025-10/${path}`;
  const headers = {
    "X-Shopify-Access-Token": accessToken,
    "Content-Type": "application/json",
  };
  const res = await axios.request({ url, method, headers, data, timeout: 15000 });
  return res.data;
}
