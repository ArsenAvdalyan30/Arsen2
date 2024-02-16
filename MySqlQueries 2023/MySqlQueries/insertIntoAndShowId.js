import connection from "./connection.js";

const insertIntoMultipleState =
  "INSERT INTO customers (name, city) VALUE ('George', 'Vardenis')";

connection.query(insertIntoMultipleState, (err, result) => {
  if (err) throw err;
  console.log("1 record inserted " + result.insertId);
});
