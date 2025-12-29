import { Pool, PoolClient, QueryResult } from "pg";
import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  DATABASE_URL: z.string().url(),
});

export type Env = z.infer<typeof envSchema>;

let globalPool: Pool | undefined;

const createPool = (env: Env): Pool => {
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

  return pool;
};

let envInstance: Env | null = null;

const getPool = (): Pool => {
  if (!envInstance) {
    const parsedEnv = envSchema.parse(process.env);
    envInstance = parsedEnv;
    return createPool(parsedEnv);
  }
  return createPool(envInstance);
};

export interface QueryOptions {
  logQuery?: boolean;
}

export async function query<T = unknown>(
  text: string,
  params?: unknown[],
  options: QueryOptions = {}
): Promise<QueryResult<T>> {
  const pool = getPool();
  const start = Date.now();
  const { logQuery = envInstance?.NODE_ENV !== "production" } = options;

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
  const pool = getPool();
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
  const pool = getPool();
  await pool.end();
  globalPool = undefined;
}

export async function testConnection(): Promise<boolean> {
  try {
    const result = await query("SELECT 1 as test");
    return result.rows[0]?.test === 1;
  } catch {
    return false;
  }
}

export async function getTableNames(): Promise<string[]> {
  const result = await query<{ table_name: string }>(
    `SELECT table_name FROM information_schema.tables
     WHERE table_schema = 'public' AND table_type = 'BASE TABLE'
     ORDER BY table_name`
  );
  return result.rows.map((row) => row.table_name);
}

export async function tableExists(tableName: string): Promise<boolean> {
  const result = await query<{ exists: boolean }>(
    `SELECT EXISTS (
      SELECT FROM information_schema.tables
      WHERE table_schema = 'public' AND table_name = $1
    )`,
    [tableName]
  );
  return result.rows[0]?.exists ?? false;
}

export type { Pool, PoolClient, QueryResult };
