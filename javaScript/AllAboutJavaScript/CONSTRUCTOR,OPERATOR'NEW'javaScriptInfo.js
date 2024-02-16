// function User(name) {
//     this.name = name;
//     this.isAdmin = false
// }

// let user = new User('Jack')
// console.log(user.name)
// console.log(user.isAdmin)

// let user = new function () {
//     this.name = 'John';
//     this.isAdmin = false
// }
// console.log(user)

// function User() {
//     console.log(new.target)
// }

// User()
// new User()

// function User(name) {
//     if(!new.target) {
//         return new User(name)
//     }

//     this.name = name
// }

// let john = User('John')
// console.log(john.name)

// function BigUser() {
//   this.name = "John";
//   return { name: "Godzilla" };
// }
// console.log(new BigUser().name);

// function SmallUser() {
//     this.name = 'John'
//     return
// }
// console.log(new SmallUser().name)

// let user = new User;
// //same as
// let user = new User()

// function User(name) {
//     this.name = name
//     this.sayHi = function() {
//         console.log('My name is: ' + this.name)
//     }
// }

// let john = new User('John')
// john.sayHi()

// // task
// let obj = {}
// function A() {
//     return obj
// }
// function B() {
//     return obj
// }
// let a = new A()
// let b = new B()
// console.log(a == b)

// function Calculator() {
//   this.read = function () {
//     this.a = +prompt("a?");
//     this.b = +prompt("b?");
//   };
//   this.sum = function () {
//     return this.a + this.b;
//   };
//   this.mul = function () {
//     return this.a * this.b;
//   };
// }

// let calculator = new Calculator()
// calculator.read()
// console.log('Sum=' + calculator.sum())
// console.log('Mul=' + calculator.mul())

// function Accumulator(startingValue) {
//   this.value = startingValue;
//   this.read = function () {
//     this.value += +prompt("a?");
//   };
// }

// let accumulator = new Accumulator(1);

// accumulator.read();
// accumulator.read();

// console.log(accumulator.value);

// function User(name, age, city) {
//   this.name = name;
//   this.age = age;
//   this.city = city;
//   this.showName = function () {
//     console.log(`this is ${this.name}`);
//   };
//   this.showAge = () => console.log(`this is ${this.age}`);
// }

// const p1 = new User("John", 30, "Paris");
// console.log(p1);
// p1.showName();
// p1.showAge();
// console.log(p1.__proto__);

// function User (name, age) {
//     this.name = name;
//     this.age = age
// }
// let us1 = new User('Jachki')
// console.log(us1.__proto__.__proto__)
