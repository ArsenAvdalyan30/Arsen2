const modulesAbout = require("./ModulesAbout.js");
// console.log(modulesAbout)

const addNums = modulesAbout.addNums(2, 8);
console.log(
  `This is the result of call of required addNums function \n`,
  addNums
);
console.log(`PI = ${modulesAbout.lifeOfPi}`);
