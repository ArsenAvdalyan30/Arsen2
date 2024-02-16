import mysql from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: 3306,
  password: "mynewpassword00",
  database: "firstDB",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to DB!");
});
export default connection;
