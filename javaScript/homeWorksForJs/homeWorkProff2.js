// // homeWorkProf1
// function missingNum(arr) {
//   let result = 0;
//   for (let i = 1; i <= 10; i++) {
//     result += i;
//   }
//   return result - arr.reduce((sum, item) => sum + item);
// }
// console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]));

// // homeWorkProf2
// function threeLetterCollection(str) {
//   let arrOfChars = [];
//   for (let i = 0; i < str.length; i++) {
//     let chars = "";
//     for (let j = i; chars.length < 3; j++) {
//       chars += str[j];
//       if (chars.length === 3) {
//         arrOfChars.push(chars);
//       }
//     }
//   }
//   arrOfChars.sort();
//   return arrOfChars;
// }
// console.log(threeLetterCollection("click"));

// homeWorkProf3
// function getFrequencies(arr) {
//   let obj = {};
//   for (let el of arr) {
//     el in obj ? obj[el] +=1 : obj[el] = 1
//   }
//   return obj;
// }
// console.log(getFrequencies([true, false, true, false, false]));

// function getFrequencies(arr) {
//   return arr.reduce((obj, item) => item in obj ? obj[item] += 1 : obj[item] = 1, {})
// }
// console.log(getFrequencies([true, false, true, false, false]));

// homeWorkProf4
// function countNumberOfOccurrences(obj) {
//   let newObj = {};
//   for (let key in obj) {
//     if (`${obj[key]}` in newObj) {
//       newObj[`${obj[key]}`] = newObj[`${obj[key]}`] + 1;
//     } else {
//       newObj[`${obj[key]}`] = 1;
//     }
//   }
//   return newObj;
// }
// console.log(
//   countNumberOfOccurrences(
//     (obj = {
//       a: "moron",
//       b: "scumbag",
//       c: "moron",
//       d: "idiot",
//       e: "idiot",
//     })
//   )
// );
// es obyekti mej mi hat xelqy glxin mard chkar?)))

// homeWorkProf5
// function parseCode(str) {
//   let obj = {};
//   let arr1 = [];
//   let arr = str.split("0");
//   for (let i of arr) {
//     if (i) {
//       arr1.push(i);
//     }
//   }
//   obj.firstName = arr1[0]
//   obj.lastName = arr1[1];
//   obj.id = arr1[2];
//   return obj;
// }
// console.log(parseCode("michael0smith004331"));

// homeWorkProf6
// function getFrequencies(arr) {
//   let obj = {};
//   for (let el of arr) {
//     if (`${el}` in obj) {
//       obj[`${el}`] = obj[`${el}`] + 1;
//     } else {
//       obj[`${el}`] = 1;
//     }
//   }
//   return obj;
// }
// console.log(getFrequencies(["A", "B", "A", "A", "A"]));

// homeWorkProf7
// 7. Write a function that counts how many concentric layers a rug has.
// countLayers([
//   "AAAA",
//   "ABBA",
//   "AAAA"
// ]) ➞ 2
// 7 rd xndri pahanjy chishtn asac chhaskaca.

// // homeWorkProf8
// function findOccurrences(str, char) {
//   let obj = {};
//   let arr = str.split(" ");
//   for (let el of arr) {
//     let count = 0;
//     for (let i of el) {
//       if (i === char || i === char.toUpperCase()) {
//         count++;
//       }
//       obj[`${el}`] = count;
//     }
//   }
//   return obj;
// }
// console.log(findOccurrences("Create a nice JUICY function", "c"));
