// const filterArray = (arr) => arr.filter((item) => typeof item === "number");

// console.log(filterArray([1, 2, "a", "b"]));

// function isAvgWhole(arr) {
//   return !(arr.reduce((acc, el) => acc + el, 0) % arr.length) ? true : false;
// }

// console.log(isAvgWhole([9, 2, 2, 5]));

// function minMax(arr) {
//   arr.sort((a, b) => a - b);
//   return [arr[0], arr[arr.length - 1]];
// }

// console.log(minMax([1, 2, 3, 6, 4, 5]));

// function bubble(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j + 1] < arr[j]) {
//         let tmp = arr[j + 1];
//         arr[j + 1] = arr[j];
//         arr[j] = tmp;
//       }
//     }
//   }
//   console.log([arr[0], arr[arr.length - 1]]);
// }

// bubble([1, 2, 3, 4, 9, 50, 5]);

// function findLargestNums(arr) {
//   let newArr = [];
//   for (let el of arr) {
//     newArr.push(Math.max(...el));
//   }
//   console.log(newArr);
// }

// findLargestNums([
//   [4, 2, 7, 1],
//   [20, 70, 40, 90],
//   [1, 2, 0],
// ]);

// function sortByLength(arr) {
//   let sortedArr = arr.sort((a, b) => a.length - b.length);
//   console.log(sortedArr);
// }

// sortByLength(["a", "ccc", "dddd", "bb"]);

// function set(arr) {
//   arr = arr.filter((item, index) => {
//     return arr.indexOf(item) === index;
//   });
//   console.log(arr);
// }

// set([1, 3, 3, 5, 5]);

// function set(arr) {
//   let filtered = [...new Set(arr)];
//   console.log(filtered);
// }

// set([1, 3, 3, 5, 5]);

// function unique(arr) {
//   let uniqueArr = [...new Set(arr)];
//   console.log(uniqueArr);
// }

// let values = [
//   "Hare",
//   "Krishna",
//   "Hare",
//   "Krishna",
//   "Krishna",
//   "Krishna",
//   "Hare",
//   "Hare",
//   ":-O",
// ];

// unique(values);

// function charIndex(word, char) {
//   let firstIndex = word.indexOf(char);
//   if (firstIndex === -1) return undefined;
//   let lastIndex = word.lastIndexOf(char);
//   return [firstIndex, lastIndex];
// }

// console.log(charIndex("circumlocution", "c"));

// function spelling(word) {
//   let spell = "";
//   let arr = [];
//   for (let el of word) {
//     spell += el;
//     arr.push(spell);
//   }
//   return arr;
// }

// console.log(spelling("happy"));

// function clone(arr) {
//   arr = [...arr, arr];
//   return arr;
// }

// console.log(clone([1, 1]));

// function indexMultiplier(arr) {
//   return arr
//     .map((item, index) => item * index)
//     .reduce((acc, item) => acc + item, 0);
// }

// console.log(indexMultiplier([1, 2, 3, 4, 5]));

// function getFirstIndex(arr, n) {
//   if (n <= 0) return [];
//   return arr.slice(0, n);
// }

// console.log(getFirstIndex([1, 2, 3, 4], 2));

// const arr1 = ["a", "b", "b", "c"];
// const arr2 = ["a", "b", "c", 1, 2, 4];
// const merge = (arr1, arr2) => {
//   arr1 = [...arr1, ...arr2];
//   arr1 = Array.from(new Set(arr1));
//   console.log(arr1);
// };

// merge(arr1, arr2);

// function duplicate(arr) {
//   arr = [...new Set(arr)];
//   console.log(arr);
// }

// duplicate(["John", "Taylor", "John"]);

// function toMap(letters) {
//   let newArr = [];
//   for (let el of letters) {
//     el = el.replace(el[0], el[0].toUpperCase());
//     newArr.push(el);
//   }
//   return newArr;
// }

// console.log(toMap(["mavis", "senaida", "letty"]));

// function pairs(arr) {
//   let newArr = [];
//   let j = arr.length;
//   for (let i = 0; i < Math.ceil(arr.length / 2); i++) {
//     newArr.push([arr[i], j - i]);
//   }
//   return newArr;
// }

// console.log(pairs([1, 2, 3, 4, 5, 6, 7]));

// function sumOdds(arr) {
//   let arr1 = arr.filter((item) => item % 2 !== 0);
//   let result = arr1.reduce((acc, item) => acc + item, 0);
//   return result;
// }

// console.log(sumOdds([22,1,3]));

// function swap(arr) {
//   let max = Math.max(...arr);
//   let min = Math.min(...arr);
//   let indexMax = arr.findIndex((item) => item === max);
//   let indexMin = arr.findIndex((item) => item === min);
//   let tmp = arr[indexMax];
//   arr[indexMax] = arr[indexMin];
//   arr[indexMin] = tmp;
//   return arr;
// }

// console.log(swap([11, 23, 4, 5, 1]));

// function sumDigits(a, b) {
//   return a + b === 10 ? true : false;
// }

// console.log(sumDigits(1, 8));

// function missingNum(arr) {
//   let newArr = [];
//   for (let i = 1; i <= 10; i++) {
//     newArr.push(i);
//   }
//   let compareResult = newArr.reduce((acc, item) => acc + item, 0);
//   let result = arr.reduce((acc, item) => acc + item, 0);
//   let finalResult = compareResult - result;
//   return finalResult;
// }

// console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]));

// function getFrequencies(arr) {
//   let obj = {};
//   for (let el of arr) {
//     if (el in obj) {
//       obj[el]++;
//     } else {
//       obj[el] = 1;
//     }
//   }
//   return obj;
// }

// console.log(getFrequencies(["A", "B", "A", "A", "A"]));

// function getFrequencies(arr) {
//   return arr.reduce((obj, item) => {
//     if (item in obj) {
//       obj[item]++;
//     } else {
//       obj[item] = 1;
//     }
//     return obj;
//   }, {});
// }

// console.log(getFrequencies(["A", "B", "A", "A", "A"]));

// function countNumberOfOccurrences(obj) {
//   return Object.values(obj).reduce((newObj, el) => {
//     if (el in newObj) {
//       newObj[el]++;
//     } else {
//       newObj[el] = 1;
//     }
//     return newObj;
//   }, {});
// }

// console.log(
//   countNumberOfOccurrences({
//     a: "moron",
//     b: "scumbag",
//     c: "moron",
//     d: "idiot",
//     e: "idiot",
//   })
// );

// function isPalindrome(str) {
//   return str.split("").reverse().join("") === str;
// }

// console.log(isPalindrome("racecar"));

// function bubble(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i + 1] < arr[i]) {
//       [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
//     }
//   }
//   return arr;
// }
// console.log(bubble([5, 8, 4, 15, 9]));

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("done"), 1000);
// });
// promise.then((result) => console.log(result));

// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// delay(3000).then(() => console.log("runs after 3 seconds"));

// function clock() {
//   return new Promise((resolve) => setTimeout(() => resolve(1)));
// }
// clock()
//   .then((res) => {
//     setTimeout(() => console.log(res), 1000);
//     return res;
//   })
//   .then((res) => {
//     setTimeout(() => console.log(res), 2000);
//     res++;
//     return res;
//   })
//   .then((res) => {
//     setTimeout(() => console.log(res), 3000);
//     res++;
//     return res;
//   })
//   .then((res) => {
//     setTimeout(() => console.log(res), 4000);
//     res++;
//     return res;
//   });

