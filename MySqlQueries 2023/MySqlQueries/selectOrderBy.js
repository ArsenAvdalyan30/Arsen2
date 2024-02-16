import connection from "./connection.js";

// 1
const selectOrderBy = "SELECT * FROM customers ORDER BY name";

connection.query(selectOrderBy, (err, result) => {
  if (err) throw err;
  console.log(result);
});

// 2 DESC
const selectOrderByDESC = "SELECT * FROM customers ORDER BY name DESC";

connection.query(selectOrderByDESC, (err, result) => {
  if (err) throw err;
  console.log(result);
});
