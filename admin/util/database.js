const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "bme9b6qfbz3sacmdnp8g-mysql.services.clever-cloud.com",
  user: "u1fgg9x3hskztqfd",
  database: "bme9b6qfbz3sacmdnp8g",
  password: "0UXzubq5uESMaBEwLVhn",
});

module.exports = pool.promise();
