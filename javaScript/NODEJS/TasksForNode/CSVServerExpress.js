const express = require("express");
const { readdir, mkdir, createWriteStream } = require("fs");
const app = express();
const PORT = 8000;
const fs = require("fs");
const path = require("path");
const csvToJson = require("convert-csv-to-json");

app.use(express.json());

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

app.post("/exports", (req, res) => {
  convertCSV(req, res);
});

app.get("/files", (req, res) => {
  getFiles(req, res);
});

app.get("/files1", (req, res) => {
  getFileByName(req.query, res);
});

app.delete("/files", (req, res) => {
  deleteByName(req.query, res);
});

function deleteByName({ filename }, res) {
  readdir(`./NODEJS/TasksForNode/convertedCSV`, (err, files) => {
    if (err) throw err;
    let foundFile = files.find(
      (file) => `${path.parse(file).name}` === filename
    );
    if (foundFile) {
      fs.unlink(`./NODEJS/TasksForNode/convertedCSV/${foundFile}`, (err) => {
        if (err) throw err;
      });
    }
  });
  res.send("File is deleted");
  res.end();
}

function getFileByName({ fileName }, res) {
  readdir(`./NODEJS/TasksForNode/convertedCSV`, (err, files) => {
    if (err) throw err;
    let foundFile = files.find(
      (file) => `${path.parse(file).name}` === fileName
    );
    if (foundFile) {
      let jsonData = "";
      const reader = fs.createReadStream(
        `./NODEJS/TasksForNode/convertedCSV/${foundFile}`,
        "utf-8"
      );
      reader.on("data", (chunk) => {
        jsonData += chunk;
        console.log(jsonData);
      });
      reader.on("end", () => {
        res.send(JSON.stringify(jsonData));
      });
    } else {
      res.send(JSON.stringify("File does not exists"));
      res.end();
    }
  });
}

function getFiles(req, res) {
  const dirPath = `NODEJS/TasksForNode/convertedCSV`;
  readdir(dirPath, (err, files) => {
    if (err) throw err;
    res.send(JSON.stringify(files));
    res.end();
  });
}

function convertCSV(req, res) {
  readdir(req.body.directory, (err, files) => {
    if (err) throw err;
    let newDirPath = `${req.body.directory}/convertedCSV`;
    mkdir(newDirPath, { recursive: true }, (err) => {
      if (err) throw err;
    });
    files.forEach((file) => {
      if (path.extname(file) === ".csv") {
        createWriteStream(`${newDirPath}/${path.parse(file).name}.json`).write(
          JSON.stringify(
            csvToJson.getJsonFromCsv(`${req.body.directory}/${file}`)
          ),
          (err) => {
            if (err) throw err;
          }
        );
      }
    });
  });
  res.send(JSON.stringify("JSON files are converted!"));
  res.end();
}
