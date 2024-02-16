// 1.
// function charCount(a, word) {
//   let count = 0;
//   for (let i = 0; i < word.length; i++) {
//     if (a === word[i]) {
//       count++;
//     }
//   }
//   return count
// }
// console.log(charCount("b", "big fat bubble"));

// 2;
// function highestDigit(num) {
//   let t = 0;
//   while (num > 0) {
//     let digit = num % 10; //7
//     num = (num - digit) / 10; //39
//     if (digit > t) {
//       t = digit;
//     }
//   }
//   return t;
// }
// console.log(highestDigit(377401));

// 3;
// function findPerimeter(length, width) {
//   return 2 * (length + width);
// }
// console.log(findPerimeter(20, 10));

// 4;
// function getLength(str) {
//   let t = 0;
//   for (let i = 0; i < str.length; i++) {
//     t++;
//   }
//   return t;
// }
// console.log(getLength("wash your hands!"));

// 5;
// function boolToString(a) {
//   if (a === true || a === false) {
//     return String(a);
//     // console.log(typeof(a))
//   }
//   return "խնդրում եմ մուտքագրել Boolean արժեք";
// }
// console.log(boolToString(true));

// 6.
// function lessThanOrEqualToZero(num) {
//   if (num <= 0) {
//     return true;
//   }
//   return false;
// }
// console.log(lessThanOrEqualToZero(0));

// 7.
// function isPlural(str) {
//   return str[str.length - 1] === "s" ? true : false;
// }
// console.log(isPlural("changes"));

8;
// function potatoes(str) {
//   let a = "potato";
//   let t = "";
//   let x = 0;
//   for (let i = 0; i < str.length; i++) {
//     t += str[i];
//     if (t === a) {
//       x++;
//       t = "";
//     }
//   }
//   return x;
// }
// console.log(potatoes("potatopotato"));



// console.log(1) || 8 || console.log(3)//1 3 
// t = (9 && false || 3)
// console.log(t)
console.log(console.log(0) && false || console.log(null) || 0 || 6)// 0 null 