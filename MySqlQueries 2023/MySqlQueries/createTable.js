import connection from "./connection.js";
// 1
// const tableState =
//   "CREATE TABLE customers (name VARCHAR(100), lastName VARCHAR(100), city VARCHAR(100), age INT)";

// connection.query(tableState, (err, result) => {
//   if (err) throw err;
//   console.log("table customers is created!");
// });

// 2
const tableState =
  "CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100), surName VARCHAR(100), birthDay INT)";

connection.query(tableState, (err, result) => {
  if (err) throw err;
  console.log("table users is created!");
});
