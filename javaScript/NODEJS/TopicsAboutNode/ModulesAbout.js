// (function (exports, require, module, __filename, __dirname) {
//   // entire module code lives here
// });

// function addNums(...params) {
//   params.reduce((acc, item) => acc + item);
// }

// const obj = {
//   name: "John",
//   age: 30,
// };

// const obj1 = {
//   name: "Bruce",
//   surName: "Willis",
// };

// const str = "John Whick";

// const num = 3260;

// First way to add constructs to the module.exports object

// module.exports.addNums = addNums;
// module.exports.obj = obj;
// module.exports["obj1"] = obj1;
// module.exports["str"] = str;
// module.exports["num"] = num;

// console.log("This is the module object \n", module, "\n");
// console.log("This is the module.exports object \n", module.exports);

// Second way to add constructs to the module.exports object

// module.exports = {
//   addNums: addNums,
//   obj: obj,
//   obj1: obj1,
//   str: str,
//   num: num,
// };

// console.log("This is the module object \n", module, "\n");
// console.log("This is the module.exports object \n", module.exports);

// Third way to add constructs to the module.exports object

module.exports.addNums = function (...params) {
  return params.reduce((acc, item) => acc + item);
};

module.exports.obj = {
  name: "John",
  age: 30,
};

module.exports.obj1 = {
  name: "Bruce",
  surName: "Willis",
};

module.exports.str = "John Whick";

module.exports.num = 3260;

const PI = 3.14;

module.exports.lifeOfPi = PI;

// console.log("This is the module object \n", module, "\n");
// console.log("This is the module.exports object \n", module.exports);
// console.log(addNums(2, 8)); // ReferenceError: addNums is not defined
