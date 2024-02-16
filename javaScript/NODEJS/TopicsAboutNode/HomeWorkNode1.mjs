// // homeWorkNode1
// import fs from "fs";
// import path from "path";
// const myPath = path.join("NODEJS", "EVENT.js");
// console.log(myPath);
// function readMyFile(somePath) {
//   try {
//      fs.readFile(somePath, "utf8", (err, data) => {
//       if (err)
//         throw new Error("The path is wrong!. Check it once again please");
//       console.log(data);
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }
// readMyFile(myPath);

// // homeWorkNode2
// import fs from "fs";
// import path from "path";
// const myPath = path.normalize("./NODEJS/newFile.txt");
// console.log(myPath);
// async function createFile(fileName) {
//   try {
//     await fs.writeFileSync(fileName, "Hello newFile");
//     console.log('The file is created')
//   } catch (err) {
//     console.log(err);
//   }
// }
// createFile(myPath);
// console.log(2);

// // homeWorkNode3
// import fs from "fs";
// const path = "./NODEJS/EVENT.js";
// function appendToFile(somePath) {
//   try {
//       fs.appendFile(somePath, "Additional content", (err) => {
//       if (err) throw new Error("error occurred");
//       console.log("the content is added");
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }
// appendToFile(path);

// // homeWorkNode4
// import fs from "fs";
// const myPath = "./NODEJS/newFile.txt";
// function toCHeckExistence(somePath) {
//   try {
//     fs.access(somePath, (bool) => {
//       console.log(bool ? "such file does not exist" : "the file exists");
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }
// toCHeckExistence(myPath);

// // homeWorkNode5
// import fs from "fs";
// const myPath = "./NODEJS/EVENT.js";
// function copyMyFile(somePath) {
//   try {
//     fs.copyFile(somePath, "./NODEJS/newFile.txt", (err) => {
//       if (err) throw new Error("error occurred");
//       console.log("copy done");
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }
// copyMyFile(myPath);

// // homeWorkNode6
// import fs from "fs";
// const dirName = "NEWDIRECTORY";
// function creatDir(dirName) {
//   try {
//     fs.mkdir(dirName, (err) => {
//       if (err) throw new Error("error occurred");
//       console.log("Directory created");
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }
// creatDir(dirName)

// // homeWorkNode7
// import fs from "fs";
// import path from "path";
// const newPath = path.dirname("javaScriptNODEJSjsonStr.json");
// function checkDirExistence(somePath) {
//   try {
//     fs.access(newPath, (err) => {
//       console.log(`Directory ${err ? "does not exists" : "exists"}`);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }
// checkDirExistence(newPath);

// // homeWorkNode8
// import fs from "fs";
// const myPath = "../javaScript/homeWorksForJs";
// function readDir(somePath) {
//   try {
//     fs.readdir(somePath, (err, arr) => {
//       if (err) console.log(err);
//       console.log(arr);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }
// readDir(myPath);

// // homeWorkNode9
// import fs from "fs";
// const myPath = "./NEWDIRECTORY";
// function deleteDir(dirName) {
//   try {
//     fs.rmdir(dirName, (err) => {
//       if (err) console.log(err);
//       console.log("directory is deleted");
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }
// deleteDir(myPath);

// // homeWorkNode10
// import fs from "fs";
// const currentFile1 = "./NODEJS/newFile.txt";
// const movedFile1 = "../javaScript/NEWDIR/newFileMoved.txt";
// function moveFile(currentFile, movedFile) {
//   try {
//     fs.rename(currentFile, movedFile, (err) => {
//       if (err) console.log(err);
//       console.log("file is moved");
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }
// moveFile(currentFile1, movedFile1);


