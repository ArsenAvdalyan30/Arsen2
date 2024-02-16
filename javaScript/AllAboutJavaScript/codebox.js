// function bugFixFinal(string) {
//     for (let i = 0; i < string.length; i++) {
//       string = string.replaceAll('bug', 'flow')
//     }
//     return string
//   }
//   console.log(bugFixFinal('xxbugYYX'))

// function strangeWord(word) {
//     let str = '';
//     for (let i = 0; i < word.length; i+=2) {
//       str += word[i]
//     }
//     return str
//   }
//   console.log(strangeWord('Challenge'))

// function theGround(obj) {
//   return Object.values(obj).reduce((acc, item) => acc.length >= item.length ? acc : item, 0);
// }

// console.log(theGround({"name":"dirt","category":"alpha"}));

// function more4than0(n) {
//     let four = 0
//     let zero = 0
//     for (let el of n) {
//         if (el === 4) four ++
//         else if (el === 0) zero++
//     }
//     return four > zero
//   }
//   console.log(more4than0([3,1,4,4,4,1]))

// function hangman(hangmanString) {
//   let str = "";
//   for (let i = 0; i < hangmanString.length; i++) {
//     i % 2 === 0 ? (str += "_") : (str += hangmanString[i]);
//   }
//   return str;
// }
// console.log(hangman("ThisIsAnFancyString"));

// function bin2dec(bin) {
//   let num = 0;
//   let length = bin.length - 1;
//   for (let i = 0; i < bin.length; i++) {
//     num += bin[i] * 2 ** length;
//     length--;
//   }
//   return num;
// }
// console.log(bin2dec("110010"));

// function firstHello(sentence) {
//   return sentence.split("").slice(0, 5).join("") === "Hello";
// }
// console.log(firstHello('Hello world!'));

// function dec2bin(dec) {
//   let str = "";
//   while (dec) {
//     let mn = dec % 2; //0
//     str += mn; //0
//     dec = (dec - mn) / 2;
//   }
//   return str.split('').reverse().join('');
// }
// console.log(dec2bin(50));

// function dec2bin(dec) {
//     return dec.toString(2)
// }
// console.log(dec2bin(50))

// function lastButNotLeast(a, b, c) {
//   while (a > 0 || b > 0 || c > 0) {
//     let x = a % 10;
//     let y = b % 10;
//     let z = c % 10;
//     return x === y || x === z || y === z;
//   }
// }
// console.log(lastButNotLeast(37, 17, 19))

// function solveTicTacToe(line1, line2, line3) {
//   let matrix = [line1,line2,line3]

//   return matrix
// }

// console.log(solveTicTacToe(["OXO"], ["XOO"], ["XOX"]));

// function User(name) {
//   this.name = name;
//   this.isAdmin = false;
// }
// let user = new User('Jack')
// console.log(user.name)
// console.log(user.isAdmin)

// function user() {
//     console.log(new.target)
// }
// user()
// new user()

// function User (name) {
//     if(!(new.target)) {
//        return new User(name)
//     }
//     this.name = name
// }
// let john = User('John')
// console.log(john.name)

// function A(name) {
//     this.name = name
// }
// function B(name) {
//     this.name = name
// }
// let a = new A('john')
// let b = new B('john')
// console.log(a == b)

// function solveTicTacToe(line1, line2, line3) {
//    let arr1 = [];
//    return arr1
// }
// console.log(solveTicTacToe(["OXO"], ["XOO"], ["XOX"]));

// function littleChild(child1, child2) {
//    for (let i = 0; i <= 14; i++) {
//       if (child1 === i || child2 === i) {}
//    }
// }
// console.log(littleChild(4, 15))

// function secondLargest(arr) {
//   let max = Math.max(...arr);
//   let secondMax = -Infinity;
//   for (let el of arr) {
//     if ((el > secondMax) && (el !== max)) {
//       secondMax = el;
//     }
//   }
//   return secondMax;
// }
// console.log(secondLargest([25, 143, 89, 13, 105]));

// function testJackpot(result) {
// 	let n = 0
// 	let el0 = result[0]
// 	for(let i = 1; i < result.length; i++) {
// 		if (el0 === result[i]) {
// 			el0 = result[i]
// 			n ++
// 		}
// 	}
// 	return result.length-1 === n
// }
// console.log(testJackpot(["SS", "SS", "SS", "SS"]))

// function littleChild(child1, child2) {
//   let arr = [];
//   for (let i = 0; i < 14; i++) {
//     arr.push(i);
//   }
//   if (
//     (arr.includes(child1) && arr.includes(child2)) ||
//     (!arr.includes(child1) && !arr.includes(child2))
//   ) {
//     return false;
//   }
//   return true;
// }

// function getPrice(item) {
//   let str = "";
//   for (let el of item) {
//     if (el === "$" || el === "." || !isNaN(el) && typeof Number(el) === "number") {
//       str += el;
//     }
//   }
//   return str.split(' ').join('')}
// console.log(getPrice("Milk ($0.99)"));

