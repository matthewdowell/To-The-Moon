DROP DATABASE IF EXISTS investments;

CREATE DATABASE investments;

\c investments;

CREATE TABLE investments (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  total_val VARCHAR(100),
  contribution VARCHAR(100),
  gain VARCHAR(100),
  investment_str VARCHAR(500)
);

INSERT INTO investments 
VALUES ('tsla', '$1', '$2', '$3', 
'Your retirement investment will be worth $64,929.25 in the year 2031. 
You will have contributed $13,000.00 and profited $51,929.25.');