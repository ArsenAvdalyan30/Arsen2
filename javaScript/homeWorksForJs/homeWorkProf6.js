// //homeWorkProf1
// const getSumOfOddIntegers = (arr) =>
//   arr.filter((item) => item % 2 !== 0).reduce((acc, item) => acc + item, 0);
// console.log(getSumOfOddIntegers([0,2,4,6,8,10]));

// //homeWorkProf2
// function toSwapMinMax(arr) {
//   let min = arr[arr.indexOf(Math.min(...arr))];
//   arr[arr.indexOf(Math.min(...arr))] = arr[arr.indexOf(Math.max(...arr))];
//   arr[arr.indexOf(Math.max(...arr))] = min;
//   return arr;
// }
// console.log(toSwapMinMax([11, 23, 4, 5, 1]));

// //homeWorkProf3
// const sumMakesTen = (a, b) => (Math.abs(a + b) === 10 ? true : false);
// console.log(sumMakesTen(-12, 2));

// //homeWorkProf4Tarberak1
// const getBoxVolume = (width, length, height) => width * length * height;
// console.log(getBoxVolume(11, 1, 2));

// //homeWorkProf4Tarberak2
// function getBoxVolume(width) {
//   return function (length) {
//     return function (height) {
//       return width * length * height;
//     };
//   };
// }
// console.log(getBoxVolume(11)(1)(2));

// //homeWorkProf4Tarberak3
// const getBoxVolume = (width) => (length) => (height) => width * length * height;
// console.log(getBoxVolume(11)(1)(2));

// homeWorkProf5
// const arrayOfMultiples = (num, length) => {
//   let arr = [];
//   if (num === 0) {
//     return (arr = [0]);
//   }
//   for (let i = 1; arr.length < length; i++) {
//     arr.push(num * i);
//   }
//   return arr;
// };
// console.log(arrayOfMultiples(3, 1));

// homeWorkProf6
// function getPrefixCount(arr, pref) {
//   let count = 0;
//   for (let el of arr) {
//     if (el.substring(0, pref.length) === pref) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(getPrefixCount(["live","love","lie"], "l"));

// homeWorkProf7
// function rps(p1, p2) {
//   return p1 === "Rock" && p2 === "Paper"
//     ? "the winner is p2"
//     : p1 === "Paper" && p2 === "Rock"
//     ? "the winner is p1"
//     : p1 === "Rock" && p2 === "Scissors"
//     ? "the winner is p1"
//     : p1 === "Scissors" && p2 === "Rock"
//     ? "the winner is p2"
//     : p1 === "Paper" && p2 === "Scissors"
//     ? "the winner is p2"
//     : p1 === "Scissors" && p2 === "Paper"
//     ? "the winner is p1"
//     : "Its a draw";
// }
// console.log(rps("Rock", "Paper"));

// homeWorkProf8
const payments = [
  {
    studentId: 1, // Unique identifier for each student
    studentName: "John Doe", // Name of the student
    payedAmount: 1600, // Amount payed with this transaction
    year: 2020, // The payment year
  },
  {
    studentId: 1, // Unique for each student
    studentName: "John Doe",
    payedAmount: 1500,
    year: 2021,
  },
  {
    studentId: 1, // Unique for each student
    studentName: "John Doe",
    payedAmount: 1400,
    year: 2022,
  },
  {
    studentId: 1, // Unique for each student
    studentName: "John Doe",
    payedAmount: 1300,
    year: 2023,
  },
  {
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1500,
    year: 2020,
  },
  {
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1400,
    year: 2021,
  },
  {
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1300,
    year: 2023,
  },
  {
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1200,
    year: 2023,
  },
];

// // task1Tarberak1
// function findMaxPayment(pay) {
//   let compare = 0;
//   for (let obj of payments) {
//     for (let key in obj) {
//       if (key === "payedAmount") {
//         if (obj[key] > compare) {
//           compare = obj[key];
//           break;
//         }
//       }
//     }
//   }
//   return compare;
// }
// console.log(findMaxPayment(payments))

// // task1Tarberak2
// function findMaxPayment(pay) {
//   let compare = 0;
//   for (let obj of payments) {
//     if (obj["payedAmount"] > compare) {
//       compare = obj["payedAmount"];
//     }
//   }
//   return compare;
// }
// console.log(findMaxPayment(payments));

// // task1Tarberak3
// const findMaxPayment = (pay) =>
//   pay.reduce(
//     (acc, item) => (acc > item["payedAmount"] ? acc : item["payedAmount"]),
//     pay[0]["payedAmount"]
//   );
// console.log(findMaxPayment(payments));

// // task2Tarberak1
// function getSumOfPayment(pay) {
//   let sum = 0;
//   for (let obj of pay){
//     sum += obj['payedAmount']
//   }
//   return sum;
// }
// console.log(getSumOfPayment(payments));

// // task2Tarberak2
// const getSumOfPayment = (pay) =>
//   pay.reduce((acc, item) => acc + item["payedAmount"], 0);
// console.log(getSumOfPayment(payments));

// // task3Tarberak1
// function getCountOfBigPayments(pay) {
//   let count = 0;
//   for (let obj of payments) {
//     for (let key in obj) {
//       if (key === "payedAmount") {
//         if (obj[key] > 1500) {
//           count++;
//           break;
//         }
//       }
//     }
//   }
//   return count;
// }
// console.log(getCountOfBigPayments(payments));

// // task3Tarberak2
// function getCountOfBigPayments(pay) {
//   return pay.reduce((acc, item) => {
//     if (item["payedAmount"] > 1500) acc++;
//     return acc;
//   }, 0);
// }
// console.log(getCountOfBigPayments(payments));

// // task4Tarberak1
// function calcAverOfPayments(pay) {
//   let sum = 0;
//   let count = 0;
//   for (let obj of pay) {
//     for (let key in obj) {
//       if (key === "payedAmount") {
//         sum += obj[key];
//         count++;
//         break;
//       }
//     }
//   }
//   return sum / count;
// }
// console.log(calcAverOfPayments(payments));

// // task4Tarberak2
// function calcAverOfPayments(pay) {
//   function count(arr) {
//     return arr.reduce((acc, item) => {
//       if (item["payedAmount"]) {
//         acc++;
//       }
//       return acc;
//     }, 0);
//   }
//   let sum = pay.reduce((acc, item) => acc + item["payedAmount"], 0);
//   return sum / count(pay);
// }
// console.log(calcAverOfPayments(payments));

// // task5
// function getTotalSumOfStudents(arr) {
//   let id = arr[0]["studentId"];
//   let finalObj = {};
//   let sum = 0;
//   let arr1 = [];
//   for (let obj of arr) {
//     if (obj["studentId"] === id) {
//       sum += obj["payedAmount"];
//       finalObj["total"] = sum;
//       finalObj["studentId"] = obj["studentId"];
//       finalObj["studentName"] = obj["studentName"];
//     } else if (obj["studentId"] !== id) {
//       id = obj["studentId"];
//       sum = obj["payedAmount"];
//       arr1.push(Object.assign({}, finalObj));
//     }
//   }
//   arr1.push(Object.assign({}, finalObj));
//   return arr1;
// }
// console.log(getTotalSumOfStudents(payments));


