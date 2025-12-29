import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { query, closePool } from "./connection.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

interface MigrationResult {
  name: string;
  applied: boolean;
  error?: string;
}

async function runMigrations(): Promise<MigrationResult[]> {
  const results: MigrationResult[] = [];
  const migrationsDir = join(__dirname, "../../migrations");

  const migrationFiles = ["001_create_schema.sql", "002_seed_data.sql"];

  for (const file of migrationFiles) {
    const filePath = join(migrationsDir, file);
    const name = file.replace(".sql", "");

    try {
      const sql = readFileSync(filePath, "utf-8");

      await query("BEGIN");

      try {
        await query(sql);

        const checkResult = await query<{ count: string }>(
          `SELECT COUNT(*) as count FROM schema_migrations WHERE migration_name = $1`,
          [name]
        );

        if (parseInt(checkResult.rows[0]?.count ?? "0", 10) === 0) {
          await query(
            `INSERT INTO schema_migrations (migration_name) VALUES ($1)`,
            [name]
          );
        }

        await query("COMMIT");
        results.push({ name, applied: true });
        console.log(`✓ Migration ${name} applied successfully`);
      } catch (error) {
        await query("ROLLBACK");
        throw error;
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      results.push({ name, applied: false, error: errorMessage });
      console.error(`✗ Migration ${name} failed:`, errorMessage);
    }
  }

  return results;
}

async function main() {
  console.log("Running database migrations...\n");

  try {
    const results = await runMigrations();

    console.log("\n--- Migration Summary ---");
    const successful = results.filter((r) => r.applied).length;
    const failed = results.filter((r) => !r.applied).length;

    console.log(`Applied: ${successful}`);
    console.log(`Failed: ${failed}`);

    if (failed > 0) {
      console.log("\nFailed migrations:");
      for (const result of results.filter((r) => !r.applied)) {
        console.log(`  - ${result.name}: ${result.error}`);
      }
      process.exit(1);
    }

    console.log("\nAll migrations completed successfully!");
  } catch (error) {
    console.error("Migration process failed:", error);
    process.exit(1);
  } finally {
    await closePool();
  }
}

main();
