import { query } from "../index";
import type { EvPricing } from "../types";

export interface PricingFilters {
  modelId?: string;
  region?: string;
  source?: "official" | "dealer" | "aggregated";
  availability?: "in_stock" | "preorder" | "unavailable";
}

export interface EvPricingRepository {
  findAll: (filters?: PricingFilters) => Promise<EvPricing[]>;
  findByModelId: (modelId: string) => Promise<EvPricing[]>;
  findByRegion: (region: string) => Promise<EvPricing[]>;
  findLowestPrice: (modelId: string) => Promise<EvPricing | null>;
  upsert: (
    pricing: Omit<EvPricing, "id" | "created_at" | "last_updated">
  ) => Promise<EvPricing>;
}

class EvPricingRepositoryImpl implements EvPricingRepository {
  private tableName = "ev_pricing";

  async findAll(filters?: PricingFilters): Promise<EvPricing[]> {
    const conditions: string[] = ["1=1"];
    const params: unknown[] = [];
    let paramIndex = 1;

    if (filters) {
      if (filters.modelId) {
        conditions.push(`model_id = $${paramIndex++}`);
        params.push(filters.modelId);
      }
      if (filters.region) {
        conditions.push(`region ILIKE $${paramIndex++}`);
        params.push(`%${filters.region}%`);
      }
      if (filters.source) {
        conditions.push(`source = $${paramIndex++}`);
        params.push(filters.source);
      }
      if (filters.availability) {
        conditions.push(`availability = $${paramIndex++}`);
        params.push(filters.availability);
      }
    }

    const whereClause = conditions.join(" AND ");

    const result = await query<EvPricing>(
      `SELECT * FROM ${this.tableName} WHERE ${whereClause} ORDER BY price_aud ASC`,
      params
    );

    return result.rows;
  }

  async findByModelId(modelId: string): Promise<EvPricing[]> {
    const result = await query<EvPricing>(
      `SELECT * FROM ${this.tableName} WHERE model_id = $1 ORDER BY price_aud ASC`,
      [modelId]
    );
    return result.rows;
  }

  async findByRegion(region: string): Promise<EvPricing[]> {
    const result = await query<EvPricing>(
      `SELECT * FROM ${this.tableName} WHERE region ILIKE $1 ORDER BY price_aud ASC`,
      [`%${region}%`]
    );
    return result.rows;
  }

  async findLowestPrice(modelId: string): Promise<EvPricing | null> {
    const result = await query<EvPricing>(
      `SELECT * FROM ${this.tableName}
       WHERE model_id = $1 AND availability != 'unavailable'
       ORDER BY price_aud ASC
       LIMIT 1`,
      [modelId]
    );
    return result.rows[0] ?? null;
  }

  async upsert(
    pricing: Omit<EvPricing, "id" | "created_at" | "last_updated">
  ): Promise<EvPricing> {
    const result = await query<EvPricing>(
      `INSERT INTO ${this.tableName} (model_id, region, price_aud, availability, source)
       VALUES ($1, $2, $3, $4, $5)
       ON CONFLICT (model_id, region)
       DO UPDATE SET price_aud = $3, availability = $4, source = $5, last_updated = CURRENT_TIMESTAMP
       RETURNING *`,
      [pricing.model_id, pricing.region, pricing.price_aud, pricing.availability, pricing.source]
    );
    return result.rows[0];
  }
}

export const evPricingRepository = new EvPricingRepositoryImpl();
