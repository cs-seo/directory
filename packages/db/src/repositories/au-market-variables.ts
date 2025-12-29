import { query } from "../index";
import type { AuMarketVariable } from "../types";

export interface AuMarketVariableRepository {
  findAll: () => Promise<AuMarketVariable[]>;
  findById: (id: string) => Promise<AuMarketVariable | null>;
  findByState: (state: string) => Promise<AuMarketVariable | null>;
  findCurrent: (state: string) => Promise<AuMarketVariable | null>;
  findAustraliaWide: () => Promise<AuMarketVariable | null>;
  upsert: (
    variable: Omit<AuMarketVariable, "id" | "created_at" | "updated_at">
  ) => Promise<AuMarketVariable>;
}

class AuMarketVariableRepositoryImpl implements AuMarketVariableRepository {
  private tableName = "au_market_variables";

  async findAll(): Promise<AuMarketVariable[]> {
    const result = await query<AuMarketVariable>(
      `SELECT * FROM ${this.tableName} ORDER BY state ASC`
    );
    return result.rows;
  }

  async findById(id: string): Promise<AuMarketVariable | null> {
    const result = await query<AuMarketVariable>(
      `SELECT * FROM ${this.tableName} WHERE id = $1`,
      [id]
    );
    return result.rows[0] ?? null;
  }

  async findByState(state: string): Promise<AuMarketVariable | null> {
    const result = await query<AuMarketVariable>(
      `SELECT * FROM ${this.tableName}
       WHERE state = $1
       ORDER BY effective_date DESC
       LIMIT 1`,
      [state]
    );
    return result.rows[0] ?? null;
  }

  async findCurrent(state: string): Promise<AuMarketVariable | null> {
    const result = await query<AuMarketVariable>(
      `SELECT * FROM ${this.tableName}
       WHERE state = $1
       AND effective_date <= CURRENT_DATE
       ORDER BY effective_date DESC
       LIMIT 1`,
      [state]
    );
    return result.rows[0] ?? null;
  }

  async findAustraliaWide(): Promise<AuMarketVariable | null> {
    const result = await query<AuMarketVariable>(
      `SELECT * FROM ${this.tableName} WHERE state = 'AU_WIDE' LIMIT 1`
    );
    return result.rows[0] ?? null;
  }

  async upsert(
    variable: Omit<AuMarketVariable, "id" | "created_at" | "updated_at">
  ): Promise<AuMarketVariable> {
    const result = await query<AuMarketVariable>(
      `INSERT INTO ${this.tableName}
       (state, electricity_rate_per_kwh, grid_carbon_intensity_grams_per_kwh,
        solar_irradiance_kwhm2_per_day, average_electrician_rate_per_hour,
        vehicle_registration_cost_annual, ctp_insurance_base, effective_date, notes)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
       ON CONFLICT (state, effective_date)
       DO UPDATE SET
         electricity_rate_per_kwh = $2,
         grid_carbon_intensity_grams_per_kwh = $3,
         solar_irradiance_kwhm2_per_day = $4,
         average_electrician_rate_per_hour = $5,
         vehicle_registration_cost_annual = $6,
         ctp_insurance_base = $7,
         notes = $9,
         updated_at = CURRENT_TIMESTAMP
       RETURNING *`,
      [
        variable.state,
        variable.electricity_rate_per_kwh,
        variable.grid_carbon_intensity_grams_per_kwh,
        variable.solar_irradiance_kwhm2_per_day,
        variable.average_electrician_rate_per_hour,
        variable.vehicle_registration_cost_annual,
        variable.ctp_insurance_base,
        variable.effective_date,
        variable.notes,
      ]
    );
    return result.rows[0];
  }
}

export const auMarketVariableRepository = new AuMarketVariableRepositoryImpl();
