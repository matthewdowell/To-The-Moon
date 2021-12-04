DROP DATABASE IF EXISTS investments;

CREATE DATABASE investments;

\c investments;

CREATE TABLE investments (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  total_val BIGINT,
  contribution INT,
  gain BIGINT,
  investment_str VARCHAR(500),
  investment_str2 VARCHAR(500)
);

INSERT INTO investments (name, total_val, contribution, gain, investment_str)
VALUES ('tsla', 10, 20, 30, 
'Your retirement investment will be worth $64,929.25 in the year 2031. 
You will have contributed $13,000.00 and profited $51,929.25.');