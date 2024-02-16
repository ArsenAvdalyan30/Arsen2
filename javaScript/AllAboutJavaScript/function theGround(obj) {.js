// function theGround(obj) {
//   return Object.values(obj).reduce((acc, item) =>
//     acc.length > item.length
//       ? acc
//       : acc.length === item.length
//       ? acc
//       : (acc = item)
//   );
// }
// console.log(theGround({ name: "stone", category: "alpha" }));

// function countOdds(numbers) {
//    return numbers.reduce((acc, item) => item % 2 ? acc+=1 : acc,0)
//   }
//   console.log(countOdds([1,5,2,6,5,3,9,2]))

// function checkPassword(password, password_repeat) {
//   return password === password_repeat && password.length >= 20;
// }
// console.log(
//   checkPassword(
//     "gizzard-fiesta-dispel-disgorge-never-chisel",
//     "gizzard-fiesta-dispel-disgorge-never-chisel"
//   )
// );

// Global
// Function
// Block
// Module
// Parameter

// 1. let is function scope and block scope
// 2. const is function scope and block scope
// 3. var is only function scope

// Global scope
// lex env {str: "hello", scope: function, ref => X}
// let str = "hello";

// function scope() {
//   // Function scope
//   // lex env {str2: "word", ref => Global lex env}
//   var str2 = "word";
//   str = "morning";
//   return str2;
// }

// console.log(str);
// console.log(scope());
// console.log(str);
// console.log(str2);

// if (true) {
//   // Block scope
//   // lex env {str3: "day", ref => Global lex env}
//   console.log(str);
//   let str3 = "day";
//   console.log(str3);
// }

// console.log(str3);

// 1
// const arr = [
//   {
//     name: "John",
//     age:20
//   },
//   {
//     name: "Smith",
//     age:21
//   },
//   {
//     name: "John",
//     age:24
//   },
//   {
//     name: "Smith",
//     age:30,
//     fn(){
//         return this.age
//     }
//   }

// ];

// function getName() {
//   this.city = "Moscow";
//   this.fullName = `${this.name} is from ${this.city} and ${this.age} years old`;
//   console.log(this.name);
// }

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[3].fn.call(arr[i]));
//   getName.call(arr[i]);
// }

// console.log(arr);

// // 2


// const obj2 = {
//   age: 24,
// };

// function getAge() {
//   function inner() {
//     return this.age;
//   }
//   return inner();
// }

// console.log(getAge.call(obj2));

// // 3

// const obj2 = {
//     age: 24,
//   };

// function getAge() {
//     this.age = 45
//   return function inner() {
//     return this.age;
//   };
// }

// console.log(getAge.call(obj2)());//undefined
// const a1 = getAge.call(obj2).call(obj2)//45
// console.log(a1);//45
// console.log(obj2.age);//45

// // 4

// const obj2 = {
//     age: 24,
//   };

// var age = 45

// function getAge() {
//    function  inner () {
//     return this.age;
//   };
//  return inner()
// }

// console.log(getAge.call(obj2));

// // 5
// const obj2 = {
//     age: 24,
//   };

// function getAge() {
//   function inner() {
//     return this.age;
//   }
//   return inner.call(this);
// }

// console.log(getAge.call(obj2));

// // 6 
// const obj2 = {
//     age: 24,
//   };

// function getAge() {
//   const inner = () => {
//     return this.age;
//   };
//  return inner();
// }
// console.log(getAge.call(obj2));//24

// // 7

// function Person(name, surname, age){
//     this.name = name
//     this.age = age
//     this.surname = surname
//     this.method = function (age) {
//         console.log(this.age);
//         return this.age = age
//     }
// }

// const user = new Person("John", "Smith", 24)
// const user1 = new Person("Anna", "Obek", 50)
// Person.newMethod = function (city) {
//     return 12
// }

// console.log(Person.newMethod());//12
// user.newMethod("France")
// user1.newMethod("Yerevan")
// console.log(user.city); // France
// console.log(user1.age); // 50
// console.log(user.age); // 24
// console.log(user1.city); // Yerevan

// console.log(user);
// console.log(user1);


// this
// constructor
// new 

// function Book(title, author) {
//   this.title = title;
//   this.author = author;
// }
// Book.prototype.getAuthor = function () {
//   return this.author;
// };
// Book.prototype.getTitle = function () {
//   return this.title;
// };

// const book1 = new Book("Harry Potter", "J.K. Rowling");
// console.log(book1.getAuthor());

// class Book1 {
//   constructor(title, author) {
//     this.title = title;
//     this.author = author;
//   }
//   getTitle() {
//     return this.title;
//   }
//   getAuthor() {
//     return this.author;
//   }
// }

// const b1 = new Book1("Harry Potter", "J.K. Rowling");
// console.log(b1.getAuthor());
// function Calculator() {}

// Calculator.prototype.add = function (num1, num2) {
//   return num1 + num2;
// };

// Calculator.prototype.multiply = function (num1, num2) {
//   return num1 * num2;
// };
// const c1 = new Calculator();
// console.log(c1.add(2, 5));

// class Calculator1 {
//   add(num1, num2) {
//     return num1 + num2;
//   }
//   multiply(num1, num2) {
//     return num1 * num2;
//   }
// }

// Calculator1.prototype.divide = (num1, num2) => {
//   return num1 / num2;
// };
// const c2 = new Calculator1();
// console.log(c2.divide(25, 2));


// console.log(c2.multiply(2, 5));
// const str = "Hello"
// console.log(str.__proto__.__proto__===Object.prototype);

// const num = 5
// console.log(num.__proto__.__proto__ === str.__proto__.__proto__);

// function foo(params) {
// }
// console.log(foo.__proto__.__proto__.__proto__ === null);

//  class User {

//   getItem(){

//   }
// }

// console.log(User.__proto__.__proto__ === Object.prototype);

// Էս օրինակի դեպքում ուշադիր եղեք Object քիվորդի համար 

//  class Object {

//   getItem(){

//   }
// }

// console.log(Object.__proto__.__proto__ === Object.prototype.__proto__);

// const obj = {
//   name:"Satenik"
// }

// const obj2 = {
//   age:10
// }

// const obj3 = {
//   city:"Yerevan",
//   name:"Anna"
// }

// // 1
// obj3.__proto__ = obj2
// obj2.__proto__ = obj

// // 2
// Object.setPrototypeOf(obj2, obj)
// Object.setPrototypeOf(obj3, obj2)

// // 3
// const obj4 = Object.create(obj3)
// console.log("name" in obj3);//true
// console.log(obj3.hasOwnProperty("age"));//false

// class User {
//   mapLetters(string) {
//     for (let i = 0; i < string.length; i++) {
//       if (string[i] in this) {
//         this[string[i]].push(i);
//       } else {
//         this[string[i]] = [i];
//       }
//     }
//     return this;
//   }
// }

// const p1 = new User();
// console.log(p1.mapLetters("dodo"));

// const p2 = new User();
// console.log(p2.mapLetters("lhello"));

// let dictionary = Object.create(null, {
//   toString: {
//     value() {
//       return Object.keys(this).join()
//     }
//   }
// });

// // your code to add dictionary.toString method

// // add some data
// dictionary.apple = "Apple";
// dictionary.__proto__ = "test"; // __proto__ is a regular property key here

// // only apple and __proto__ are in the loop
// for(let key in dictionary) {
//   console.log(key); // "apple", then "__proto__"
// }

// // your toString in action
// console.log(dictionary); // "apple,__proto__"



