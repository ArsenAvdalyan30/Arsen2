// 1.tarberak1
// function filterArray(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
// console.log(filterArray([1, 2, "a", "b"]));

// 1.tarberak2
// const filterArray = (arr) => arr.filter((item) => typeof item === "number");
// console.log(filterArray([1, 2, "a", "b"]));

// 2.
// function sortByLength(arr) {
//   return arr.sort((a, b) => a.length - b.length);
// }
// console.log(sortByLength(["a", "ccc", "dddd", "bb"]));

// 3.tarberk1
// function set(arr) {
//   let newArr = [];
//   for (let i of arr) {
//     if (!newArr.includes(i)) {
//       newArr.push(i);
//     }
//   }
//   return newArr
// }
// console.log(set([1, 3, 3, 5, 5]));

// 3.tarberk2
// function set(arr) {
//   let newArr = arr.reduce((arr1, item) => {
//     if (!arr1.includes(item)) {
//       arr1.push(item);
//     }
//     return arr1;
//   }, []);
//   return newArr;
// }
// console.log(set([1, 3, 3, 5, 5]));

// 4.
// function charIndex(word, n) {
//   if (word.includes(n)) {
//     let arr = [];
//     arr.push(word.indexOf(n), word.lastIndexOf(n));
//     return arr;
//   }
//   return undefined;
// }
// console.log(charIndex("circumlocution", "c"));

// 5.
// function spelling(word) {
//   let arr = [];
//   let str = "";
//   for (let i of word) {
//     str += i;
//     arr.push(str);
//   }
//   return arr;
// }
// console.log(spelling("happy"));

// 6.
// function clone(arr) {
//   let newArr = [...arr];
//   arr = [...newArr, arr];
//   return arr;
// }
// console.log(clone([1, 2, 3]));

// 7.
// function indexMultiplier(arr) {
//   let newArr = [];
//   if (arr.length) {
//     newArr = arr.map((item, index, arr) => item * index);
//     return newArr.reduce(function (acc, item, index, arr) {
//       /* newArr.reduce((acc , item, index, arr)=>acc + item) */
//       return acc + item;
//     });
//   }
//   return newArr;
// }
// console.log(indexMultiplier([1, 2, 3, 4, 5]));
