// // homeWorkNode1
// const { EventEmitter } = require("events");
// const eventOne = new EventEmitter();
// function fn1() {
//   console.log(15);
// }
// function fn2() {
//   console.log(16);
// }
// eventOne.addListener("call", fn1);
// eventOne.on('call', fn2)
// eventOne.emit("call");

// // homeWorkNode2
// const { EventEmitter } = require("events");
// const eventForOneCall = new EventEmitter();
// eventForOneCall.once("call", (fn = () => console.log("will be called only one time")));
// eventForOneCall.emit("call");

// // homeWorkNode3
// const { EventEmitter } = require("events");
// const event = new EventEmitter();
// event.addListener('call', fn = (a, b) => console.log(a + b))
// event.emit('call', 5, 5)

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

// // homeWorkNode11
// const { EventEmitter } = require("events");
// const event = new EventEmitter();

// function listener() {
//   console.log("The shop is opened");
// }

// event.on ("open", listener);
// event.emit("open");

// event.removeListener('open', listener)
// console.log(event.listenerCount('open'))

// function shoError(err) {
//     throw err
// }

// event.on('err', shoError)
// event.emit('err', 'This is your error')

// const fs = require("fs");
// fs.writeFile("./NODEJS/codeExamples.js", "codeExamples", (err) => {
//   if (err) console.log(err);
//   console.log("file is created");
// });

// import fs from "fs";

// setTimeout(() => {
//   console.log(1);
// }, 0);

// setTimeout(() => {
//   console.log(2);

//   process.nextTick(() => {
//     console.log(3);
//   });

//   setImmediate(() => {
//     console.log(8);
//   });
// }, 0);

// setTimeout(() => {
//   console.log(4);
// }, 0);

// setTimeout(() => {
//   console.log(5);

//   Promise.resolve(6).then((res) => {
//     console.log(res);
//   });
// }, 0);

// setTimeout(() => {
//   console.log(7);
//   fs.readFile("./file.txt", "utf-8", (er, data) => {
//     console.log(data);
//   });
// }, 0);
//1, 2, 3, 8,4,5,6,7,data

// import fs from "fs";

// fs.readFile("./file.txt", (err, data) => {
//   console.log(1);
//   console.log(data);
//   setTimeout(() => {
//     console.log(3);
//   });
//   setImmediate(() => {
//     console.log(34);
//   });
// });
// setImmediate(() => {
//   console.log(23);
// });
//23, 1, data, 34, 3

// import { createReadStream } from "fs";

// let chunkIndex = 0;
// const readStream = createReadStream("./NODEJS/HomeWorkNode1.js");

// readStream.on("open", () => {
//   console.log("Started Reading...");
// });

// readStream.on("end", () => {
//   console.log("Completed Reading...");
// });

// readStream.on("data", (chunk) => {
//   console.log("Chunk: " + ++chunkIndex);
//   console.log("-----------------------------------------");
//   console.log(chunk);
//   console.log("\n");
// });

// import fs from "fs";

// function transferContent(filePath) {
//   const readStream = fs.createReadStream(filePath, "utf-8");
//   const uppercaseTransform = new Transform({
//     transform(chunk, encoding, callback) {
//       callback(null, chunk.toString().toUpperCase());
//     },
//   });
//   const writeStream = fs.createWriteStream("writeStream.txt");
//   readStream.pipe(uppercaseTransform).pipe(writeStream);
// }
// transferContent("./text");

// Create a readable stream from a file and write content of file to another function.
// Էս խնդիրը որ գրեք, էնպես իմպլեմենտեք, որ ստուգի, եթե էդ ֆայլը արդեն ստեղծված  կա, ուրիշի ֆայլի մեջ գրի, որ ամեն անգամ ռան անելիս նոր ֆայլի մեջ գրի:

// // homeWorkNode1
// import fs from "fs";
// import { Transform } from "stream";

// const upperCaseTransform = new Transform({
//   transform(chunk, encoding, callback) {
//     callback(null, chunk.toString().toUpperCase());
//   },
// });

// const lowerCaseTransform = new Transform({
//   transform(chunk, encoding, callback) {
//     callback(null, chunk.toString().toLowerCase());
//   },
// });