// function getReducedPrice(price, discount) {
//   let discountedPrice = (price - (price * discount) / 100)
//     .toFixed(2)
//     .toString()
//     .split("");
//   let i = discountedPrice.length - 1;
//   while (discountedPrice[i] === '0') {
//     discountedPrice.pop();
//   }
//   return Number(discountedPrice.join(""));
// }
// console.log(getReducedPrice(99, 10));

// function swap(numbers) {
//   let a = numbers[0];
//   let b = numbers[numbers.length - 1];
//   let c;
//   c = a
//   a = b
//   b = c
//   numbers[0] = a
//   numbers[numbers.length - 1] = b
//   return numbers
// }
// console.log(swap([1, 6, 2, 7, 9, 3, 4]));

// function camelCase(n) {
//   n = n
//     .split(" ")
//     .map((item) =>
//       item[0] ? item.replace(item[0], item[0].toUpperCase()) : item
//     )
//     .reduce((acc, item) => acc + item, "");
//   for (let i = 0; i < n.length; i++) {
//     if (n[i]) n = n.replace(n[0], n[0].toLowerCase());
//   }
//   return n;
// }
// console.log(camelCase(" Is not found "));

// function palindrome(pali) {
//   for (let i = 0; i < pali.length / 2; i++) {
//     if (pali[i] !== pali[pali.length - 1 - i]) return false;
//   }
//   return true;
// }

// console.log(palindrome("racecar"));

// function repeater(string, n) {
//   let str = '';
//   while (n >= 0) {
//    str += string.slice(0, n)
//    n--
//   }
//   return str
// }

// console.log(repeater('JSCodebox', 6))

// function checkPassword(password, password_repeat) {
//   let check = 0;
//   if (password === password_repeat && password.length >= 8) {
//     for (let el of password) {
//       if (typeof +el === "number" && !isNaN(el)) {
//         check++;
//         break;
//       }
//     }
//     for (let el of password) {
//       if (el === el.toUpperCase()) {
//         check++;
//         break;
//       }
//     }
//     for (let el of password) {
//       if (el === el.toLowerCase()) {
//         check++;
//         break;
//       }
//     }
//     for (let el of password) {
//       if (
//         el === "&" ||
//         el === "$" ||
//         el === "%" ||
//         el === "§" ||
//         el === "-" ||
//         el === "_"
//       ) {
//         check++;
//         break;
//       }
//     }
//   }
//   return check === 4;
// }
// console.log(checkPassword("YY&glk4Hfi_ffS", "YY&glk4Hfi_ffS"));

// function cloneObject(object, removeProperties) {
//   let newObj = {};
//   let obj = Object.assign(object)
//   for (let el of removeProperties) {
//     for (let key in obj) {
//       if (key === el) {
//         delete obj[key]
//       }
//     }
//   }
//   return obj;
// }
// console.log(
//   cloneObject(
//     {
//       name: "Iron Man",
//       age: 42,
//       superPower: "None",
//       friends: 0,
//       overweight: true,
//       hungry: true,
//     },
//     ["overweight", "hungry"]
//   )
// );

// function fizzBuzz(start, end) {
//   let arr = [];
//   for (let i = start; i <= end; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       arr.push("FizzBuzz");
//     } else if (i % 3 === 0) {
//       arr.push("Fizz");
//     } else if (i % 5 === 0) {
//       arr.push("Buzz");
//     } else {
//       arr.push(i);
//     }
//   }
//   return arr;
// }

// console.log(fizzBuzz(3, 16));

