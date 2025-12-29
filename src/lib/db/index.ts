import { query } from "./connection";

export * from "./connection";

export type { Pool, PoolClient, QueryResult } from "pg";

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
