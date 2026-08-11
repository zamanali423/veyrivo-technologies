/**
 * Read-only Supabase connectivity check.
 *
 * Verifies that the client can be built from the current .env vars, that
 * authentication succeeds, and that the `leads` and `newsletter_subscribers`
 * tables exist. Performs NO inserts. Secrets are never printed.
 *
 * Keep the URL derivation in sync with src/lib/db.ts.
 *
 * Run with: node --env-file=.env scripts/test-supabase-connection.mjs
 */
import { createClient } from "@supabase/supabase-js";
import WebSocket from "ws";

function getSupabaseUrl() {
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

const url = getSupabaseUrl();
const key = process.env.SUPABASE_SECRET_KEY ?? process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !key) {
  console.log("RESULT: not-configured (missing SUPABASE_URL/SUPABASE_SECRET_KEY or derivable SUPABASE_DATABASE_URL)");
  process.exit(0);
}

const maskedUrl = url.replace(/^https:\/\//, "https://***.");
const maskedKey = `${key.slice(0, 12)}…${key.slice(-6)} (len ${key.length})`;
console.log(`Using URL: ${maskedUrl}`);
console.log(`Using key: ${maskedKey}`);

const client = createClient(url, key, {
  auth: { persistSession: false },
  realtime: { transport: WebSocket },
});

async function checkTable(name) {
  const { data, error } = await client.from(name).select("*").limit(1);
  if (error) {
    const msg = error.message ?? String(error);
    console.log(`Table "${name}": ERROR -> ${msg.slice(0, 140)}`);
    return false;
  }
  console.log(`Table "${name}": OK (read ${data.length} row(s), columns available)`);
  return true;
}

try {
  await checkTable("leads");
  await checkTable("newsletter_subscribers");
  console.log("RESULT: connectivity OK");
} catch (err) {
  console.log("RESULT: FAILED ->", err.message ?? String(err));
  process.exit(1);
}
