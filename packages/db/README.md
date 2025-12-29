# EV Australia Database Schema

PostgreSQL database schema, migrations, and type-safe repositories for evaustralia.com.au

## Installation

```bash
npm install @evaustralia/database
```

## Peer Dependencies

```bash
npm install pg zod
```

## Quick Start

### 1. Set environment variable

```bash
export DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
```

### 2. Run migrations

```bash
npx @evaustralia/database migrate
```

## Usage

```typescript
import {
  evModelRepository,
  chargingStationRepository,
  blogPostRepository,
  query,
  testConnection,
} from "@evaustralia/database";

// Test connection
const connected = await testConnection();
console.log("Connected:", connected);

// Query EV models
const { models, total } = await evModelRepository.findAll({
  brand: "Tesla",
  bodyType: "suv",
});
console.log(`Found ${total} Tesla SUVs`);

// Find charging stations by state
const stations = await chargingStationRepository.findByState("NSW");
console.log(`Found ${stations.length} charging stations in NSW`);

// Search blog posts
const posts = await blogPostRepository.findPublished(10);
console.log(`Found ${posts.length} published posts`);
```

## Database Schema

### Tables

| Table | Description |
|-------|-------------|
| `ev_models` | Electric vehicle models with specifications |
| `ev_pricing` | Regional pricing information |
| `ev_reviews` | User and expert reviews |
| `charging_stations` | Public charging station locations |
| `blog_posts` | Blog articles and guides |
| `calculator_data` | Calculator configurations |
| `au_market_variables` | Australian market variables |
| `state_pages` | State-specific EV content |
| `schema_migrations` | Migration tracking |

## Scripts

```bash
npm run migrate   # Run migrations and seed data
npm run seed      # Run seed data only
npm run test      # Test database connection
npm run reset     # Drop all tables (destructive)
npm run build     # Build TypeScript
```

## Repository Methods

### evModelRepository
- `findAll(filters?, sort?, pagination?)` - Find all models with filters
- `findById(id)` - Find by ID
- `findByBrandAndModel(brand, model)` - Find by brand and model
- `findPublished()` - Find all published
- `findByState(state)` - Find models available in a state
- `search(query)` - Search models

### chargingStationRepository
- `findAll(filters?)` - Find all stations
- `findById(id)` - Find by ID
- `findByState(state)` - Find by state
- `findByNetwork(network)` - Find by network
- `findNearby(lat, lng, radiusKm)` - Find nearby stations
- `findActive()` - Find all active stations

### blogPostRepository
- `findAll(filters?, limit?)` - Find all posts
- `findBySlug(slug)` - Find by slug
- `findPublished(limit?)` - Find published posts
- `findByCategory(category, limit?)` - Find by category
- `search(query)` - Search posts

## License

MIT
