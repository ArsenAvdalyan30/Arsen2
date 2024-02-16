// 1.tarberak1
// function filterArray(arr) {
//   let newArr = [];
//   let t = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof(arr[i]) === "number") {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
// console.log(filterArray([1, 2, "a", "b"]));

// 1.tarberak2
// howeWorkProf1
// function filterArray(arr) {
//     let filter = arr.filter((item) => typeof(item) != 'string')
//     return filter
// }
// console.log(filterArray([1, 2, "aasf", "1", "123", 123]))

// 2tarberak1
// function isAvgWhole(arr) {
//   let t = 0;
//   for (let i = 0; i < arr.length; i++) {
//     t = t + arr[i];
//   }
//   return t % arr.length === 0 ? true : false;
// }
// console.log(isAvgWhole([1, 2, 3, 7]));

// 2tarberak2
// function isAvgWhole(arr) {
//     let sum = arr.reduce((acc, item) => acc + item);
//     return sum % arr.length == 0 ? true : false;
//   }
//   console.log(isAvgWhole([1, 2, 3, 4]));

3;
// function firstVowel(str) {
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i] === "a" ||
//       str[i] === "e" ||
//       str[i] === "i" ||
//       str[i] === "o" ||
//       str[i] === "u" ||
//       str[i] === "y"
//     ) {
//       return i;
//     }
//   }
// }
// console.log(firstVowel("hello"));

// 4tarberak1
// function minMax(arr) {
//   let newArr = [];
//   newArr.push(Math.min(...arr), Math.max(...arr));
//   return newArr;
// }
// console.log(minMax([1, 2, 3, 4, 5]));

// 4tarberak2
// function minMax(arr) {
//     let arrMinMax = [];
//     arrMinMax.push(arr.reduce((acc, item) => (item < acc ? item : acc)));
//     arrMinMax.push(arr.reduce((acc, item) => (item > acc ? item : acc)));
//     return arrMinMax;
//   }
//   console.log(minMax([1, 2, 3, 4, 5]));

// 5.tarberak1
// function findLargestNums(arr) {
//   let newArr = [];
//   for (let g of arr) {
//     newArr.push(Math.max(...g));
//   }
//   return newArr;
// }
// console.log(
//   findLargestNums([
//     [4, 2, 7, 1],
//     [20, 70, 40, 90],
//     [1, 2, 0],
//   ])
// );

// 5.tarberak2
// function findLargestNums(arr) {
//   let newArr = [];
//   for (let g of arr) {
//     if (Array.isArray(g)) {
//       newArr.push(g.reduce((acc, item) => (item > acc ? item : acc)));
//     }
//   }
//   return newArr;
// }
// console.log(
//   findLargestNums([
//     [4, 2, 7, 1],
//     [20, 70, 40, 90],
//     [1, 2, 0],
//   ])
// );



