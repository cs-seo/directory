-- Seed Data for evaustralia.com.au
-- This file populates the database with sample data for development and testing

-- ============================================
-- SEED: EV Models (Popular Australian EVs)
-- ============================================

-- Tesla Model Y
INSERT INTO ev_models (
  brand, model, year, generation, body_type, seats,
  boot_space_liters, length_mm, width_mm, height_mm, weight_kg,
  battery_capacity_kwh, battery_type, battery_warranty_years,
  acceleration_0_100_seconds, top_speed_kmh, efficiency_kwh_per_100km,
  epa_range_km, real_world_range_km,
  home_charging_speeds, dc_fast_charging_speeds, charging_connector_types,
  msrp_aud, availability_status, availability_by_state, features, is_published
) VALUES (
  'Tesla', 'Model Y', 2024, 'Juniper', 'suv', 5,
  117, 4751, 1921, 1624, 1979,
  75, 'NCA', 8,
  5.0, 217, 14.6,
  455, 420,
  '["7.7kW", "11kW", "22kW"]'::jsonb,
  '["250kW", "350kW"]'::jsonb,
  '["Type 2", "CCS2"]'::jsonb,
  65900, 'available',
  '{"NSW": true, "VIC": true, "QLD": true, "SA": true, "WA": true, "TAS": true, "ACT": true}'::jsonb,
  '["Autopilot", "Fast Charging", "Battery Heating", "Sentry Mode", "Dog Mode", "OTA Updates"]'::jsonb,
  true
);

-- Tesla Model 3
INSERT INTO ev_models (
  brand, model, year, generation, body_type, seats,
  boot_space_liters, length_mm, width_mm, height_mm, weight_kg,
  battery_capacity_kwh, battery_type, battery_warranty_years,
  acceleration_0_100_seconds, top_speed_kmh, efficiency_kwh_per_100km,
  epa_range_km, real_world_range_km,
  home_charging_speeds, dc_fast_charging_speeds, charging_connector_types,
  msrp_aud, availability_status, availability_by_state, features, is_published
) VALUES (
  'Tesla', 'Model 3', 2024, 'Highland', 'sedan', 5,
  682, 4720, 1850, 1430, 1825,
  75, 'NCA', 8,
  4.4, 261, 13.1,
  513, 470,
  '["7.7kW", "11kW", "22kW"]'::jsonb,
  '["250kW", "350kW"]'::jsonb,
  '["Type 2", "CCS2"]'::jsonb,
  54900, 'available',
  '{"NSW": true, "VIC": true, "QLD": true, "SA": true, "WA": true, "TAS": true, "ACT": true}'::jsonb,
  '["Autopilot", "Fast Charging", "Premium Audio", "Glass Roof", "OTA Updates"]'::jsonb,
  true
);

-- BYD Atto 3
INSERT INTO ev_models (
  brand, model, year, generation, body_type, seats,
  boot_space_liters, length_mm, width_mm, height_mm, weight_kg,
  battery_capacity_kwh, battery_type, battery_warranty_years,
  acceleration_0_100_seconds, top_speed_kmh, efficiency_kwh_per_100km,
  epa_range_km, real_world_range_km,
  home_charging_speeds, dc_fast_charging_speeds, charging_connector_types,
  msrp_aud, availability_status, availability_by_state, features, is_published
) VALUES (
  'BYD', 'Atto 3', 2024, 'Series 2', 'suv', 5,
  440, 4455, 1875, 1615, 1750,
  60.48, 'LFP', 6,
  7.3, 160, 14.4,
  420, 390,
  '["7kW", "11kW"]'::jsonb,
  '["80kW", "150kW"]'::jsonb,
  '["Type 2", "CCS2"]'::jsonb,
  39990, 'available',
  '{"NSW": true, "VIC": true, "QLD": true, "SA": true, "WA": true, "TAS": true, "ACT": true}'::jsonb,
  '["Rotating Screen", "Vehicle-to-Load", "LFP Battery", "360 Camera"]'::jsonb,
  true
);

-- MG MG4
INSERT INTO ev_models (
  brand, model, year, generation, body_type, seats,
  boot_space_liters, length_mm, width_mm, height_mm, weight_kg,
  battery_capacity_kwh, battery_type, battery_warranty_years,
  acceleration_0_100_seconds, top_speed_kmh, efficiency_kwh_per_100km,
  epa_range_km, real_world_range_km,
  home_charging_speeds, dc_fast_charging_speeds, charging_connector_types,
  msrp_aud, availability_status, availability_by_state, features, is_published
) VALUES (
  'MG', 'MG4', 2024, 'Second Generation', 'hatchback', 5,
  363, 4287, 1836, 1504, 1645,
  51, 'LFP', 7,
  7.7, 160, 13.0,
  350, 320,
  '["7kW", "11kW"]'::jsonb,
  '["50kW", "100kW", "150kW"]'::jsonb,
  '["Type 2", "CCS2"]'::jsonb,
  35990, 'available',
  '{"NSW": true, "VIC": true, "QLD": true, "SA": true, "WA": true, "TAS": true, "ACT": true}'::jsonb,
  '["LFP Battery", "iSMART Connect", "MG Pilot", "V2L Capable"]'::jsonb,
  true
);

-- Polestar 2
INSERT INTO ev_models (
  brand, model, year, generation, body_type, seats,
  boot_space_liters, length_mm, width_mm, height_mm, weight_kg,
  battery_capacity_kwh, battery_type, battery_warranty_years,
  acceleration_0_100_seconds, top_speed_kmh, efficiency_kwh_per_100km,
  epa_range_km, real_world_range_km,
  home_charging_speeds, dc_fast_charging_speeds, charging_connector_types,
  msrp_aud, availability_status, availability_by_state, features, is_published
) VALUES (
  'Polestar', '2', 2024, 'BST', 'hatchback', 5,
  405, 4606, 1859, 1482, 2100,
  82, 'NMC', 8,
  4.5, 205, 15.9,
  515, 470,
  '["11kW", "22kW"]'::jsonb,
  '["150kW", "205kW"]'::jsonb,
  '["Type 2", "CCS2"]'::jsonb,
  72900, 'available',
  '{"NSW": true, "VIC": true, "QLD": true, "SA": true, "ACT": true}'::jsonb,
  '["Google Built-in", "Performance Pack", "Brembo Brakes", "Ohlins Suspension"]'::jsonb,
  true
);

-- Hyundai Ioniq 5
INSERT INTO ev_models (
  brand, model, year, generation, body_type, seats,
  boot_space_liters, length_mm, width_mm, height_mm, weight_kg,
  battery_capacity_kwh, battery_type, battery_warranty_years,
  acceleration_0_100_seconds, top_speed_kmh, efficiency_kwh_per_100km,
  epa_range_km, real_world_range_km,
  home_charging_speeds, dc_fast_charging_speeds, charging_connector_types,
  msrp_aud, availability_status, availability_by_state, features, is_published
) VALUES (
  'Hyundai', 'Ioniq 5', 2024, 'VA', 'suv', 5,
  527, 4635, 1890, 1605, 1985,
  77.4, 'NMC', 8,
  5.1, 185, 15.1,
  488, 450,
  '["7kW", "11kW"]'::jsonb,
  '["50kW", "220kW", "350kW"]'::jsonb,
  '["Type 2", "CCS2"]'::jsonb,
  71900, 'available',
  '{"NSW": true, "VIC": true, "QLD": true, "SA": true, "WA": true, "ACT": true}'::jsonb,
  '["800V Architecture", "V2L", "Premium Relaxation Seat", "Bose Audio"]'::jsonb,
  true
);

-- Hyundai Ioniq 6
INSERT INTO ev_models (
  brand, model, year, generation, body_type, seats,
  boot_space_liters, length_mm, width_mm, height_mm, weight_kg,
  battery_capacity_kwh, battery_type, battery_warranty_years,
  acceleration_0_100_seconds, top_speed_kmh, efficiency_kwh_per_100km,
  epa_range_km, real_world_range_km,
  home_charging_speeds, dc_fast_charging_speeds, charging_connector_types,
  msrp_aud, availability_status, availability_by_state, features, is_published
) VALUES (
  'Hyundai', 'Ioniq 6', 2024, 'CE', 'sedan', 5,
  401, 4855, 1880, 1495, 1910,
  77.4, 'NMC', 8,
  5.1, 267, 13.9,
  574, 520,
  '["7kW", "11kW"]'::jsonb,
  '["50kW", "220kW", "350kW"]'::jsonb,
  '["Type 2", "CCS2"]'::jsonb,
  74900, 'available',
  '{"NSW": true, "VIC": true, "QLD": true, "SA": true, "ACT": true}'::jsonb,
  '["800V Architecture", "Aerodynamic Design", "V2L", "Digital Side Mirrors"]'::jsonb,
  true
);

