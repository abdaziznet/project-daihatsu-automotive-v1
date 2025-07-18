// pages/api/visitor.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { redis } from "@/lib/redis";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const now = new Date();
    const ip =
      req.headers["x-real-ip"] ||
      req.headers["x-forwarded-for"] ||
      req.socket.remoteAddress ||
      "unknown";

    const today = now.toISOString().split("T")[0]; // 2025-07-18
    const month = today.slice(0, 7); // 2025-07
    const year = today.slice(0, 4); // 2025

    // hitungan hari ini
    const isNew = await redis.setnx(`visit:${today}:${ip}`, "1");
    if (isNew) {
      await redis.incr(`count:today:${today}`);
      await redis.incr(`count:month:${month}`);
      await redis.incr(`count:year:${year}`);
    }

    await redis.setex(`online:${ip}`, 300, "1"); // online selama 5 menit
    const [todayCount, yesterdayCount, monthCount, yearCount, onlineKeys] =
      await Promise.all([
        redis.get<number>(`count:today:${today}`),
        redis.get<number>(
          `count:today:${
            new Date(Date.now() - 86400000).toISOString().split("T")[0]
          }`
        ),
        redis.get<number>(`count:month:${month}`),
        redis.get<number>(`count:year:${year}`),
        redis.keys("online:*"),
      ]);

    res.status(200).json({
      today: todayCount || 0,
      yesterday: yesterdayCount || 0,
      month: monthCount || 0,
      year: yearCount || 0,
      online: onlineKeys.length,
    });
  } catch (err) {
    console.error("Error in /api/visitor:", err);
    res.status(500).json({ error: "Internal server error" });
  }
}
