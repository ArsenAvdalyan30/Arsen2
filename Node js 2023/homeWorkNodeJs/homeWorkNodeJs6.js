// Create a readable stream from a file and write content of file to another function.
// Էս խնդիրը որ գրեք, էնպես իմպլեմենտեք, որ ստուգի, եթե էդ ֆայլը արդեն ստեղծված  կա, ուրիշի ֆայլի մեջ գրի, որ ամեն անգամ ռան անելիս նոր ֆայլի մեջ գրի:

// // homeWorkNode2
// import fs from "fs";
// import path from "path";
// import { faker } from "@faker-js/faker";
// const readPath = "./NODEJS/LoremIpsum.txt";
// const writePath = "WriteLoremIpsum.txt";

// function readAndWriteStream(pathFrom, pathTo) {
//   const readAble = fs.createReadStream(pathFrom, "utf-8");
//   fs.access(writePath, (bool) => {
//     if (!bool) {
//       pathTo = faker.word.noun() + path.extname(pathTo);
//       const writeAble = fs.createWriteStream(pathTo);
//       readAble.pipe(writeAble);
//     } else {
//       const writeAble = fs.createWriteStream(pathTo);
//       readAble.pipe(writeAble);
//     }
//   });
// }

// readAndWriteStream(readPath, writePath);