type Bucket = { count: number; resetAt: number };

const store = new Map<string, Bucket>();

/**
 * Simple in-memory sliding-window rate limiter.
 * Suitable for protecting a marketing site's form endpoints. For a
 * distributed deployment, swap this for a shared store (e.g. Upstash
 * Redis)  the interface stays the same.
 */
export function rateLimit(
  key: string,
  limit: number,
  windowMs: number,
): { success: true } | { success: false; retryAfterSeconds: number } {
  const now = Date.now();
  const bucket = store.get(key);

  if (!bucket || bucket.resetAt <= now) {
    store.set(key, { count: 1, resetAt: now + windowMs });
    return { success: true };
  }

  if (bucket.count >= limit) {
    return {
      success: false,
      retryAfterSeconds: Math.ceil((bucket.resetAt - now) / 1000),
    };
  }

  bucket.count += 1;
  return { success: true };
}

// Opportunistic cleanup so the map never grows unbounded.
const interval = setInterval(() => {
  const now = Date.now();
  for (const [key, bucket] of store) {
    if (bucket.resetAt <= now) store.delete(key);
  }
}, 60_000);

interval.unref?.();
