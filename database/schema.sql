DROP DATABASE IF EXISTS investments;

CREATE DATABASE investments;

\c investments;

CREATE TABLE investments (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  total_val VARCHAR(100),
  contribution VARCHAR(100),
  gain VARCHAR(100)
);