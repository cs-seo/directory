import { query } from "../index";
import type { EvModel, EvBodyType, AvailabilityStatus } from "../types";

export interface EvModelFilters {
  brand?: string;
  bodyType?: EvBodyType;
  minSeats?: number;
  maxSeats?: number;
  availabilityStatus?: AvailabilityStatus;
  isPublished?: boolean;
  minMsrp?: number;
  maxMsrp?: number;
}

export interface EvModelSortOptions {
  field: "brand" | "model" | "year" | "msrp_aud" | "battery_capacity_kwh" | "epa_range_km";
  direction: "asc" | "desc";
}

export interface PaginationOptions {
  page?: number;
  limit?: number;
}

export interface EvModelRepository {
  findAll: (
    filters?: EvModelFilters,
    sort?: EvModelSortOptions,
    pagination?: PaginationOptions
  ) => Promise<{ models: EvModel[]; total: number }>;

  findById: (id: string) => Promise<EvModel | null>;
  findByBrandAndModel: (brand: string, model: string) => Promise<EvModel | null>;
  findPublished: () => Promise<EvModel[]>;
  findByState: (state: string) => Promise<EvModel[]>;
  search: (query: string) => Promise<EvModel[]>;
}

class EvModelRepositoryImpl implements EvModelRepository {
  private tableName = "ev_models";

  async findAll(
    filters?: EvModelFilters,
    sort?: EvModelSortOptions,
    pagination?: PaginationOptions
  ): Promise<{ models: EvModel[]; total: number }> {
    const conditions: string[] = ["1=1"];
    const params: unknown[] = [];
    let paramIndex = 1;

    if (filters) {
      if (filters.brand) {
        conditions.push(`brand = $${paramIndex++}`);
        params.push(filters.brand);
      }
      if (filters.bodyType) {
        conditions.push(`body_type = $${paramIndex++}`);
        params.push(filters.bodyType);
      }
      if (filters.minSeats) {
        conditions.push(`seats >= $${paramIndex++}`);
        params.push(filters.minSeats);
      }
      if (filters.maxSeats) {
        conditions.push(`seats <= $${paramIndex++}`);
        params.push(filters.maxSeats);
      }
      if (filters.availabilityStatus) {
        conditions.push(`availability_status = $${paramIndex++}`);
        params.push(filters.availabilityStatus);
      }
      if (filters.isPublished !== undefined) {
        conditions.push(`is_published = $${paramIndex++}`);
        params.push(filters.isPublished);
      }
      if (filters.minMsrp) {
        conditions.push(`msrp_aud >= $${paramIndex++}`);
        params.push(filters.minMsrp);
      }
      if (filters.maxMsrp) {
        conditions.push(`msrp_aud <= $${paramIndex++}`);
        params.push(filters.maxMsrp);
      }
    }

    const whereClause = conditions.join(" AND ");

    let orderByClause = "brand ASC, model ASC";
    if (sort) {
      orderByClause = `${sort.field} ${sort.direction.toUpperCase()}`;
    }

    const page = pagination?.page ?? 1;
    const limit = pagination?.limit ?? 20;
    const offset = (page - 1) * limit;

    const countResult = await query<{ count: string }>(
      `SELECT COUNT(*) as count FROM ${this.tableName} WHERE ${whereClause}`,
      params
    );

    const count = parseInt(countResult.rows[0]?.count ?? "0", 10);

    const dataResult = await query<EvModel>(
      `SELECT * FROM ${this.tableName}
       WHERE ${whereClause}
       ORDER BY ${orderByClause}
       LIMIT $${paramIndex++} OFFSET $${paramIndex}`,
      [...params, limit, offset]
    );

    return {
      models: dataResult.rows,
      total: count,
    };
  }

  async findById(id: string): Promise<EvModel | null> {
    const result = await query<EvModel>(
      `SELECT * FROM ${this.tableName} WHERE id = $1`,
      [id]
    );
    return result.rows[0] ?? null;
  }

  async findByBrandAndModel(brand: string, model: string): Promise<EvModel | null> {
    const result = await query<EvModel>(
      `SELECT * FROM ${this.tableName} WHERE brand = $1 AND model = $2`,
      [brand, model]
    );
    return result.rows[0] ?? null;
  }

  async findPublished(): Promise<EvModel[]> {
    const result = await query<EvModel>(
      `SELECT * FROM ${this.tableName} WHERE is_published = true ORDER BY brand ASC, model ASC`
    );
    return result.rows;
  }

  async findByState(state: string): Promise<EvModel[]> {
    const result = await query<EvModel>(
      `SELECT * FROM ${this.tableName}
       WHERE is_published = true
       AND availability_by_state->>$1 = 'true'
       ORDER BY brand ASC, model ASC`,
      [state]
    );
    return result.rows;
  }

  async search(searchQuery: string): Promise<EvModel[]> {
    const result = await query<EvModel>(
      `SELECT * FROM ${this.tableName}
       WHERE is_published = true
       AND (
         brand ILIKE $1
         OR model ILIKE $1
         OR body_type::text ILIKE $1
       )
       ORDER BY brand ASC, model ASC
       LIMIT 20`,
      [`%${searchQuery}%`]
    );
    return result.rows;
  }
}

export const evModelRepository = new EvModelRepositoryImpl();
