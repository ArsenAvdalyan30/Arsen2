// homeWorkProf1
// let filterArray = (arr) => arr.filter((item) => typeof item === "number");
// console.log(filterArray([1, 2, "aasf", "1", "123", 123]));

// homeWorkProf2
// let sortByLength = (arr) => (sort = arr.sort((a, b) => a.length - b.length));
// console.log(sortByLength(["a", "ccc", "dddd", "bb"]));

// homeWorkProf3
// function set(arr) {
//   let finalArr = arr.reduce((arr1, item) => {
//     if (!arr1.includes(item)) {
//       arr1.push(item);
//     }
//     return arr1;
//   }, []);
//   return finalArr.sort((a, b) => a - b);
// }
// console.log(set([5, 2, 5, 5, 6, 5, 4, 5]));

// homeWorkProf4
// function charIndex(word, char) {
//   if (word.includes(char)) {
//     let arr = [];
//     arr.push(word.indexOf(char), word.lastIndexOf(char));
//     return arr;
//   } else {
//     return undefined;
//   }
// }
// console.log(charIndex("happy", "e"));

// homeWorkProf5
// function spelling(word) {
//   let str = "";
//   let arr = [];
//   for (let g of word) {
//     str += g;
//     arr.push(str);
//   }
//   return arr;
// }
// console.log(spelling("eagerly"));

// homeWorkProf6
// function clone(arr) {
//   let arr1 = [...arr];
//   arr.push(arr1);
//   return arr;
// }
// console.log(clone([1, 2, 3]));

// homeWorkProf7
// function indexMultiplier(arr) {
//   let arr1 = [];
//   if (arr.length) {
//     arr1 = arr.map((item, index) => item * index);
//     return arr1.reduce((acc, item) => acc + item);
//   }
//   return arr1;
// }
// console.log(indexMultiplier([1, 2, 3, 4, 5]));



// function abc (arr, s, a, d) {
//     let newArr = [];
//     for (let i = a;  < arr.length; i++) {

//     }
//     return newArr
// }
// console.log(abc([1, 2, 3, 4], 0, 2, 4))
