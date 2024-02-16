// let user = {
//     name: "John Smith",
//     age: 35
//   };
// user = JSON.parse(JSON.stringify(user))
// console.log(user)

// let room = {
//   number: 23,
// };
// let meetup = {
//   title: "Conference",
//   occupiedBy: [{ name: "John" }, { name: "Alice" }],
//   place: room,
// };
// room.occupiedBy = meetup;
// meetup.self = meetup;
// console.log(JSON.stringify(meetup, function replacer(key, value) {
//     return key != "" && value == meetup ? undefined : value;
//   })
// );

// let clients = [
//   {
//     area: 5,
//     price: 110,
//   },
// ];
// let houses = [
//   {
//     area: 9,
//     price: 500,
//   },
// ];
// function realEstateBroker(clients, houses) {

// }

// let id = Symbol('id')
// console.log(id)

// let calculator = {
//   sum() {
//     return this.a + this.b;
//   },
//   mul() {
//     return this.a * this.b;
//   },
//   read() {
//     this.a = +prompt("a?");
//     this.b = +prompt("b?");
//   },
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// Variables

// re-declaration
//  var num = 12;
//  num = 45;
//  var num = 78;
//  console.log(num); // 78

// re-assignment
//  let num1 = 56;
//  num1 = 345
//  var num2 = 5;
//  num2 = 6

// constant

//  const num3 = 67;
//  const strNum3 = num3.toString(2);
//  console.log(strNum3.length)
//  console.log(strNum3)
// //  num3 = 78; // error TypeError: Assignment to constant variable.
//  console.log(strNum3 + undefined);
//  console.log(strNum3 - 3)
//  console.log(2**6)

//  // Hoisting and TDZ
//  // 1. let and const variables are hoisted but remain in TDZ
//  // 2. var variable is hoisted and initialized with the value of undefined

//  console.log(a); // error ReferenceError: Cannot access 'x' before initialization
//  let a = 1
//  console.log(b); // undefined
//  var b = 2
//  console.log(b); // 2

//  // Data types

//  // String

//  let str1 = "Welcome"
//  let str2 = 'Armenia'
//  let str3 = `${str1} to ${str2}`
//  let str4 =  String("John")
//  let str5 = 12..toString() //
//  let str6 = 12 + ""

//  // Number
//  let num4 = Number(4)
//  let num5 = 67
//  let num6 = NaN

//  // Boolean

//  let bool1 = Boolean(1)
//  console.log(bool1);
//  let bool2 = !4
//  console.log(bool2);
//  let bool3 =  !!5
//  console.log(!bool1);

// const a = 8;
// const showNumber = () => {
//   var a = 9;
//   return a;
// };
// showNumber();
// console.log(a);
// let a = 8;
// function showNumber2() {
//   var a = 5;
//   return a;
// }
// console.log(showNumber2());
// console.log(a);

// const a = 8;
// // const showNumber = (num) =>
// if (true) {
//   // if (typeof(num) === "number" && !isNaN(num)) {
//   if (a === 8) {
//     var b = a;
//   }
//   console.log(a);
// }

// };
// showNumber(7);

// console.log(true == 1); //true
// console.log(true == 0); //false
// console.log(true == "12"); //false
// console.log(true == "1"); //true
// console.log(false == "0"); //true
// console.log(10 && 4); //4
// console.log(0 && 4); //0

// console.log(10 || 0); //10
// console.log(0 || 43); //43

// console.log(true && false); //false
// console.log(false && NaN); //false
// console.log(true || false); //true
// console.log(false || true); //true

// console.log("me" && "maybe I?"); //maybe I?
// console.log("" && "maybe I?"); //''
// console.log("wow" && ""); //''
// console.log("me" || "maybe I?"); //me
// console.log("" || "maybe I?"); //maybe I?
// console.log("wow" || ""); //wow

// console.log(null && "star wars"); //null
// console.log(undefined && "avengers"); //undefined
// console.log("game of thrones" && null); //null
// console.log(null || "star wars"); //star wars
// console.log(undefined || "avengers"); //avengers
// console.log("game of thrones" || null); //game of thrones

// console.log(null == undefined); //true
// console.log(undefined == null); //true
// console.log(undefined == ""); //false
// console.log(void 0 == null); //false

