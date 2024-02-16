// MAP
// Array.prototype.myMap = function (callback) {
//   const resultArr = [];
//   for (let i = 0; i < this.length; i++) {
//     resultArr.push(callback(this[i], i, this));
//   }
//   return resultArr;
// };

// const arr = [1, 2, 3, 8, 7, 5];
// const arr1 = arr.myMap((el) => el * 2);
// console.log(arr1);

// FILTER
// Array.prototype.myFilter = function (callback) {
//   const filterArr = [];
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i], i, this)) {
//       filterArr.push(this[i]);
//     }
//   }
//   return filterArr;
// };

// const arr = [1, 2, "asd", 5, 6];
// const arr1 =  arr.myFilter((el) => typeof el === "number");
// console.log(arr1);

// // REDUCE
// Array.prototype.myReduce = function (callback, initialValue) {
//   let accumulator = initialValue === undefined ? 0 : initialValue
//   for (let i = 0; i < this.length; i++) {
//     accumulator = callback(accumulator, this[i], i, this) 
//   }
//   return accumulator;
// };
// const arr = [1, 2, 3, 4];
// let arr1 = arr.myReduce((acc, el) => acc+ el)
// console.log(arr1)

