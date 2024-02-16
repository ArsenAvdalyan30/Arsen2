const mysql = require("mysql");
const util = require("util");

const pool = mysql.createPool({
  password: "mutantmort00",
  user: "root",
  database: "new_schema",
  host: "localhost",
});

pool.query = util.promisify(pool.query);

async function getUsers() {
  const users = pool.query("SELECT * FROM customers");
  return users;
}
module.exports.getUsers = getUsers;