-- Kia EV6
INSERT INTO ev_models (
  brand, model, year, generation, body_type, seats,
  boot_space_liters, length_mm, width_mm, height_mm, weight_kg,
  battery_capacity_kwh, battery_type, battery_warranty_years,
  acceleration_0_100_seconds, top_speed_kmh, efficiency_kwh_per_100km,
  epa_range_km, real_world_range_km,
  home_charging_speeds, dc_fast_charging_speeds, charging_connector_types,
  msrp_aud, availability_status, availability_by_state, features, is_published
) VALUES (
  'Kia', 'EV6', 2024, 'CV', 'suv', 5,
  490, 4680, 1880, 1550, 2050,
  77.4, 'NMC', 7,
  5.2, 260, 15.4,
  494, 455,
  '["7kW", "11kW"]'::jsonb,
  '["50kW", "220kW", "350kW"]'::jsonb,
  '["Type 2", "CCS2"]'::jsonb,
  72900, 'available',
  '{"NSW": true, "VIC": true, "QLD": true, "SA": true, "WA": true, "ACT": true}'::jsonb,
  '["800V Architecture", "V2L", "Meridian Audio", "Highway Driving Pilot"]'::jsonb,
  true
);

-- Kia EV5
INSERT INTO ev_models (
  brand, model, year, generation, body_type, seats,
  boot_space_liters, length_mm, width_mm, height_mm, weight_kg,
  battery_capacity_kwh, battery_type, battery_warranty_years,
  acceleration_0_100_seconds, top_speed_kmh, efficiency_kwh_per_100km,
  epa_range_km, real_world_range_km,
  home_charging_speeds, dc_fast_charging_speeds, charging_connector_types,
  msrp_aud, availability_status, availability_by_state, features, is_published
) VALUES (
  'Kia', 'EV5', 2025, 'SV', 'suv', 5,
  513, 4615, 1875, 1715, 2100,
  88, 'LFP', 7,
  6.1, 185, 15.2,
  510, 470,
  '["7kW", "11kW", "22kW"]'::jsonb,
  '["100kW", "220kW"]'::jsonb,
  '["Type 2", "CCS2"]'::jsonb,
  56990, 'coming_soon',
  '{"NSW": true, "VIC": true, "QLD": true, "ACT": true}'::jsonb,
  '["800V Architecture", "V2L", "LFP Battery", "Zero Stress Seats"]'::jsonb,
  true
);

-- Volvo EX30
INSERT INTO ev_models (
  brand, model, year, generation, body_type, seats,
  boot_space_liters, length_mm, width_mm, height_mm, weight_kg,
  battery_capacity_kwh, battery_type, battery_warranty_years,
  acceleration_0_100_seconds, top_speed_kmh, efficiency_kwh_per_100km,
  epa_range_km, real_world_range_km,
  home_charging_speeds, dc_fast_charging_speeds, charging_connector_types,
  msrp_aud, availability_status, availability_by_state, features, is_published
) VALUES (
  'Volvo', 'EX30', 2024, 'First Generation', 'suv', 5,
  318, 4233, 1836, 1550, 1650,
  69, 'LFP', 8,
  5.3, 180, 14.8,
  410, 375,
  '["7kW", "11kW", "22kW"]'::jsonb,
  '["50kW", "100kW", "150kW"]'::jsonb,
  '["Type 2", "CCS2"]'::jsonb,
  59900, 'available',
  '{"NSW": true, "VIC": true, "QLD": true, "SA": true, "ACT": true}'::jsonb,
  '["Google Built-in", "LFP Battery", "Pilot Assist", "Sustainable Materials"]'::jsonb,
  true
);

-- ============================================
-- SEED: EV Pricing (Regional)
-- ============================================

-- Tesla Model Y pricing by state/dealer
INSERT INTO ev_pricing (model_id, region, price_aud, availability, source, last_updated) VALUES
((SELECT id FROM ev_models WHERE brand = 'Tesla' AND model = 'Model Y' LIMIT 1), 'Tesla Australia Official', 65900, 'in_stock', 'official', CURRENT_TIMESTAMP),
((SELECT id FROM ev_models WHERE brand = 'Tesla' AND model = 'Model Y' LIMIT 1), 'Sydney NSW', 65900, 'in_stock', 'dealer', CURRENT_TIMESTAMP),
((SELECT id FROM ev_models WHERE brand = 'Tesla' AND model = 'Model Y' LIMIT 1), 'Melbourne VIC', 65900, 'in_stock', 'dealer', CURRENT_TIMESTAMP),
((SELECT id FROM ev_models WHERE brand = 'Tesla' AND model = 'Model Y' LIMIT 1), 'Brisbane QLD', 65900, 'in_stock', 'dealer', CURRENT_TIMESTAMP),
((SELECT id FROM ev_models WHERE brand = 'Tesla' AND model = 'Model Y' LIMIT 1), 'Perth WA', 65900, 'in_stock', 'dealer', CURRENT_TIMESTAMP),
((SELECT id FROM ev_models WHERE brand = 'Tesla' AND model = 'Model Y' LIMIT 1), 'Adelaide SA', 65900, 'in_stock', 'dealer', CURRENT_TIMESTAMP);

-- Tesla Model 3 pricing
INSERT INTO ev_pricing (model_id, region, price_aud, availability, source, last_updated) VALUES
((SELECT id FROM ev_models WHERE brand = 'Tesla' AND model = 'Model 3' LIMIT 1), 'Tesla Australia Official', 54900, 'in_stock', 'official', CURRENT_TIMESTAMP),
((SELECT id FROM ev_models WHERE brand = 'Tesla' AND model = 'Model 3' LIMIT 1), 'Sydney NSW', 54900, 'in_stock', 'dealer', CURRENT_TIMESTAMP),
((SELECT id FROM ev_models WHERE brand = 'Tesla' AND model = 'Model 3' LIMIT 1), 'Melbourne VIC', 54900, 'in_stock', 'dealer', CURRENT_TIMESTAMP),
((SELECT id FROM ev_models WHERE brand = 'Tesla' AND model = 'Model 3' LIMIT 1), 'Brisbane QLD', 54900, 'in_stock', 'dealer', CURRENT_TIMESTAMP);

-- BYD Atto 3 pricing
INSERT INTO ev_pricing (model_id, region, price_aud, availability, source, last_updated) VALUES
((SELECT id FROM ev_models WHERE brand = 'BYD' AND model = 'Atto 3' LIMIT 1), 'BYD Australia Official', 39990, 'in_stock', 'official', CURRENT_TIMESTAMP),
((SELECT id FROM ev_models WHERE brand = 'BYD' AND model = 'Atto 3' LIMIT 1), 'Sydney NSW', 39990, 'in_stock', 'dealer', CURRENT_TIMESTAMP),
((SELECT id FROM ev_models WHERE brand = 'BYD' AND model = 'Atto 3' LIMIT 1), 'Melbourne VIC', 40990, 'in_stock', 'dealer', CURRENT_TIMESTAMP),
((SELECT id FROM ev_models WHERE brand = 'BYD' AND model = 'Atto 3' LIMIT 1), 'Perth WA', 41990, 'in_stock', 'dealer', CURRENT_TIMESTAMP);

-- MG MG4 pricing
INSERT INTO ev_pricing (model_id, region, price_aud, availability, source, last_updated) VALUES
((SELECT id FROM ev_models WHERE brand = 'MG' AND model = 'MG4' LIMIT 1), 'MG Motor Australia Official', 35990, 'in_stock', 'official', CURRENT_TIMESTAMP),
((SELECT id FROM ev_models WHERE brand = 'MG' AND model = 'MG4' LIMIT 1), 'Sydney NSW', 35990, 'in_stock', 'dealer', CURRENT_TIMESTAMP),
((SELECT id FROM ev_models WHERE brand = 'MG' AND model = 'MG4' LIMIT 1), 'Melbourne VIC', 35990, 'in_stock', 'dealer', CURRENT_TIMESTAMP),
((SELECT id FROM ev_models WHERE brand = 'MG' AND model = 'MG4' LIMIT 1), 'Brisbane QLD', 36990, 'in_stock', 'dealer', CURRENT_TIMESTAMP);

-- Polestar 2 pricing
INSERT INTO ev_pricing (model_id, region, price_aud, availability, source, last_updated) VALUES
((SELECT id FROM ev_models WHERE brand = 'Polestar' AND model = '2' LIMIT 1), 'Polestar Australia Official', 72900, 'in_stock', 'official', CURRENT_TIMESTAMP),
((SELECT id FROM ev_models WHERE brand = 'Polestar' AND model = '2' LIMIT 1), 'Sydney NSW', 72900, 'in_stock', 'dealer', CURRENT_TIMESTAMP),
((SELECT id FROM ev_models WHERE brand = 'Polestar' AND model = '2' LIMIT 1), 'Melbourne VIC', 72900, 'in_stock', 'dealer', CURRENT_TIMESTAMP),
((SELECT id FROM ev_models WHERE brand = 'Polestar' AND model = '2' LIMIT 1), 'Brisbane QLD', 73900, 'in_stock', 'dealer', CURRENT_TIMESTAMP);

