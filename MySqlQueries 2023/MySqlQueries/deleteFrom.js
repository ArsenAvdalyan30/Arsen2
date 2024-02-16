import connection from "./connection.js";

const deleteFrom = "DELETE FROM customers WHERE name = 'Amy'";

connection.query(deleteFrom, (err, result) => {
  if (err) throw err;
  console.log("1 record is deleted: " + result.affectedRows);
  console.log(result);
});

