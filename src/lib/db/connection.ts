import { Pool, PoolClient, QueryResult } from "pg";
import { env } from "@/lib/env";

let globalPool: Pool | undefined;

const pool =
  globalPool ||
  new Pool({
    connectionString: env.DATABASE_URL,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 5000,
  });

if (env.NODE_ENV !== "production") {
  globalPool = pool;
}

pool.on("error", (err: Error) => {
  console.error("Unexpected error on idle PostgreSQL client:", err);
  process.exit(-1);
});

export interface QueryOptions {
  logQuery?: boolean;
}

export async function query<T = unknown>(
  text: string,
  params?: unknown[],
  options: QueryOptions = {}
): Promise<QueryResult<T>> {
  const start = Date.now();
  const { logQuery = env.NODE_ENV !== "production" } = options;

  try {
    const result = await pool.query<T>(text, params);
    const duration = Date.now() - start;

    if (logQuery) {
      console.log("Executed query", {
        text: text.substring(0, 100),
        duration,
        rows: result.rowCount,
      });
    }

    return result;
  } catch (error) {
    console.error("Database query error:", {
      text: text.substring(0, 100),
      error: error instanceof Error ? error.message : "Unknown error",
    });
    throw error;
  }
}

export async function getClient(): Promise<PoolClient> {
  const client = await pool.connect();
  const release = client.release.bind(client);

  const timeout = setTimeout(() => {
    console.error("A client has been checked out for more than 10 seconds!");
  }, 10000);

  client.release = () => {
    clearTimeout(timeout);
    client.release = release;
    return release();
  };

  return client;
}

export async function transaction<T>(
  callback: (client: PoolClient) => Promise<T>
): Promise<T> {
  const client = await getClient();

  try {
    await client.query("BEGIN");
    const result = await callback(client);
    await client.query("COMMIT");
    return result;
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }
}

export async function closePool(): Promise<void> {
  await pool.end();
}

export default pool;

export type { Pool, PoolClient, QueryResult };
