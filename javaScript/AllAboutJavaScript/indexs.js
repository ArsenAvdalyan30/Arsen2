// let i;
// let n = 7896;
// let t;
// for(i = 0; n > 0; i++) {
//     let x = n % 10;
//     if(x % 2 == 0) {
//         t = x;
//     }
//     n -= x;
//     n /= 10;

// } console.log(t)

// let i;
// let n = 7896;
// let t = 'there is no odd digit';
// for(i = 0; n > 0; i++) {
//     let x = n % 10;
//     if(x % 2 !== 0) {
//         t = x;
//         break
//     }
//     n -= x;
//     n /= 10;
// }console.log(t)
// let i = 0;
// let n = 7896;
// let t;
// let r;
// do {
//     let x = n % 10;//6//9//8//7
//     if (x % 2 != 0) {
//         r = x;//6//8
//     } if (x % 2 == 0) {
//         t = x;//9//7
//     }
//     n -= x;//7890//780//70//0
//     n /= 10;//789//78//7//0
//     i++;//1//2//3//4
// } while(n > 0)
// console.log(t + r)

// let i;
// let n = 7896;
// let t = 0;
// for(i = 0; n > 0; i++) {
//     let x = n % 10;
//     t += x;
//     n -= x;
//     n /= 10;
// } console.log(t / i)

// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
//   }

//   ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
//   )

// let ask = (question, yes, no) => confirm(question) ? yes() : no()

// ask(
//     'Do you agree?',
//     () => console.log('You agreed.'),
//     () => console.log('You canceled the execution.')
// )

// function getResult(a, b) {
//   if (a === b) {
//     return a
//   } else {
//     return a + getResult(a + 1 , b)
//   }
// }
// console.log(getResult(1, 10));

// function fibonachi(a) {
//   if (a < b) {
//     return a;
//   } else {
//     return fibonachi(a, b) + fibonachi(a + a, b);
//   }
// }
// console.log(10000);

// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);

// function vapsheItog(m) {
//   let x = 1;
//   arr1 = [];
//   while (true) {
//     if (getKataryal(x)) {
//       arr1.push(x);
//       if (arr1.length === m) {
//         return arr1;
//       }
//     }
//     console.log(x)
//     x++;
//   }
// }
// console.log(vapsheItog(5));

// function getKataryal(n) {
//   let itog = false;
//   let i;
//   let arr = [];
//   for (i = 1; i < n/2; i++) {
//     if (n % i === 0) {
//       arr.push(i);
//     }
//   }
//   let sumar = arr.reduce(function sum(summer, current) {
//     return summer + current;
//   }, 0);
//   if (sumar === n) {
//     itog = true;
//   }
//   return itog;
// }
// let itog = getKataryal();
// if (itog) {
//   console.log("Kataryal e");
// } else {
//   console.log("Kataryal che");
// }

// console.log("" + 1 + 0)//10
// console.log("" - 1 + 0)//-1
// console.log(true + false)//1
// console.log(6 / "3")//2
// console.log("2" * "3")//6
// console.log(4 + 5 + "px")//9px
// console.log("$" + 4 + 5)//$45
// console.log("4" - 2)//2
// console.log("4px" - 2)//NAN
// console.log(7 / 0)//infinite
// console.log(" -9 " + 5)//   -9   5
// console.log(" -9 " - 5)//   -14
// console.log(null + 1)//1
// console.log(undefined + 1)//NAN

// function getNegative(n) {
//     return n < 0 ? true : false
// }
// console.log(getNegative(-10))

// let a = 8;
// let b = 12;
// a = b - a//4
// b = b - a//8
// a = a + b//12
// console.log(a, b)

// function getDivisible(a, b) {
//     if(a % b === 0 || b % a === 0) {
//         return 0
//     }
//     return 1
// }
// console.log(getDivisible(2, 18))

// function getEven(n) {
//     return n % 2 === 0 ? true : false
// }
// console.log(getEven(16))

// function checkTriangleValid(a, b, c) {
//     return a + b > c && a + c > b && b + c > a ? true : false
// }
// console.log(checkTriangleValid(3, 4, 5))

// function getNotMultiplication(n) {
//   let x = "";
//   for (let i = 1; i <= 3; i++) {
//     x += n * i;
//   }
//   return x;
// }
// console.log(getNotMultiplication(100))

// console.log(true == 1);//true
// console.log(true == 0);//false
// console.log(true == '12');//false
// console.log(true == '1');//true
// console.log(false == '0');//true
// console.log(10 && 4);//4
// console.log(0 && 4);//0

