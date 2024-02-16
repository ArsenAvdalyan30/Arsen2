// const fs = require("fs");
// const path = require("path");

// const myPath = path.join("./", "NODEJS", "EVENT.js");
// console.log(myPath);

// console.log(1);

// // fs.readFile(myPath, "utf-8", (err, data) => {
// //   if (err) {
// //     console.error(err);
// //   }
// //   console.log(data);
// // });

// console.log(2)

// // // const data = fs.readFileSync(myPath, 'utf-8');
// // // console.log(data)

// // async function asyncFunction(params) {
// //     const data = await fs.readFileSync(myPath, 'utf-8');
// //     return data
// // }
// // asyncFunction().then(console.log).catch(console.error)

// console.log(3)

// // // fs promisnerov ayl vochte callbacknerov
// const fs = require('node:fs/promises')

// async function readFile() {
//     try{
//         const data = await fs.readFile('NODEJS/PATH.js', 'utf8')
//         console.log(data);
//     } catch (err) {
//         console.log(err)
//     }
// }

// readFile()

// // // browseri prompti poxaren node um kirarvum e hetevyal built-in module-y
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question('Write path which do you want to read ', (param) => {
//    console.log(param);
//    rl.close();
// });

// fs.access('./NODEJS/FSCOREMODULE.js', (err) => {
//     console.log(err ? 'file doesnt exists' : 'file exists')
//   });

// fs.exists('./NODEJS/EVENT.js', (e) => {
//     console.log(e ? 'it exists' : 'no passwd!');
//   });





















