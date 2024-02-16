// // homeWorkProf1
// const addsNum = (n) => (i) => n + i;
// const adds10 = addsNum(10);
// console.log(adds10(20));

// // homeWorkProf2
// const add_suffix = (suf) => (word) => word + suf;
// const add_ly = add_suffix("ly");
// console.log(add_ly("hopeless"));

// // homeWorkProf3
// const multiply = (arr) => (n) => arr.map((item) => item * n);
// console.log(multiply([4, 6, 5])(10));

// // homeWorkProf4
// const group = (arr, n) => {
//   let arr1 = [];
//   let i = 0;
//   while (arr.length - 1 >= i) {
//     arr1.push(arr.slice(i, i + n));
//     i += n;
//   }
//   return arr1;
// };
// console.log(group([1, 2, 3, 4, 5], 1));

// //homeWorkProf5
// const product = (a, b) => (i, n) => (x, y) => a * i * x + b * n * y;
// console.log(product(10, 2)(5, 0)(2, 3));

// // homeWorkProf6
// const reverseWords = (str) => str.split(" ").reverse().join(" ");
// console.log(reverseWords("hello   world!  "));

// // homeWorkProf7
// function mostExpensiveItem(obj) {
//   let result;
//   let compare = 0;
//   for (let key in obj) {
//     if (obj[key] > compare) {
//       compare = obj[key];
//       result = key;
//     }
//   }
//   return result;
// }
// console.log(
//   mostExpensiveItem({
//     tv: 30,
//     skate: 20,
//     stereo: 50,
//   })
// );

// // homeWorkProf8
// function countAll(str) {
//   let obj = {};
//   let numbers = 0;
//   let letters = 0;
//   for (let el of str) {
//     if (el !== " " && typeof +el === "number" && !isNaN(el)) {
//       numbers++;
//     } else if (el !== " ") {
//       letters++;
//     }
//   }
//   obj.LETTERS = letters;
//   obj.DIGITS = numbers;
//   return obj;
// }
// console.log(countAll("H3ll0 Wor1d"));

// // homeWorkProf9
// function CreateAuthor(name, surname, book) {
//     this.name = name;
//     this.surname = surname;
//     this.book = book;
// }
// const kyle = new CreateAuthor("Kyle", "Simpson", "You don't know js yet")
// console.log(kyle);
