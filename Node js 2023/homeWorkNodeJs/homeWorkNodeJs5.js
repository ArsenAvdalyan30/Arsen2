// import fs from "fs";
// import Transform from "stream";

// function toTransformChunk(inputFilePath, outputFilePath, operation) {
//   const readStream = fs.createReadStream(inputFilePath, "utf-8");
//   const writeStream = fs.createWriteStream(outputFilePath);
//   readStream.pipe(operation).pipe(writeStream);
// }

// const uppercaseTransform = new Transform({
//   transform(chunk, encoding, callback) {
//     callback(null, chunk.toString().toUpperCase());
//   },
// });

// toTransformChunk(
//   "./NODEJS/LoremIpsum.txt",
//   "UpperLoremIpsum.txt",
//   uppercaseTransform
// );


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