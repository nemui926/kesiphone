/*
  # Create appliances and control tables

  1. New Tables
    - `appliances`
      - `id` (text, primary key)
      - `name_ja` (text)
      - `name_en` (text)
      - `icon` (text)
      - `ir_code` (text)
      - `status` (text)
      - `last_updated` (timestamptz)
    
    - `appliance_controls`
      - `id` (uuid, primary key)
      - `appliance_id` (text, foreign key)
      - `action` (text)
      - `timestamp` (timestamptz)
      - `status` (text)

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users
*/

-- Create appliances table
CREATE TABLE IF NOT EXISTS appliances (
  id text PRIMARY KEY,
  name_ja text NOT NULL,
  name_en text NOT NULL,
  icon text NOT NULL,
  ir_code text,
  status text DEFAULT 'unknown',
  last_updated timestamptz DEFAULT now()
);

-- Create appliance controls table
CREATE TABLE IF NOT EXISTS appliance_controls (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  appliance_id text REFERENCES appliances(id),
  action text NOT NULL,
  timestamp timestamptz DEFAULT now(),
  status text DEFAULT 'pending'
);

-- Enable RLS
ALTER TABLE appliances ENABLE ROW LEVEL SECURITY;
ALTER TABLE appliance_controls ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow read access to appliances" ON appliances
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Allow read access to controls" ON appliance_controls
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Allow insert to controls" ON appliance_controls
  FOR INSERT TO authenticated WITH CHECK (true);

-- Insert initial appliance data
INSERT INTO appliances (id, name_ja, name_en, icon)
VALUES
  ('tv', 'テレビ', 'TV', 'tv'),
  ('ac', 'エアコン', 'Air Conditioner', 'fan'),
  ('light', '照明', 'Light', 'lamp'),
  ('audio', 'オーディオ', 'Audio System', 'speaker'),
  ('fan', '扇風機', 'Fan', 'fan')
ON CONFLICT (id) DO NOTHING;