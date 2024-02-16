// homeWork1
// let arr = ["anymore", "raven", "me", "communicate",];
// let largest = arr[0].length;
// let smallest = arr[0].length;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].length > largest) {
//     largest = arr[i].length;
//   }
//   if (arr[i].length < smallest) {
//     smallest = arr[i].length;
//   }
// }
// console.log(largest + smallest);

// homeWork2
// let arr = [21, -9, 15, 2116, -71, 33];
// function getEqual(arr, number) {
//   let index;
//   let closest = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (number === arr[i]) {
//       index = i;
//       return index;
//     }
//     let a = Math.abs(Math.abs(number) - Math.abs(arr[i]));
//     let b = Math.abs(Math.abs(number) - Math.abs(closest));
//     if (a < b) {
//       index = i;
//       closest = arr[i];
//     }
//   }
//   return index;
// }
// console.log(getEqual(arr, -72));

// homeWork3
// let sentence = 'May the force be with you';
// let arr = sentence.split(' ');
// console.log(arr)