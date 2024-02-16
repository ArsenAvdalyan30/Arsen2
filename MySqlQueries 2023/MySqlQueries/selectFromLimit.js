import connection from "./connection.js";

// 1
const selectWithLimit = "SELECT * FROM customers LIMIT 5";

connection.query(selectWithLimit, (err, result) => {
  if (err) throw err;
  console.log(result);
});

// 2: Start from position 3, and return the next 5 records
const selectWithLimitOffset = "SELECT * FROM customers LIMIT 5 OFFSET 2";

connection.query(selectWithLimitOffset, (err, result) => {
  if (err) throw err;
  console.log(result);
});

// 3: Shorter Syntax
const selectWithLimitOffsetShort = "SELECT * FROM customers LIMIT 2, 5";

connection.query(selectWithLimitOffsetShort, (err, result) => {
  if (err) throw err;
  console.log(result);
});
