import { query } from "../index";
import type { EvReview } from "../types";

export interface ReviewFilters {
  modelId?: string;
  rating?: number;
  isPublished?: boolean;
  verifiedPurchase?: boolean;
  factualCheckStatus?: "pending" | "verified" | "incorrect";
}

export interface EvReviewRepository {
  findAll: (filters?: ReviewFilters, limit?: number) => Promise<EvReview[]>;
  findById: (id: string) => Promise<EvReview | null>;
  findByModelId: (modelId: string) => Promise<EvReview[]>;
  findPublishedByModelId: (modelId: string) => Promise<EvReview[]>;
  findAverageRating: (
    modelId: string
  ) => Promise<{ average: number; count: number } | null>;
  create: (
    review: Omit<EvReview, "id" | "created_at" | "updated_at" | "helpful_count">
  ) => Promise<EvReview>;
  update: (id: string, updates: Partial<EvReview>) => Promise<EvReview | null>;
  incrementHelpful: (id: string) => Promise<void>;
}

class EvReviewRepositoryImpl implements EvReviewRepository {
  private tableName = "ev_reviews";

  async findAll(filters?: ReviewFilters, limit = 50): Promise<EvReview[]> {
    const conditions: string[] = ["1=1"];
    const params: unknown[] = [];
    let paramIndex = 1;

    if (filters) {
      if (filters.modelId) {
        conditions.push(`model_id = $${paramIndex++}`);
        params.push(filters.modelId);
      }
      if (filters.rating) {
        conditions.push(`rating = $${paramIndex++}`);
        params.push(filters.rating);
      }
      if (filters.isPublished !== undefined) {
        conditions.push(`is_published = $${paramIndex++}`);
        params.push(filters.isPublished);
      }
      if (filters.verifiedPurchase !== undefined) {
        conditions.push(`verified_purchase = $${paramIndex++}`);
        params.push(filters.verifiedPurchase);
      }
      if (filters.factualCheckStatus) {
        conditions.push(`factual_check_status = $${paramIndex++}`);
        params.push(filters.factualCheckStatus);
      }
    }

    const whereClause = conditions.join(" AND ");

    const result = await query<EvReview>(
      `SELECT * FROM ${this.tableName}
       WHERE ${whereClause}
       ORDER BY created_at DESC
       LIMIT $${paramIndex}`,
      [...params, limit]
    );

    return result.rows;
  }

  async findById(id: string): Promise<EvReview | null> {
    const result = await query<EvReview>(
      `SELECT * FROM ${this.tableName} WHERE id = $1`,
      [id]
    );
    return result.rows[0] ?? null;
  }

  async findByModelId(modelId: string): Promise<EvReview[]> {
    const result = await query<EvReview>(
      `SELECT * FROM ${this.tableName}
       WHERE model_id = $1
       ORDER BY created_at DESC`,
      [modelId]
    );
    return result.rows;
  }

  async findPublishedByModelId(modelId: string): Promise<EvReview[]> {
    const result = await query<EvReview>(
      `SELECT * FROM ${this.tableName}
       WHERE model_id = $1 AND is_published = true
       ORDER BY created_at DESC`,
      [modelId]
    );
    return result.rows;
  }

  async findAverageRating(
    modelId: string
  ): Promise<{ average: number; count: number } | null> {
    const result = await query<{ average: string; count: string }>(
      `SELECT AVG(rating)::NUMERIC(10,2) as average, COUNT(*) as count
       FROM ${this.tableName}
       WHERE model_id = $1 AND is_published = true`,
      [modelId]
    );

    const row = result.rows[0];
    if (!row || !row.average) return null;

    return {
      average: parseFloat(row.average),
      count: parseInt(row.count, 10),
    };
  }

  async create(
    review: Omit<EvReview, "id" | "created_at" | "updated_at" | "helpful_count">
  ): Promise<EvReview> {
    const result = await query<EvReview>(
      `INSERT INTO ${this.tableName}
       (model_id, author, email, rating, title, content, verified_purchase,
        factual_check_status, factual_check_notes, is_published)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
       RETURNING *`,
      [
        review.model_id,
        review.author,
        review.email,
        review.rating,
        review.title,
        review.content,
        review.verified_purchase,
        review.factual_check_status,
        review.factual_check_notes,
        review.is_published,
      ]
    );
    return result.rows[0];
  }

  async update(id: string, updates: Partial<EvReview>): Promise<EvReview | null> {
    const setClauses: string[] = [];
    const params: unknown[] = [];
    let paramIndex = 1;

    const allowedFields: (keyof EvReview)[] = [
      "author",
      "email",
      "rating",
      "title",
      "content",
      "verified_purchase",
      "factual_check_status",
      "factual_check_notes",
      "helpful_count",
      "is_published",
    ];

    for (const field of allowedFields) {
      if (updates[field] !== undefined) {
        setClauses.push(`${field} = $${paramIndex++}`);
        params.push(updates[field]);
      }
    }

    if (setClauses.length === 0) return this.findById(id);

    params.push(id);

    const result = await query<EvReview>(
      `UPDATE ${this.tableName}
       SET ${setClauses.join(", ")}
       WHERE id = $${paramIndex}
       RETURNING *`,
      params
    );
    return result.rows[0] ?? null;
  }

  async incrementHelpful(id: string): Promise<void> {
    await query(
      `UPDATE ${this.tableName}
       SET helpful_count = helpful_count + 1
       WHERE id = $1`,
      [id]
    );
  }
}

export const evReviewRepository = new EvReviewRepositoryImpl();
