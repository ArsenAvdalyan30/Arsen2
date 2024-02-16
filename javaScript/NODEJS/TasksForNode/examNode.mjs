// 1. What's the difference between exports and module.exports?
// Module.exports has a higher priority than export, and by
// changing the reference of exports we will lose it.

// var module = { exports: {} };

// var exports = module.exports;

// Below assignment breaks the object reference

// exports = {
//   add: (a, b) => a + b,
//   subtract: (a, b) => a - b,
// };

// return module.exports; // module.exports = {}

// 2. WHat will be the outPut in case of common standard if you run b.js file?

// a.js

// console.log(45);
// const { name } = require("./b.js");
// console.log(name);
// 45, 1, 12, John

// b.js

// console.log(1);
// module.exports = {
//   name: "john",
// };
// console.log(12);
// 1, 12

// 3. What will be the output in case of module standard if you run a.js file?

// a.mjs

// console.log(45);
// import { obj } from "./b.mjs";
// console.log(obj);
// 1, 12, 45, {name: John}

// b.mjs

// console.log(1);
// export const obj = {
//   name: "John",
// };
// console.log(12);

// 4. Implement a function to read a file via streams and write it in a different file.
// 1. Use "data" event
// 2. Use pipe method.

// import fs from "fs";

// function readAndWriteFileWithData(path) {
//   const readFile = fs.createReadStream(path, "utf-8");
//   const writeFile = fs.createWriteStream("fileForData.txt");
//   readFile.on("data", (chunk) => {
//     writeFile.write(chunk);
//   });
//   readFile.on("end", () => {
//     console.log("file is read");
//   });
// }
// readAndWriteFileWithData("./NODEJS/TasksForNode/PrintQuestions.js");

// pipe event
// import fs from "fs";
// import path from "path";

// const filePath = path.normalize("./NODEJS/TasksForNode/PrintQuestions.js");

// function readAndWriteFile(somePath) {
//   const readFile = fs.createReadStream(somePath, "utf-8");
//   const writeFile = fs.createWriteStream("./newFileForWriting.txt");
//   readFile.pipe(writeFile);
//   readFile.on("end", () => {
//     console.log("File is read");
//   });
// }
// readAndWriteFile(filePath);

// 5. Create a transform stream that converts incoming data, if it contains the word "hello, will remove and will transfer only other words.

// import { Transform } from "stream";
// const transformedData = new Transform({
//   transform(chunk, encoding, callback) {
//     callback(null, chunk.toString().replaceAll("hello", ""));
//   },
// });

// 6. Create an event emitter instance` eventOne and register a 2 listener,
// 1. When the event 'eventOne' is emitted, both the above listeners should be invoked.
// 2. Remove second listener and after emitting 'eventOne', it should call only first listener
// 3. Print count of listeners.

// import { EventEmitter } from "events";

// const event = new EventEmitter();

// const func1 = () => console.log("First listener");

// function func2() {
//   console.log("Second listener");
// }

// event.on("eventOne", func1);
// event.addListener("eventOne", func2);
// event.emit("eventOne");
// event.removeListener("eventOne", func2);
// event.emit("eventOne");
// console.log(event.listenerCount("eventOne"));

// 7. Task: Read a File
//    Description: Implement a function that reads the content of a text file and prints it to the console.
//    Requirements:
//    - The function should accept the file path as an argument.
//    - If the file exists, read its content and print it to the console.
//    - If the file doesn't exist, print an error message.

// import fs from "fs";
// function readFile(path) {
//   const reader = fs.readFile(path, "utf-8", (err, data) => {
//     if (err) console.log("Error occurred", err);
//     console.log(data);
//   });
// }

// readFile("./NODEJS/TasksForNode/ClassRandomObjsFaker.js");

// 8. What will be the output?

// const fs = require('fs')

// fs.readFile(__filename, () => {
//   console.log("this is readFile 1");
//   setImmediate(() => console.log("this is inner setImmediate inside readFile"));
//   process.nextTick(() =>
//     console.log("this is inner process.nextTick inside readFile")
//   );
//   Promise.resolve().then(() =>
//     console.log("this is inner Promise.resolve inside readFile")
//   );
// });

// process.nextTick(() => console.log("this is process.nextTick 1"));
// Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
// setTimeout(() => console.log("this is setTimeout 1"), 0);

// for (let i = 0; i < 2000000000; i++) {}
// "this is process.nextTick 1"
// "this is Promise.resolve 1"
// "this is setTimeout 1"
// "this is readFile 1"
// "this is inner process.nextTick inside readFile"
// "this is inner Promise.resolve inside readFile"
// "this is inner setImmediate inside readFile"

