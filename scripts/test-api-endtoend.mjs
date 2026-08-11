/**
 * End-to-end check of the live contact + newsletter API routes against
 * Supabase. Submits clearly-marked test rows through the running dev
 * server, verifies they persisted, then deletes them so the DB is left
 * clean. Secrets are never printed.
 *
 * Run with: node --env-file=.env scripts/test-api-endtoend.mjs [baseUrl]
 *
 * Note: the API routes rate-limit per IP in memory (contact 5/min,
 * newsletter 3/min on the dev server) — run at most once per minute.
 */
import { createClient } from "@supabase/supabase-js";
import WebSocket from "ws";

const baseUrl = (process.argv[2] ?? "http://localhost:3000").replace(/\/+$/, "");
const TEST_EMAIL = "e2e-test@veyrivo.local";

function getSupabaseUrl() {
  if (process.env.SUPABASE_URL) return process.env.SUPABASE_URL;
  const dbUrl = process.env.SUPABASE_DATABASE_URL;
  if (!dbUrl) return undefined;
  try {
    const host = new URL(dbUrl).hostname;
    const match = host.match(/^db\.([^.]+)\.supabase\.co$/);
    return match ? `https://${match[1]}.supabase.co` : undefined;
  } catch {
    return undefined;
  }
}

const url = getSupabaseUrl();
const key = process.env.SUPABASE_SECRET_KEY ?? process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) {
  console.log("RESULT: skipped (Supabase not configured)");
  process.exit(0);
}
const db = createClient(url, key, {
  auth: { persistSession: false },
  realtime: { transport: WebSocket },
});

async function cleanup() {
  await db.from("leads").delete().eq("email", TEST_EMAIL);
  await db.from("newsletter_subscribers").delete().eq("email", TEST_EMAIL);
}

try {
  // 0. Clear any stale rows from a previously interrupted run so a
  //    leftover row can't cause a spurious PASS or a duplicate-key failure.
  await cleanup();

  // 1. Submit a contact lead through the live route.
  const contactRes = await fetch(`${baseUrl}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "E2E Tester",
      email: TEST_EMAIL,
      phone: "+1 555 000 1234",
      company: "Veyrivo QA",
      service: "AI Chatbots",
      budget: "$5k - $15k",
      timeline: "ASAP",
      message: "Automated end-to-end verification row — safe to delete.",
    }),
  });
  console.log("POST /api/contact ->", contactRes.status, JSON.stringify(await contactRes.json()));

  // 2. Submit a newsletter subscription through the live route.
  const newsRes = await fetch(`${baseUrl}/api/newsletter`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: TEST_EMAIL }),
  });
  console.log("POST /api/newsletter ->", newsRes.status, JSON.stringify(await newsRes.json()));

  // 3. Verify both rows actually persisted in Supabase. (No delay needed —
  //    the routes await the insert before responding.)
  const [leads, subs] = await Promise.all([
    db.from("leads").select("id,name,email").eq("email", TEST_EMAIL),
    db.from("newsletter_subscribers").select("id,email").eq("email", TEST_EMAIL),
  ]);

  const leadPersisted = !leads.error && leads.data.length === 1;
  const subPersisted = !subs.error && subs.data.length === 1;
  console.log(`Lead row persisted: ${leadPersisted}`);
  console.log(`Subscriber row persisted: ${subPersisted}`);

  // 4. Clean up the test rows.
  await cleanup();
  const [afterLeads, afterSubs] = await Promise.all([
    db.from("leads").select("id").eq("email", TEST_EMAIL),
    db.from("newsletter_subscribers").select("id").eq("email", TEST_EMAIL),
  ]);
  console.log(
    `Cleanup: leads remaining=${afterLeads.data?.length ?? "?"}, subs remaining=${afterSubs.data?.length ?? "?"}`,
  );

  console.log(`RESULT: ${leadPersisted && subPersisted ? "PASS" : "FAIL"}`);
  process.exit(leadPersisted && subPersisted ? 0 : 1);
} catch (err) {
  console.error("RESULT: FAILED ->", err.message ?? String(err));
  await cleanup().catch(() => {});
  process.exit(1);
}
