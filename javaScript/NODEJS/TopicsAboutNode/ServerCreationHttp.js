// // Example 1
// let users = [
//   {
//     id: 1,
//     name: "John",
//   },
//   {
//     id: 2,
//     name: "Wick",
//   },
// ];

// const http = require("http");
// const url = require("url");
// const server = http
//   .createServer((req, res) => {
//     const requestUrl = url.parse(req.url, true);
//     console.log(requestUrl);
//     if (requestUrl.pathname === "/users" && req.method === "PUT") {
//       updateData(res.req.requestUrl.query);
//     }
//     res.end();
//   })
//   .listen(5000, () => console.log("http server is running on port 5000"));

// function updateData(req, res, { id }) {
//   let requestBody = "";
//   req.on("data", (chunk) => {
//     requestBody += chunk;
//   });

//   req.on("end", () => {
//     requestBody = JSON.parse(requestBody);
//     let foundUser = users.find((el, i, arr) => {
//       if (el.id === id) {
//         arr[i] = requestBody;
//         return requestBody;
//       }
//     });
//   });
// }

// Example 2

// const http = require("http");
// const hostName = "Localhost";
// const port = 3000;
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   fs.readFile("./LoremIpsum.txt", "utf-8", (err, data) => {
//     if (err) throw err;
//     res.write(data)
//     res.end();
//   });
//   console.log("A request is made");
// });

// server.listen(port, hostName, () => {
//   console.log(`Listening on port ${port}`);
// });

// Example 3

// const http = require("http");
// const fs = require("fs");
// const hostName = "Localhost";
// const port = 8000;
// const server = http.createServer((req, res) => {
//   const readFile = fs.createReadStream("./LoremIpsum.txt", "utf-8");
//   readFile.on("data", (chunk) => {
//     res.write(chunk, console.log("Chunk is written"));
//     res.end();
//   });
// });
// server.listen(port, hostName, () => {
//   console.log(`Listening on port ${port}`);
// });



// const http = require("http");
// const PORT = 3000;
// const url = require("url");
// const product = [{ name: "Apple", id: "15" }];
// http
//   .createServer((req, res) => {
//     const requestedEndPoint = url.parse(req.url, true);
//     if (requestedEndPoint.pathname === "/product" && req.method === "GET") {
//       getProduct(requestedEndPoint.query, res);
//     } else if (
//       requestedEndPoint.pathname === "/product" &&
//       req.method === "POST"
//     ) {
//       postIntoProduct(req, res);
//     }
//   })
//   .listen(PORT, "localhost", () => {
//     console.log("listening port 3000");
//   });

// function postIntoProduct(req, res) {
//   let data1 = "";
//   req.on("data", (chunk) => {
//     console.log(chunk);
//     data1 += chunk;
//   });
//   req.on("end", () => {
//     product.push(JSON.parse(data1));
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.write(JSON.stringify(data1));
//     res.end();
//   });
// }

// function getProduct({ id }, res) {
//   const foundProduct = product.find((el) => el.id === id);
//   console.log(foundProduct);
//   res.writeHead(200, { "Content-Type": "application/json" });
//   res.write(JSON.stringify(foundProduct));
//   res.end();
// }