-- Hyundai Ioniq 5 pricing
INSERT INTO ev_pricing (model_id, region, price_aud, availability, source, last_updated) VALUES
((SELECT id FROM ev_models WHERE brand = 'Hyundai' AND model = 'Ioniq 5' LIMIT 1), 'Hyundai Australia Official', 71900, 'in_stock', 'official', CURRENT_TIMESTAMP),
((SELECT id FROM ev_models WHERE brand = 'Hyundai' AND model = 'Ioniq 5' LIMIT 1), 'Sydney NSW', 71900, 'in_stock', 'dealer', CURRENT_TIMESTAMP),
((SELECT id FROM ev_models WHERE brand = 'Hyundai' AND model = 'Ioniq 5' LIMIT 1), 'Melbourne VIC', 71900, 'in_stock', 'dealer', CURRENT_TIMESTAMP),
((SELECT id FROM ev_models WHERE brand = 'Hyundai' AND model = 'Ioniq 5' LIMIT 1), 'Brisbane QLD', 72900, 'in_stock', 'dealer', CURRENT_TIMESTAMP);

-- Kia EV6 pricing
INSERT INTO ev_pricing (model_id, region, price_aud, availability, source, last_updated) VALUES
((SELECT id FROM ev_models WHERE brand = 'Kia' AND model = 'EV6' LIMIT 1), 'Kia Australia Official', 72900, 'in_stock', 'official', CURRENT_TIMESTAMP),
((SELECT id FROM ev_models WHERE brand = 'Kia' AND model = 'EV6' LIMIT 1), 'Sydney NSW', 72900, 'in_stock', 'dealer', CURRENT_TIMESTAMP),
((SELECT id FROM ev_models WHERE brand = 'Kia' AND model = 'EV6' LIMIT 1), 'Melbourne VIC', 72900, 'in_stock', 'dealer', CURRENT_TIMESTAMP),
((SELECT id FROM ev_models WHERE brand = 'Kia' AND model = 'EV6' LIMIT 1), 'Brisbane QLD', 73900, 'in_stock', 'dealer', CURRENT_TIMESTAMP);

-- ============================================
-- SEED: EV Reviews
-- ============================================

INSERT INTO ev_reviews (
  model_id, author, email, rating, title, content,
  verified_purchase, factual_check_status, helpful_count, is_published
) VALUES
(
  (SELECT id FROM ev_models WHERE brand = 'Tesla' AND model = 'Model Y' LIMIT 1),
  'John Smith',
  'john.smith@email.com',
  5,
  'Best family EV in Australia',
  'We have owned our Model Y for 6 months and it has been fantastic. The range is real-world usable, charging network is excellent in Australia, and the software keeps getting better with updates. The boot space is enormous and the kids love the screen. Would highly recommend for families.',
  true,
  'verified',
  42,
  true
),
(
  (SELECT id FROM ev_models WHERE brand = 'Tesla' AND model = 'Model Y' LIMIT 1),
  'Sarah Johnson',
  'sarah.j@email.com',
  4,
  'Great car but suspension could be better',
  'Overall very happy with the Model Y. It is spacious, efficient, and the charging network makes long trips easy. My only complaint is the suspension can be a bit firm on rough roads. The regenerative braking takes some getting used to but I would not go back to a petrol car.',
  true,
  'verified',
  28,
  true
),
(
  (SELECT id FROM ev_models WHERE brand = 'BYD' AND model = 'Atto 3' LIMIT 1),
  'Mike Chen',
  'mike.chen@email.com',
  5,
  'Incredible value for money',
  'I was hesitant about buying a Chinese brand but the Atto 3 has exceeded my expectations. The build quality is excellent, the rotating screen is a neat party trick, and the range is more than enough for my 50km daily commute. LFP battery gives peace of mind for longevity.',
  true,
  'verified',
  35,
  true
),
(
  (SELECT id FROM ev_models WHERE brand = 'MG' AND model = 'MG4' LIMIT 1),
  'Emma Wilson',
  'emma.w@email.com',
  4,
  'Surprisingly capable hot hatch',
  'The MG4 is a fun little hatchback that happens to be electric. It handles well, has enough range for my needs, and the price is unbeatable. The charging could be faster for long trips but for city driving it is perfect.',
  true,
  'verified',
  19,
  true
),
(
  (SELECT id FROM ev_models WHERE brand = 'Hyundai' AND model = 'Ioniq 5' LIMIT 1),
  'David Park',
  'david.park@email.com',
  5,
  'Design and technology masterpiece',
  'The Ioniq 5 is simply stunning in person. The retro-futuristic design turns heads everywhere. The 800V architecture makes DC charging incredibly fast - I have gone from 10% to 80% in under 20 minutes. The interior is spacious and comfortable.',
  true,
  'verified',
  51,
  true
),
(
  (SELECT id FROM ev_models WHERE brand = 'Kia' AND model = 'EV6' LIMIT 1),
  'Lisa Anderson',
  'lisa.a@email.com',
  5,
  'Premium feel at a competitive price',
  'The EV6 feels like a much more expensive car. The build quality is excellent, the tech is intuitive, and the performance is exhilarating. The GT version is even better if you want straight-line speed. Highly recommend taking a test drive.',
  true,
  'verified',
  38,
  true
),
(
  (SELECT id FROM ev_models WHERE brand = 'Polestar' AND model = '2' LIMIT 1),
  'Robert Taylor',
  'robert.t@email.com',
  4,
  'Scandinavian minimalism done right',
  'If you want a minimalist EV without the flashiness of a Tesla, the Polestar 2 is excellent. The Google integration works perfectly, the build quality is Volvo-grade, and it drives beautifully. The range could be better in cold weather.',
  true,
  'verified',
  24,
  true
);

-- ============================================
-- SEED: Charging Stations (Sydney & Melbourne)
-- ============================================

INSERT INTO charging_stations (
  external_id, name, address, suburb, state, postcode,
  latitude, longitude, network, connector_types, power_output_kw,
  pricing_info, hours_available, is_active
) VALUES
-- Sydney Charging Stations
(
  'OCM-SYD-001',
  'Tesla Supercharger Sydney',
  '111-117 Herring Road',
  'North Ryde',
  'NSW',
  '2113',
  -33.7968,
  151.1245,
  'Tesla',
  '["Type 2", "CCS2"]'::jsonb,
  '["150kW", "250kW"]'::jsonb,
  '{"type": "per_kwh", "rate": 0.59, "currency": "AUD"}'::jsonb,
  '{"24_7": true}'::jsonb,
  true
),
(
  'OCM-SYD-002',
  'Chargefox Charging Hub',
  '2AV Darlington Road',
  'Sydney',
  'NSW',
  '2008',
  -33.8894,
  151.1961,
  'Chargefox',
  '["Type 2", "CCS2", "CHAdeMO"]'::jsonb,
  '["22kW", "50kW", "150kW"]'::jsonb,
  '{"type": "per_kwh", "rate": 0.45, "currency": "AUD", "membership_rate": 0.35}'::jsonb,
  '{"24_7": true}'::jsonb,
  true
),
(
  'OCM-SYD-003',
  'Jolt Charing Chatswood',
  '345 Victoria Avenue',
  'Chatswood',
  'NSW',
  '2067',
  -33.7958,
  151.1808,
  'Jolt',
  '["CCS2"]'::jsonb,
  '["150kW", "350kW"]'::jsonb,
  '{"type": "free_first_30min", "subsequent_rate": 0.35}'::jsonb,
  '{"24_7": true}'::jsonb,
  true
),
(
  'OCM-SYD-004',
  'Ampol Charge Woolloomooloo',
  '2-8 McLachlan Avenue',
  'Woolloomooloo',
  'NSW',
  '2011',
  -33.8722,
  151.2244,
  'Ampol',
  '["CCS2", "Type 2"]'::jsonb,
  '["50kW", "150kW"]'::jsonb,
  '{"type": "per_kwh", "rate": 0.55, "currency": "AUD"}'::jsonb,
  '{"24_7": true}'::jsonb,
  true
),
(
  'OCM-SYD-005',
  'EVie Charging Parramatta',
  '100 Marsden Street',
  'Parramatta',
  'NSW',
  '2150',
  -33.8170,
  151.0077,
  'EVie',
  '["Type 2", "CCS2"]'::jsonb,
  '["22kW", "50kW"]'::jsonb,
  '{"type": "per_kwh", "rate": 0.40, "currency": "AUD"}'::jsonb,
  '{"hours": {"start": "06:00", "end": "22:00"}}'::jsonb,
  true
),
(
  'OCM-SYD-006',
  'Tesla Supercharger Penrith',
  '123 Mulgoa Road',
  'Penrith',
  'NSW',
  '2750',
  -33.7540,
  150.6862,
  'Tesla',
  '["Type 2", "CCS2"]'::jsonb,
  '["250kW", "350kW"]'::jsonb,
  '{"type": "per_kwh", "rate": 0.59, "currency": "AUD"}'::jsonb,
  '{"24_7": true}'::jsonb,
  true
),
(
  'OCM-SYD-007',
  'NRMA Charging Alexandria',
  '49-59 O''Riordan Street',
  'Alexandria',
  'NSW',
  '2015',
  -33.9020,
  151.1942,
  'NRMA',
  '["CCS2", "CHAdeMO"]'::jsonb,
  '["50kW", "150kW"]'::jsonb,
  '{"type": "free", "membership_required": false}'::jsonb,
  '{"24_7": true}'::jsonb,
  true
),
(
  'OCM-SYD-008',
  'BP Pulse Alexandria',
  '52-68 O''Riordan Street',
  'Alexandria',
  'NSW',
  '2015',
  -33.9015,
  151.1930,
  'BP Pulse',
  '["CCS2"]'::jsonb,
  '["50kW", "150kW"]'::jsonb,
  '{"type": "per_kwh", "rate": 0.52, "currency": "AUD"}'::jsonb,
  '{"24_7": true}'::jsonb,
  true
),

