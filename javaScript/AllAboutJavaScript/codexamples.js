// let foo = "bar";
// console.log(typeof foo);// string
// foo = 4;
// console.log(typeof foo);// number
// foo = true;
// console.log(typeof foo);// boolean

// let a = 5;

// console.log(!!"0");//true

// let a;

// console.log(a);//Syntax error

// let a = null;

// if (a === null || a === undefined) {
//   // Todo Something
// }

// if (a == undefined) {
// console.log(5)//5
// }

// const obj = [1,2,3];

// console.log(obj == [1,2,3]);//false

// if (obj == {}) {
//   console.log(true);
// } else {
//   console.log(false);//false
// }

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);

// console.log(42 / 0);//Infinity

// console.log(-0 == 0);//true

// console.log(Number.isNaN('lkjj'))//false


// if (Number.isNaN("s")) {
//   console.log("this is a number");
// } else {
//   console.log("this is not a number");
// }

// console.log(typeof 5n);//bigint

// const x = BigInt(Number.MAX_SAFE_INTEGER);
// console.log(x);



// console.log(x + 1n === x + 2n);
// const a = 5n;
// console.log(a - 3000n);

// console.log(Number.MAX_SAFE_INTEGER + 2 == Number.MAX_SAFE_INTEGER + 1);

// const str = "lesson";

// console.log(str.toUpperCase());//LESSON
// console.log(str);//lesson

// const str1 = str.toUpperCase();

// console.log(str1, " Changed");//LESSON
// console.log(str, " initial string");//lesson
// console.log(str[3]);//s

// const sym1 = Symbol("Sym");
// console.log(sym1, " symbol 1");
// const sym2 = Symbol("Sym");
// console.log(sym2, " Symbol 2");

// console.log(sym1 === sym2);

// const a = "l";
// const b = Number(1);

// const sym3 = Symbol(4);

// console.log(sym3);
// console.log({} == {});






// console.log(Number(null));//0
// console.log(Number(undefined));//NaN
// console.log(Number(""));//0

// let stockPriceA = 12;
// let stockPriceB = "12";

// const totalStockPrice = stockPriceA + stockPriceB;

// console.log(totalStockPrice);//1212

// console.log(4 && "ddd" && {} && false && 5);//false

// const a = 10 * "5";
// const b = 10 / "5";
// const c = 10 % "5";
// const d = 10 - "5";
// const e = 10 + "5";

// console.log(a, " a");  //50
// console.log(b, " b");  // 2
// console.log(c, " c");  // 0
// console.log(d, " d");  //5
// console.log(e, " e");  //105

// const x = 10 + "20";
// const y = "20" + 10;

// const z = true + "10";
// console.log(z);//true10

// const z = true + 2;

// const y = false + 2;

// console.log(z, " z");
// console.log(y, " y");

// const x = 10 == Number("10");

// const y = true == 1;

// const z = true == "true";

// console.log(x, " x");//true
// console.log(y, " y");//true
// console.log(z, " z");//false




// var x = 1;

// console.log(x, " global scope");
// let x = 9
// function ff(x) {
//  // x = 7;
//   console.log(x);
//      console.log(x, " function scope");
//     x = 3;
// }
// console.log(x)
// ff(9);
// console.log(x)

// 'use strict'

// console.log(foo==null)//foo is not defined
// {
// function foo(){
//     console.log(5)
// }
// }
// console.log(foo())



// function a() {
//   var b = 5;
// }
//  console.log(b);//b is not defined


// function a() {
//   console.log(" ddd");
// }

// a(5);



// function b() {
//   // cccc
// }

// b();

// 'use strict'
// console.log(z); //undefined
// var z = 2;
// console.log(z);  //2
// var z;
// console.log(z);  //2
// z = 2;
// console.log(z);  //2



// console.log(a);
// const a = 1;
// console.log(a);


// var s;
// //s();
// s = function () {
//   console.log(1);
// };

// s()//1



// s();//1
// function s() {
//   console.log(1);
// }

// var a;
// a = 5;
// console.log(typeof a);//number

// console.log(a);//5
// {
//   let a = 5;
//   console.log(a);//5
// }







// const obj1 = {
//   name: "John",
//   surName: "Wick",
// };

// const obj2 = obj1;

// obj1.age = 32;

// console.log(obj2);   // 
// console.log(obj1 === obj2);//true





// const a = [
//   1,
//   "d",
//   { name: "Jonhn" },
//   function aaa() {
//     console.log("this is a function");
//   },
//   [1, 2],
// ];

// const nestedFunction = a[3];

// nestedFunction();
// console.log(a);




// const arr = Array.from("asdfggh");

// console.log(arr);

// console.log(Array.isArray([]));//true


// const a = [];

// console.log(a === []);//false

// const arrayOf = Array.of(7, 5);

// console.log(arrayOf);//[7, 5]

// const arrayConstructor = new Array(7,2);

// console.log(arrayConstructor);//[7,2]

// class Array {
//     static of() {
//         ...
//     }

//     push(3) {
//         this.
//     }
// }


// const fruits = ["Apple", "Banana"]

// const fruits = new Array(+('6' * 2))

// console.log(fruits);

// const arrayFromString = "a,s,d,f,g,h".split(' ');

// console.log(arrayFromString);

// [].flat()

// const array = [4, 6, 2, 3, 54];

// console.log(array[2]);


// const array1 = ["a", "b", "c"];
// const array2 = ["d", "f", "g"];

// const newArray = [...array1, ...array2];

// //  const newArray = array1.concat(array2);
// console.log(newArray);

// const arr = [1, 2];

// const arr1 = arr.map(function (item) {
//   return item + 1;
// });

