import connection from "./connection.js";

const alterState =
  "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";

connection.query(alterState, (err, result) => {
  if (err) throw err;
  console.log("table altered!");
});