-- Melbourne Charging Stations
(
  'OCM-MEL-001',
  'Tesla Supercharger Melbourne',
  '441-481 Victoria Street',
  'West Melbourne',
  'VIC',
  '3003',
  -37.8070,
  144.9520,
  'Tesla',
  '["Type 2", "CCS2"]'::jsonb,
  '["150kW", "250kW"]'::jsonb,
  '{"type": "per_kwh", "rate": 0.59, "currency": "AUD"}'::jsonb,
  '{"24_7": true}'::jsonb,
  true
),
(
  'OCM-MEL-002',
  'Chargefox Melbourne Central',
  'La Trobe Street',
  'Melbourne',
  'VIC',
  '3000',
  -37.8095,
  144.9640,
  'Chargefox',
  '["Type 2", "CCS2"]'::jsonb,
  '["22kW", "150kW"]'::jsonb,
  '{"type": "per_kwh", "rate": 0.45, "currency": "AUD", "membership_rate": 0.35}'::jsonb,
  '{"24_7": true}'::jsonb,
  true
),
(
  'OCM-MEL-003',
  'Jolt Charging South Yarra',
  '230 Toorak Road',
  'South Yarra',
  'VIC',
  '3141',
  -37.8380,
  145.0100,
  'Jolt',
  '["CCS2"]'::jsonb,
  '["150kW", "350kW"]'::jsonb,
  '{"type": "free_first_30min", "subsequent_rate": 0.35}'::jsonb,
  '{"24_7": true}'::jsonb,
  true
),
(
  'OCM-MEL-004',
  'Ampol Charge Richmond',
  '196 Swan Street',
  'Richmond',
  'VIC',
  '3121',
  -37.8230,
  145.0000,
  'Ampol',
  '["CCS2", "Type 2"]'::jsonb,
  '["50kW", "150kW"]'::jsonb,
  '{"type": "per_kwh", "rate": 0.55, "currency": "AUD"}'::jsonb,
  '{"24_7": true}'::jsonb,
  true
),
(
  'OCM-MEL-005',
  'EVie Charging Docklands',
  '50 Waterfront Way',
  'Docklands',
  'VIC',
  '3008',
  -37.8180,
  144.9350,
  'EVie',
  '["Type 2", "CCS2"]'::jsonb,
  '["22kW", "50kW"]'::jsonb,
  '{"type": "per_kwh", "rate": 0.40, "currency": "AUD"}'::jsonb,
  '{"hours": {"start": "06:00", "end": "22:00"}}'::jsonb,
  true
),
(
  'OCM-MEL-006',
  'Tesla Supercharger Dandenong',
  270 Stud Road',
  'Dandenong',
  'VIC',
  '3175',
  -37.9870,
  145.2150,
  'Tesla',
  '["Type 2", "CCS2"]'::jsonb,
  '["250kW", "350kW"]'::jsonb,
  '{"type": "per_kwh", "rate": 0.59, "currency": "AUD"}'::jsonb,
  '{"24_7": true}'::jsonb,
  true
),
(
  'OCM-MEL-007',
  'Chargefox Chadstone',
  '1341 Dandenong Road',
  'Chadstone',
  'VIC',
  '3148',
  -37.8850,
  145.0750,
  'Chargefox',
  '["Type 2", "CCS2"]'::jsonb,
  '["22kW", "150kW", "350kW"]'::jsonb,
  '{"type": "per_kwh", "rate": 0.45, "currency": "AUD", "membership_rate": 0.35}'::jsonb,
  '{"24_7": true}'::jsonb,
  true
),
(
  'OCM-MEL-008',
  'Shell Recharge Melbourne',
  '123 Kings Way',
  'South Melbourne',
  'VIC',
  '3205',
  -37.8370,
  144.9600,
  'Shell Recharge',
  '["CCS2"]'::jsonb,
  '["50kW", "150kW"]'::jsonb,
  '{"type": "per_kwh", "rate": 0.58, "currency": "AUD"}'::jsonb,
  '{"24_7": true}'::jsonb,
  true
),

-- Brisbane Charging Stations
(
  'OCM-BRI-001',
  'Tesla Supercharger Brisbane',
  '140 Ann Street',
  'Fortitude Valley',
  'QLD',
  '4006',
  -27.4540,
  153.0360,
  'Tesla',
  '["Type 2", "CCS2"]'::jsonb,
  '["150kW", "250kW"]'::jsonb,
  '{"type": "per_kwh", "rate": 0.59, "currency": "AUD"}'::jsonb,
  '{"24_7": true}'::jsonb,
  true
),
(
  'OCM-BRI-002',
  'Chargefox Indooroopilly',
  'Station Road',
  'Indooroopilly',
  'QLD',
  '4068',
  -27.4970,
  152.9740,
  'Chargefox',
  '["Type 2", "CCS2"]'::jsonb,
  '["22kW", "150kW"]'::jsonb,
  '{"type": "per_kwh", "rate": 0.45, "currency": "AUD", "membership_rate": 0.35}'::jsonb,
  '{"24_7": true}'::jsonb,
  true
),

-- Perth Charging Stations
(
  'OCM-PER-001',
  'Tesla Supercharger Perth',
  '140-146 Adelaide Terrace',
  'Perth',
  'WA',
  '6000',
  -31.9600,
  115.8580,
  'Tesla',
  '["Type 2", "CCS2"]'::jsonb,
  '["150kW", "250kW"]'::jsonb,
  '{"type": "per_kwh", "rate": 0.59, "currency": "AUD"}'::jsonb,
  '{"24_7": true}'::jsonb,
  true
),
(
  'OCM-PER-002',
  'Chargefox Perth',
  '130-150 Mounts Bay Road',
  'Perth',
  'WA',
  '6000',
  -31.9550,
  115.8440,
  'Chargefox',
  '["Type 2", "CCS2"]'::jsonb,
  '["22kW", "150kW"]'::jsonb,
  '{"type": "per_kwh", "rate": 0.45, "currency": "AUD", "membership_rate": 0.35}'::jsonb,
  '{"24_7": true}'::jsonb,
  true
),

-- Adelaide Charging Stations
(
  'OCM-ADL-001',
  'Tesla Supercharger Adelaide',
  '150 Hindmarsh Square',
  'Adelaide',
  'SA',
  '5000',
  -34.9230,
  138.5980,
  'Tesla',
  '["Type 2", "CCS2"]'::jsonb,
  '["150kW", "250kW"]'::jsonb,
  '{"type": "per_kwh", "rate": 0.59, "currency": "AUD"}'::jsonb,
  '{"24_7": true}'::jsonb,
  true
),

-- Canberra Charging Stations
(
  'OCM-CAN-001',
  'Tesla Supercharger Canberra',
  '221 London Circuit',
  'Canberra',
  'ACT',
  '2601',
  -35.2830,
  149.1290,
  'Tesla',
  '["Type 2", "CCS2"]'::jsonb,
  '["150kW", "250kW"]'::jsonb,
  '{"type": "per_kwh", "rate": 0.59, "currency": "AUD"}'::jsonb,
  '{"24_7": true}'::jsonb,
  true
),

-- Hobart Charging Stations
(
  'OCM-HOB-001',
  'Tesla Supercharger Hobart',
  '55 Murray Street',
  'Hobart',
  'TAS',
  '7000',
  -42.8830,
  147.3270,
  'Tesla',
  '["Type 2", "CCS2"]'::jsonb,
  '["150kW", "250kW"]'::jsonb,
  '{"type": "per_kwh", "rate": 0.59, "currency": "AUD"}'::jsonb,
  '{"24_7": true}'::jsonb,
  true
),