// console.log(10 || 0);//10
// console.log(0 || 43);//43

// console.log(true && false);//false
// console.log(false && NaN);//false
// console.log(true || false);//true
// console.log(false || true);//true

// console.log('me' && 'maybe I?');//maybe I?
// console.log('' && 'maybe I?');// ''
// console.log('wow' && '');//''
// console.log('me' || 'maybe I?');//me
// console.log('' || 'maybe I?');//maybe I?
// console.log('wow' || '');//wow

// console.log(null && 'star wars');//null
// console.log(undefined && 'avengers');//undefined
// console.log('game of thrones' && null);//null
// console.log(null || 'star wars');//star wars
// console.log(undefined || 'avengers');//avengers
// console.log('game of thrones' || null);//game of thrones

// console.log(null == undefined)//true
// console.log(undefined == null)//true
// console.log(undefined == '')//false
// console.log(void 0 == null)//true

// for(let i = 0; i < 15; i++) {
//     let a = `${i} is even`;
//     let b = `${i} is odd`;
//     if(i % 2 === 0) {
//         console.log(a)
//     } else{
//         console.log(b)
//     }
// }

// for (let i = 1; i <= 60; i++) {
//   let x = false;
//   if (i % 3 === 0) {
//     x = "Fizz";
//   }
//   if (i % 5 === 0) {
//     x = "Buzz";
//   }
//   if (i % 3 === 0 && i % 5 === 0) {
//     x = "FizzBuzz";
//   }
//   console.log(x || i);
// }

// function createTriangle(n) {
//   let x = "";
//   for (i = 1; i <= n; i++) {
//     x += i + " ";
//     console.log(x);
//   } return 'Thats just instead of undefined'
// }
// console.log(createTriangle(8));

// function getSum(n) {
//     let sum = 0;
//     for(i = 0; i <= n; i++) {
//         sum += i
//     }return sum;
// } console.log(getSum(100))

// function getSumer(n) {
//     if (n === 1) {
//         return n;
//     } return n + getSumer(n - 1)
// } console.log(getSumer(100))

// function findCountsOfDigit(n) {
//     let i = 0;
//     while(n > 0) {
//         let x = n % 10;
//         n -= x;
//         n /= 10;
//         i++
//     }
//     return i
// } console.log(findCountsOfDigit(34765465))

// function checkContains(a, b) {
//     let d = false;
//     for(let i = 0; b > 0; i++) {
//         let x = b % 10;
//         b -= x;
//         b /= 10;
//         if (x === a) {
//             d = true
//         }
//     }
//     return d ? 'Yes, of course' : 'No, Never'
// }
// console.log(checkContains(6, 666845))

// function getSumOfDigits(n) {
//   let sum = 0;
//   for (let i = 0; n > 0; i++) {
//     let x = n % 10;
//     n -= x;
//     n /= 10;
//     sum += x;
//   }
//   return sum;
// }
// console.log(getSumOfDigits(895796))

// let arr = [1,5,6,-5,30,10,25]
// function calculateDouble(arr) {
//     let newArr = []
//     for(let n of arr) {
//         n *= 2;
//         newArr.push(n);
//     } return newArr
// }
// console.log(calculateDouble(arr))

// let arr = [10, 25, 16, -5, 30, 15, 24]; 16
// function createNewArrayLarger(arr, t) {
//     let newArr = [];
//     for(let n of arr) {
//         if(n > t) {
//             newArr.push(n)
//         }
//     } return newArr.length === 0 ? 'Such values do not exist' : newArr
// } console.log(createNewArrayLarger(arr, 16))

// let arr = [10, 25, 16, -5, 30, 15, 24]; 16
// let newArr = arr.filter((item) => item > 16);
// console.log(newArr)

// let arr = [10, 25, 16, -5, 30, 15, 24];
// 16;
// let newArr = arr.filter(function (item) {
//   return item > 16;
// });
// console.log(newArr);

// let arr = [1,2,5,8,7];
// function getIndex(arr, n) {
//     for(let x of arr) {
//         if(x === n) {
//             return arr.indexOf(x)
//         }
//     } return -1;
// }console.log(getIndex(arr, 15))

// let str = "_, we have a _.";
// let arr = ["Houston", "problem"];
// for (let i = 0; i < str.length; i++) {
//   str = str.replace('_', arr[i]);
// }
// console.log(str);

