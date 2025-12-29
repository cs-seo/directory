import { query } from "./connection";
import type { StatePage } from "./types";

export interface StatePageRepository {
  findAll: () => Promise<StatePage[]>;
  findById: (id: string) => Promise<StatePage | null>;
  findByState: (state: string) => Promise<StatePage | null>;
  upsert: (
    page: Omit<StatePage, "id" | "created_at" | "updated_at">
  ) => Promise<StatePage>;
  update: (
    state: string,
    updates: Partial<StatePage>
  ) => Promise<StatePage | null>;
}

class StatePageRepositoryImpl implements StatePageRepository {
  private tableName = "state_pages";

  async findAll(): Promise<StatePage[]> {
    const result = await query<StatePage>(
      `SELECT * FROM ${this.tableName} ORDER BY state ASC`
    );
    return result.rows;
  }

  async findById(id: string): Promise<StatePage | null> {
    const result = await query<StatePage>(
      `SELECT * FROM ${this.tableName} WHERE id = $1`,
      [id]
    );
    return result.rows[0] ?? null;
  }

  async findByState(state: string): Promise<StatePage | null> {
    const result = await query<StatePage>(
      `SELECT * FROM ${this.tableName} WHERE state = $1`,
      [state]
    );
    return result.rows[0] ?? null;
  }

  async upsert(
    page: Omit<StatePage, "id" | "created_at" | "updated_at">
  ): Promise<StatePage> {
    const result = await query<StatePage>(
      `INSERT INTO ${this.tableName}
       (state, incentives_content, charging_infrastructure_summary,
        featured_models_for_state, seo_title, seo_meta_description)
       VALUES ($1, $2, $3, $4, $5, $6)
       ON CONFLICT (state)
       DO UPDATE SET
         incentives_content = $2,
         charging_infrastructure_summary = $3,
         featured_models_for_state = $4,
         seo_title = $5,
         seo_meta_description = $6,
         updated_at = CURRENT_TIMESTAMP
       RETURNING *`,
      [
        page.state,
        page.incentives_content,
        page.charging_infrastructure_summary,
        page.featured_models_for_state,
        page.seo_title,
        page.seo_meta_description,
      ]
    );
    return result.rows[0];
  }

  async update(
    state: string,
    updates: Partial<StatePage>
  ): Promise<StatePage | null> {
    const setClauses: string[] = [];
    const params: unknown[] = [];
    let paramIndex = 1;

    const allowedFields: (keyof StatePage)[] = [
      "incentives_content",
      "charging_infrastructure_summary",
      "featured_models_for_state",
      "seo_title",
      "seo_meta_description",
    ];

    for (const field of allowedFields) {
      if (updates[field] !== undefined) {
        setClauses.push(`${field} = $${paramIndex++}`);
        params.push(updates[field]);
      }
    }

    if (setClauses.length === 0) return this.findByState(state);

    params.push(state);

    const result = await query<StatePage>(
      `UPDATE ${this.tableName}
       SET ${setClauses.join(", ")}
       WHERE state = $${paramIndex}
       RETURNING *`,
      params
    );
    return result.rows[0] ?? null;
  }
}

export const statePageRepository = new StatePageRepositoryImpl();