-- Darwin Charging Stations
(
  'OCM-DAR-001',
  'Chargefox Darwin',
  '34 Kitchener Drive',
  'Darwin',
  'NT',
  '0800',
  -12.4630,
  130.8440,
  'Chargefox',
  '["Type 2", "CCS2"]'::jsonb,
  '["50kW", "150kW"]'::jsonb,
  '{"type": "per_kwh", "rate": 0.45, "currency": "AUD", "membership_rate": 0.35}'::jsonb,
  '{"24_7": true}'::jsonb,
  true
);

-- ============================================
-- SEED: Blog Posts
-- ============================================

INSERT INTO blog_posts (
  title, slug, content, excerpt, category, author,
  featured_image_url, meta_description, keywords,
  published_date, is_published
) VALUES
(
  'Complete Guide to EV Tax Benefits in Australia 2024',
  'ev-tax-benefits-australia-2024',
  '# Complete Guide to EV Tax Benefits in Australia 2024

Electric vehicles (EVs) are becoming increasingly popular in Australia, and the government is offering various tax incentives to encourage adoption. This comprehensive guide covers all the tax benefits available for EV owners in 2024.

## Fringe Benefits Tax (FBT) Exemption

From July 1, 2022, electric vehicles are exempt from Fringe Benefits Tax when provided by employers to employees. This applies to:

- Battery electric vehicles (BEVs)
- Plug-in hybrid electric vehicles (PHEVs)
- Hydrogen fuel cell vehicles

The exemption applies to vehicles with a retail price under the luxury car tax threshold ($89,332 for fuel-efficient vehicles in 2024).

## Luxury Car Tax

While EVs are subject to luxury car tax like any other vehicle, fuel-efficient vehicles (including all EVs) have a higher threshold of $89,332 compared to $71,849 for other vehicles.

## State-Based Incentives

### New South Wales
- Stamp duty exemption for new and used EVs under $78,000
- $3,000 rebate for EVs under $68,750
- Free registration for EVs until 2027

### Victoria
- $3,000 rebate for EVs under $68,740
- Stamp duty exemption for EVs under $68,740
- Reduced registration fees

### Queensland
- $6,000 rebate for new EVs under $68,000
- Stamp duty concessions

### South Australia
- $3,000 rebate for EVs under $68,000
- No stamp duty for EVs

### Western Australia
- $3,500 rebate for EVs under $70,000
- Reduced vehicle licence costs

### Tasmania
- $3,000 rebate for EVs under $68,000
- Registration exemption for two years

### Australian Capital Territory
- $2,000 rebate for EVs under $70,000
- Interest-free loans up to $15,000

## Depreciation Benefits

Businesses can claim immediate tax deductions for the cost of EV charging infrastructure installed on business premises. The instant asset write-off allows businesses to claim the full cost in the year of purchase.

## Conclusion

With numerous federal and state incentives available, now is an excellent time to make the switch to electric. Be sure to consult with a tax professional to understand how these benefits apply to your specific situation.',
  'Learn about all the tax benefits and incentives available for EV owners in Australia in 2024, including FBT exemptions and state rebates.',
  'guide',
  'EV Australia Team',
  'https://evaustralia.com.au/images/ev-tax-benefits-guide.jpg',
  'Discover all EV tax benefits in Australia for 2024. Learn about FBT exemptions, state rebates, and incentives for electric vehicle buyers.',
  '["EV tax benefits", "FBT exemption", "electric vehicle incentives", "EV rebates Australia", "company car tax"]'::jsonb,
  CURRENT_TIMESTAMP,
  true
),
(
  'Tesla vs BYD: Which EV Brand Should You Choose in Australia?',
  'tesla-vs-byd-ev-comparison-australia',
  '# Tesla vs BYD: Which EV Brand Should You Choose in Australia?

The electric vehicle market in Australia is heating up with two major players: Tesla and BYD. Both offer compelling electric vehicles, but which one is right for you? This detailed comparison will help you decide.

## Tesla Overview

Tesla has been the dominant force in the Australian EV market, offering the Model 3 and Model Y. Key advantages include:

- Extensive Supercharger network across Australia
- Industry-leading software and technology
- Strong brand recognition and resale value
- Over-the-air software updates

## BYD Overview

BYD (Build Your Dreams) is a Chinese automaker that has quickly gained market share in Australia with the Atto 3, Dolphin, and Seal. Key advantages include:

- Competitive pricing
- LFP battery technology with longer lifespan
- Growing dealer network in Australia
- Comprehensive warranty coverage

## Model Comparison

### Price

- Tesla Model 3: From $54,900
- Tesla Model Y: From $65,900
- BYD Dolphin: From $38,990
- BYD Atto 3: From $39,990
- BYD Seal: From $52,990

### Range

- Tesla Model 3 Long Range: 513km (EPA)
- Tesla Model Y Long Range: 455km (EPA)
- BYD Atto 3: 420km (claimed)
- BYD Seal: 570km (claimed)

### Charging Network

Tesla has a significant advantage with its proprietary Supercharger network, which now supports CCS2 connectors in Australia. BYD owners can use third-party networks including Chargefox, Jolt, and Ampol.

## Warranty Comparison

**Tesla:**
- Vehicle: 4 years or 80,000km
- Battery: 8 years or 160,000km

**BYD:**
- Vehicle: 6 years or 150,000km
- Battery: 8 years or 160,000km

## Verdict

Choose Tesla if you:
- Want access to the Supercharger network
- Prioritize technology and software
- Value strong resale value

Choose BYD if you:
- Want the best value for money
- Prefer longer warranty coverage
- Are comfortable using third-party charging networks',
  'A comprehensive comparison of Tesla and BYD EVs in Australia, covering pricing, range, charging network, and warranty to help you choose.',
  'comparison',
  'EV Australia Team',
  'https://evaustralia.com.au/images/tesla-vs-byd-comparison.jpg',
  'Compare Tesla vs BYD electric vehicles in Australia. Price, range, charging network, and warranty comparison to help you choose.',
  '["Tesla vs BYD", "Tesla Model 3", "BYD Atto 3", "EV comparison Australia", "best EV Australia"]'::jsonb,
  CURRENT_TIMESTAMP - INTERVAL '7 days',
  true
),
(
  'How to Install a Home EV Charger in Australia',
  'home-ev-charger-installation-guide-australia',
  '# How to Install a Home EV Charger in Australia

Installing a home EV charger is one of the most convenient ways to keep your electric vehicle charged and ready to go. This guide covers everything you need to know about home EV charger installation in Australia.

## Types of Home Chargers

### Level 1 Charger (Portable)
- Comes with the vehicle
- 2.4kW power output
- 10-15km range per hour
- No installation required

### Level 2 Charger (Wall-mounted)
- 7kW to 22kW power output
- 30-120km range per hour
- Requires professional installation

## Installation Process

### Step 1: Choose Your Charger

Popular options in Australia include:
- Tesla Wall Connector
- Wallbox Pulsar Plus
- ChargePoint Home
- Zappi

### Step 2: Check Your Electrical Capacity

Your home electrical system must support the additional load. Most Australian homes can accommodate a 7kW charger, but you may need an upgrade for 22kW charging.

### Step 3: Hire a Licensed Electrician

In Australia, only licensed electricians can install EV chargers. Look for an electrician with:
- EV charger installation experience
- CEC (Clean Energy Council) accreditation
- Positive customer reviews

### Step 4: Obtain Necessary Approvals

Your electricity distributor may need to approve the installation. Your electrician will handle this process.

### Step 5: Installation Day

The installation typically takes 2-4 hours and includes:
- Mounting the charger
- Running power from your switchboard
- Testing and commissioning

## Cost Breakdown

| Item | Cost Range |
|------|------------|
| Charger unit | $500 - $2,000 |
| Installation | $500 - $2,000 |
| Electrical upgrade (if needed) | $1,000 - $5,000 |
| Total | $1,000 - $9,000 |

## Government Incentives

Several states offer rebates for home charger installation:
- Victoria: $500 rebate
- Queensland: $1,000 rebate
- South Australia: $500 rebate

## Conclusion

Installing a home EV charger is a straightforward process that greatly enhances your EV ownership experience. Invest in a quality charger and licensed installation for the best results.',
  'A complete guide to installing a home EV charger in Australia, including types, costs, installation process, and government incentives.',
  'guide',
  'EV Australia Team',
  'https://evaustralia.com.au/images/home-charger-installation.jpg',
  'Learn how to install a home EV charger in Australia. Complete guide to types, costs, installation process, and rebates.',
  '["home EV charger", "EV charger installation", "wallbox Australia", "Tesla Wall Connector", "home charging"]'::jsonb,
  CURRENT_TIMESTAMP - INTERVAL '14 days',
  true
),
(
  'Understanding EV Range: What Affects Your Electric Car Range',
  'understanding-ev-range-factors',
  '# Understanding EV Range: What Affects Your Electric Car Range

One of the most common concerns for potential EV buyers is range anxiety. Understanding what affects EV range can help you maximize your vehicle efficiency and make informed decisions.

## What is EV Range?

EV range refers to the distance an electric vehicle can travel on a single charge. This is typically measured under standardized testing conditions (EPA, WLTP, or NEDC).

## Factors Affecting Range

### 1. Driving Speed

Higher speeds dramatically reduce range due to increased aerodynamic drag. At highway speeds, expect 20-30% less range than in city driving.

### 2. Temperature

Extreme temperatures affect battery efficiency:
- Cold weather (below 10°C): 10-30% range reduction
- Hot weather (above 30°C): 10-20% range reduction
- Preconditioning while plugged in can help

### 3. Heating and Cooling

Using climate control significantly impacts range:
- Heating can reduce range by 20-40%
- Air conditioning typically reduces range by 10-20%
- Use seat heaters instead of cabin heating when possible

### 4. Driving Style

Aggressive acceleration and hard braking reduce efficiency. Smooth, consistent driving maximizes range.

### 5. Terrain

Hills and inclines require more energy. Mountain driving can reduce range by 30% or more.

### 6. Payload and Towing

Additional weight increases energy consumption. Towing a trailer can reduce range by 30-50%.

### 7. Battery Age and Condition

Older batteries have reduced capacity. Most manufacturers warrant batteries to maintain 70-80% capacity for 8 years.

## Maximizing Your Range

1. **Precondition while charging**: Heat or cool your car while it is still plugged in.

2. **Use regenerative braking**: Take advantage of one-pedal driving to recover energy.

3. **Plan your routes**: Use navigation systems that account for charging stops.

4. **Maintain tire pressure**: Properly inflated tires reduce rolling resistance.

5. **Remove unused roof racks**: They create aerodynamic drag.

6. **Drive efficiently**: Anticipate traffic and brake gradually.

## Real-World Range Expectations

| Vehicle | EPA Range | Real-World Expectation |
|---------|-----------|------------------------|
| Tesla Model 3 | 513km | 450-470km |
| Tesla Model Y | 455km | 400-420km |
| BYD Atto 3 | 420km | 370-390km |
| Hyundai Ioniq 5 | 488km | 440-460km |

## Conclusion

Understanding the factors that affect EV range helps you maximize efficiency and reduce range anxiety. With proper planning and driving habits, modern EVs offer more than enough range for daily use and comfortable long-distance travel.',
  'Learn what factors affect EV range and how to maximize your electric vehicle efficiency. Complete guide to range optimization.',
  'educational',
  'EV Australia Team',
  'https://evaustralia.com.au/images/ev-range-factors.jpg',
  'Understand what affects EV range. Learn how temperature, speed, driving style, and other factors impact your electric car range.',
  '["EV range", "electric vehicle efficiency", "range anxiety", "battery efficiency", "EV tips"]'::jsonb,
  CURRENT_TIMESTAMP - INTERVAL '21 days',
  true
),
(
  'Australian EV Market Report: December 2024',
  'australian-ev-market-report-december-2024',
  '# Australian EV Market Report: December 2024

The Australian electric vehicle market continues to grow at an impressive pace. Here is our comprehensive report on the state of EVs in Australia as of December 2024.

## Market Growth

### Sales Data

- EVs represent 8.2% of all new vehicle sales in Australia
- Year-over-year growth of 65%
- Over 120,000 EVs sold in 2024

### Top Selling Models

1. Tesla Model Y - 28,000+ units
2. Tesla Model 3 - 22,000+ units
3. BYD Atto 3 - 18,000+ units
4. MG MG4 - 12,000+ units
5. Hyundai Ioniq 5 - 9,000+ units

## Price Trends

Average EV prices have decreased by 12% compared to 2023, driven by:
- Increased competition from Chinese manufacturers
- Improved battery production efficiency
- Stronger Australian dollar

## Charging Infrastructure

### Network Expansion

- Over 2,500 public charging locations
- 650+ DC fast charging locations
- Tesla Supercharger network now open to all brands

### Key Developments

- Ampol expanding to 200+ EV charging sites
- BP Pulse growing network significantly
- New government funding for regional charging

## State-by-State Breakdown

| State | EV Sales Share | Charging Stations |
|-------|---------------|-------------------|
| NSW | 9.1% | 800+ |
| VIC | 8.8% | 650+ |
| QLD | 6.5% | 450+ |
| SA | 7.2% | 200+ |
| WA | 5.8% | 180+ |
| TAS | 6.1% | 80+ |
| ACT | 12.5% | 100+ |
| NT | 2.1% | 40+ |

## New Model Announcements

Several exciting new EVs are coming to Australia in 2025:
- Kia EV5
- Volvo EX90
- Mercedes EQA refresh
- Renault Megane E-Tech
- Fiat 500e

## Government Policy Updates

- FBT exemption extended to 2027
- New emissions standards announced
- Increased funding for charging infrastructure

## Outlook for 2025

We expect continued growth with:
- EVs reaching 15% of new car sales
- More affordable models entering the market
- Improved charging infrastructure in regional areas
- Stronger used EV market developing',
  'Monthly report on the Australian EV market covering sales data, price trends, charging infrastructure, and market outlook.',
  'news',
  'EV Australia Team',
  'https://evaustralia.com.au/images/ev-market-report-dec2024.jpg',
  'Australian EV market report December 2024. Sales growth, price trends, charging infrastructure, and 2025 outlook.',
  '["EV sales Australia", "electric vehicle market", "EV market report", "Australia EV growth", "EV statistics"]'::jsonb,
  CURRENT_TIMESTAMP - INTERVAL '3 days',
  true
);

