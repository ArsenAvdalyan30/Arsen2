// class myClass {
//     constructor() {...}
//     method1() {...}
//     method2() {...}
//     method3() {...}
//     ...
// }

// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//     console.log(this.name);
//   }
// }
// let user = new User('John')
// user.sayHi()//John

// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//     console.log(this.name);
//   }
// }
// console.log(typeof User) // function

// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//     console.log(this.name);
//   }
// }
// console.log(typeof User)//function
// console.log(User === User.prototype.constructor)//true
// console.log(Object.getOwnPropertyNames(User.prototype))//constructor, sayHi

// // rewriting class User in pure functions
// //1. Create constructor function
// function User(name) {
//   this.name = name;
// }
// //a function prototype has 'constructor' property by default,
// //so we don't need to create it
// //2. Add the method to prototype
// User.prototype.sayHi = function () {
//   console.log(this.name);
// };

// //Usage
// let user = new User("John");
// user.sayHi();

// class User {
//     constructor() {}
// }
// console.log(typeof User)// function
// User()//TypeError: Class constructor User cannot be invoked without 'new'

// class User {
//     constructor() {}
// }

// console.log(User)//class User

// //class expression
// let User = {
//   sayHi() {
//     console.log("Hello");
//   },
// };

// let User = class MyClass {
//     sayHi() {
//         console.log(MyClass)
//     }
// }
// new User().sayHi()//[class MyClass]
// console.log(MyClass)//ReferenceError: MyClass is not defined

// function makeClass(phrase) {
//   // declare a class ande return it
//   return class {
//     sayHi() {
//       console.log(phrase);
//     }
//   };
// }
// // Create a new class
// let User = makeClass('Hello')
// new User().sayHi()// Hello

// class User {
//   constructor(name) {
//     // invokes the setter
//     this.name = name;
//   }

//   get name() {
//     return this._name;
//   }
//   set name(value) {
//     if (value.length < 4) {
//       console.log("Name is too short.");
//       return;
//     }
//     this._name = value;
//   }
// }

// let user = new User('John');
// console.log(user.name)// John
// user = new User('Joe')// name is too short

// class User {
//   ["say" + "Hi"]() {
//     console.log("Hello");
//   }
// }
// new User().sayHi()
// const obj = new User()
// obj.sayHi()

// // class fields
// class User {
//   name = "John";
//   sayHi() {
//     console.log(`Hello ${this.name}!`);
//   }
// }
// new User().sayHi();//Hello, John!

// class User {
//     name = 'John';
// }
// let user = new User()
// console.log(user.name); // John
// console.log(User.prototype.name); // undefined

// class User {
//     name = prompt('Name, please?')//John
// }
// let user = new User()
// console.log(user.name)//John

// class Button {
//   constructor(value) {
//     this.value = value;
//   }
//   click() {
//     console.log(this.value);
//   }
// }
// let button = new Button('hello');
// console.log(button.click)// [Function: click]
// button.click()// hello
// setTimeout(button.click, 1000);// undefined
// //to fix the problem
// setTimeout(()=>button.click(), 1000)//hello
// console.log(button)// {value: hello}

// class Button {
//   constructor(value) {
//     this.value = value;
//   }
//   click = () => {
//     console.log(this.value);
//   };
// }
// let button = new Button('hello');
// setTimeout(button.click, 1000); // hello
// console.log(button)

// class MyClass {
//     prop = value; // property

//     constructor(...) { // constructor
//         // ...
//     }

//     method(...) {} // method

//     get something(...) {} // getter method
//     set something(...) {} // setter method

//     [Symbol.iterator]() {} // method with computed name (symbol here)
//     // ...
// }

// //task1
// function Clock({ template }) {
//   let timer;

//   function render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = "0" + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = "0" + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = "0" + secs;

//     let output = template
//       .replace("h", hours)
//       .replace("m", mins)
//       .replace("s", secs);

//     console.log(output);
//   }

//   this.stop = function () {
//     clearInterval(timer);
//   };

//   this.start = function () {
//     render();
//     timer = setInterval(render, 1000);
//   };
// }

// let clock = new Clock({ template: "h:m:s" });
// clock.start();

// // class syntax
// class Clock {
//   constructor({ template }) {
//     this.template = template;
//   }

//   render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = "0" + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = "0" + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = "0" + secs;

//     let output = this.template
//       .replace("h", hours)
//       .replace("m", mins)
//       .replace("s", secs);

//     console.log(output);
//   }

//   stop() {
//     clearInterval(this.timer);
//   }
//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), 1000);
//   }
// }
// let clock = new Clock({ template: "h:m:s" });
// clock.start();

// class User {
//   constructor(name, age, city) {
//     this.name = name;
//     this.age = age;
//     this.city = city;
//   }
//   showName() {
//     console.log(`Hello ${this.name}`);
//   }
//   showAge = () => console.log(`i am ${this.age} years old.`);
// }

// class Persons extends User {
//   constructor(name, age, city, gender) {
//     super(name, age, city);
//     this.gender = gender;
//   }
// }

// const person1 = new Persons("John", 30, "Paris", "male");
// console.log(person1);
// person1.showName();
// person1.showAge();
// console.log(person1.__proto__);
// console.log(Persons.__proto__)
// console.log(User.__proto__)


