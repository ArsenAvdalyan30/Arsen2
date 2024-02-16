import connection from "./connection.js";

// 1
const dropTable = "DROP TABLE users";

connection.query(dropTable, (err, result) => {
  if (err) throw err;
  console.log("table deleted");
});

// 2;
const dropTableIfExists = "DROP TABLE IF EXISTS customers";

connection.query(dropTableIfExists, (err, result) => {
  if (err) throw err;
  console.log(result);
});
