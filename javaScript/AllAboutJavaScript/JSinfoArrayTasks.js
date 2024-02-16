// //task1
// const styles = ["Jazz", "Blues"];
// styles.push("Rock-n-Roll");
// styles[Math.floor((styles.length - 1) / 2)] = "Classics";
// console.log(styles.shift());
// styles.unshift("Rap", "Reggae)

// //task2
// let arr = ["a", "b"];
// arr.push(function () {
//   console.log(this);
// });
// arr[2]();
// console.log(arr)

// //task3
// function sumInput() {
//   let numbers = [];
//   while (true) {
//     let value = prompt("Please input a number");
//     if (value === "" || value === null || !isFinite(value)) {
//       break;
//     }
//     numbers.push(+value);
//   }
//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// }
// console.log(sumInput())

// // task4
// function getMaxSubSum(arr) {
//   let maxSum = 0;
//   let partialSum = 0;
//   for (let item of arr) {
//     partialSum += item;
//     maxSum = Math.max(maxSum, partialSum);
//     if (partialSum < 0) partialSum = 0;
//   }
//   return maxSum;
// }
// console.log(getMaxSubSum([-1, 2, 3, -9]));