// let arr = [1, 10, "hi", 2, 3];
// let string = 0;
// let number = 0;
// for (let g of arr) {
//   if (typeof g === "string") {
//     string++;
//   }
//   if (typeof g === "number") {
//     number++;
//   }
// }
// console.log(`Numbers : ${number}`);
// console.log(`Strings : ${string}`);

// let x = (a, b) => a + b;
// console.log(x(12, -5))

// function isPalindrome(word) {
//     let d = 'is not palindrome';
//     let r = 'is palindrome';
//     for(let i = 0; i < word.length / 2; i++) {
//         if(word[i] !== word[word.length - 1 - i]) {
//             return d;
//         }
//     } return r;
// }console.log(isPalindrome('kayak'))

// let str = "hello world";
// function toCamelCase(str) {
//   str = str.replace(str[0], str[0].toUpperCase());
//   for (let i = 0; i < str.length; i++) {
//     if (str[i - 1] === " ") {
//       str = str.replace(str[i], str[i].toUpperCase());
//     }
//   }
//   return str;
// }
// console.log(toCamelCase('hello world'));

// function getAnswer(num1, num2, symbol) {
//   return (symbol === "+"
//     ? num1 + num2
//     : symbol === "-"
//     ? num1 - num2
//     : symbol === "/"
//     ? num1 / num2
//     : symbol === "*"
//     ? num1 * num2
//     : "write an any symbol please");
// }console.log(getAnswer(1, 2, '+'))

// let sentence = "A revolution without dancing a REVOLUTION not worth having";
// function getLargestWord(sentence) {
//   let arr = sentence.split(" ");
//   arr = arr.reverse();
//   let length = 0;
//   let d;
//   for (let g of arr) {
//     if (g.length > length) {
//       length = g.length;
//       d = g;
//     }
//   }
//   return d;
// }
// console.log(getLargestWord(sentence));

// function getEvenNumber(a, b) {
//   let t = 0;
//   let d = 0;
//   let c = "";
//   for (let i = a; a <= b; a++) {
//     for (let j = a; j > 0; ) {
//       let x = j % 10;
//       j -= x;
//       j /= 10;
//       if (x % 2 === 0) {
//         t++;
//       }
//       d++;
//     }
//     if (t === d) {
//       c += a + ", ";
//     }
//     t = 0;
//     d = 0;
//   }
//   if (!c) {
//     c = "Such numbers does not exist";
//   }
//   return c;
// }
// console.log(getEvenNumber(19, 42));

// let arr = ["anymore", "communicate", "raven", "me", ];
// function getSumOfLength(arr) {
//   let length = 0;
//   let b = 0;
//   for (let g of arr) {
//     if (g.length > length) {
//       length = g.length;
//     }
//     if(g.length < length) {
//         b = g.length
//     }
//   }
//   return length + b;
// }
// console.log(getSumOfLength(arr));

// let str = 'May the force be with you';
// let arr = str.split(' ');
// console.log(arr)

// let n = 1026027;
// let c = 0;
// while(n > 0) {
// let x = n % 10;//4
// n -= x;//1026020
// n /= 10;//102602
//     if(x % 2 === 0) {
//         c += x;
//     }
// }console.log(c)

// function getSumOfEvenDigits(n) {
//   let sum = 0;
//   while (n > 0) {
//     let x = n % 10;
//     n -= x;
//     n /= 10;
//     if (x % 2 === 0) {
//       sum += x;
//     }
//   }
//   return sum;
// }
// console.log(getSumOfEvenDigits(164841));

// let arr = [2, 15, -8, [5, 6, 18,], 79, 21]
// let length = arr.length;
// // console.log(length)
// // for(let n of arr) {
// //     console.log(n)
// // }
// let sum = 0;
// for(let i = 0; i < arr.length; i++) {
//     // console.log(arr[i])
//     if(arr[i] % 2 === 0)
//     sum += arr[i]
// }console.log(sum)

// let arr = [1, 5, 'Smbat', 78, 6]
// let arr2 = arr.sort()
// // console.log(arr2)
// // let arr3 = arr2.reverse()
// // console.log(arr3)
// let sum = 0;
// for(let t of arr2) {
//     sum += t
// } console.log(sum)

// function getMultiplication(n) {
//   if (n === 1) {
//     return n;
//   } else {
//     return n * getMultiplication(n - 1);
//   }
// }
// console.log(getMultiplication(5));

// function getFibonachi(n) {
//     if (n <= 1) {
//         return n
//     } else {
//         return getFibonachi(n - 1) + getFibonachi(n - 2)
//     }
// }console.log(getFibonachi(3))

