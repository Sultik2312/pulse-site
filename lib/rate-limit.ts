import { kv } from "@vercel/kv";

type RateLimitResult = {
  success: boolean;
  remaining: number;
  reset: number;
};

const memoryStore = new Map<string, { count: number; reset: number }>();

export async function rateLimit(
  ip: string,
  limit = 5,
  windowSeconds = 600
): Promise<RateLimitResult> {
  if (!ip) {
    return { success: true, remaining: limit, reset: Date.now() + windowSeconds * 1000 };
  }

  const useKv = Boolean(
    process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN
  );

  if (useKv) {
    const key = `rate:lead:${ip}`;
    const count = await kv.incr(key);
    if (count === 1) {
      await kv.expire(key, windowSeconds);
    }

    return {
      success: count <= limit,
      remaining: Math.max(0, limit - count),
      reset: Date.now() + windowSeconds * 1000
    };
  }

  const now = Date.now();
  const record = memoryStore.get(ip);

  if (!record || now > record.reset) {
    memoryStore.set(ip, { count: 1, reset: now + windowSeconds * 1000 });
    return { success: true, remaining: limit - 1, reset: now + windowSeconds * 1000 };
  }

  if (record.count >= limit) {
    return { success: false, remaining: 0, reset: record.reset };
  }

  record.count += 1;
  memoryStore.set(ip, record);

  return { success: true, remaining: limit - record.count, reset: record.reset };
}