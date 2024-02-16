// homeWork1Case1
// function getSum(a, b) {
//     return a + b;
// }
// console.log(getSum(8, 27))

// homeWork1Case2
// function getSum(x) {
//     return function getSumIn(y) {
//         return x + y;
//     }
// }
// console.log(getSum(12)(-5))

// homeWork1Case3
// let getSum = (x) => (y) => x + y;
// console.log(getSum(5)(4))

// homeWork 2
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

// homeWork3
// function strToUp(str) {
//   str = String(str);
//   let c = " ";
//   let b;
//   let a = str[0].toUpperCase();
//   str = str.replace(str[0], a)
//   for (i = 1; i < str.length; i++) {
//       if (str[i - 1] === c) {
//         b = str[i].toUpperCase();
//         str = str.replace(str[i], b);
//       }
//   }
//   return str;
// }
// console.log(strToUp('the quick brown fox'));

// homeWork4
// function getAnswer(el1, el2, operator) {
//   return operator === "+"
//     ? el1 + el2
//     : operator === "-"
//     ? el1 - el2
//     : operator === "*"
//     ? el1 * el2
//     : operator === "/"
//     ? el1 / el2
//     : "you do not give any operator";
// }
// console.log(getAnswer(12, 3, '*'));

// // homeWork5
// function findLongestWord(sentence) {
//   let arr = sentence.split(" ");
//   let arr1 = arr.reverse();
//   let startLength = 0;
//   let theLongestWord;
//   for (let word of arr1) {
//     if (word.length > startLength) {
//       startLength = word.length;
//       theLongestWord = word;
//     }
//   } return theLongestWord
// }
// console.log(findLongestWord("A revolution-without dancing,is a revolution not worth having."))

// homeWork6
// function getEvenDigits(number1, number2) {
//   let c = "";
//   let j;
//   let a = 0;
//   let n = 0;
//   for (let i = number1; i <= number2; i++) {
//     for (j = i; j > 0; ) {
//       let x = j % 10;
//       j -= x;
//       j /= 10;
//       n++;
//       if (x % 2 === 0) {
//         a++;
//       }
//     }
//     if (a === n) {
//       c = c + i + " ";
//     }
//     n = 0;
//     a = 0;
//   }
//   if(!c) {
//     return 'Such numbers does not exist'
//   }
//   return c;
// }
// console.log(getEvenDigits(19, 99));

