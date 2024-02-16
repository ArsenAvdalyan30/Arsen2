import mysql from "mysql";
import connection from "./connection.js";

// 1
const selectWhere = "SELECT * FROM customers WHERE city = 'Yellow Garden 2'";

connection.query(selectWhere, (err, result) => {
  if (err) throw err;
  console.log(result);
});

// 2
const selectWherewithWildCard = "SELECT * FROM customers WHERE city LIKE 'Y%'";

connection.query(selectWherewithWildCard, (err, result) => {
  if (err) throw err;
  console.log(result);
});

// 3
const cityEscape = "Yerevan";
const selectWithEscape =
  "SELECT * FROM customers WHERE city = " + mysql.escape(cityEscape);

connection.query(selectWithEscape, (err, result) => {
  console.log(result);
});

// 4
const name = "Vicky";
const cityEscape1 = "Yerevan";
const selectWithEscapeMultiple =
  "SELECT * FROM customers WHERE name = ? OR city = ?";

connection.query(
  selectWithEscapeMultiple,
  [name, cityEscape1],
  (err, result) => {
    console.log(result);
  }
);
