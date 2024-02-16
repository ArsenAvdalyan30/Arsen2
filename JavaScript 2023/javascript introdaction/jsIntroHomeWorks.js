// // task 1

// console.log("" + 1 + 0); // '10'
// console.log("" - 1 + 0); //-1
// console.log(true + false); // 1
// console.log(6 / "3"); // 2
// console.log("2" * "3"); // 6
// console.log(4 + 5 + "px"); //9px
// console.log("$" + 4 + 5); //$45
// console.log("4" - 2); // 2
// console.log("4px" - 2); // NaN
// console.log(7 / 0); //infinity
// console.log(" -9 " + 5); // -9 5
// console.log(" -9 " - 5); // -14
// console.log(null + 1); //1
// console.log(undefined + 1); // NaN

// // task 2

// // 1. Check whether a given number is _negative_.
// // Print **true**, if it is negative, print **false** otherwise.
// // | Input | Output |
// // | ----- | ------ |
// // | 8     | false  |
// // | 0     | false  |
// // | -50   | true   |
// // | 10    | false  |
// if (8 < 0) console.log(true);
// else console.log(false);

// if (0 < 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// if (-50 < 0) console.log(true);
// else console.log(false);

// if (10 < 0) console.log(true);
// else console.log(false);

// // task 3

// // 2. Swap 2 variables, without using any other variables.
// // | Input          | Output         |
// // | -------------- | -------------- |
// // | a = 8, b = 12  | a = 12, b = 8  |
// // | a = 10, b = 20 | b = 10, a = 20 |

// a = 8;
// b = 12;
// a = b - a; // 4
// b = b - a; //8
// a = b + a; //12
// console.log(a, b);

// let a = 10;
// let b = 20;
// b = b - a;
// a = a + b;
// console.log(`a is ${a} b is ${b}`);

// // task 3

// // 3. Given two numbers print 0 if one of them is divisible by the other one, otherwise
// // print 1.
// // | Input | Output |
// // | ------| -------|
// // | 3,14  | 1      |
// // | 18,2  | 0      |

// let a = 18;
// let b = 2;
// if (a % b === 0 || b % a === 0) {
//   console.log(0);
// } else {
//   console.log(1);
// }

// // task 4

// // 4. Given a number. Print true if the number is even and false if it is odd.
// // | Input | Output |
// // | ------| -------|
// // | 123   | false  |
// // | 18    | true   |

// let n = 22;
// if (n % 2) console.log(false);
// else console.log(true);

// // task 5

// // 5. Given three sides of a triangle. Check whether the triangle is valid or not. Print
// // true if it is valid and false otherwise. (Triangle is valid if the sum of its two sides
// // are greater than the third side).
// // | Input | Output |
// // | ------| -------|
// // | 2,3,5 | false  |
// // | 3,4,5 | true   |
// // |10,5,12| true   |

// let a = 2;
// let b = 3;
// let c = 5;

// if (a + b > c && b + c > a && a + c > b) console.log(true);
// else console.log(false);

// // task 6

// // 6. Given number n (positive integer). Print the value of n + 2n + 3n (not
// //     multiplication).
// //     | Input | Output  |
// //     | ------| --------|
// //     | 3     | 369     |
// //     | 17    | 173451  |
// //     |100    |100200300|

// let n = 100;
// n = String(n);
// console.log(n + 2 * n + 3 * n);

// // task 7

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
// console.log(false && NaN); // false
// console.log(true || false); // true
// console.log(false || true); // true

// console.log("me" && "maybe I?"); // maybe I?
// console.log("" && "maybe I?"); // ""
// console.log("wow" && ""); // ""
// console.log("me" || "maybe I?"); // me
// console.log("" || "maybe I?"); // maybe I?
// console.log("wow" || ""); // wow

// console.log(null && "star wars"); // null
// console.log(undefined && "avengers"); //undefined
// console.log("game of thrones" && null); // null
// console.log(null || "star wars"); // star wars
// console.log(undefined || "avengers"); // avengers
// console.log("game of thrones" || null); // game of thrones

// //  * 3. Null and undefined are always equal

// console.log(null == undefined); //true
// console.log(undefined == null); //true
// console.log(undefined == ""); //false
// console.log(void 0 == null); // true

// // task 8

// // 1. Write a JavaScript for loop that will iterate from 0 to 15.
// // For each iteration, it will check if the current number is odd or even, and print

// // "0 is even"
// // "1 is odd"
// // "2 is even"

// for (let i = 0; i <= 15; i++) {
//   if (i % 2) {
//     console.log(`${i} is odd`);
//   } else {
//     console.log(`${i} is even`);
//   }
// }

// // 2. Write a JavaScript program which iterates the integers from 1 to 60.
// // But for multiples of three print "Fizz" instead of the number and
// // for the multiples of five print "Buzz".
// // For numbers which are multiples of both three and five print "FizzBuzz".

// for (let i = 1; i <= 60; i++) {
//   if (!(i % 3) && !(i % 5)) {
//     console.log("FizzBuzz");
//   } else if (!(i % 3)) {
//     console.log("Fizz");
//   } else if (!(i % 5)) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// // 3. Write a code to print a pattern using loop.

// // 1
// // 1 2
// // 1 2 3
// // 1 2 3 4
// // 1 2 3 4 5
// // 1 2 3 4 5 6
// // 1 2 3 4 5 6 7
// // 1 2 3 4 5 6 7 8

// let n = "";
// for (let i = 1; i <= 8; i++) {
//   n += i + " ";
//   console.log(n);
// }

// // 4. Write a code to find count of digits in n number

// // 12 - 2
// // 3476 - 4
// // 8 - 1
// let n = 3476;
// let count = 0;

// while (n > 0) {
//   let mn = n % 10;
//   n -= mn;
//   n /= 10;
//   count++;
// }
// console.log(count);

// // 5. Given n number. Write a program witch calculate sum of 1 - n numbers.

// // 5 - 15
// // 100 - 5050
// let n = 5;
// let sum = 0;

// while (n > 0) {
//   sum += n;
//   n--;
// }
// console.log(sum);

// let n = 5;
// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//   sum += i;
// }
// console.log(sum);

// // 6. Insert n digit and n number. Check whether the digits contains in the number or not.

// // 5, 2463 - "No"
// // 4, 6 - "No"
// // 8, 45689 - "Yes"
// let n = 4;
// let num = 2463;

// const checkNumExistence = (n, num) => {
//   while (num > 0) {
//     let x = num % 10;
//     if (x === n) {
//       console.log("Yes");
//       return;
//     } else {
//       num -= x;
//       num /= 10;
//     }
//   }
//   console.log("No");
//   return;
// };

// checkNumExistence(n, num);

// // 7. Write a code to calculate the sum of digits in n number

// // 2 - 2
// // 25 - 7
// // 895796 - 44

// let sum = 0;
// let n = 895796;

// while (n > 0) {
//   let digit = n % 10;
//   sum += digit;
//   n -= digit;
//   n /= 10;
// }
// console.log(sum);
