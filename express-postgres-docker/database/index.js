import pg from 'pg';
import 'dotenv/config';

const { Pool } = pg

const pool = new Pool({
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE
})

export const query = (text, params, callback) => {
  return pool.query(text, params, callback)
}