// function getSumOfDigits(n) {
//   if (n < 10) {
//     return 1;
//   } else {
//     return 1 + getSumOfDigits((n - (n % 10)) / 10);
//   }
// }
// console.log(getSumOfDigits(1945));

// function getSumOfEvenDigits(n) {
//   if (n < 10) {
//     return n % 2 === 0 ? n : 0;
//   } else {
//     const g = n % 10
//     const t = g % 2 === 0 ? g : 0;
//     return t + getSumOfEvenDigits((n - g) / 10);
//   }
// }
// console.log(getSumOfEvenDigits(28));

// forEach
// ??
// let arr = [1, 5, 15, 2];
// let MultipleByTwoArr = arr.forEach((item) => item * 2)
// console.log(MultipleByTwoArr)

// MAP
// let arr = [2, 3, 4, 5, 8];
// let arr1 = arr.map((item) => item * 2)
// console.log(arr1)

// let arr = [1, 5, 9, 25];
// let result = arr.find((item, index, array) => index  == 3)
// console.log(result)
// not
// let arr = [1, 5, 6, -5, 30, 10, 25  ]
// function doubledArr(arr){
//     let arr1 = []
//     for(let i = 0; i < arr.length; i++){
//         arr1.push(arr[i]*2)
//     }return arr1
// }console.log(doubledArr(arr))

// let arr = [10, 25, 16, -5, 30, 15, 24]; //16
// function getLargerArr(arr, n) {
//   let arr1 = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > n) {
//       arr1.push(arr[i]);
//     }
//   }if(arr1.length === 0){
//     arr1 ='Such values do not exist'
//   }
//   return arr1;
// }
// console.log(getLargerArr(arr, 50));

// let arr = [1, 2, 5, 8, 7] //10
// function findIndex(arr, n){
//     for(let i of arr){
//         if(i === n){
//             return arr.indexOf(i)
//         }
//     } return -1
// }console.log(findIndex(arr, 10))

// let sentence = '_, we have a _.';
// let arr = ['Houston', 'problem'];
// // sentence.replace('_', arr[0])
// for(let i = 0; i < sentence.length; i++){
//     sentence = sentence.replace('_', arr[i])
// }console.log(sentence)

// let arr = [1, "10", "hi", 2, 3];
// let number = 0;
// let string = 0;
// for (let g of arr) {
//   if (typeof g === "string") {
//     string++;
//   } else if (typeof g === "number") {
//     number++;
//   }
// }
// console.log(`Numbers: ${number}, Strings: ${string}`);

// function getSum(a, b){
//     return a+b
// }console.log(getSum(5, 4))

// function isPalindrome(n){
//     let t = true;
//     for(let i = 0; i <n.length; i++){
//         for(let j = n.length-1; j > 0; j--){
//             if(n[i] !== n[j]){
//                 t = false;
//                 return t;
//             }
//         }
//     } return t;
// }
// console.log(isPalindrome('madam'))

// camelize("list-style-image") == 'listStyleImage';

// function camelize(str) {
//     let arr = str.split("-")
//     let d = arr.map((word, index) =>
//       index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     let t = d.join("");
//     return t
// }
// console.log(camelize("-webkit-transition"))

// let arr = [5, 3, 8, 1];
// function filterRange(arr, a, b) {
//   let filtered = [];
//   for (let g of arr) {
//     if (g >= a && g <= b) {
//       filtered.push(g);
//     }
//   }
//   return filtered;
// }
// console.log(filterRange(arr, 1, 4));
// console.log(arr);

// function filterRange(arr, a, b) {
//   return arr.filter((item) => (a <= item && item <= b))
// }
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// console.log(filtered);
// console.log(arr);

// let arr = [5, 3, 8, 1];
// function filterRangeInPlace(arr, a, b) {
//   for (let g of arr) {
//     if (g <= a || g >= b) {
//       arr.splice(arr.indexOf(g), 1);
//     }
//   }
//   return arr;
// }
// console.log(filterRangeInPlace(arr, 1, 4));

// let arr = [5, 2, 1, -10, 8];
// arr.sort((a, b) => b -a)
// console.log(arr)

// let arr = ["HTML", "JavaScript", "CSS"];
// function copySorted(arr) {
//   return arr.slice().sort();
// }
// console.log(copySorted(arr));
// console.log(arr);

