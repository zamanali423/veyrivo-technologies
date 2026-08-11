/**
 * Creates the `leads` and `newsletter_subscribers` tables in Supabase.
 *
 * Uses SUPABASE_DATABASE_URL. The direct `db.<ref>.supabase.co` host is
 * often IPv6-only (unreachable on IPv4-only networks), so this also tries
 * the IPv4 pooler hosts (`aws-0-<region>.pooler.supabase.com`) with the
 * same password. Idempotent — safe to re-run.
 *
 * Run with: node --env-file=.env scripts/setup-supabase-tables.mjs
 */
import pg from "pg";

const { Client } = pg;

const connectionString = process.env.SUPABASE_DATABASE_URL;
if (!connectionString) {
  console.error("Missing SUPABASE_DATABASE_URL in .env");
  process.exit(1);
}

const SQL = `
create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  company text,
  service text,
  budget text,
  timeline text,
  message text not null,
  source text,
  created_at timestamptz not null default now()
);

-- Add columns to an existing leads table (idempotent).
alter table leads add column if not exists phone text;
alter table leads add column if not exists budget text;
alter table leads add column if not exists timeline text;

create table if not exists newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  source text,
  created_at timestamptz not null default now()
);
`;

// Pull the project ref + credentials out of the direct connection string.
const parsed = new URL(connectionString);
const ref = parsed.hostname.replace(/^db\./, "").split(".")[0]; // jzgwcxrsqifeplqxwhbj
const password = decodeURIComponent(parsed.password);
const database = parsed.pathname.replace(/^\//, "") || "postgres";

const REGIONS = [
  "ap-southeast-1",
  "ap-southeast-2",
  "ap-south-1",
  "us-east-1",
  "us-west-1",
  "eu-central-1",
];

// Direct first, then IPv4 pooler hosts (transaction pooler :6543, session :5432).
const candidates = [
  {
    label: `direct (${parsed.hostname})`,
    config: { connectionString, ssl: { rejectUnauthorized: false } },
  },
  ...REGIONS.flatMap((region) => [
    {
      label: `pooler ${region} :6543 (postgres.${ref})`,
      config: {
        host: `aws-0-${region}.pooler.supabase.com`,
        port: 6543,
        user: `postgres.${ref}`,
        password,
        database,
        ssl: { rejectUnauthorized: false },
      },
    },
    {
      label: `pooler ${region} :5432 (postgres.${ref})`,
      config: {
        host: `aws-0-${region}.pooler.supabase.com`,
        port: 5432,
        user: `postgres.${ref}`,
        password,
        database,
        ssl: { rejectUnauthorized: false },
      },
    },
  ]),
];

async function tryCreateTables(candidate) {
  const client = new Client(candidate.config);
  try {
    await client.connect();
    await client.query(SQL);
    const { rows } = await client.query(
      "select tablename from pg_tables where schemaname = 'public' order by tablename",
    );
    console.log(
      `[${candidate.label}] connected; public tables: ${rows.map((r) => r.tablename).join(", ")}`,
    );
    return true;
  } catch (err) {
    console.log(`[${candidate.label}] failed: ${(err.message ?? String(err)).slice(0, 90)}`);
    return false;
  } finally {
    await client.end().catch(() => {});
  }
}

for (const candidate of candidates) {
  if (await tryCreateTables(candidate)) {
    console.log("RESULT: tables ready");
    process.exit(0);
  }
}

console.error("RESULT: FAILED — could not reach any Supabase host from this network.");
process.exit(1);