// function gHappy(string) {
//   if (string.length === 0) return false
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === 'g') {
//       if (string[i - 1] === 'g' || string[i + 1] === 'g') {
//         return true
//       } return false
//     }
//   }
// }
// console.log(gHappy('xyggxyz'))

// function outsideIn(outside, inside) {
//   for (let el of inside) {
//     if (!outside.includes(el)) {
//       return false;
//     }
//   }
//   return true
// }

// console.log(outsideIn([0, 6, 3, 7, 2], [2, 6, 3, 0, 7]));

// function longestWord(words) {
//   let compare = words[0].length
//   let item;
//    for (let el of words) {
//     if (el.length > compare) {
//       compare = el.length
//       item = el
//     }
//    }
//    for (let el of words) {
//     if (item !== el && el.length === compare) {
//       return 'Foobar'
//     }
//    }
//    return item
// }
// console.log(longestWord(['Welcome','to','JSCodebox']))

// function either404(numbers) {
//   for (let i = 0; i < numbers.length; i++) {
//       if (numbers[i] === 0 && numbers[i+1] === 0 && numbers[i] === 4 && numbers[i+1] === 4) {
//         return true
//       }
//     }
// }

// console.log(either404([0,0,3,6,4,4]))




// Ֆունկցիայի մեջ This-ը ցույց է տալիս այն օբյեկտին, որի համար մենք կանչում ենք այդ ֆունկցիան,
//  ու բոլորովին կապ չունի, թե որտեղ է ստեղծվել այդ ֆունցիան, քանի որ This-ը որոշվում է կանչման պահին

// there are 4 ways for determining this.

// const obj = {
//   age: 24,
//   name: "John",
// };
// 1 default bind

// function getItem() {
//   return this;
// }

// console.log(getItem()); // in this case this refers to global object

//  2 implicit binding

// const obj1 = {
//   age: 24,
//   name: "John",
//   getItem() {
//     return this;
//   },
// };
// console.log(obj1.getItem()); // in this case this refers to obj1

// // 3. explicit binding
// // call apply bind

// const obj2 = {
//   name: "John",
// };

// function getItem(age, city) {
//   this.age = age;
//   this.city = city;
//   return this;
// }

// console.log(getItem.call(obj2, 24, "Yerevan"));
// console.log(getItem.apply(obj2, [24,"Yerevan"]));

// // bind returns another function which already knows who is its this
// const neWFunction = getItem.bind(obj)
// console.log(neWFunction());

// //  4 new Binding

// function Constructor1(name, age) {
//   this.name = name;
//   this.age = age
//   return 12
// }

// console.log( new Constructor1("John", 24));

// function Constructor2(name, age) {
//   this.name = name;
//   this.age = age
//   return [1,2,3,4]
// }

// console.log( new Constructor2("John", 24));

// // 1 check if it return primitive or reference type
// // 2. if it return primitive then will create empty object
// // 3. this refers to that empty object
// // 4.__proto__ of that empty object becomes that constructor function


// // Build in constructors. 

// new Number()
// new String()
// new Boolean()
// new Object()
// new Array()


// // examples

// const obj1  = {
//   name:"John",
//   city:"Yerevan"
// }

// const obj2  = {
//   name:"Marcos",
//   city:"Marseille"
// }

// function fullName() {
//   return `${this.name} is from ${this.city}`
// }

// console.log(fullName.call(obj1));
// console.log(fullName.apply(obj2));


// // 1
// // remember variables declared with var becomes properties of window global obj
// // in browser window === this // true

// var myVar = 100;

// function SomeFunction(callback) {
//   var myVar = 200;
//   callback();
// }
// var obj = {
//   myVar: 300,
//   WhoIsThis: function () {
//     console.log("'this' points to " + this + ", myVar = " + this.myVar); //
//   },
// };

// SomeFunction(obj.WhoIsThis); 
// SomeFunction(obj.WhoIsThis.bind(obj)); 


// // 2
// var myVar = 100;

// function WhoIsThis() {
//   this.myVar = 200;

//   this.display = function () {
//     var myVar = 300;

//     console.log("myVar = " + myVar); 
//     console.log("this.myVar = " + this.myVar); 
//   };
// }
// var obj = new WhoIsThis();
// obj.display(); //

// // 3

// var myVar = 100;

// function SomeFunction() {
//   console.log(this);
//   const WhoIsThis = () => {
//     var myVar = 200;
//     console.log("myVar = " + myVar); 
//     console.log("this.myVar = " + this.myVar); 
//   };

//   WhoIsThis();
// }

// const obj = {
//   myVar: 300,
// };

// SomeFunction.call(obj); 

// // 4
// // Arrow functions don't have their own this
// this.name = "Smith";

// const arrowFunction = function () {
//   return this.name;
// };

// const obj = {
//   name: "John",
// };

// console.log(arrowFunction.call(obj));


// // 5

// this.name = "Anna";

// function whoIsMyThis() {
//   function inner(params) {
//     return this.name;
//   }
//   return inner.call(this);
// }

// const iAmThis = {
//   name: "Satenik",
// };

// console.log(whoIsMyThis.call(iAmThis));

// // 4

// const obj = {
//   name: "Satenik",
//   fn() {
//     const foo = () => {
//       return this.name;
//     };
//     return foo();
//   },
// };

// console.log(obj.fn()); 

// // 5
// function a() {
//   this.site = "Ayush";

//   function b() {
//     console.log(this.site); 
//   }
//   b();
// }

// a();

// // 6

// function a() {
//   this.site = "Ayush";
//   let b = () => {
//     console.log(this.site);
//   };

//   b();
// }

// var site = "Wikipedia";
// a();
// console.log(site);

// // 7

// function a() {
//   console.log(this);
//   this.site = "Ayush";
//   this.age = 24;
//   console.log(this);
//   let b = () => {
//     this.site = 567;
//     console.log(this);
//     console.log(this.site);
//   };

//   b();
// }
// const obj = {
//   site: 300,
// };
// a.call(obj);

// // 8

// function a() {
//   this.site = "Ayush";

//   function b() {
//     console.log(this.site);
//   }

//   b();
// }

// new a();
// a();