// let john = {name: 'John', age: 25};
// let pete = {name: 'Pete', age: 30};
// let mary = {name: 'Mary', age: 28};
// let users = [john, pete, mary];
// let names = users.map((item) => item.name)
// console.log(names)

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];
// let usersMapped = {};
// let t = users.map(item => ({
//   fullName : `${item.name} ${item.surname}`,
//   id: item.id
// }));
// console.log(t)

// console.log(t[0].id)
// console.log(t[1].fullName)

// function isPalindrome(n){
//     let t = true;
//     for(let i = 0; i <n.length; i++){
//         for(let j = n.length-1; j > 0; j--){
//             if(n[i] !== n[j]){
//                 t = false;
//                 return t;
//             }
//         }
//     } return t;
// }
// console.log(isPalindrome('madam'))

// function isPalindrome(n) {
//   let t = false;
//   for (let i = 0; i < n.length / 2; i++) {
//     if (n[i] !== n[n.length - 1 - i]) {
//       return t;
//     }
//   }
//   t = true;
//   return t;
// }
// console.log(isPalindrome('madam'))

// let str = "hello world";
// function toCamelCase(str) {
//   // let arr = str.split(' ')
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === " ") {
//       str[i + 1] = str[i + 1].toUpperCase();
//     }return str;
//   }

// }
// console.log(toCamelCase(str));

// let t = 'g'
// let f = t.toUpperCase()
// console.log(f)

// let arr = ['Armen', 'Arsen', 'Karen'];
// let t = arr.map((item) => item.replace('A', '').replace('a', ''));
// console.log(t);


// // function getResult(a, b, c) {
// //   return c === "+"
// //     ? a + b
// //     : c === "-"
// //     ? a - b
// //     : c === "*"
// //     ? a * b
// //     : c === "/"
// //     ? a / b
// //     : "arsen";
// // }
// // console.log(getResult(5, 4, ));

// // let str = "A revolution without dancing is a Revolution not worth having";
// // function getLargeWord(str) {
// //   let arr = str.split(" ");
// //   let t = 0;
// //   arr.reverse()
// //   let d;
// //   for (let g of arr) {
// //     if (g.length > t) {
// //       t = g.length;
// //       d = g
// //     }
// //   }
// //   return d;
// // }
// // console.log(getLargeWord(str));

// function getResult(a, b) {
//   let arr = [];
//   let t = 0;
//   let d = 0;
//   for (let i = a; i <= b; i++) {
//     for (let j = i; j > 0; j++) {
//       let x = j % 10;
//       j -= x;
//       j /= 10;
//       if (x % 2 === 0) {
//         t++;
//       }
//       d++;
//     }
//     if ((t = d)) {
//       arr.push(j);
//     }
//     t = 0;
//     d = 0;
//   } return arr
// } console.log(getResult(19,42))

// let arr = [];
// for (let line = "#"; line.length <= 6; line += "#") {
//   arr.push(line);
// }

// function staircase(n) {
//   for (let i = 0; i < n; i++) {
//     let line = "";
//     for (let j = 0; j < n; j++) {
//       if (i < n - 1 - j) {
//         line += " ";
//       } else {
//         line += "#";
//       }
//     }
//     console.log(line);
//   }
// }
// staircase(6);

// let arr = [1, 2, 3, 4, 5];
// function miniMaxSum(arr) {
//    let arr1 = [];
//   for (let i = 0; i < arr.length; i++) {
//     let t = arr.reduce((sum, item) => sum + item) - arr[i];
//     arr1.push(t);
//   }
//   arr1.sort((a, b) => a - b);
//   let arr2 = [];
//   arr2.push(arr1[0]);
//   arr2.push(arr1[arr1.length - 1]);
//   let str = arr2.join('  ')
//   return str;
// }
// console.log(miniMaxSum(arr));

// let user = {
//     name: "John",
//     surname: "Smith"
//   };
//   user.age = 25;
//   console.log(user)

// let codes = {
//     "+49": "Germany",
//     "+41": "Switzerland",
//     "+44": "Great Britain",
//     // ..,
//     "+1": "USA"
//   };

//   for (let code in codes) {
//     console.log( +code )
//   }

// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;
// console.log(user);

// function isEmpty(obj) {
//     for(let key in obj) {
//         return false
//     }
//     return true
// } console.log(isEmpty())

// let sum = 0;
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// for(let key in salaries) {
//     sum += salaries[key];
// }
// console.log(sum)

// let obj = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };
//  function multiplyNumeric(obj) {
//     for(let key in obj) {
//         if(typeof(obj[key]) == 'number') {
//             obj[key] *= 2
//         }
//     } return obj
//  }
//  console.log(multiplyNumeric(obj))