// <epam> 5-A

//  Attention: Please be advised that all the test questions are assumed to be written with the "use strict"
//  statement enabled. This means that strict mode is in effect and you should keep this in mind when
//  answering the questions.
//  1 - 11 What is the expected output of the following code snippet? Please select the correct answer from
//  the given options:

//  1.

//  function foo() {
//      x = 1;
//      console.log(x);
//  }

//  foo();
//  console.log(x);

//  var x = 5;
// 1, 1

//  2.

//  const person = { name: 'John' };
//  const sayHi = (name) => this.name;

//  console.log(sayHi.call(person, 'Lily'));
//  console.log(sayHi.apply(person, ['Ani']));
// undefined, undefined

//  3.

//  function print1(){
//      var name = 'Alice';
//      print2();
//  }

//  function print2(){
//      console.log(name);
//  }

//  print1();
//  print2();

//  var name;
// undefined, undefined

//  4.

// let result = [1, 2, NaN, {}, '', [], '0'].filter(item => item);

// console.log(result);
// [1, 2, {}, [], '0']

// 5.

// function foo() {
//     return a => {
//         console.log(this.a);
//     };
// }

// const obj1 = {
//     a: 2
// };

// const obj2 = {
//     a: 3
// };

// const bar1 = foo.call(null);
// const bar2 = foo.call(obj1);

// bar1.call(obj2);
// bar2.call(obj2);
// undefined, 2

// 6.

// const user = {
//     email: 'b@mail.com',
//     password: '12345',
// }

// const updateUser = ({ email, password }) => {
//     if (email) {
//         Object.assign(user, { email });
//     }

//     if (password) {
//         user.password = password;
//     }

//     return user;
// }

// const updatedUser = updateUser({ email: 'a@mail.com' });

// console.log(updatedUser === user);
// console.log(updatedUser.email);
// true, 'a@mail.com'

// 7.

// class List extends Array {
//     getLastItem() {
//         return this[this.length - 1];
//     }
// }

// const list = new List(10);
// console.log(list instanceof Object);
// console.log(list instanceof Function);
// console.log(list instanceof List);
// console.log(list instanceof Array);
//  true, false, true, true

// 8.

//  class Employee {
//     static id = 5;

//     constructor(name) {
//         this.name = name;
//     }

//     getName1 = () => {
//         return this.name;
//     }

//     getName2() {
//         return this.name;
//     }
// }

// const employee = new Employee('Bob');

// console.log(employee.hasOwnProperty('id'));
// console.log(employee.hasOwnProperty('name'));
// console.log(employee.hasOwnProperty('getName1'));
// console.log(employee.hasOwnProperty('getName2'));
// false, true, true, false

// 9.

// console.log('start');

// (async () => {
//     console.log(1);

//     await Promise.resolve();

//     console.log(2);
// })();

// console.log('end');
// 'start', 1, 2, 'end'

// 10.

// const promise = new Promise((resolve, reject) => {
//     setTimeout(resolve, 0, 2);
//     reject(1);
// });

// promise
//     .then(result => {
//         console.log(result);
//         return 3;
//     })
//     .catch(error => {
//         console.log(error);
//         return 4;
//     })
//     .then(result => {
//         console.log(result);
    // });
// 1, 4

// 11.
// const promise1 = new Promise(r => setTimeout(r, 10, 1));
// const promise2 = new Promise(r => setTimeout(r, 100, 2));
// const promise4 = Promise.reject(4);
// const promise3 = Promise.resolve(3);

// Promise
//     .all([promise1, promise2, promise3, promise4])
//     .then(result => console.log(result))
//     .catch(error => console.log(error));

// 4

// 12. Coding task: Implement the findIndex()method for arrays.
// Description: Write a function findIndex() that takes an array and a callback function as
// arguments, and returns the index of the first element in the array that satisfies the condition in
// the callback function. If no element satisfies the condition, it should return -1. The callback
// function should be passed one argument: the current element being tested. The findIndex()
// function should not use any built-in array methods, except for length and indexing syntax.
// Example usage:
// const arr = [1, 2, 3, 4, 5];
// const firstEvenNumberIndex = findIndex(arr, (elem) => elem % 2 === 0);
// console.log(firstEvenNumberIndex); // Output: 1

// const firstNegativeNumberIndex = findIndex(arr, (elem) => elem < 0);
// console.log(firstNegativeNumberIndex); // Output: -1


















