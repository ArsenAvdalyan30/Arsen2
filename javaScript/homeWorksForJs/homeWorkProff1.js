// homeWorkProf1
// function charCount(char, word) {
//   let count = 0;
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === char) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(charCount("c", "chamber of secrets"));

// homeWorkProf2
// function getHighestDigit(num) {
//   num = Math.abs(num);
//   let compar = 0;
//   let highestDigit;
//   while (num > 0) {
//     let digit = num % 10;
//     num -= digit;
//     num /= 10;
//     if (digit > compar) {
//       compar = digit;
//       highestDigit = digit;
//     }
//   }
//   return highestDigit;
// }
// console.log(getHighestDigit(379));

// homeWorkProf3
// let findPerimeter = (length, width) => length * 2 + width * 2;
// console.log(findPerimeter(20, 10));

// homeWorkProf4
// function getLengthOfStr(str) {
//   let i = 0;
//   let arr = [];
//   while (true) {
//     arr.push(str[i]);
//     i++;
//     let strArr = arr.join('');
//     if (strArr === str) {
//       return i;
//     }
//   }
// }
// console.log(getLengthOfStr("wash your hands!"));

// homeWorkProf5
// const boolToString = (str) => (str = str.toString());
// console.log(boolToString(true));

// homeWorkProf6
// const lessThanOrEqualToZero = (num) => {
//   if (typeof num === "number" && !isNaN(num)) {
//     return num <= 0 ? true : false;
//   }
//   return "please input a value which type is 'number'";
// };
// console.log(lessThanOrEqualToZero(-8));

// homeWorkProf7
// const isPlural = (word) => (word[word.length - 1] === "s" ? true : false);
// console.log(isPlural('magic'))

// homeWorkProf8
// function getAmount(word) {
//   let sub = word.substring(0, 6);
//   let currentSub = "";
//   let count = 0;
//   for (let i = 0; i < word.length; i++) {
//     currentSub += word[i];
//     if (currentSub === sub) {
//       count++;
//       currentSub = "";
//     }
//   }
//   return count;
// }
// console.log(getAmount("potatopotatopotato"));

// // homeWorkProf8Tarberak 2
// function getAmount(word) {
//   let count = 0;
//   for (let i = 0; i < word.length; i++) {
//     let current = "";
//     if (word[i] === "p" || word[i] === "P") {
//       for (let j = i; current.length < 6; j++) {
//         current += word[j];
//       }
//       if (current === "potato" || current === "Potato") {
//         count++;
//       }
//     }
//   }
//   return count;
// }
// console.log(getAmount("TpotTTatopotatoPotatopotato"));
// ete chisht em haskanum es verjin xndri hamar universal lucum chka che?
// orinak ete potato neri poxaren  argumenty urish ban liner el chi ashxati.