-- ============================================
-- SEED: Calculator Data
-- ============================================

INSERT INTO calculator_data (
  calculator_type, model_id, formula_config, australian_variables
) VALUES
-- Charging Time Calculator (General)
(
  'charging_time',
  NULL,
  '{
    "formula": "battery_capacity_kwh / charging_power_kw * efficiency_factor",
    "efficiency_factor": 0.9,
    "include_battery_heating": true
  }'::jsonb,
  '{
    "average_home_power_kw": 7.7,
    "average_public_ac_power_kw": 11,
    "average_public_dc_power_kw": 150,
    "tesla_supercharger_power_kw": 250,
    "state_rates": {
      "NSW": {"peak_rate": 0.35, "off_peak_rate": 0.18},
      "VIC": {"peak_rate": 0.32, "off_peak_rate": 0.17},
      "QLD": {"peak_rate": 0.28, "off_peak_rate": 0.15},
      "SA": {"peak_rate": 0.45, "off_peak_rate": 0.25},
      "WA": {"peak_rate": 0.31, "off_peak_rate": 0.19},
      "TAS": {"peak_rate": 0.30, "off_peak_rate": 0.18},
      "ACT": {"peak_rate": 0.25, "off_peak_rate": 0.13},
      "NT": {"peak_rate": 0.33, "off_peak_rate": 0.22}
    }
  }'::jsonb
),
-- Cost of Ownership Calculator (General)
(
  'cost_ownership',
  NULL,
  '{
    "years": 5,
    "annual_distance_km": 15000,
    "fuel_efficiency_improvement": 0.03,
    "maintenance_savings_percent": 0.40,
    "include_registration": true,
    "include_insurance": true,
    "include_resale": true
  }'::jsonb,
  '{
    "petrol_price_average": 1.80,
    "electricity_price_average": 0.28,
    "registration_ev_discount": {"NSW": 1.0, "VIC": 0.5, "QLD": 0.3, "SA": 1.0, "WA": 0.5, "TAS": 1.0, "ACT": 1.0, "NT": 0.0},
    "ctp_insurance_average": 500,
    "insurance_premium_difference": -0.15,
    "annual_maintenance_ice": 1200,
    "annual_maintenance_ev": 720,
    "resale_value_ev_percent": 55,
    "resale_value_ice_percent": 40,
    "fringe_benefits_tax_exemption": true
  }'::jsonb
),
-- Emissions Calculator (General)
(
  'emissions',
  NULL,
  '{
    "lifecycle_analysis": true,
    "manufacturing_battery_emissions_kg": 8000,
    "manufacturing_body_emissions_kg": 5000,
    "annual_distance_km": 15000,
    "petrol_emissions_kg_per_litre": 2.31,
    "ev_grid_emissions_factor": 0.72,
    "ev_solar_emissions_factor": 0.0,
    "battery_recycling_credit_percent": 0.5
  }'::jsonb,
  '{
    "grid_carbon_intensity": {
      "NSW": 0.78,
      "VIC": 0.89,
      "QLD": 0.68,
      "SA": 0.47,
      "WA": 0.58,
      "TAS": 0.11,
      "ACT": 0.72,
      "NT": 0.65
    },
    "avg_household_annual_emissions_tonnes": 14,
    "ev_contribution_reduction_percent": 60
  }'::jsonb
),
-- Home Charging Calculator (General)
(
  'home_charging',
  NULL,
  '{
    "include_off_peak_analysis": true,
    "solar_offset_available": true,
    "wallbox_efficiency": 0.95,
    "battery_efficiency": 0.95
  }'::jsonb,
  '{
    "typical_wallbox_cost": 800,
    "installation_cost": 800,
    "grants_available": {"VIC": 500, "QLD": 1000, "SA": 500, "ACT": 1500},
    "wallbox_power_options": ["7kW", "11kW", "22kW"],
    "charging_sessions_per_week": 2,
    "avg_session_kwh": 50
  }'::jsonb
),
-- Solar Charging Calculator (General)
(
  'solar_charging',
  NULL,
  '{
    "system_efficiency": 0.85,
    "inverter_efficiency": 0.95,
    "export_credit_rate": 0.08,
    "self_consumption_ratio": 0.70
  }'::jsonb,
  '{
    "avg_system_cost_per_watt": 1.20,
    "min_system_size_kw": 5,
    "max_system_size_kw": 10,
    "solar_irradiance": {
      "NSW": 5.4,
      "VIC": 4.3,
      "QLD": 5.2,
      "SA": 5.1,
      "WA": 5.8,
      "TAS": 4.0,
      "ACT": 4.7,
      "NT": 5.9
    },
    "feed_in_tariff": 0.08,
    "stc_rebate_per_watt": 0.38
  }'::jsonb
),
-- Range Calculator (Per Model)
(
  'range',
  (SELECT id FROM ev_models WHERE brand = 'Tesla' AND model = 'Model Y' LIMIT 1),
  '{
    "epa_adjusted_factor": 0.92,
    "temperature_factor": 0.90,
    "highway_factor": 0.85,
    "aggressive_driving_factor": 0.80,
    "climate_control_factor": 0.85
  }'::jsonb,
  '{}'::jsonb
),
-- Range Calculator (Per Model)
(
  'range',
  (SELECT id FROM ev_models WHERE brand = 'Tesla' AND model = 'Model 3' LIMIT 1),
  '{
    "epa_adjusted_factor": 0.92,
    "temperature_factor": 0.90,
    "highway_factor": 0.85,
    "aggressive_driving_factor": 0.80,
    "climate_control_factor": 0.85
  }'::jsonb,
  '{}'::jsonb
),
-- Range Calculator (Per Model)
(
  'range',
  (SELECT id FROM ev_models WHERE brand = 'BYD' AND model = 'Atto 3' LIMIT 1),
  '{
    "epa_adjusted_factor": 0.93,
    "temperature_factor": 0.92,
    "highway_factor": 0.88,
    "aggressive_driving_factor": 0.82,
    "climate_control_factor": 0.88
  }'::jsonb,
  '{}'::jsonb
);

