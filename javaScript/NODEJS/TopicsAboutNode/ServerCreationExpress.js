// const express = require("express");
// const app = express();
// app.get("/", (req, res) => {
//   res.send("<h1>Hello World1</h1>");
// });

// app.listen(3000, () => console.log("Server started"));

// Example 2

// const express = require("express");
// const app = express();

// app.get("/", function (req, res) {
//   res.send("Hello World");
// });

// const server = app.listen(3000, function () {
//   const host = server.address().address;
//   const port = server.address().port;

//   console.log('Example app listening at', host, port )
// });

// Example 3

// const fs = require("fs");
// const express = require("express");
// const app = express();

// // This responds with "Hello World" on the homepage
// app.get("/", (req, res) => {
//   console.log("Got a GET request for the homepage");
//   res.send("Hello GET");
// });

// // This responds a POST request for the homepage
// app.post("/", (req, res) => {
//   console.log("Got a POST request for the homepage");
//   res.send("Hello POST");
// });

// // This responds a DELETE request for the /del_user page.
// app.delete("/del_user", (req, res) => {
//   console.log("Got a DELETE request for /del_user");
//   res.send("Hello DELETE");
// });

// // This responds a GET request for the /list_user page.
// app.get("/list_user", (req, res) => {
//   console.log("Got a GET request for /list_user");
//   fs.createReadStream("./LoremIpsum.txt", (chunk) => {                     /* ??? */
//     res.write(chunk);
//   });
// });

// // This responds a GET request for abcd, abxcd, ab123cd, and so on
// app.get("/ab*cd", (req, res) => {
//   console.log("Got a GET request for /ab*cd");
//   res.send("Page Pattern Match");
// });

// const server = app.listen(5000, () => {
//   let host = server.address().address;
//   let port = server.address().port;

//   console.log("Example app listening at http://%s:%s", host, port);
// });

// const express = require("express");
// const app = express();
// const PORT = 8000;

// app.get ("/getUSers", (req, res) => {
//   console.log("Got a GET request for /getUsers");
//   res.send();
// });

// app.listen(PORT, () => {
//   console.log(`app is listening on port ${PORT}`);
// });



