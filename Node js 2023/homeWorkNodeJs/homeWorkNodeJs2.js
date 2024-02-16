// // homeWorkNode1
// const fs = require("fs");
// const path = require("path");

// const myPath = path.join("../javaScript", "NODEJS", "EVENT.js");

// function readAnyFile(somePath) {
//   try {
//     fs.readFile(somePath, "utf-8", (err, data) => {
//       if (err) throw new Error("i cant read this file");
//       console.log(data);
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }

// readAnyFile(myPath);

// // homeWorkNode2
// const fs = require("fs");
// const path = require("path");

// const myPath = path.normalize("./Eheey!IamHere!.txt");
// const myContent = "Cool!, i am created";

// function writeOrOverWriteFile(somePath, content) {
//   async function forFsMethod() {
//      const writer = await fs.writeFileSync(somePath, content);
//      return writer
//   }
//   forFsMethod()
//     .then(console.log("Look! the File is created!"))
//     .catch(console.error);
// }

// writeOrOverWriteFile(myPath, myContent);

// // homeWorkNode3
// const fs = require("fs");

// function appendToFile(somePath, content) {
//   fs.readFile(somePath, "utf8", (err, data) => {
//     if (err) throw err;
//     fs.appendFile(somePath, content, function (err) {
//       if (err) throw err;
//       console.log("everything is ok");
//     });
//   });
// }

// appendToFile("./NODEJS/PATH.js", "I have been added");

// // homeWorkNode4
// const fs = require("fs");
// const myPath = "./NODEJS/HomeWorkNode1.js";

// function toCheckExistence(somePath) {
//   fs.open(somePath, "r", (err) => {
//     if (err) throw err;
//     console.log("i am exist");
//   });
// }

// toCheckExistence(myPath);

// // homeWorkNode5
// const fs = require("node:fs/promises");
// const myPath = "./NODEJS/jsonStr.json";

// async function toReadJSON(somePath) {
//   try {
//     await fs.open(somePath, "r");
//     const content = await fs.readFile(somePath, "utf8");
//     let obj = JSON.parse(content);
//     return obj;
//   } catch (err) {
//     throw err;
//   }
// }

// async function showFinalResult(somePath) {
//   const result = await toReadJSON(somePath);
//   console.log(result);
// }

// showFinalResult(myPath);

// // homeWorkNode6
// const fs = require("fs");
// function toWriteJson(somePath, obj) {
//   try {
//     return fs.writeFile(somePath, JSON.stringify(obj), (err) => {
//       if (err) throw new Error("error occurred");
//       console.log("done");
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }

// toWriteJson("./NODEJS/fileForJson.json", { a: 30 });





