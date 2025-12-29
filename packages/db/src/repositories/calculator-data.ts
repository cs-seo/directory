import { query } from "../index";
import type { CalculatorData, CalculatorType } from "../types";

export interface CalculatorDataFilters {
  calculatorType?: CalculatorType;
  modelId?: string | null;
}

export interface CalculatorDataRepository {
  findAll: (filters?: CalculatorDataFilters) => Promise<CalculatorData[]>;
  findById: (id: string) => Promise<CalculatorData | null>;
  findByType: (type: CalculatorType) => Promise<CalculatorData[]>;
  findByTypeAndModel: (
    type: CalculatorType,
    modelId: string | null
  ) => Promise<CalculatorData | null>;
  upsert: (
    data: Omit<CalculatorData, "id" | "created_at" | "last_updated">
  ) => Promise<CalculatorData>;
}

class CalculatorDataRepositoryImpl implements CalculatorDataRepository {
  private tableName = "calculator_data";

  async findAll(filters?: CalculatorDataFilters): Promise<CalculatorData[]> {
    const conditions: string[] = ["1=1"];
    const params: unknown[] = [];
    let paramIndex = 1;

    if (filters) {
      if (filters.calculatorType) {
        conditions.push(`calculator_type = $${paramIndex++}`);
        params.push(filters.calculatorType);
      }
      if (filters.modelId !== undefined) {
        if (filters.modelId === null) {
          conditions.push(`model_id IS NULL`);
        } else {
          conditions.push(`model_id = $${paramIndex++}`);
          params.push(filters.modelId);
        }
      }
    }

    const whereClause = conditions.join(" AND ");

    const result = await query<CalculatorData>(
      `SELECT * FROM ${this.tableName} WHERE ${whereClause}`,
      params
    );

    return result.rows;
  }

  async findById(id: string): Promise<CalculatorData | null> {
    const result = await query<CalculatorData>(
      `SELECT * FROM ${this.tableName} WHERE id = $1`,
      [id]
    );
    return result.rows[0] ?? null;
  }

  async findByType(type: CalculatorType): Promise<CalculatorData[]> {
    const result = await query<CalculatorData>(
      `SELECT * FROM ${this.tableName}
       WHERE calculator_type = $1
       ORDER BY model_id ASC NULLS FIRST`,
      [type]
    );
    return result.rows;
  }

  async findByTypeAndModel(
    type: CalculatorType,
    modelId: string | null
  ): Promise<CalculatorData | null> {
    const result = await query<CalculatorData>(
      `SELECT * FROM ${this.tableName}
       WHERE calculator_type = $1
       AND (model_id = $2 OR (model_id IS NULL AND $2 IS NULL))
       LIMIT 1`,
      [type, modelId]
    );
    return result.rows[0] ?? null;
  }

  async upsert(
    data: Omit<CalculatorData, "id" | "created_at" | "last_updated">
  ): Promise<CalculatorData> {
    const result = await query<CalculatorData>(
      `INSERT INTO ${this.tableName}
       (calculator_type, model_id, formula_config, australian_variables)
       VALUES ($1, $2, $3, $4)
       ON CONFLICT (calculator_type, COALESCE(model_id, '00000000-0000-0000-0000-000000000000'))
       DO UPDATE SET formula_config = $3, australian_variables = $4, last_updated = CURRENT_TIMESTAMP
       RETURNING *`,
      [
        data.calculator_type,
        data.model_id,
        data.formula_config,
        data.australian_variables,
      ]
    );
    return result.rows[0];
  }
}

export const calculatorDataRepository = new CalculatorDataRepositoryImpl();
