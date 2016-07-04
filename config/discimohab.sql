DROP DATABASE IF EXISTS discimohab;
CREATE DATABASE discimohab;

\c discimohab

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  username VARCHAR UNIQUE NOT NULL,
  password_digest VARCHAR NOT NULL
);