// const reverseTransform = new Transform({
//   transform(chunk, encoding, callback) {
//     callback(null, chunk.toString().split("").reverse().join(""));
//   },
// });
// function toTransformChunk(inputFilePath, outputFilePath, operation) {
//   try {
//     const readStream = fs.createReadStream(inputFilePath, "utf-8");
//     const writeStream = fs.createWriteStream(outputFilePath);
//     readStream.pipe(operation).pipe(writeStream);
//   } catch (err) {
//     console.log(err);
//   }
// }

// toTransformChunk(
//   "./NODEJS/LoremIpsum.txt",
//   "UpperLoremIpsum.txt",
//   reverseTransform
// );

// Create a readable stream from a file and write content of file to another function.
// Էս խնդիրը որ գրեք, էնպես իմպլեմենտեք, որ ստուգի, եթե էդ ֆայլը արդեն ստեղծված  կա, ուրիշի ֆայլի մեջ գրի, որ ամեն անգամ ռան անելիս նոր ֆայլի մեջ գրի:

// // homeWorkNode2
// import fs from "fs";
// import path from "path";
// import { faker } from "@faker-js/faker";
// const readPath = "./NODEJS/LoremIpsum.txt";
// const writePath = "WriteLoremIpsum.txt";

// function readAndWriteStream(pathFrom, pathTo) {
//   try {
//     const readAble = fs.createReadStream(pathFrom, "utf-8");
//     fs.access(writePath, (bool) => {
//       if (!bool) {
//         pathTo = faker.word.noun() + path.extname(pathTo);
//         const writeAble = fs.createWriteStream(pathTo);
//         readAble.pipe(writeAble);
//       } else {
//         const writeAble = fs.createWriteStream(pathTo);
//         readAble.pipe(writeAble);
//       }
//     });
//   } catch (error) {
//     console.log("error occurred", error);
//   }
// }

// readAndWriteStream(readPath, writePath);

// // homeWorkNode3
// import fs from "fs";

// const filePath = "./NODEJS/LoremIpsum.txt";

// function readAndSave(fileForReading, fileToSave) {
//   try {
//     const write = fs.createWriteStream(fileToSave);
//     fs.createReadStream(fileForReading, "utf-8").pipe(write);
//   } catch (error) {
//     console.error(error);
//   }
// }

// readAndSave(filePath, "./myFileToSave.txt");

// homeWorkNode4
// import fs from "fs";
// import { Transform } from "stream";

// const readFile = "./NODEJS/newFileForRead.js";
// const writeFile = "newFileForWriting";

// function transferOnlyString(fileForReading, fileForWriting) {
//   try {
//     const reader = fs.createReadStream(fileForReading, "utf-8");
//     const writer = fs.createWriteStream(fileForWriting);
//     const toTransform = new Transform({
//       transform(chunk, encoding, callback) {
//         callback(
//           null,
//           chunk
//             .toString()
//             .split("")
//             .filter((item, index) => Number.isNaN(+item))
//             .join("")
//         );
//       },
//     });
//     reader.pipe(toTransform).pipe(writer);
//   } catch (error) {
//     console.error(error);
//   }
// }

// transferOnlyString(readFile, writeFile);

// // homeWorkNode5;
// import fs from "fs";
// const path = "./NODEJS/LoremIpsum.txt";
// const arrOfReadStreams = [
//   fs.createReadStream(path, "utf-8"),
//   fs.createReadStream(path, "utf-8"),
//   fs.createReadStream(path, "utf-8"),
// ];
// function combineStreams(arr, singleWritable) {
//   const writeStream = fs.createWriteStream(singleWritable);
//   for (let el of arr) {
//     el.pipe(writeStream);
//   }
// }

// combineStreams(arrOfReadStreams, "newWriteAble.txt");

// import { createReadStream, createWriteStream } from "fs";

// function completeOperation(inputFile, outputFile, operation) {
//   const reader = createReadStream(inputFile);
//   const writer = createWriteStream(outputFile);
//   const upperCase = new Transform({
//     transform(chunk, encoding, callback) {
//       callback(null, chunk.toString().toUpperCase());
//     },
//   });
// }



















