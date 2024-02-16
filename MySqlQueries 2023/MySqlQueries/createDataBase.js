import connection from "./connection";

const dbState = "CREATE DATABASE firstDB";

connection.query(dbState, (err, result) => {
  if (err) throw err;
  console.log("firstDB is created!");
});
