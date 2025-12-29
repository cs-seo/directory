import { query } from "./connection";
import type { BlogPost, BlogCategory } from "./types";

export interface BlogPostFilters {
  category?: BlogCategory;
  isPublished?: boolean;
  author?: string;
}

export interface BlogPostRepository {
  findAll: (filters?: BlogPostFilters, limit?: number) => Promise<BlogPost[]>;
  findById: (id: string) => Promise<BlogPost | null>;
  findBySlug: (slug: string) => Promise<BlogPost | null>;
  findPublished: (limit?: number) => Promise<BlogPost[]>;
  findByCategory: (
    category: BlogCategory,
    limit?: number
  ) => Promise<BlogPost[]>;
  findRecent: (limit?: number) => Promise<BlogPost[]>;
  search: (searchQuery: string) => Promise<BlogPost[]>;
  create: (post: Omit<BlogPost, "id" | "created_at">) => Promise<BlogPost>;
  update: (id: string, updates: Partial<BlogPost>) => Promise<BlogPost | null>;
  delete: (id: string) => Promise<boolean>;
}

class BlogPostRepositoryImpl implements BlogPostRepository {
  private tableName = "blog_posts";

  async findAll(filters?: BlogPostFilters, limit = 50): Promise<BlogPost[]> {
    const conditions: string[] = ["1=1"];
    const params: unknown[] = [];
    let paramIndex = 1;

    if (filters) {
      if (filters.category) {
        conditions.push(`category = $${paramIndex++}`);
        params.push(filters.category);
      }
      if (filters.isPublished !== undefined) {
        conditions.push(`is_published = $${paramIndex++}`);
        params.push(filters.isPublished);
      }
      if (filters.author) {
        conditions.push(`author ILIKE $${paramIndex++}`);
        params.push(`%${filters.author}%`);
      }
    }

    const whereClause = conditions.join(" AND ");

    const result = await query<BlogPost>(
      `SELECT * FROM ${this.tableName}
       WHERE ${whereClause}
       ORDER BY published_date DESC NULLS LAST
       LIMIT $${paramIndex}`,
      [...params, limit]
    );

    return result.rows;
  }

  async findById(id: string): Promise<BlogPost | null> {
    const result = await query<BlogPost>(
      `SELECT * FROM ${this.tableName} WHERE id = $1`,
      [id]
    );
    return result.rows[0] ?? null;
  }

  async findBySlug(slug: string): Promise<BlogPost | null> {
    const result = await query<BlogPost>(
      `SELECT * FROM ${this.tableName} WHERE slug = $1`,
      [slug]
    );
    return result.rows[0] ?? null;
  }

  async findPublished(limit = 20): Promise<BlogPost[]> {
    const result = await query<BlogPost>(
      `SELECT * FROM ${this.tableName}
       WHERE is_published = true AND published_date IS NOT NULL
       ORDER BY published_date DESC
       LIMIT $1`,
      [limit]
    );
    return result.rows;
  }

  async findByCategory(
    category: BlogCategory,
    limit = 20
  ): Promise<BlogPost[]> {
    const result = await query<BlogPost>(
      `SELECT * FROM ${this.tableName}
       WHERE category = $1 AND is_published = true AND published_date IS NOT NULL
       ORDER BY published_date DESC
       LIMIT $2`,
      [category, limit]
    );
    return result.rows;
  }

  async findRecent(limit = 10): Promise<BlogPost[]> {
    return this.findPublished(limit);
  }

  async search(searchQuery: string): Promise<BlogPost[]> {
    const result = await query<BlogPost>(
      `SELECT * FROM ${this.tableName}
       WHERE is_published = true
       AND (
         title ILIKE $1
         OR content ILIKE $1
         OR excerpt ILIKE $1
         OR keywords::text ILIKE $1
       )
       ORDER BY published_date DESC NULLS LAST
       LIMIT 20`,
      [`%${searchQuery}%`]
    );
    return result.rows;
  }

  async create(post: Omit<BlogPost, "id" | "created_at">): Promise<BlogPost> {
    const result = await query<BlogPost>(
      `INSERT INTO ${this.tableName}
       (title, slug, content, excerpt, category, author, featured_image_url,
        meta_description, keywords, published_date, updated_date, is_published, schema_markup)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
       RETURNING *`,
      [
        post.title,
        post.slug,
        post.content,
        post.excerpt,
        post.category,
        post.author,
        post.featured_image_url,
        post.meta_description,
        post.keywords,
        post.published_date,
        post.updated_date,
        post.is_published,
        post.schema_markup,
      ]
    );
    return result.rows[0];
  }

  async update(
    id: string,
    updates: Partial<BlogPost>
  ): Promise<BlogPost | null> {
    const setClauses: string[] = [];
    const params: unknown[] = [];
    let paramIndex = 1;

    const allowedFields: (keyof BlogPost)[] = [
      "title",
      "slug",
      "content",
      "excerpt",
      "category",
      "author",
      "featured_image_url",
      "meta_description",
      "keywords",
      "published_date",
      "updated_date",
      "is_published",
      "schema_markup",
    ];

    for (const field of allowedFields) {
      if (updates[field] !== undefined) {
        setClauses.push(`${field} = $${paramIndex++}`);
        params.push(updates[field]);
      }
    }

    if (setClauses.length === 0) return this.findById(id);

    params.push(id);

    const result = await query<BlogPost>(
      `UPDATE ${this.tableName}
       SET ${setClauses.join(", ")}
       WHERE id = $${paramIndex}
       RETURNING *`,
      params
    );
    return result.rows[0] ?? null;
  }

  async delete(id: string): Promise<boolean> {
    const result = await query(`DELETE FROM ${this.tableName} WHERE id = $1`, [
      id,
    ]);
    return (result.rowCount ?? 0) > 0;
  }
}

export const blogPostRepository = new BlogPostRepositoryImpl();
