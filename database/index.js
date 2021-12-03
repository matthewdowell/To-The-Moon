const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: 'matthewdowell',
  host: 'localhost',
  database: 'investments',
  password: process.env.DB_PASSWORD,
  port: 5432,
})

module.exports = pool;