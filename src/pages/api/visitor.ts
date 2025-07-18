import type { NextApiRequest, NextApiResponse } from "next";
import { redis } from "@/lib/redis";
import { format } from "date-fns";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const ip =
    (req.headers["x-forwarded-for"] as string)?.split(",")[0] ||
    req.socket.remoteAddress ||
    "unknown";

  const today = format(new Date(), "yyyy-MM-dd");
  const yesterday = format(new Date(Date.now() - 86400000), "yyyy-MM-dd");
  const month = format(new Date(), "yyyy-MM");
  const year = format(new Date(), "yyyy");

  // Unik per IP per hari
  const isNew = await redis.setnx(`visit:${today}:${ip}`, "1");
  if (isNew) {
    await redis.incr(`count:today:${today}`);
    await redis.incr(`count:month:${month}`);
    await redis.incr(`count:year:${year}`);
    await redis.incr(`count:total`);
  }

  await redis.set(`online:${ip}`, "1", { ex: 300 });

  const [todayCount, yesterdayCount, monthCount, yearCount, onlineKeys] =
    await Promise.all([
      redis.get<number>(`count:today:${today}`),
      redis.get<number>(`count:today:${yesterday}`),
      redis.get<number>(`count:month:${month}`),
      redis.get<number>(`count:year:${year}`),
      redis.keys("online:*"),
    ]);

  res.status(200).json({
    today: todayCount || 0,
    yesterday: yesterdayCount || 0,
    month: monthCount || 0,
    year: yearCount || 0,
    online: onlineKeys?.length || 0,
  });
}
