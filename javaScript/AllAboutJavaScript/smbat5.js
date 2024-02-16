// 1.
// function addsNum(number) {
//   return function (number1) {
//     return number + number1;
//   };
// }
// let adds1 = addsNum(1);
// console.log(adds1(3));

// 2.tarberak1
// function add_suffix(str) {
//   return function (str1) {
//     return str1 + str;
//   };
// }
// let add_ly = add_suffix("ly");
// console.log(add_ly("hopeless"));

// 2.tarberak2
// const add_suffix = (str) => (str1) => str1 + str;
// let add_ly = add_suffix("ly");
// console.log(add_ly("hopeless"));

// 3.
// function multiply(arr) {
//   return function (n) {
//     return arr.map((item) => item * n);
//   };
// }
// console.log(multiply([1, 2, 3])(2));

// 4;//ոնց անենք որ դատարկ զանգվածը չտպի ???//
// function group(arr, n) {
//   let newArr = [];
//   let newArr1 = [];
//   let newArr2 = [];
//   for (let i = 0; i < arr.length; i += n) {
//     for (let j = i; j < arr.length; j++) {
//       newArr.push(arr[j]);
//       newArr2.push(arr[j]);
//       if (newArr2.length === n && newArr2.length != 0) {
//         newArr2 = [];
//       }
//       if (newArr.length === n) {
//         newArr1.push(newArr);
//         newArr = [];
//         break;
//       }
//     }
//   }
//   newArr1.push(newArr2);
//   return newArr1;
// }
// console.log(group([1, 2, 3, 4, 5, 6, 8, 10], 4));

// 5.
// function product(a, b) {
//   return function (c, d) {
//     return function (e, f) {
//       return a * c * e + b * d * f;
//     };
//   };
// }
// console.log(product(10, 2)(5, 0)(2, 3));

// 6.
// function reverseWords(str){
// return str.split(' ').reverse().join(' ')
// }
// console.log(reverseWords(" the sky is blue"))

// 7.
// function mostExpensiveItem(obj) {
//   let t = 0;
//   let j;
//   for (let key in obj) {
//     if (obj[key] > t) {
//       t = obj[key];
//       j = key;
//     }
//   }
//   return j;
// }
// console.log(
//   mostExpensiveItem({
//     tv: 30,
//     skate: 20,
//   })
// );

// 8
// function countAll(str) {
//   let num = 0;
//   let letters = 0;
//   let obj = {};
//   let arr = str.split("");
//   for (let el of arr) {
//     if (el !== " " && typeof Number(el) === "number" && !isNaN(el)) {
//       num++;
//     } else if (el !== " ") {
//       letters++;
//     }
//   }
//   obj.LETTERS = letters;
//   obj.DIGITS = num;
//   return obj;
// }
// console.log(countAll("H3ll0 Wor1d"));

// 9.
// function CreateAuthor(name, surname, book) {
//   this.name = name;
//   this.surname = surname;
//   this.book = book;
// }
// const kyle = new CreateAuthor("Kyle", "Simpson", "You don't know js yet");
// console.log(kyle);
