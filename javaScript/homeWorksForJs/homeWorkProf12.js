// // homeWorkProf1 tarberak1
// function addUp(num) {
//     if(num === 1) {
//         return num
//     }
//     return num + addUp(num - 1)
// }
// console.log(addUp(4))

// // homeWorkProf1 tarberak 2
// function addUp(num) {
//     const arr = []
//     for(let i = 1; i <= num; i++) {
//         arr.push(i)
//     }
//     return arr.reduce((acc, el) => acc + el)
// }
// console.log(addUp(4))

// homeWorkProf2
// function isOmnipresent(arr, num) {
//     for(let subArr of arr) {
//         if(!subArr.includes(num)) {
//             return false
//         }
//     }
//     return true
// }
// console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1))

// // homeWorkProf3 tarberak1
// function missingNum(arr) {
//   arr.sort((a, b) => a - b);
//   let fromLeft = 0;
//   let fromRight = arr.length - 1;
//   while (fromLeft <= fromRight /* 0 <= 8 */) {
//     let middleEl = Math.floor((fromLeft + fromRight) / 2); //4
//     arr[middleEl] /* 6 */ - middleEl /* 4 */ !== arr[0] /* 1 */
//       ? (fromRight = middleEl - 1) /* 3 */
//       : (fromLeft = middleEl + 1); /* 5 */
//   }
//   return arr[0] + fromLeft; // 1 + 4
// }
// console.log(missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]));

// // homeWorkProf4 tarberak 2
// function missingNum(arr) {
//   return (
//     (function recursion(n) {
//       return n === 0 ? n : n + recursion(n - 1);
//     })(10) - arr.reduce((acc, item) => acc + item)
//   );
// }
// console.log(missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]));

// // homeWorkProf5
// function alphNum(letters) {
//   let alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   let alphanums = "";
//   for (let i = 0; i < letters.length; i++) {
//     for (let j = 0; j < alph.length; j++) {
//       if (letters[i] === alph[j]) {
//         alphanums += j + " ";
//       }
//     }
//   }
//   return alphanums;
// }
// console.log(alphNum("ABCDEF"));
