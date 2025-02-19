import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'ffxiv_rp_platform',
  password: 'TNgamergirl01', // Replace with your PostgreSQL password
  port: 5432,
});

export const query = (text: string, params?: (string | number)[]) => pool.query(text, params);