-- ============================================
-- SEED: Australian Market Variables
-- ============================================

INSERT INTO au_market_variables (
  state, electricity_rate_per_kwh, grid_carbon_intensity_grams_per_kwh,
  solar_irradiance_kwhm2_per_day, average_electrician_rate_per_hour,
  vehicle_registration_cost_annual, ctp_insurance_base, effective_date, notes
) VALUES
-- National Average
(
  'AU_WIDE',
  0.30,
  0.72,
  5.1,
  95,
  800,
  450,
  '2024-01-01',
  'National average values for reference'
),
-- New South Wales
(
  'NSW',
  0.28,
  0.78,
  5.4,
  95,
  389,  -- EV exempt
  450,
  '2024-01-01',
  'Free registration for EVs until 2027. Strong grid carbon intensity.'
),
-- Victoria
(
  'VIC',
  0.29,
  0.89,
  4.3,
  100,
  434,
  450,
  '2024-01-01',
  '$500 home charger rebate available. High emissions grid due to coal reliance.'
),
-- Queensland
(
  'QLD',
  0.25,
  0.68,
  5.2,
  90,
  541,
  400,
  '2024-01-01',
  'Cheapest electricity in mainland Australia. Growing renewable sector.'
),
-- South Australia
(
  'SA',
  0.35,
  0.47,
  5.1,
  95,
  264,  -- EV exempt
  520,
  '2024-01-01',
  'Excellent renewable energy share (70%+ wind/solar). Low grid carbon intensity.'
),
-- Western Australia
(
  'WA',
  0.30,
  0.58,
  5.8,
  95,
  390,
  380,
  '2024-01-01',
  'Best solar irradiance in Australia. SWIS grid has moderate emissions.'
),
-- Tasmania
(
  'TAS',
  0.28,
  0.11,
  4.0,
  105,
  282,  -- 2 year exemption
  480,
  '2024-01-01',
  'Cleanest grid in Australia (hydroelectric). Low solar irradiance.'
),
-- Australian Capital Territory
(
  'ACT',
  0.24,
  0.72,
  4.7,
  110,
  0,  -- EV exempt
  450,
  '2024-01-01',
  '100% renewable energy target. Interest-free loans available.'
),
-- Northern Territory
(
  'NT',
  0.32,
  0.65,
  5.9,
  120,
  750,
  420,
  '2024-01-01',
  'Highest solar irradiance but limited EV infrastructure.'
);

-- ============================================
-- SEED: State Pages
-- ============================================

