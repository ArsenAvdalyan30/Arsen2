import connection from "./connection.js";

const insertIntoState =
  "INSERT INTO customers (name, city) VALUE ('Arsen', 'Yerevan')";

connection.query(insertIntoState, (err, result) => {
  if (err) throw err;
  console.log("1 record inserted!");
});
