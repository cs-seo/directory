# EV Australia Database Schema

This directory contains the PostgreSQL database schema, migrations, and type-safe repositories for the evaustralia.com.au project.

## Schema Overview

### Tables

| Table | Description |
|-------|-------------|
| `ev_models` | Electric vehicle models with full specifications |
| `ev_pricing` | Regional pricing information for EV models |
| `ev_reviews` | User and expert reviews for EV models |
| `charging_stations` | Public charging station locations across Australia |
| `blog_posts` | Blog articles and guides about EVs |
| `calculator_data` | Configuration data for calculators |
| `au_market_variables` | Australian market variables (electricity rates, carbon intensity) |
| `state_pages` | State-specific EV content and incentives |
| `schema_migrations` | Migration tracking |

## Quick Start

### 1. Set up the database

```bash
# Copy environment file
cp .env.example .env

# Edit .env with your database credentials
```

### 2. Run migrations and seed data

```bash
npm run db:migrate
```

### 3. Test the connection

```bash
npm run db:test
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run db:migrate` | Run database migrations and seed data |
| `npm run db:seed` | Run only seed data (requires existing schema) |
| `npm run db:reset` | Drop all tables and types (⚠️ destructive) |
| `npm run db:test` | Test database connection and show stats |

## Repository Usage

### Import repositories

```typescript
import {
  evModelRepository,
  evPricingRepository,
  evReviewRepository,
  chargingStationRepository,
  blogPostRepository,
  calculatorDataRepository,
  auMarketVariableRepository,
  statePageRepository,
} from "@/lib/db";
```

### Query examples

#### Find EV models

```typescript
const { models, total } = await evModelRepository.findAll({
  brand: "Tesla",
  bodyType: "suv",
  availabilityStatus: "available",
}, {
  field: "msrp_aud",
  direction: "asc",
}, {
  page: 1,
  limit: 20,
});
```

#### Search EV models

```typescript
const models = await evModelRepository.search("Model Y");
```

#### Find charging stations by state

```typescript
const stations = await chargingStationRepository.findByState("NSW");
```

#### Find nearby charging stations

```typescript
const stations = await chargingStationRepository.findNearby(-33.8688, 151.2093, 10);
```

#### Get published blog posts

```typescript
const posts = await blogPostRepository.findPublished(10);
```

#### Find state-specific content

```typescript
const page = await statePageRepository.findByState("NSW");
```

## Environment Variables

```env
# Database Configuration
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
POSTGRES_USER=user
POSTGRES_PASSWORD=password
POSTGRES_DB=dbname
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
```

## Database Schema

### EV Models Table

Key fields:
- `id` (UUID) - Primary key
- `brand`, `model` - Vehicle identification
- `year`, `generation` - Model year and generation
- `body_type` - Enum: sedan, suv, coupe, wagon, hatchback, etc.
- `battery_capacity_kwh` - Battery size
- `msrp_aud` - Starting price in AUD
- `availability_by_state` - JSON: availability per state
- `features` - JSON: list of features
- `is_published` - Draft/published state

### Charging Stations Table

Key fields:
- `id` (UUID) - Primary key
- `external_id` - External API reference (OpenChargeMap, etc.)
- `network` - Network name (Tesla, Chargefox, Jolt, etc.)
- `connector_types` - JSON: list of connector types
- `power_output_kw` - JSON: available power levels
- `pricing_info` - JSON: pricing structure
- `latitude`, `longitude` - Location coordinates

## Indexes

The schema includes optimized indexes for common queries:
- `model_id` - For lookups by related models
- `slug` - For blog post URLs
- `state` - For location-based queries
- `brand + model` - For search queries
- `latitude + longitude` - For geo queries

## Migrations

Migrations are stored in `/migrations`:
- `001_create_schema.sql` - Creates all tables, types, indexes, and triggers
- `002_seed_data.sql` - Populates initial sample data

## Seed Data

The seed file includes:
- 10 popular EV models (Tesla, BYD, MG, Polestar, Hyundai, Kia, Volvo)
- Regional pricing for major cities
- Sample reviews with ratings
- 25+ charging stations across Australia
- 5 blog posts
- Calculator configurations
- Australian market variables by state
- State-specific content pages

## Type Safety

All repository methods return typed results:

```typescript
import type { EvModel, ChargingStation, BlogPost } from "@/lib/db";

// Full type safety on all queries
const models: EvModel[] = await evModelRepository.findPublished();
const stations: ChargingStation[] = await chargingStationRepository.findActive();
```

## Error Handling

The connection pool handles errors gracefully:

```typescript
import { query, closePool } from "@/lib/db/connection";

try {
  const result = await query("SELECT * FROM ev_models");
  return result.rows;
} catch (error) {
  console.error("Database error:", error);
  throw error;
} finally {
  await closePool(); // Only in script context
}
```

## License

MIT
