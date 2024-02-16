// Extend your existing CSV to JSON converter script to create an HTTP server
// using the 'http' module. The server should listen on a specific port for incoming HTTP requests.
// Implement the following routes to handle CRUD operations:

// - Route 1: POST '/exports': Convert and save all the CSV files in the given directory (get directory path from request body).
// - Route 2: GET '/files': Retrieve a list of all available converted JSON files.
// - Route 3: GET '/files/:filename': Retrieve a specific JSON data by its filename.
// - Route 4: DELETE '/files/:filename': Delete a specific JSON file by its filename.

const http = require("http");
const fs = require("fs");
const csvToJson = require("convert-csv-to-json");
const { readdir, createWriteStream, mkdir } = require("fs");
const path = require("path");
const url = require("url");
const PORT = 3000;

const server = http
  .createServer((req, res) => {
    const urlRequest = url.parse(req.url, true);
    if (req.url === "/exports" && req.method === "POST") {
      converterCSV(req, res);
    } else if (req.url === "/files" && req.method === "GET") {
      getFiles(res);
    } else if (urlRequest.pathname === "/files" && req.method === "GET") {
      console.log(req.url);
      getFileByName(urlRequest.query, res);
    } else if (urlRequest.pathname === "/files" && req.method === "DELETE") {
      deleteFileByName(urlRequest.query, res);
    }
  })
  .listen(PORT, () => console.log(`server is listening on port ${PORT}`));

function deleteFileByName({ filename }, res) {
  readdir(`./NODEJS/TasksForNode/ConvertedJSON`, (err, files) => {
    if (err) throw err;
    let foundFile = files.find(
      (file) => `${path.parse(file).name}` === filename
    );
    if (foundFile) {
      fs.unlink(`./NODEJS/TasksForNode/ConvertedJSON/${foundFile}`, (err) => {
        if (err) console.log(err);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write("File deleted");
        res.end();
      });
    }
  });
}

function getFileByName({ filename }, res) {
  readdir(`./NODEJS/TasksForNode/ConvertedJSON`, (err, files) => {
    if (err) throw err;
    let foundFile = files.find(
      (file) => `${path.parse(file).name}` === filename
    );
    if (foundFile) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify(foundFile));
      res.end();
    }
    res.writeHead(400, { "Content-Type": "application/json" });
    res.write("File doesn`t exist");
    res.end();
  });
}

function getFiles(res) {
  readdir(`./NODEJS/TasksForNode/ConvertedJSON`, (err, files) => {
    if (err) throw err;
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(files));
    res.end();
  });
}

function converterCSV(req, res) {
  let postData = "";
  req.on("data", (chunk) => {
    postData += chunk;
  });

  req.on("end", () => {
    postData = JSON.parse(postData);
    readdir(postData.directory, (err, files) => {
      if (err) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.write("Such directory doesn`t exist");
        res.end();
        throw err;
      }
      files.forEach((currentFile) => {
        if (path.extname(currentFile) === ".csv") {
          const parser = JSON.stringify(
            csvToJson.getJsonFromCsv(`${postData.directory}/${currentFile}`)
          );
          console.log(parser);
          mkdir(
            `${postData.directory}/ConvertedJSON`,
            { recursive: true },
            (err) => {
              if (err) throw err;
            }
          );
          const writer = createWriteStream(
            `${postData.directory}/ConvertedJSON/${
              path.parse(currentFile).name
            }.json`
          );
          writer.write(parser, (err) => {
            if (err) throw err;
          });
        }
      });
    });
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write("POST request worked, CSV files has been converted to JSON");
    res.end();
  });
}
