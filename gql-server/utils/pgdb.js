const config = require('../config/config');

const { Pool } = require('pg');
const pool = new Pool({
  user: config.database_username,
  host: config.database_host,
  database: config.database_name,
  password: config.database_password,
  port:config.database_port,
})

module.exports = {
    query: (text, params) => pool.query(text, params),
}