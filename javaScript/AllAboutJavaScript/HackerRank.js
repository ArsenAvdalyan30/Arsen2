// Hacker1
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
//   console.log(countOfOranges);
//   //   return `${countOfApple} \n${countOfOranges}`;
// }
// countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);

// Hacker2
// let sen = "bambarduvalnik is polovni v poloni";
// let arr = sen.split(" ");
// let t = arr.reduce((accumulator, item) => item.length > accumulator.length ? item : accumulator);
// console.log(t);
// function getLarge(sen) {
//   let t = 0;
//   for (let i of arr) {
//     if (i.length > t) {
//       t = i.length;
//       b = i;
//     }
//   }
//   return b;
// }
// console.log(getLarge(sen));

// Hacker3
// let a = [1, 2, 3];
// let b = [3, 2, 1];
// function compareTriplets(a, b) {
//   let arr = [];
//   let alice = 0;
//   let bob = 0;
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] > b[i]) {
//       alice++;
//     } else if (a[i] < b[i]) {
//       bob++;
//     }
//   }
//   arr.push(alice);
//   arr.push(bob);
//   return arr;
// }
// console.log(compareTriplets(a, b));

// Hacker4
// let arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
// let t = arr.reduce((accum, item) => accum + item);
// console.log(t)

// Hacker5
// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [9, 8, 9],
// ];
// function diagonalDifference(arr) {
//   let arrDiagonal = [];
//   let g = matrix[0].length - 1;
//   for (let i = 0; i < matrix.length; i++) {
//     arrDiagonal.push(matrix[i][g]);
//     g--;
//   }
//   const r = arrDiagonal.reduce((acc, item) => acc + item);
//   let d = 0;
//   let arr2Diagonal = [];
//   for (let t = 0; t < matrix.length; t++) {
//     arr2Diagonal.push(matrix[t][d]);
//     d++;
//   }
//   const h = arr2Diagonal.reduce((acc, item) => acc + item);
//   let n = r - h;
//   return Math.abs(n);
// }
// console.log(diagonalDifference(matrix));

// Hacker6
// arr = [-4, 3, -9, 0, 4, 1];
// function plusMinus(arr) {
//   let positive = 0;
//   let negative = 0;
//   let zero = 0;
//   let arr1 = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       positive++;
//     } else if (arr[i] < 0) {
//       negative++;
//     } else if (arr[i] === 0) {
//       zero++;
//     }
//   }
//   arr1.push((positive / arr.length).toFixed(arr.length));
//   arr1.push((negative / arr.length).toFixed(arr.length));
//   arr1.push((zero / arr.length).toFixed(arr.length));
//   arr1.forEach((item) => console.log(item))
// }
// plusMinus(arr);

// Hacker7
// function staircase(n) {
//   for (let line = "#"; line.length <= n; line += "#") {
//     console.log(line);
//   }
// }
// console.log(staircase(8));

// Hacker8
// let candles = [4, 4, 1, 3];
// function birthdayCakeCandles(candles) {
//   let t = candles.reduce((acc, item) => acc > item ? acc : item);
//   let count = 0;
//   for(let candle of candles) {
//     if(candle === t) {
//         count++;
//     }
//   }
//   return count
// }console.log(birthdayCakeCandles(candles))

// Hacker9
// let pM = "12:45:54PM";
// let aM = "06:40:03AM";
// function timeConversion(s) {
//   let arr = s.split("");
//   let str;
//   if (arr.includes("P", "M")) {
//     for (let i = 0; i < 2; i++) {
//       arr.pop();
//     }
//     let t = String(arr[0] + arr[1]);
//     arr.shift();
//     arr.shift();
//     arr.unshift(Number(t));
//     arr.splice(0, 1, arr[0] + 12);
//     if (arr[0] === 24) {
//       arr[0] = "12";
//     }
//     str = arr.join("");
//     return str;
//   } else if (arr.includes("A", "M")) {
//     for (let i = 0; i < 2; i++) {
//       arr.pop();
//     }
//     let t = String(arr[0] + arr[1]);
//     arr.shift();
//     arr.shift();
//     arr.unshift(Number(t));
//     if (t >= 12) {
//       arr.splice(0, 1, "0" + Math.abs(arr[0] - 12));
//       if (arr[0] === 0) {
//         arr[0] = "00";
//       }
//       str = arr.join("");
//       return str;
//     } else {
//       let arr = s.split("");
//       arr.pop();
//       arr.pop();
//       s = arr.join("");
//       return s;
//     }
//   }
// }
// console.log(timeConversion(aM));

// Hacker10
// function kangaroo(x1, v1, x2, v2) {
//   let answer = "NO";
//   if ((x1 < x2 && v1 < v2) || (x1 > x2 && v1 > v2)) {
//     return answer;
//   } else if (x1 < x2 && v1 > v2) {
//     do {
//       x1 += v1;
//       x2 += v2;
//       if (x1 === x2) {
//         answer = "YES";
//         return answer;
//       }
//     } while (x1 < x2);
//   } else if (x2 < x1 && v2 > v1) {
//     do {
//       x2 += v2;
//       x1 += v1;
//       if (x2 === x1) {
//         answer = "YES";
//         return answer;
//       }
//     } while (x2 < x1);
//   }
//   return answer;
// }
// console.log(kangaroo(21, 6, 47, 3));

