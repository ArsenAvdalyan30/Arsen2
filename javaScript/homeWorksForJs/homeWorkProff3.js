// howeWorkProf1
// function filterArray(arr) {
//     let filter = arr.filter((item) => typeof(item) != 'string')
//     return filter
// }
// console.log(filterArray([1, 2, "aasf", "1", "123", 123]))

// homeWorkProf2
// function isAvgWhole(arr) {
//   let sum = arr.reduce((acc, item) => acc + item);
//   return sum % arr.length == 0 ? true : false;
// }
// console.log(isAvgWhole([1, 2, 3, 4]));

// homeWorkProf3
// function firstVowel(str) {
//   let vowelsInEnglish = "aeiouy";
//   let upp = vowelsInEnglish.toUpperCase();
//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < vowelsInEnglish.length; j++) {
//       if (str[i] === vowelsInEnglish[j] || str[i] === upp[j]) {
//         return i;
//       }
//     }
//   }
// }
// console.log(firstVowel("pInEaPPLe"));

// homeWorkProf4
// let arr = [];
// for (let i = 0; i < 10000000; i++) {
//   arr.push(i);
// }
// function minMax(arr) {
//   let arrMinMax = [];
//   arrMinMax.push(arr.reduce((acc, item) => (item < acc ? item : acc)));
//   arrMinMax.push(arr.reduce((acc, item) => (item > acc ? item : acc)));
//   return arrMinMax;
// }
// console.log(minMax(arr));

// tarberak2
// function minMax(arr1) {
//   const arr = [];
//   arr.push(Math.min(...arr1), Math.max(...arr1));
//   return arr;
// }
// console.log(minMax(arr));
// homeWorkProf5
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
//     [-34, -54, -74],
//     [-32, -2, -65],
//     [-54, 7, -43],
//   ])
// );
