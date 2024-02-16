// // homeWorkProf1
// function missingNum(arr) {
//   let result = 0;
//   for (let i = 1; i <= 10; i++) {
//     result += i;
//   }
//   return result - arr.reduce((sum, item) => sum + item);
// }
// console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]));

// // homeWorkProf2Tarberak1
// function getFrequencies(arr) {
//   let obj = {};
//   for (let el of arr) {
//     el in obj ? obj[el]++ : (obj[el] = 1);
//   }
//   return obj;
// }
// console.log(getFrequencies([true, false, true, false, false]));

// // homeWorkProf2Tarberak2
// function getFrequencies(arr) {
//   return arr.reduce((obj, item) => {
//     if (item in obj) {
//       obj[item] ++;
//     } else {
//       obj[item] = 1;
//     }
//     return obj;
//   }, {});
// }
// console.log(getFrequencies([true, false, true, false, false]));

// // homeWorkProf2Tarberak3    Satenik jan, es tarberaky TypeError a talis, u chem haskanum te xi.
// function getFrequencies(arr) {
//   return arr.reduce((obj, el) => (el in obj ? (obj[el] += 1) : (obj[el] = 1)), {});
// }
// console.log(getFrequencies(["A", "B", "A", "A", "A"]));

//homeWorkProf3Tarberak1
// function countNumberOfOccurrences(obj) {
//   let newObj = {};
//   for (let key in obj) {
//     if (obj[key] in newObj) {
//       newObj[obj[key]]++;
//     } else {
//       newObj[obj[key]] = 1;
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

// // homeWorkProf3Tarberak2
// function countNumberOfOccurrences(obj) {
//   return Object.values(obj).reduce((newObj, item) => {
//     if (item in newObj) {
//       newObj[item]++;
//     } else {
//       newObj[item] = 1;
//     }
//     return newObj;
//   }, {});
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

// // homeWorkProf4
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
let arr = [
  {
    name: "John",
    surName: "Wick",
    age: 25,
  },
  {
    name: "Tomas",
    surName: "Muler",
    age: 30,
  },
];

function getAges(arr) {
  return arr.reduce((acc, item) => acc + item["age"], arr[0]["age"]);
}
console.log(getAges(arr));
