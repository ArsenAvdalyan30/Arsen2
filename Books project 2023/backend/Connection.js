import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mynewpassword00",
  database: "books",
});

export default db;
