-- PostgreSQL Database Schema for evaustralia.com.au
-- Migration: 001_create_schema
-- This file creates all tables required for the complete EV Australia feature set

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- ENUM TYPES
-- ============================================

-- EV Body Types
CREATE TYPE ev_body_type AS ENUM (
  'sedan',
  'suv',
  'coupe',
  'wagon',
  'hatchback',
  'convertible',
  'ute',
  'van',
  'pickup',
  'mpv'
);

-- Availability Status
CREATE TYPE availability_status AS ENUM (
  'available',
  'coming_soon',
  'discontinued'
);

-- Pricing Availability
CREATE TYPE pricing_availability AS ENUM (
  'in_stock',
  'preorder',
  'unavailable'
);

-- Pricing Source
CREATE TYPE pricing_source AS ENUM (
  'official',
  'dealer',
  'aggregated'
);

-- Review Factual Check Status
CREATE TYPE factual_check_status AS ENUM (
  'pending',
  'verified',
  'incorrect'
);

-- Blog Post Category
CREATE TYPE blog_category AS ENUM (
  'guide',
  'news',
  'educational',
  'comparison'
);

-- Calculator Type
CREATE TYPE calculator_type AS ENUM (
  'charging_time',
  'cost_ownership',
  'emissions',
  'range',
  'home_charging',
  'solar_charging'
);

-- ============================================
-- TABLE: ev_models
-- ============================================

