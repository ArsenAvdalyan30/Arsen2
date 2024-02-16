import fs from "fs";

fs.appendFile("appendedFile.txt", "hello content", (err) => {
  if (err) console.log(err);
  console.log("newFile is appended or created");
});

fs.open("openedFile.js", "w", (err) => {
  if (err) console.log(err);
  console.log("file is created by openFile");
});

fs.writeFile("WriteFile.txt", "Hello content", (err) => {
  if (err) console.log(err.message);
  console.log("file is created");
});

fs.appendFile("appendedFile.txt", "my new content", (err) => {
  if (err) console.log(err);
  console.log("content is appended successfully");
});

fs.writeFile("WriteFile.txt", "new content instead", (err) => {
  if (err) console.log(err.message);
  console.log("Replaced");
});

fs.unlink("appendedFile.txt", (err) => {
  if (err) console.log(err);
  console.log("File deleted");
});

fs.rename("WriteFile.txt", "renameWriteFile.txt", (err) => {
  if (err) console.log(err.message);
  console.log("Renamed");
});