// function countApplesAndOranges(s, t, a, b, apples, oranges) {
//   let newApples = [];
//   let newOranges = [];
//   let countOfApple = 0;
//   let countOfOranges = 0;
//   for (let i of apples) {
//     newApples.push(i + a);
//   }
//   for (let g of oranges) {
//     newOranges.push(g + b);
//   }
//   for (let x of newApples) {
//     if (x >= s && x <= t) countOfApple++;
//   }
//   for (let r of newOranges) {
//     if (r >= s && r <= t) countOfOranges++;
//   }
//   console.log(countOfApple);
//   console.log(countOfOranges)
// //   return `${countOfApple} \n${countOfOranges}`;
// }
// countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);

// let user = {
//   name: "John",
//   money: 1000,

//   [Symbol.toPrimitive](hint) {
//     console.log(`hint: ${hint}`);
//     return hint == "string" ? `{name: '${this.name}'}` : this.money;
//   },
// };
// console.log(user);
// console.log(+user)
// console.log(user + 500)

// homeWorkProf4
// function minMax(arr) {
//   let arrMinMax = [];
//   arrMinMax.push(Math.min(...arr));
//   arrMinMax.push(Math.max(...arr));
//   return arrMinMax;
// }
// console.log(minMax([1, 2, 3, 4, 5]));

// let arr = [1, 2, 3, 4, 5];
// let arr1 = [9, 8, 0]
// console.log(Math.max(...arr));
// let arr = [];
// for (let i = 0; i < 100000; i++) {
//   arr.push(i);
// }
// function minMax(arr) {
//   const arr1 = [];
//   arr1.push(Math.min(...arr), Math.max(...arr));
//   return arr1;
// }
// console.log(minMax(arr))

// Barev Satenik jan, mi qani harc unem.
// en 4rd xrndiry 2 tarberakov el run areci,
// code-i kardalu mijin aragutyuny motavorapes nuynn er` 0.32 second.
// heto pordzeci aveli mec array-i vra nuyny anem` 1-ic minchev 1000000,
// Math.max/min - ov stack lcvelu error tvec,
// hetevabar Math.max/min - y i tarberutyun reduce - i
// recursive methodov a ashxatum?
// bayc gorcnakanum erevi bany chi hasnum nran che vor
// Math.max/min - ov gorcoxutyun anenq u stack - y lcvi)?,
// Ha u mek el stack asi hisheci, es chisht em haskacel vor
// primitive type - eri depqum ev popoxakany ev ira arjeqy
// pahvum en stack - um, isk reference - neri depqum,
// popoxakany` stack - um, bayc arjeqy` heapum?
// "use strict";
// // console.log(a); //undefined
// if (true) {
//   //   console.log(a); //undefined
//   let a = 10;
//   console.log(a); //10
//   function anyFunction() {
//     console.log(a); //10
//     a = 30;
//     console.log(a); //30
//   }
//   console.log(a); //10
//   anyFunction();
// }
// console.log(a); //30
// console.log(a); //30

// const items = [1, 5, "a", NaN, undefined, "String", 123, "hello", 56];
// function myReduce(arr) {
//   return arr.reduce((obj, el) => {
//     // console.log(obj);
//     let type = typeof el;
//     if (type in obj) {
//       obj[type].push(el);
//     } else {
//       obj[type] = [];
//       obj[type].push(el);
//     }
//     return obj;
//   }, {});
// }
// console.log(myReduce(items));

// if(false) {
//     function ask() {
//         console.log('how are you')
//     }
// }
// ask()

// var greeting = "Hello";

// console.log(greeting);

// greeting = ."Hi";

// console.log("Howdy");

// saySomething("Hello","Hi");
// // Uncaught SyntaxError: Duplicate parameter name not
// // allowed in this context

// function saySomething(greeting,greeting) {
//     "use strict";
//     console.log(greeting);
// }

// let arr = [1, 5, 8, 5, 4, 6, 6];
// arr.count = 45;
// // for (let i = 0; i < arr.length; i++) {
// //   console.log(arr[i]);
// // }
// for(let g of arr) {
//     console.log(g)
// }

// 'use strict'
// a = 5;
// console.log(a)
