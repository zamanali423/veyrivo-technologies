import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { WebSocketLikeConstructor } from "@supabase/realtime-js";
import WebSocket from "ws";

// ws' WebSocket satisfies the runtime contract; cast through the library's
// exported type to reconcile the constructor signatures.
const wsTransport = WebSocket as unknown as WebSocketLikeConstructor;

export type Lead = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  budget?: string;
  timeline?: string;
  message: string;
  source: string;
};

export type Subscriber = {
  email: string;
  source: string;
};

let client: SupabaseClient | null = null;

/**
 * Supabase project URL.
 *
 * Prefers `SUPABASE_URL`; otherwise derives the REST endpoint from
 * `SUPABASE_DATABASE_URL` (the host is `db.<project-ref>.supabase.co`, so
 * the REST URL is `https://<project-ref>.supabase.co`).
 */
/**
 * Supabase project URL.
 *
 * Prefers `SUPABASE_URL`. Otherwise derives the REST endpoint from
 * `SUPABASE_DATABASE_URL`, which only works for direct hosts of the form
 * `db.<project-ref>.supabase.co` (the REST URL is `https://<ref>.supabase.co`).
 * Pooler hosts (`aws-0-*.pooler.supabase.com`) have no project-ref REST
 * equivalent, so they return undefined — use `SUPABASE_URL` for those.
 */
function getSupabaseUrl(): string | undefined {
  if (process.env.SUPABASE_URL) return process.env.SUPABASE_URL;

  const dbUrl = process.env.SUPABASE_DATABASE_URL;
  if (!dbUrl) return undefined;
  try {
    const host = new URL(dbUrl).hostname; // e.g. db.jzgwcxrsqifeplqxwhbj.supabase.co
    const match = host.match(/^db\.([^.]+)\.supabase\.co$/);
    return match ? `https://${match[1]}.supabase.co` : undefined;
  } catch {
    return undefined;
  }
}

/**
 * Lazy Supabase client. Returns null when the environment variables are
 * not set, so the site runs fine locally and on Vercel without a backend.
 */
function getClient() {
  const url = getSupabaseUrl();
  // New-style key name, with the legacy service-role key as a fallback.
  const key = process.env.SUPABASE_SECRET_KEY ?? process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  if (!client) {
    client = createClient(url, key, {
      auth: { persistSession: false },
      // supabase-js eagerly builds a realtime client; on Node < 22 it needs
      // an explicit WebSocket transport (we never use realtime, only REST).
      realtime: { transport: wsTransport },
    });
  }
  return client;
}

export async function storeLead(
  lead: Lead,
): Promise<{ stored: boolean; reason?: "supabase-not-configured" }> {
  const db = getClient();
  if (!db) {
    console.info(
      `[leads] Supabase not configured  lead logged only:\n${JSON.stringify(lead, null, 2)}`,
    );
    return { stored: false, reason: "supabase-not-configured" };
  }

  const { error } = await db.from("leads").insert({
    ...lead,
    created_at: new Date().toISOString(),
  });
  if (error) throw error;
  return { stored: true };
}

export async function storeSubscriber(
  subscriber: Subscriber,
): Promise<{ stored: boolean; reason?: "supabase-not-configured" }> {
  const db = getClient();
  if (!db) {
    console.info(
      `[newsletter] Supabase not configured  subscriber logged only:\n${JSON.stringify(subscriber)}`,
    );
    return { stored: false, reason: "supabase-not-configured" };
  }

  const { error } = await db.from("newsletter_subscribers").insert({
    ...subscriber,
    created_at: new Date().toISOString(),
  });
  if (error) throw error;
  return { stored: true };
}