// console.log(arr1, " new");
// console.log(arr, " original");

// 1. stanum e nor function vorpes argument
// 2. isk callbacky ira hertin stanum e 3 argument => element, index, henc array
// 3. verdardznum e nor array callbacki logikain hamapatasxan elementnerov

// Array.prototype.myMap = function (callback) {
//     // Write your code here
//     // this is the original array from which the map method was invoked
//     const newArray = [];
//     for (let i = 0; i < this.length; i++) {
//       newArray.push(callback(this[i], i, this));
//     }
//     return newArray;
//   };
  
//   const arr = [1, 2];
  
//   const arr1 = arr.myMap(function (item) {
//     return item + 1;
//   });
  
//   console.log(arr1, " new");
//   console.log(arr);




// function myfun(arr, val, index1, index2) {
//     let array = [...arr];
//     for (let i = index1; i < index2; i++) {
//       array[i] = val;
//     }
//     return array;
//   }
  
//   const result = myfun([1, 2, 3, 4], 0, 2, 4);
//   console.log(result, " res");




// const obj1 = {
//   name: "John",
//   surName: "Wick",
// };

// const obj2 = obj1;

// obj1.age = 32;

// console.log(obj2);
// console.log(obj1 === obj2);//true

// arr[3]

// const a = [
//   1,
//   "d",
//   { name: "Jonhn" },
//   function aaa() {
//     console.log("this is a function");
//   },
//   [1, 2],
// ];

// const nestedFunction = a[3];

// nestedFunction();
// console.log(a);

// const arr = Array.from("asdfggh");

// console.log(arr);

// console.log(Array.isArray([]));

// const a = [];

// console.log(a === []);

// const arrayOf = Array.of(7, 5);

// console.log(arrayOf);

// const arrayConstructor = new Array(7);

// console.log(arrayConstructor);

// class Array {
//     static of() {
//         ...
//     }

//     push(3) {
//         this.
//     }
// }

// const fruits = ["Apple", "Banana"];

// const fruits = new Array("Apple", "Banana", {});

// console.log(fruits);

// const arrayFromString = "a,s,d,f,g,h".split();

// console.log(arrayFromString);

// [].flat()

// const array = [4, 6, 2, 3, 54];

// console.log(array[2]);

// const array1 = ["a", "b", "c"];
// const array2 = ["d", "f", "g"];

// const newArray = [...array1, ...array2];

// // const newArray = array1.concat(array2);
// console.log(newArray);

// const arr = [1, 2];

// const arr1 = arr.map(function (item) {
//   return item + 1;
// });

// console.log(arr1, " new");
// console.log(arr, " original");

// 1. stanum e nor function vorpes argument
// 2. isk callbacky ira hertin stanum e 3 argument => element, index, henc array
// 3. verdardznum e nor array callbacki logikain hamapatasxan elementnerov

// Array.prototype.myMap = function (callback) {
//   // Write your code here
//   // this is the original array from which the map method was invoked
//   const newArray = [];
//   for (let i = 0; i < this.length; i++) {
//     newArray.push(callback(this[i], i, this));
//   }
//   return newArray;
// };

// const arr = [1, 2];

// const arr1 = arr.myMap(function (item) {
//   return item + 1;
// });

// console.log(arr1, " new");
// console.log(arr);

// const array = [1, 2, 3, 4, 5, 6, 7];

// console.log(array.copyWithin(0, 3, 6), " res");
// console.log(array, " array");

// const array = ["a", "b", "c"];

// const iterator1 = array.entries();

// console.log(iterator1.next(), " iterator");
// console.log(iterator1.next(), " iterator");
// console.log(iterator1.next(), " iterator");

// const array = [1, 30, 39, 29, 43, 10, 13];

// const isBelowForty = array.every(function (currentValue) {
//   return currentValue < 40;
// });

// console.log(isBelowForty, " result");
// console.log(array, " array");

// const array1 = [1, 2, 3, 4];

// const a = 6;
// array1.fill(a, 2, 4);

// console.log(array1, " array1");

// function myfun(arr, val, index1, index2) {
//   let array = [...arr];
//   for (let i = index1; i < index2; i++) {
//     array[i] = val;
//   }
//   return array;
// }

// const result = myfun([1, 2, 3, 4], 0, 2, 4);
// console.log(result, " res");

// const words = [
//   "spray",
//   "limit",
//   "elite",
//   "exuberant",
//   "destruction",
//   "present",
// ];

// const filteredArray = words.filter(function (word) {
//   return word.length > 6;
// });

// console.log(filteredArray, " filtered array");

// Array.prototype.myMap = function (callback) {
//   // Write your code here
//   // this is the original array from which the map method was invoked
//   const newArray = [];
//   for (let i = 0; i < this.length; i++) {
//     newArray.push(callback(this[i], i, this));
//   }
//   return newArray;
// };

// const items = [1, 2, "a", "b"];

// const numbersArray = items.filter((item) => typeof item === "number");

// console.log(numbersArray, " array");

// Array.prototype.myFilter = function (cb) {
//   const filteredArray = [];
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i, this)) {
//       filteredArray.push(this[i]);
//     }
//   }
//   return filteredArray;
// };

// const words = [
//   "spray",
//   "limit",
//   "elite",
//   "exuberant",
//   "destruction",
//   "present",
// ];

// const filteredArray = words.myFilter(function (word) {
//   return word.length > 6;
// });

// console.log(filteredArray, " filtered array");

// let numbers = [1, 2, 3];

// function getOrdinalSuffix(i) {
//   let j = i % 10,
//     k = i % 100;

//   if (j === 1...