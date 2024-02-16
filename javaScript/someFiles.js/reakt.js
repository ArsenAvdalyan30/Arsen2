// let arr = [
//   [1, 0, 1, 1],
//   [0, 1, 1, 0],
//   [1, 1, 1, 0],
// ];

// function reverseArr(arr) {
//   let reversed = [];
//   let arr1 = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = arr.length - 1; j >= 0; j--) {
//       reversed.push(arr[i][j]);
//       if (reversed.length === arr.length) {
//         arr1.push(reversed);
//       }
//     }
//   }
//   return arr1;
// }
// console.log(reverseArr(arr));

// let arr = [
//   { name: "John", age: 10 },
//   { name: "Alis" },
//   { name: "John", age: 20 },
// ];

// arr.find((elem, index, array) => {
//   if (elem.name === "John") {
//     return true;
//   }
// });

// obj = {
//   from: 1,
//   to: 10,
// };

// let arr = [1, 5, 8, 10, 30, 25];
// let arr = [3, 6, 9, 10, 34, 56, 40];

// arr[Symbol.iterator] = function () {
//   const varForThis = this;
//   return {
//     start: 0,
//     end: this.length - 1,
//     next() {
//       if (this.start <= this.end) {
//         this.start += 2;
//         return {
//           done: false,
//           value: varForThis[this.start - 2],
//         };
//       }
//       return {
//         done: true,
//       };
//     },
//   };
// };

// for (let elem of arr) {
//   console.log(elem);
// }

// let arr = [3, 6, 9, 10, 34, 56, 40];

// arr[Symbol.iterator] = function () {
//   return {
//     start: 0,
//     end: this.length - 1,
//     next() {
//       if (this.start <= this.end) {
//         const value = arr[this.start];
//         this.start += 2;
//         return {
//           done: false,
//           value,
//         };
//       }
//       return { done: true };
//     },
//   };
// };

// let arr1 = arr;
// arr = 1;
// for (let elem of arr1) {
//   console.log(elem);
// }
// console.log(Object.values(arr1))

// let user = {
//   name: "John",
//   sayHi() {
//     let name = "Alis";
//     const arrowF = () => {
//       console.log(this.name);
//     };
//     return arrowF;
//   },
// };

// let sayHi = user.sayHi()

// let user1 = {
//   name: "Robert",
//   sayHi: user.sayHi(),
// };

// console.log(user1.sayHi);

// const obj = {
//   name: "John",
//   age: 30,
//   arr: [1, 25, "string", null],
//   child: {
//     name: "Anna",
//     age: 13,
//   },
// };

// const {
//   age,
//   child: { name },
//   arr: [, , el],
// } = obj;
// console.log(age, name, el);

// let name = "John";
// let age = 30;
// [name, age] = [age, name];
// console.log(name, age)

// function isPalindrome(anyValue) {
//   anyValue = String(anyValue);
//   let anyValueLength = anyValue.length;
//   for (let i = 0; i < anyValueLength / 2; i++) {
//     if (anyValue[i] !== anyValue[anyValueLength - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isPalindrome('madam'));

// function isPolindrom(str) {

// }

// let arr = [1, 5, [56, 89], 45, [78, 2]];
// function flattenArr(arr, flattedArr = []) {
//   function toFlatWithRecursion(arr, index, flattedArr) {
//     if (index >= arr.length) return;
//     Array.isArray(arr[index])
//       ? toFlatWithRecursion(arr[index], 0, flattedArr)
//       : flattedArr.push(arr[index]);
//     toFlatWithRecursion(arr, index + 1, flattedArr);
//   }
//   toFlatWithRecursion(arr, 0, flattedArr);
//   return flattedArr;
// }
// console.log(flattenArr(arr));

// function flattenArr(arr) {
//   let result = [];
//   for (let el of arr) {
//     if (Array.isArray(el)) {
//       result = result.concat(flattenArr(el));
//     } else {
//       result = result.concat(el);
//     }
//   }
//   return result;
// }
// console.log(flattenArr(arr));

//   if (index >= arr.length) return;
//   Array.isArray(arr[index])
//     ? toFlatWithRecursion(arr[index], 0, flattedArr)
//     : flattedArr.push(arr[index]);
//   toFlatWithRecursion(arr, index + 1, flattedArr);
// }

// class User {
//   constructor(name, age) {
//     (this.name = name), (this.age = age);
//   }
//   sayHi() {
//     console.log(this.name);
//   }
// }
// const user1 = new User('John', 30);
// setTimeout(user1.sayHi, 1000);

// function func(a, b, ...rest) {
//     console.log(a, b);
//     console.log(rest)
// }
// func(...[10,20], 30, [40,50])

// function func(a, b, ...rest) {
//   console.log(a, b);
//   console.log(arguments);
//   for (let elem of arguments) {
//     console.log(elem)
//   }
// }
// func(10,20,30,40)

let user = {
  age: 20,
  sayHi(name) {
    console.log(`My name is ${name}, i am ${this.age}`);
    return name;
  },
};

function decorator(func) {
  f.getAllCalls = function () {
    return allParams;
  };
  const allParams = [];

  function f(...rest) {
    allParams.push(rest);
    let result = func.call(this, ...rest);
    return result;
  }
  return f;
}

user.sayHi = decorator(user.sayHi);

console.log(user.sayHi("John", 10, 20));
console.log(user.sayHi("Smith", 40, 50));
console.log(user.sayHi(null, 24, 78, undefined));

console.log(user.sayHi.getAllCalls());
