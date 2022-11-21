const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: process.env.DATABASE,
  host: process.env.DBHOST,
  dbport: process.env.DBPORT,
});

module.exports = { pool };