INSERT INTO state_pages (
  state, incentives_content, charging_infrastructure_summary,
  featured_models_for_state, seo_title, seo_meta_description
) VALUES
(
  'NSW',
  '# New South Wales EV Incentives

New South Wales offers some of the most generous EV incentives in Australia.

## Financial Incentives

### Stamp Duty Exemption
- EVs under $78,000 are exempt from stamp duty
- For vehicles over $78,000, stamp duty is reduced

### $3,000 Rebate
- Available for EVs under $68,750
- First-come, first-served basis
- Income test applies (household income under $180,000)

### Free Registration
- EVs registered in NSW are exempt from registration costs until 2027
- Includes both new and used EVs

## Other Benefits

- Use of T2 and T3 transit lanes for vehicles with 3+ occupants
- Free parking in some council areas
- No congestion charge in Sydney

## Eligibility Requirements

- Must be a NSW resident
- Vehicle must be registered in NSW
- Purchase or lease from a registered dealer',
  'New South Wales has the most developed EV charging infrastructure in Australia, with over 800 public charging stations.

## Key Charging Networks

- **Tesla Supercharger**: Extensive network with 50+ locations
- **Chargefox**: 100+ charging locations
- **NRMA**: 200+ fast chargers across the state
- **Ampol**: Growing network of 150kW+ chargers
- **Jolt**: Free first 30 minutes at many locations

## Major Hubs

### Sydney
- Over 500 charging stations in the Greater Sydney area
- Superchargers at major shopping centres
- Fast charging along major motorways

### Regional NSW
- Charging along Hume Highway
- Coastal charging network growing
- Long-distance routes well-serviced',
  '["Tesla Model Y", "Tesla Model 3", "Hyundai Ioniq 5", "Kia EV6", "BYD Atto 3"]'::jsonb,
  'EV Incentives and Infrastructure in NSW | EV Australia',
  'Discover EV incentives in NSW including $3,000 rebate, free registration, and charging infrastructure across Sydney and regional areas.'
),
(
  'VIC',
  '# Victoria EV Incentives

Victoria offers comprehensive support for EV adoption with financial incentives and infrastructure development.

## Financial Incentives

### $3,000 Rebate
- Available for new EVs under $68,740
- Applied at point of sale through participating dealers
- Limited to first 20,000 vehicles

### Stamp Duty Exemption
- EVs under $68,740 are exempt from stamp duty
- Reduces upfront purchase cost significantly

### Reduced Registration
- EVs pay reduced registration fees
- Annual cost significantly lower than petrol vehicles

## Home Charger Rebate

- $500 rebate for eligible home chargers
- Must use a CEC-accredited installer
- Available until June 2025

## Other Benefits

- 25% reduction in road user charges (when introduced)
- Free parking in some Melbourne locations
- Tram lane access for EVs with 2+ occupants',
  'Victoria has a growing EV charging network with over 650 public charging stations.

## Key Charging Networks

- **Tesla Supercharger**: Strong presence in Melbourne
- **Chargefox**: Network of 150kW+ chargers
- **BP Pulse**: Expanding network
- **Shell Recharge**: Growing presence

## Major Hubs

### Melbourne
- Over 400 charging stations in the metropolitan area
- Chargers at major shopping centres and car parks
- City of Melbourne installing 500+ new chargers

### Regional Victoria
- Charging along major highways
- Growing network in Geelong, Ballarat, Bendigo
- Great Ocean Road charging network expanding',
  '["Tesla Model Y", "Tesla Model 3", "Hyundai Ioniq 5", "Polestar 2", "MG MG4"]'::jsonb,
  'Victoria EV Rebates and Charging Infrastructure | EV Australia',
  'Learn about Victoria EV incentives including $3,000 rebate, home charger rebate, and charging infrastructure in Melbourne and regional areas.'
),
(
  'QLD',
  '# Queensland EV Incentives

Queensland is accelerating EV adoption with substantial financial incentives and infrastructure investment.

## Financial Incentives

### $6,000 Rebate
- One of the highest rebates in Australia
- Available for new EVs under $68,000
- No income test applies
- Available until June 2025 or until funds exhausted

### Stamp Duty Concessions
- Significant stamp duty savings for EVs
- Makes EVs more affordable upfront

## Registration Benefits

- Reduced registration costs for EVs
- Concessions for eligible vehicles

## Business Incentives

- Fleet tax incentives for business purchases
- Interest-free loans for commercial chargers',
  'Queensland has over 450 public charging stations with continued expansion planned.

## Key Charging Networks

- **Tesla Supercharger**: Growing network
- **Chargefox**: 100+ locations
- **BP**: Major expansion underway
- **NRMA**: Cross-border services from NSW

## Major Hubs

### Brisbane
- 200+ charging stations in the metro area
- Superchargers at key locations
- City Council installing new chargers

### Gold Coast
- Well-serviced with fast chargers
- Tourist corridor charging network
- Expanding rapidly

### Regional Queensland
- Charging along major highways
- Growing network in Toowoomba, Sunshine Coast
- Investment in regional infrastructure',
  '["Tesla Model Y", "Tesla Model 3", "BYD Atto 3", "MG MG4", "Hyundai Ioniq 5"]'::jsonb,
  'Queensland EV Incentives - $6,000 Rebate Available | EV Australia',
  'Queensland offers $6,000 EV rebate, stamp duty concessions, and growing charging infrastructure across Brisbane and regional areas.'
),
(
  'SA',
  '# South Australia EV Incentives

South Australia offers generous incentives and has one of the cleanest electricity grids in Australia.

## Financial Incentives

### $3,000 Rebate
- Available for new EVs under $68,000
- Simple application process
- Applied at point of sale

### Stamp Duty Exemption
- All EVs are exempt from stamp duty
- Significant savings on purchase

### Free Registration
- EVs are exempt from registration costs
- Includes both new and used imports

## Home Charger Incentives

- $500 rebate for home charger installation
- Available through the SA Government program
- Must use a licensed installer',
  'South Australia has over 200 public charging stations with excellent renewable energy integration.

## Key Charging Networks

- **Tesla Supercharger**: Growing network
- **Chargefox**: Major presence
- **AMP Control**: State-backed initiative
- **RAA**: Regional charging network

## Major Hubs

### Adelaide
- 100+ charging stations
- City Centre charging hub
- Growing suburban network

### Regional South Australia
- chargers along main highways
- Wine regions well-serviced
- Eyre Highway charging corridor

## Grid Advantage

South Australia has 70%+ renewable energy, making EVs here among the cleanest in the world.',
  '["Tesla Model Y", "Tesla Model 3", "MG MG4", "Polestar 2", "BYD Atto 3"]'::jsonb,
  'South Australia EV Rebates and Clean Energy Charging | EV Australia',
  'South Australia EV incentives include $3,000 rebate, stamp duty exemption, and clean energy grid for the greenest EVs.'
),
(
  'WA',
  '# Western Australia EV Incentives

Western Australia is developing its EV infrastructure with incentives and charging network expansion.

## Financial Incentives

### $3,500 Rebate
- Available for new EVs under $70,000
- One of the highest state rebates
- Applied at point of sale

### Reduced Vehicle Licence Costs
- Lower annual licensing fees for EVs
- Ongoing cost savings

## Stamp Duty

- EVs pay standard stamp duty
- No current exemption

## Future Plans

- Additional incentives under development
- Significant investment in charging infrastructure planned',
  'Western Australia has around 180 public charging stations with focused development in the Perth area.

## Key Charging Networks

- **Tesla Supercharger**: Perth network growing
- **Chargefox**: Presence in Perth
- **Western Power**: State infrastructure initiative

## Major Hubs

### Perth
- 120+ charging stations in metro area
- Superchargers at key retail locations
- Growing fast charger network

### Regional WA
- Great Southern charging corridor
- South West EV charging
- Long-distance charging development

## Grid Characteristics

- Moderate emissions grid
- Best solar irradiance in Australia
- Opportunities for solar charging',
  '["Tesla Model Y", "Tesla Model 3", "BYD Atto 3", "MG MG4", "Hyundai Ioniq 5"]'::jsonb,
  'Western Australia EV Incentives and Charging Infrastructure | EV Australia',
  'Western Australia offers $3,500 EV rebate, reduced licensing costs, and growing charging infrastructure in Perth and regional areas.'
),
(
  'TAS',
  '# Tasmania EV Incentives

Tasmania offers unique advantages for EVs with the cleanest grid in Australia.

## Financial Incentives

### $3,000 Rebate
- Available for new EVs under $68,000
- First-come, first-served basis

### 2-Year Registration Exemption
- New EVs exempt from registration for 2 years
- Significant upfront savings
- Applies to first registration in Tasmania

### Stamp Duty
- Standard stamp duty applies
- No current exemption

## Green Energy Advantage

Tasmania has 100% renewable electricity from hydro power, making EVs here the cleanest in Australia.',
  'Tasmania has approximately 80 public charging stations with a growing network.

## Key Charging Networks

- **Tesla Supercharger**: Hobart and Launceston
- **Chargefox**: State-wide network
- **Jets**: Local charging initiative

## Major Hubs

### Hobart
- 40+ charging stations
- City Centre and suburbs well-serviced
- Growing network

### Launceston
- 20+ charging locations
- Northern Tasmania hub
- Expanding regional network

## Regional Coverage

- East Coast charging corridor
- West Coast charging development
- Major highway routes covered',
  '["Tesla Model Y", "Tesla Model 3", "MG MG4", "Polestar 2", "Volvo EX30"]'::jsonb,
  'Tasmania EV Incentives with 100% Renewable Energy | EV Australia',
  'Tasmania EV incentives include $3,000 rebate, 2-year registration exemption, and 100% renewable energy grid for zero-emission driving.'
),
(
  'ACT',
  '# Australian Capital Territory EV Incentives

The ACT leads Australia in EV adoption with comprehensive incentives and policy support.

## Financial Incentives

### $2,000 Rebate
- Available for new EVs under $70,000
- Applied at point of sale

### Interest-Free Loans
- Up to $15,000 interest-free loan
- For both vehicle and charger purchase
- 3-year repayment period

### Free Registration
- EVs exempt from registration costs
- Ongoing annual savings

## 100% Renewable Energy

The ACT has achieved 100% renewable electricity, making EVs here truly zero-emission.',
  'The ACT has over 100 public charging stations, one of the highest per capita rates in Australia.

## Key Charging Networks

- **Tesla Supercharger**: Multiple locations
- **Chargefox**: Growing network
- **ActewAGL**: Local utility initiative

## Major Hubs

### Canberra
- 100+ charging stations
- CBD and suburbs well-serviced
- Shopping centres, entertainment hubs

## City Planning

- EV-ready building codes
- New developments include charger provisions
- Extensive public charging network',
  '["Tesla Model Y", "Tesla Model 3", "Hyundai Ioniq 5", "Kia EV6", "Polestar 2"]'::jsonb,
  'ACT EV Incentives - $2,000 Rebate and 100% Renewable Energy | EV Australia',
  'ACT EV incentives include $2,000 rebate, interest-free loans, free registration, and 100% renewable energy for zero-emission driving.'
),
(
  'NT',
  '# Northern Territory EV Incentives

The Northern Territory is in the early stages of EV adoption with growing infrastructure.

## Current Incentives

### Fringe Benefits Tax Exemption
- Federal FBT exemption applies to all EVs
- Benefits for salary sacrifice arrangements

### Business Incentives

- Tax deductions for charging infrastructure
- Fleet transition support available

## Registration and Stamp Duty

- Standard registration applies
- Standard stamp duty applies
- No current EV-specific exemptions',
  'The Northern Territory has around 40 public charging stations with focused development in Darwin and Alice Springs.

## Key Charging Networks

- **Chargefox**: Darwin network
- **Local Initiatives**: Growing presence

## Major Hubs

### Darwin
- 25+ charging stations
- City Centre and suburbs
- Growing fast charger network

### Alice Springs
- Emerging charging network
- Key tourism corridor

## Challenges and Opportunities

- Highest solar irradiance in Australia
- Long distances between towns
- Growing infrastructure investment',
  '["Tesla Model Y", "Tesla Model 3", "MG MG4", "BYD Atto 3"]'::jsonb,
  'Northern Territory EV Infrastructure and Incentives | EV Australia',
  'Northern Territory EV information including charging infrastructure in Darwin, Alice Springs, and territory-wide coverage.'
);

-- Log seed execution
INSERT INTO schema_migrations (migration_name) VALUES ('002_seed_data');
