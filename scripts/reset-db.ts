import { query, closePool } from "../lib/db/connection";

async function resetDatabase() {
  console.log("Resetting database...\n");

  try {
    console.log("Dropping all tables...");

    await query(`
      DO $$
      DECLARE
        r RECORD;
      BEGIN
        FOR r IN (SELECT tablename FROM pg_tables WHERE schemaname = 'public') LOOP
          EXECUTE 'DROP TABLE IF EXISTS ' || quote_ident(r.tablename) || ' CASCADE';
        END LOOP;
      END $$;
    `);

    console.log("Dropping all types...");

    await query(`
      DO $$
      DECLARE
        r RECORD;
      BEGIN
        FOR r IN (SELECT typname FROM pg_type WHERE typnamespace = (SELECT oid FROM pg_namespace WHERE nspname = 'public') AND typtype = 'e') LOOP
          EXECUTE 'DROP TYPE IF EXISTS ' || quote_ident(r.typname) || ' CASCADE';
        END LOOP;
      END $$;
    `);

    console.log("Dropping extension if exists...");
    await query(`DROP EXTENSION IF EXISTS "uuid-ossp" CASCADE`);

    console.log("\n✓ Database reset complete\n");

    console.log("Run 'npm run db:migrate' to apply schema and seed data");
  } catch (error) {
    console.error("Database reset failed:", error);
    process.exit(1);
  } finally {
    await closePool();
  }
}

resetDatabase();
