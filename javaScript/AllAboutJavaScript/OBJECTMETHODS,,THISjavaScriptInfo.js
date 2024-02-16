// let user = {
//     name: 'John',
//     age: 30
// }

// user.sayHi = function() {
//     console.log('Hello')
// };

// user.sayHi()

// function sayHi() {
//     console.log('Hello')
// };
// user.sayHi = sayHi
// user.sayHi()

// user = {
//   sayHi: function () {
//     console.log("Hello");
//   },
// };
// //same as
// user = {
//   sayHi() {
//     console.log("Hello");
//   },
// };

// let user = {
//   name: "John",
//   age: 30,
//   sayHi() {
//     console.log(this.name);
//   },
// };
// user.sayHi()//John

// let user = {
//     name: 'John',
//     age: 30,
//     sayHi() {
//         console.log(user.name)
//     }
// }
// user.sayHi()

// let user = {
//   name: "John",
//   age: 30,
//   sayHi() {
//     console.log(user.name);
//   },
// };

// let admin = user;
// user = null;
// admin.sayHi(); //error

// function sayHi() {
//     console.log(this.name)
// }

// let user = {name: 'John'}
// let admin = {name: 'Admin'}

// function sayHi() {
//     console.log(this.name)
// }

// user.f = sayHi
// admin.f = sayHi

// user.f()
// admin.f()//same as
// admin['f']()

// function sayHi() {
//     console.log(this.name)
// }

// sayHi()//undefined

// let user = {
//     firstName: 'Ilya',
//     sayHi() {
//         let arrow = () => console.log(this.firstName)
//         arrow()
//     }
// }
// user.sayHi()//Ilya

// task
// function makeUser() {
//   return {
//     name: "John",
//     ref: this,
//   };
// }
// let user = makeUser();
// console.log(user.ref.name);

// function makeUser() {
//     return this
// }
// console.log(makeUser().name)

// function makeUser() {
//     return {
//         name: 'John',
//         ref() {
//             return this;
//         }
//     }
// }

// let user = makeUser();
// console.log(user.ref().name)//John

// let calculator = {
//     sum() {
//         return this.a + this.b
//     },

//     mul() {
//         return this.a * this.b
//     },

//     read() {
//         this.a = +prompt('a?')
//         this.b = +prompt('b?')
//     }
// }

// calculator.read()
// console.log(calculator.sum())
// console.log(calculator.mul())

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function () {
//     console.log(this.step);
//     return this;
//   },
// };

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();
// ladder.down();
// ladder.showStep();

// ladder.up().up().down().showStep().down().showStep();














