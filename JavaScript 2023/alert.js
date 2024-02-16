// let user = {};
// user.name = 'John';
// user.surName = 'Smith';
// user.name = 'Pete';
// delete user.name
// console.log(user)

// function isEmpty(obj) {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// }
// let obj = { name: "John" };
// console.log(isEmpty(obj));

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// function calculateSalaries(obj) {
//   return Object.values(obj).reduce((acc, salary) => acc + salary);
// }
// console.log(calculateSalaries(salaries));

// let sum = 0;

// for (let key in salaries) {
//   sum += salaries[key];
//   console.log(key);
// }
// console.log(sum);

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// console.log(menu);

// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (!isNaN(obj[key])) {
//       obj[key] *= 2;
//     }
//   }
//   return obj;
// }
// console.log(multiplyNumeric(menu));

// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === "number") {
//       obj[key] *= 2;
//     }
//   }
// }
// multiplyNumeric(menu);
// console.log(menu);

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function () {
//     console.log(this.step);
//     return this;
//   },
// };

// ladder.up().up().down().showStep().down().showStep();

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();
// ladder.down();
// ladder.showStep();

// const calculator = {
//   read() {
//     this.a = +prompt("a?");
//     this.b = +prompt("b?");
//   },
//   sum() {
//     return this.a + this.b;
//   },
//   mul() {
//     return this.a * this.b;
//   },
// };
// calculator.read();
// calculator.sum();
// calculator.mul();

// function makeUser() {
//     return {
//       name: "John",
//       ref() {
//         return this;
//       }
//     };
//   }

//   let user = makeUser();
//   console.log(user)
//   console.log( user.ref().name );

// function Calculator() {
//   this.read = () => {
//     this.a = +prompt("a?");
//     this.b = +prompt("b?");
//   };
//   this.sum = () => this.a + this.b;

//   this.mul = () => this.a * this.b;
// }

// let calculator = new Calculator();
// calculator.read();
// console.log(calculator);
// console.log("Sum=" + calculator.sum());
// console.log("Mul=" + calculator.mul());

// function Accumulator(startingValue) {
//   this.value = startingValue;
//   this.read = function () {
//     this.value += +prompt(`Initial value is ${this.value}`);
//   };
// }
// let accumulator = new Accumulator(5);
// accumulator.read();
// accumulator.read();
// console.log(accumulator.value);

// function Foo(a, b) {
//   this.a = a;
//   this.b = b;
// }
// const foo1 = new Foo("hello", "John");
// console.log(foo1);
// console.log(foo1.__proto__ === Foo.prototype);

// const getCharCount = (char, word) => {
//   let count = 0;
//   for (let el of word) {
//     el === char && count++;
//   }
//   return count;
// };

// console.log(getCharCount("c", "chamber of secrets"));

// function getHighestDigit(num) {
//   let highestDigit = 0;
//   while (num > 0) {
//     let remainder = num % 10; //9
//     highestDigit < remainder && (highestDigit = remainder);
//     num = (num - remainder) / 10;
//   }
//   return highestDigit;
// }

// console.log(getHighestDigit(37859456));

// const findPerimeter = (length, width) => 2 * length + 2 * width;

// console.log(findPerimeter(20, 10));

// const getLength = (str) => {
//   let i = 0;
//   let arr = [];
//   while (true) {
//     arr.push(str[i]);
//     i++;
//     if (arr.join("") === str) {
//       return i;
//     }
//   }
// };

// console.log(getLength("Hello World"));

// const boolToString = (bool) => {
//   bool = bool.toString();
//   console.log(bool);
//   console.log(typeof bool);
// };
// boolToString(false);

// function compareToZero(num) {
//   return num <= 0 ? true : false;
// }
// console.log(compareToZero(8));

// const isPlural = (word) => (word[word.length - 1] === "s" ? true : false);
// console.log(isPlural("Changes"));

// const getAmountOfPotatoes = (word) => {
//   console.log(word.split("potato"));
//   return word.split("potato").length - 1;
// };

// console.log(getAmountOfPotatoes("potatodsfdsfsdpotatosdfsdfpotatoasdpotato"));
