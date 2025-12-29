import { query } from "./connection";
import type { ChargingStation } from "./types";

export interface ChargingStationFilters {
  state?: string;
  suburb?: string;
  network?: string;
  isActive?: boolean;
  connectorTypes?: string[];
  minPower?: number;
  maxPower?: number;
}

export interface GeoBounds {
  minLat: number;
  maxLat: number;
  minLng: number;
  maxLng: number;
}

export interface ChargingStationRepository {
  findAll: (filters?: ChargingStationFilters) => Promise<ChargingStation[]>;
  findById: (id: string) => Promise<ChargingStation | null>;
  findByState: (state: string) => Promise<ChargingStation[]>;
  findByNetwork: (network: string) => Promise<ChargingStation[]>;
  findNearby: (
    lat: number,
    lng: number,
    radiusKm: number
  ) => Promise<ChargingStation[]>;
  findInBounds: (bounds: GeoBounds) => Promise<ChargingStation[]>;
  findActive: () => Promise<ChargingStation[]>;
  countByNetwork: () => Promise<{ network: string; count: number }[]>;
}

class ChargingStationRepositoryImpl implements ChargingStationRepository {
  private tableName = "charging_stations";

  async findAll(filters?: ChargingStationFilters): Promise<ChargingStation[]> {
    const conditions: string[] = ["1=1"];
    const params: unknown[] = [];
    let paramIndex = 1;

    if (filters) {
      if (filters.state) {
        conditions.push(`state = $${paramIndex++}`);
        params.push(filters.state);
      }
      if (filters.suburb) {
        conditions.push(`suburb ILIKE $${paramIndex++}`);
        params.push(`%${filters.suburb}%`);
      }
      if (filters.network) {
        conditions.push(`network = $${paramIndex++}`);
        params.push(filters.network);
      }
      if (filters.isActive !== undefined) {
        conditions.push(`is_active = $${paramIndex++}`);
        params.push(filters.isActive);
      }
      if (filters.connectorTypes && filters.connectorTypes.length > 0) {
        conditions.push(`connector_types::jsonb ?| $${paramIndex++}`);
        params.push(filters.connectorTypes);
      }
      if (filters.minPower) {
        conditions.push(`(power_output_kw::jsonb)::jsonb ? $${paramIndex++}`);
        params.push(filters.minPower.toString());
      }
    }

    const whereClause = conditions.join(" AND ");

    const result = await query<ChargingStation>(
      `SELECT * FROM ${this.tableName} WHERE ${whereClause} ORDER BY name ASC`,
      params
    );

    return result.rows;
  }

  async findById(id: string): Promise<ChargingStation | null> {
    const result = await query<ChargingStation>(
      `SELECT * FROM ${this.tableName} WHERE id = $1`,
      [id]
    );
    return result.rows[0] ?? null;
  }

  async findByState(state: string): Promise<ChargingStation[]> {
    const result = await query<ChargingStation>(
      `SELECT * FROM ${this.tableName}
       WHERE state = $1 AND is_active = true
       ORDER BY suburb ASC, name ASC`,
      [state]
    );
    return result.rows;
  }

  async findByNetwork(network: string): Promise<ChargingStation[]> {
    const result = await query<ChargingStation>(
      `SELECT * FROM ${this.tableName}
       WHERE network = $1 AND is_active = true
       ORDER BY suburb ASC, name ASC`,
      [network]
    );
    return result.rows;
  }

  async findNearby(
    lat: number,
    lng: number,
    radiusKm: number
  ): Promise<ChargingStation[]> {
    const result = await query<ChargingStation>(
      `SELECT *,
        ( 6371 * acos( cos( radians($1) ) * cos( radians( latitude ) )
        * cos( radians( longitude ) - radians($2) ) + sin( radians($1) )
        * sin( radians( latitude ) ) ) ) AS distance
       FROM ${this.tableName}
       WHERE is_active = true
       AND ( 6371 * acos( cos( radians($1) ) * cos( radians( latitude ) )
        * cos( radians( longitude ) - radians($2) ) + sin( radians($1) )
        * sin( radians( latitude ) ) ) ) <= $3
       ORDER BY distance ASC`,
      [lat, lng, radiusKm]
    );
    return result.rows;
  }

  async findInBounds(bounds: GeoBounds): Promise<ChargingStation[]> {
    const result = await query<ChargingStation>(
      `SELECT * FROM ${this.tableName}
       WHERE is_active = true
       AND latitude BETWEEN $1 AND $2
       AND longitude BETWEEN $3 AND $4
       ORDER BY suburb ASC, name ASC`,
      [bounds.minLat, bounds.maxLat, bounds.minLng, bounds.maxLng]
    );
    return result.rows;
  }

  async findActive(): Promise<ChargingStation[]> {
    const result = await query<ChargingStation>(
      `SELECT * FROM ${this.tableName}
       WHERE is_active = true
       ORDER BY state ASC, suburb ASC, name ASC`
    );
    return result.rows;
  }

  async countByNetwork(): Promise<{ network: string; count: number }[]> {
    const result = await query<{ network: string; count: string }>(
      `SELECT network, COUNT(*) as count
       FROM ${this.tableName}
       WHERE is_active = true AND network IS NOT NULL
       GROUP BY network
       ORDER BY count DESC`
    );
    return result.rows.map((row) => ({
      network: row.network,
      count: parseInt(row.count, 10),
    }));
  }
}

export const chargingStationRepository = new ChargingStationRepositoryImpl();
