import { query, closePool, testConnection } from "../src/connection.js";

async function testDatabaseConnection() {
  console.log("Testing database connection...\n");

  const connected = await testConnection();

  if (!connected) {
    console.error("Failed to connect to database");
    process.exit(1);
  }

  console.log("✓ Database connection successful\n");

  try {
    const tables = await query<{ table_name: string }>(
      `SELECT table_name FROM information_schema.tables
       WHERE table_schema = 'public' AND table_type = 'BASE TABLE'
       ORDER BY table_name`
    );

    console.log("Tables found:", tables.rows.length);
    for (const row of tables.rows) {
      console.log(`  - ${row.table_name}`);
    }

    const countResult = await query<{ count: string }>(
      `SELECT COUNT(*) as count FROM schema_migrations`
    );
    console.log(`\nMigrations applied: ${countResult.rows[0].count}`);

    const evModelsResult = await query<{ count: string }>(
      `SELECT COUNT(*) as count FROM ev_models`
    );
    console.log(`EV Models: ${evModelsResult.rows[0].count}`);

    const chargingStationsResult = await query<{ count: string }>(
      `SELECT COUNT(*) as count FROM charging_stations`
    );
    console.log(`Charging Stations: ${chargingStationsResult.rows[0].count}`);

    const blogPostsResult = await query<{ count: string }>(
      `SELECT COUNT(*) as count FROM blog_posts`
    );
    console.log(`Blog Posts: ${blogPostsResult.rows[0].count}`);

    console.log("\n✓ All database checks passed!");
  } catch (error) {
    console.error("Database check failed:", error);
    process.exit(1);
  } finally {
    await closePool();
  }
}

testDatabaseConnection();
