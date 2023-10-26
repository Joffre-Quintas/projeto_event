const { Pool } = require('pg')
require('dotenv').config()

const user = process.env.USER;
const password = process.env.PASSWORD;

const db = new Pool({
  user: user,
  host: 'localhost',
  database: 'events',
  password: password,
  port: 5432
})

module.exports = db;