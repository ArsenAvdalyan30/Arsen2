// function foo() {
//     x = 1;
//     console.log(x);
//     }
//     foo();
//     console.log(x);
//     var x = 5;

// const person = { name: 'John' };
// const sayHi = (name) => this.name;

// console.log(sayHi.call(person, 'Lily'));
// console.log(sayHi.apply(person, ['Ani']));

// function print1() {
//   var name = "Alice";
//   print2();
// }
// function print2() {
//   console.log(name);
// }
// print1();
// print2();
// var name;

// let result = [1, 2, NaN, {}, "", [], "0"].filter((item) => item);
// console.log(result);

// function foo() {
//   return (a) => {
//     console.log(this.a);
//   };
// }
// const obj1 = {
//   a: 2,
// };
// const obj2 = {
//   a: 3,
// };
// const bar1 = foo.call(null);
// const bar2 = foo.call(obj1);
// bar1.call(obj2);
// bar2.call(obj2);

// const user = {
//   email: "b@mail.com",
//   password: "12345",
// };
// const updateUser = ({ email, password }) => {
//   if (email) {
//     Object.assign(user, { email });
//   }
//   if (password) {
//     user.password = password;
//   }
//   return user;
// };
// const updatedUser = updateUser({ email: "a@mail.com" });
// console.log(updatedUser === user);
// console.log(updatedUser.email);

// class List extends Array {
//   getLastItem() {
//     return this[this.length - 1];
//   }
// }
// const list = new List();
// console.log(list instanceof Object);
// console.log(list instanceof Function);
// console.log(list instanceof List);
// console.log(list instanceof Array);

// class Employee {
//   static id = 5;
//   constructor(name) {
//     this.name = name;
//   }
//   getName1 = () => {
//     return this.name;
//   };
//   getName2() {
//     return this.name;
//   }
// }
// const employee = new Employee("Bob");
// console.log(employee.hasOwnProperty("id"));
// console.log(employee.hasOwnProperty("name"));
// console.log(employee.hasOwnProperty("getName1"));
// console.log(employee.hasOwnProperty("getName2"));
// console.log(employee.getName1());

// console.log("start");
// (async () => {
//   console.log(1);
//   await Promise.resolve();
//   console.log(2);
// })();
// console.log("end");

// const promise = new Promise((resolve, reject) => {
//   setTimeout(resolve, 0, 2);
//   reject(1);
// });
// promise
//   .then((result) => {
//     console.log(result);
//     return 3;
//   })
//   .catch((error) => {
//     console.log(error);
//     return 4;
//   })
//   .then((result) => {
//     console.log(result);
//   });

// const promise1 = new Promise(r => setTimeout(r, 10, 1));
// const promise2 = new Promise(r => setTimeout(r, 100, 2));
// const promise4 = Promise.reject(4);
// const promise3 = Promise.resolve(3);
// Promise
// .all([promise1, promise2, promise3, promise4])
// .then(result => console.log(result))
// .catch(error => console.log(error));

const arr = [1, 2, 3, 4, 5];
const firstEvenNumberIndex = findIndex(arr, (elem) => elem % 2 === 0);
console.log(firstEvenNumberIndex); // Output: 1
const firstNegativeNumberIndex = findIndex(arr, (elem) => elem < 0);
console.log(firstNegativeNumberIndex); // Output: -1

function findIndex(arr, cb) {
    
}