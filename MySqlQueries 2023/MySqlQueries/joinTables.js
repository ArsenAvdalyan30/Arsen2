import connection from "./connection.js";

// same as INNER JOIN
const innerJoin =
  "SELECT customers.name AS user, products.name AS favorite FROM customers JOIN products ON customers.id = products.id";

connection.query(innerJoin, (err, result) => {
  if (err) throw err;
  console.log("INNER JOIN: \n", result);
});

// LEFT JOIN
const leftJoin =
  "SELECT customers.name AS user, products.name AS favorite FROM customers LEFT JOIN products ON customers.id = products.id";

connection.query(leftJoin, (err, result) => {
  if (err) throw err;
  console.log("LEFT JOIN: \n", result);
});

// RIGHT JOIN
const rightJoin =
  "SELECT customers.name AS user, products.name AS favorite FROM customers RIGHT JOIN products ON customers.id = products.id";

connection.query(rightJoin, (err, result) => {
  if (err) throw err;
  console.log("RIGHT JOIN: \n", result);
});
