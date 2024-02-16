// homeWorkProf1tarberak1
// function getFirstElements(arr, n) {
//   let slicedArr = [];
//   if (n > 0) {
//     slicedArr = arr.slice(0, n);
//   }
//   return slicedArr;
// }
// console.log(getFirstElements([3, 5, 223, 54, 1, 6, 3, 78, 8, 4], 3));

// homeWorkProf1tarberak2
// const getFirstElements = (arr, n) => n > 0 ? arr.slice(0, n) : [];
// console.log(getFirstElements([3, 5, 223, 54, 1, 6, 3, 78, 8, 4], 0))

// homeWorkProf2
// function unionArray(arr1, arr2) {
//   let uniArray = [...arr1, ...arr2].reduce((arr3, item) => {
//     if (!arr3.includes(item)) {
//       arr3.push(item);
//     }
//     return arr3;
//   }, []);
//   return uniArray;
// }
// console.log(unionArray(["a", "b", "c"], [1, 2, 4]));

// homeWorkProf3
// function removeDublicatesItems(arr) {
//   let arr1 = arr.filter((item, i) => arr.indexOf(item) === i);
//   return arr1;
// }
// console.log(removeDublicatesItems([1, 0, 1, 0]));

//homeWorkProf4
// function removeSpecials(str) {
//   let newStr = "";
//   for (let i of str) {
//     if (
//       i === " " ||
//       i === "-" ||
//       i === "_" ||
//       (typeof Number(i) === "number" && !isNaN(i)) ||
//       i.toUpperCase() !== i.toLowerCase()
//     ) {
//       newStr += i;
//     }
//   }
//   return newStr;
// }
// console.log(removeSpecials("The quick brown fox!"));

// homeWorkProf5
// function top(arr) {
//   return arr
//     .map((item) => item.toLowerCase())
//     .map((item) => item.replace(item[0], item[0].toUpperCase()));
// }
// console.log(top(["samuel", "MABELLE", "letitia", "meridith"]));

// homeWorkProf6
// function getPairs(arr) {
//   let arr1 = [];
//   let d = arr.length - 1;
//   for (let i = 0; i < arr.length / 2; i++) {
//     arr1.push([arr[i], arr[d]]);
//     d--;
//   }
//   return arr1;
// }
// console.log(getPairs([1, 2, 3, 4, 5, 6]));


