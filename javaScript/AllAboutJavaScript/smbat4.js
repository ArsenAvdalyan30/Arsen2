// 1.tarberak1
// function getOddSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }
// console.log(getOddSum([1, 2, 3, 4, 5]));

// 1.tarberak2
// function getOddSum(arr) {
//   return arr.filter((item) => item % 2 !== 0).reduce((acc, item) => acc + item);
// }
// console.log(getOddSum([1, 2, 3, 4, 5]));

// 2.
// function swapMinMax(arr) {
//   let max = Math.max(...arr);
//   let min = Math.min(...arr);
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === max) {
//       arr[i] = min;
//     } else if (arr[i] === min) {
//       arr[i] = max;
//     }
//   }
//   return arr;
// }
// console.log(swapMinMax([11, 23, 4, 5, 1]));

// 3.
// function sumMakesTen(a, b) {
//   c = a + b;
//   if (c < 0) c = -c;
//   return c === 10 ? true : false;
// }
// console.log(sumMakesTen(8, 2));

// 4tarberak1
// function getBoxVolume(width, length, height) {
//   return width * length * height;
// }
// console.log(getBoxVolume(1, 2, 13));

// 4tarberak2
// function getBoxVolume(width) {
//   return function (length) {
//     return function (height) {
//       return width * length * height;
//     };
//   };
// }
// console.log(getBoxVolume(1)(2)(13))

// 5.
// function arrayOfMultiples(num, length) {
//   let arr = [];
//   if (num === 0) {
//     arr.push(num);
//     return arr;
//   }
//   for (let i = 1; i <= length; i++) {
//     arr.push(num * i);
//   }
//   return arr;
// }
// console.log(arrayOfMultiples(7, 3));

// 6.
// function getPrefixCount(arr, n) {
//   let sum = 0;
//   for (let el of arr) {
//     if (n === el.slice(0, n.length)) {
//       sum++;
//     }
//   }
//   return sum
// }
// console.log(getPrefixCount(["attention", "please", "attend"], "at"));

// 7.
// function rps(p1, p2) {
//   if (p1 === "Rock" && p2 === "Scissors") {
//     return "The winner is p1";
//   } else if (p1 === "Scissors" && p2 === "Rock") {
//     return "The winner is p2";
//   } else if (p1 === "Scissors" && p2 === "Paper") {
//     return "The winner is p1";
//   } else if (p1 === "Paper" && p2 === "Scissors") {
//     return "The winner is p2";
//   } else if (p1 === "Paper" && p2 === "Rock") {
//     return "The winner is p1";
//   } else if (p2 === "Paper" && p1 === "Rock") {
//     return "The winner is p2";
//   }
//   return "It's a draw";
// }
// console.log(rps("Rock", "Paper"));


