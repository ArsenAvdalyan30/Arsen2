import connection from "./connection.js";

const insertIntoMultipleState = "INSERT INTO customers (name, city) VALUE ?";

const values = [
  ["John", "Highway 71"],
  ["Peter", "Lowstreet 4"],
  ["Amy", "Apple st 652"],
  ["Hannah", "Mountain 21"],
  ["Michael", "Valley 345"],
  ["Sandy", "Ocean blvd 2"],
  ["Betty", "Green Grass 1"],
  ["Richard", "Sky st 331"],
  ["Susan", "One way 98"],
  ["Vicky", "Yellow Garden 2"],
  ["Ben", "Park Lane 38"],
  ["William", "Central st 954"],
  ["Chuck", "Main Road 989"],
  ["Viola", "Sideway 1633"],
];

connection.query(insertIntoMultipleState, [values], (err, result) => {
  if (err) throw err;
  console.log("Number of records inserted: " + result.affectedRows);
});

// The result object returned from the example above looks like this:

// {
//     fieldCount: 0,
//     affectedRows: 14,
//     insertId: 0,
//     serverStatus: 2,
//     warningCount: 0,
//     message: '\'Records:14  Duplicated: 0  Warnings: 0',
//     protocol41: true,
//     changedRows: 0
//   }
