const { Pool } = require("pg");

const pool = require("pg").Pool;
require("dotenv").config();

pool = new Pool({
  user: DBUSER,
  password: processe.env.DBPASSWORD,
  database: processe.env.DATABASE,
  host: processe.env.DBHOST,
  dbport: processe.env.DBPORT,
});

module.exports = { pool };
