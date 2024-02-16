import connection from "../connection.js";

const updateTable =
  "UPDATE customers SET city = 'Hong-Kong' WHERE name = 'Arsen'";

connection.query(updateTable, (err, result) => {
  if (err) throw err;
  console.log(result.affectedRows + " record(s) updated!");
});
