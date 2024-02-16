import connection from "./connection.js";

const selectFrom = "SELECT * FROM customers";

connection.query(selectFrom, (err, result, fields) => {
  if (err) throw err;
  console.log(result);
});

const selectSomeColumnsFrom = "SELECT name, city FROM customers";
connection.query(selectSomeColumnsFrom, (err, result, fields) => {
  if (err) throw err;
  result.forEach((user) => console.log(`hello ${user.name}`));
});
