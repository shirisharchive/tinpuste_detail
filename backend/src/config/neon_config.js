require("dotenv").config({ override: true });

const { Pool } = require("pg");

const DB_URL = (process.env.PG_URL || process.env.DB_URL || "")
  .replace(/^['"]|['"]$/g, "")
  .trim();

if (!DB_URL) {
  throw new Error("PG_URL or DB_URL environment variable is required");
}

const pool = new Pool({
  connectionString: DB_URL,
  ssl: { rejectUnauthorized: false },
  max: 3,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000,
  keepAlive: true,
  keepAliveInitialDelayMillis: 10000,
});

pool.on("error", (err) => {
  console.error("Unexpected error on idle client", err);
});

module.exports = pool;