CREATE TABLE ev_models (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  brand VARCHAR(100) NOT NULL,
  model VARCHAR(200) NOT NULL,
  year INTEGER NOT NULL,
  generation VARCHAR(50),
  body_type ev_body_type NOT NULL,
  seats INTEGER NOT NULL CHECK (seats > 0 AND seats <= 15),
  boot_space_liters INTEGER,
  length_mm INTEGER,
  width_mm INTEGER,
  height_mm INTEGER,
  weight_kg INTEGER,
  battery_capacity_kwh DECIMAL(5, 2),
  battery_type VARCHAR(50),
  battery_warranty_years INTEGER,
  acceleration_0_100_seconds DECIMAL(4, 2),
  top_speed_kmh INTEGER,
  efficiency_kwh_per_100km DECIMAL(4, 2),
  epa_range_km INTEGER,
  real_world_range_km INTEGER,
  home_charging_speeds JSONB DEFAULT '[]'::jsonb,
  dc_fast_charging_speeds JSONB DEFAULT '[]'::jsonb,
  charging_connector_types JSONB DEFAULT '[]'::jsonb,
  msrp_aud INTEGER,
  availability_status availability_status DEFAULT 'available',
  availability_by_state JSONB DEFAULT '{}'::jsonb,
  features JSONB DEFAULT '[]'::jsonb,
  is_published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for ev_models
CREATE INDEX idx_ev_models_brand ON ev_models(brand);
CREATE INDEX idx_ev_models_brand_model ON ev_models(brand, model);
CREATE INDEX idx_ev_models_body_type ON ev_models(body_type);
CREATE INDEX idx_ev_models_year ON ev_models(year);
CREATE INDEX idx_ev_models_is_published ON ev_models(is_published);
CREATE INDEX idx_ev_models_availability_status ON ev_models(availability_status);

-- ============================================
-- TABLE: ev_pricing
-- ============================================

CREATE TABLE ev_pricing (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  model_id UUID NOT NULL REFERENCES ev_models(id) ON DELETE CASCADE,
  region VARCHAR(100) NOT NULL,
  price_aud INTEGER NOT NULL CHECK (price_aud >= 0),
  availability pricing_availability NOT NULL DEFAULT 'in_stock',
  source pricing_source NOT NULL DEFAULT 'official',
  last_updated TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for ev_pricing
CREATE INDEX idx_ev_pricing_model_id ON ev_pricing(model_id);
CREATE INDEX idx_ev_pricing_region ON ev_pricing(region);
CREATE INDEX idx_ev_pricing_source ON ev_pricing(source);

-- ============================================
-- TABLE: ev_reviews
-- ============================================

CREATE TABLE ev_reviews (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  model_id UUID NOT NULL REFERENCES ev_models(id) ON DELETE CASCADE,
  author VARCHAR(200) NOT NULL,
  email VARCHAR(255),
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  title VARCHAR(300),
  content TEXT NOT NULL,
  verified_purchase BOOLEAN DEFAULT false,
  factual_check_status factual_check_status DEFAULT 'pending',
  factual_check_notes TEXT,
  helpful_count INTEGER DEFAULT 0,
  is_published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for ev_reviews
CREATE INDEX idx_ev_reviews_model_id ON ev_reviews(model_id);
CREATE INDEX idx_ev_reviews_is_published ON ev_reviews(is_published);
CREATE INDEX idx_ev_reviews_rating ON ev_reviews(rating);
CREATE INDEX idx_ev_reviews_created_at ON ev_reviews(created_at);

-- ============================================
-- TABLE: charging_stations
-- ============================================

CREATE TABLE charging_stations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  external_id VARCHAR(100),
  name VARCHAR(255) NOT NULL,
  address VARCHAR(500) NOT NULL,
  suburb VARCHAR(100) NOT NULL,
  state VARCHAR(3) NOT NULL,
  postcode VARCHAR(4) NOT NULL,
  latitude DECIMAL(10, 8) NOT NULL,
  longitude DECIMAL(11, 8) NOT NULL,
  network VARCHAR(100),
  connector_types JSONB DEFAULT '[]'::jsonb,
  power_output_kw JSONB DEFAULT '[]'::jsonb,
  pricing_info JSONB DEFAULT '{}'::jsonb,
  hours_available JSONB DEFAULT '{}'::jsonb,
  is_active BOOLEAN DEFAULT true,
  last_updated TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for charging_stations
CREATE INDEX idx_charging_stations_state ON charging_stations(state);
CREATE INDEX idx_charging_stations_suburb ON charging_stations(suburb);
CREATE INDEX idx_charging_stations_network ON charging_stations(network);
CREATE INDEX idx_charging_stations_is_active ON charging_stations(is_active);
CREATE INDEX idx_charging_stations_location ON charging_stations(latitude, longitude);
CREATE INDEX idx_charging_stations_external_id ON charging_stations(external_id);

-- ============================================
-- TABLE: blog_posts
-- ============================================

CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(300) NOT NULL,
  slug VARCHAR(300) NOT NULL UNIQUE,
  content TEXT NOT NULL,
  excerpt VARCHAR(500),
  category blog_category NOT NULL,
  author VARCHAR(200) NOT NULL,
  featured_image_url VARCHAR(500),
  meta_description VARCHAR(160),
  keywords JSONB DEFAULT '[]'::jsonb,
  published_date TIMESTAMP WITH TIME ZONE,
  updated_date TIMESTAMP WITH TIME ZONE,
  is_published BOOLEAN DEFAULT false,
  schema_markup JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for blog_posts
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_blog_posts_category ON blog_posts(category);
CREATE INDEX idx_blog_posts_is_published ON blog_posts(is_published);
CREATE INDEX idx_blog_posts_published_date ON blog_posts(published_date);
CREATE INDEX idx_blog_posts_author ON blog_posts(author);

-- ============================================
-- TABLE: calculator_data
-- ============================================

CREATE TABLE calculator_data (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  calculator_type calculator_type NOT NULL,
  model_id UUID REFERENCES ev_models(id) ON DELETE SET NULL,
  formula_config JSONB DEFAULT '{}'::jsonb,
  australian_variables JSONB DEFAULT '{}'::jsonb,
  last_updated TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for calculator_data
CREATE INDEX idx_calculator_data_type ON calculator_data(calculator_type);
CREATE INDEX idx_calculator_data_model_id ON calculator_data(model_id);

-- ============================================
-- TABLE: au_market_variables
-- ============================================

CREATE TABLE au_market_variables (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  state VARCHAR(10) NOT NULL,
  electricity_rate_per_kwh DECIMAL(6, 4) NOT NULL,
  grid_carbon_intensity_grams_per_kwh DECIMAL(8, 2) NOT NULL,
  solar_irradiance_kwhm2_per_day DECIMAL(5, 2),
  average_electrician_rate_per_hour DECIMAL(7, 2),
  vehicle_registration_cost_annual INTEGER,
  ctp_insurance_base INTEGER,
  effective_date DATE NOT NULL,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for au_market_variables
CREATE INDEX idx_au_market_variables_state ON au_market_variables(state);
CREATE INDEX idx_au_market_variables_effective_date ON au_market_variables(effective_date);

-- ============================================
-- TABLE: state_pages
-- ============================================

CREATE TABLE state_pages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  state VARCHAR(3) NOT NULL UNIQUE,
  incentives_content TEXT,
  charging_infrastructure_summary TEXT,
  featured_models_for_state JSONB DEFAULT '[]'::jsonb,
  seo_title VARCHAR(300),
  seo_meta_description VARCHAR(160),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for state_pages
CREATE INDEX idx_state_pages_state ON state_pages(state);

-- ============================================
-- UPDATED_AT TRIGGER FUNCTION
-- ============================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply updated_at trigger to all relevant tables
CREATE TRIGGER update_ev_models_updated_at
  BEFORE UPDATE ON ev_models
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_ev_pricing_updated_at
  BEFORE UPDATE ON ev_pricing
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_ev_reviews_updated_at
  BEFORE UPDATE ON ev_reviews
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_charging_stations_updated_at
  BEFORE UPDATE ON charging_stations
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_calculator_data_updated_at
  BEFORE UPDATE ON calculator_data
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_au_market_variables_updated_at
  BEFORE UPDATE ON au_market_variables
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_state_pages_updated_at
  BEFORE UPDATE ON state_pages
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- MIGRATION LOG TABLE
-- ============================================

CREATE TABLE schema_migrations (
  id SERIAL PRIMARY KEY,
  migration_name VARCHAR(255) NOT NULL,
  applied_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Record this migration
INSERT INTO schema_migrations (migration_name) VALUES ('001_create_schema');

-- Comments for documentation
COMMENT ON TABLE ev_models IS 'Electric Vehicle models with full specifications';
COMMENT ON TABLE ev_pricing IS 'Regional pricing information for EV models';
COMMENT ON TABLE ev_reviews IS 'User and expert reviews for EV models';
COMMENT ON TABLE charging_stations IS 'Public charging station locations across Australia';
COMMENT ON TABLE blog_posts IS 'Blog articles and guides about EVs';
COMMENT ON TABLE calculator_data IS 'Configuration data for calculators (charging, cost, emissions, etc.)';
COMMENT ON TABLE au_market_variables IS 'Australian market variables (electricity rates, carbon intensity, etc.)';
COMMENT ON TABLE state_pages IS 'State-specific EV content and incentives';
