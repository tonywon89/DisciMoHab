DROP DATABASE IF EXISTS discimohab;
CREATE DATABASE discimohab;

\c discimohab

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  username VARCHAR,
  password_digest VARCHAR
);
