export type UUIDString = string;

export type EvBodyType =
  | "sedan"
  | "suv"
  | "coupe"
  | "wagon"
  | "hatchback"
  | "convertible"
  | "ute"
  | "van"
  | "pickup"
  | "mpv";

export type AvailabilityStatus = "available" | "coming_soon" | "discontinued";

export type PricingAvailability = "in_stock" | "preorder" | "unavailable";

export type PricingSource = "official" | "dealer" | "aggregated";

export type FactualCheckStatus = "pending" | "verified" | "incorrect";

export type BlogCategory = "guide" | "news" | "educational" | "comparison";

export type CalculatorType =
  | "charging_time"
  | "cost_ownership"
  | "emissions"
  | "range"
  | "home_charging"
  | "solar_charging";

export interface EvModel {
  id: UUIDString;
  brand: string;
  model: string;
  year: number;
  generation: string | null;
  body_type: EvBodyType;
  seats: number;
  boot_space_liters: number | null;
  length_mm: number | null;
  width_mm: number | null;
  height_mm: number | null;
  weight_kg: number | null;
  battery_capacity_kwh: number | null;
  battery_type: string | null;
  battery_warranty_years: number | null;
  acceleration_0_100_seconds: number | null;
  top_speed_kmh: number | null;
  efficiency_kwh_per_100km: number | null;
  epa_range_km: number | null;
  real_world_range_km: number | null;
  home_charging_speeds: string[];
  dc_fast_charging_speeds: string[];
  charging_connector_types: string[];
  msrp_aud: number | null;
  availability_status: AvailabilityStatus;
  availability_by_state: Record<string, boolean>;
  features: string[];
  is_published: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface EvPricing {
  id: UUIDString;
  model_id: UUIDString;
  region: string;
  price_aud: number;
  availability: PricingAvailability;
  source: PricingSource;
  last_updated: Date;
  created_at: Date;
}

export interface EvReview {
  id: UUIDString;
  model_id: UUIDString;
  author: string;
  email: string | null;
  rating: number;
  title: string | null;
  content: string;
  verified_purchase: boolean;
  factual_check_status: FactualCheckStatus;
  factual_check_notes: string | null;
  helpful_count: number;
  is_published: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface ChargingStation {
  id: UUIDString;
  external_id: string | null;
  name: string;
  address: string;
  suburb: string;
  state: string;
  postcode: string;
  latitude: number;
  longitude: number;
  network: string | null;
  connector_types: string[];
  power_output_kw: number[];
  pricing_info: Record<string, unknown>;
  hours_available: Record<string, unknown>;
  is_active: boolean;
  last_updated: Date;
  created_at: Date;
}

export interface BlogPost {
  id: UUIDString;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  category: BlogCategory;
  author: string;
  featured_image_url: string | null;
  meta_description: string | null;
  keywords: string[];
  published_date: Date | null;
  updated_date: Date | null;
  is_published: boolean;
  schema_markup: Record<string, unknown>;
  created_at: Date;
}

export interface CalculatorData {
  id: UUIDString;
  calculator_type: CalculatorType;
  model_id: UUIDString | null;
  formula_config: Record<string, unknown>;
  australian_variables: Record<string, unknown>;
  last_updated: Date;
  created_at: Date;
}

export interface AuMarketVariable {
  id: UUIDString;
  state: string;
  electricity_rate_per_kwh: number;
  grid_carbon_intensity_grams_per_kwh: number;
  solar_irradiance_kwhm2_per_day: number | null;
  average_electrician_rate_per_hour: number | null;
  vehicle_registration_cost_annual: number | null;
  ctp_insurance_base: number | null;
  effective_date: Date;
  notes: string | null;
  created_at: Date;
  updated_at: Date;
}

export interface StatePage {
  id: UUIDString;
  state: string;
  incentives_content: string | null;
  charging_infrastructure_summary: string | null;
  featured_models_for_state: string[];
  seo_title: string | null;
  seo_meta_description: string | null;
  created_at: Date;
  updated_at: Date;
}

export interface SchemaMigration {
  id: number;
  migration_name: string;
  applied_at: Date;
}

export type ChargingSpeed = {
  power: number;
  type: "ac" | "dc";
  connectorType: string;
};

export type ChargingNetwork = {
  name: string;
  stations: number;
  connectorTypes: string[];
};

export type AustralianState =
  | "NSW"
  | "VIC"
  | "QLD"
  | "SA"
  | "WA"
  | "TAS"
  | "ACT"
  | "NT";
