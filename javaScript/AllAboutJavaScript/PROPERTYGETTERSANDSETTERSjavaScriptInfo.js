// let obj = {
//     get propName() {
//         //getter, the code executed on getting obj.propName
//     },

//     set propName(value) {
//         //setter, the code executed on setting obj.propName = value
//     }
// }

// let user = {
//     name: 'John',
//     surname: 'Smith'
// }

// let user = {
//   name: "John",
//   surname: "Smith",

//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   },
// };

// console.log(user.fullName)

// let user = {
//   get fullName() {
//     return `...`;
//   },
// };

// console.log(user.fullName = 'Test'); // Error (property has a only a getter)

// let user = {
//   name: "John",
//   surname: "Smith",

//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   },

//   set fullName(value) {
//     [this.name, this.surname] = value.split(" ");
//   },
// };

// user.fullName = 'Alice Cooper'
// console.log(user.name)//Alice
// console.log(user.surname)//Cooper

// let user = {
//     name: 'John',
//     surname: 'Smith'
// };

// Object.defineProperty(user, 'fullName', {
//     get() {
//         return `${this.name} ${this.surname}`
//     },
//     set(value) {
//         [this.name, this.surname] = value.split(' ')
//     }
// })
// console.log(user.fullName) // John Smith
// for(let key in user) {
//     console.log(key)
// }//name surname

// Object.defineProperty({}, "prop", {
//   get() {
//     return 1;
//   },
//   value: 2,
// });//invalid property descriptor

// let user = {
//   get name() {
//     return this._name;
//   },
//   set name(value) {
//     if (value.length < 4) {
//       console.log("Name is too short, need at least 4 characters");
//       return;
//     }
//     this._name = value;
//   },
// };

// user.name = 'Pete'
// console.log(user.name)//Pete
// user.name = '';//Name is too short...

// function User(name, age) {
//     this.name = name;
//     this.age = age;
// }

// let john = new User('John', 25)
// console.log(john.age);// 25

// function User(name, birthday) {
//     this.name = name;
//     this.birthday = birthday
// }
// let john = new User('John', new Date(1992, 6, 1))
// console.log(john)

// function User(name, birthday) {
//   this.name = name;
//   this.birthday = birthday;
//   Object.defineProperty(this, "age", {
//     get() {
//       let todayYear = new Date().getFullYear();
//       return todayYear - this.birthday.getFullYear();
//     },
//   });
// }

// let john = new User("John", new Date(1992, 6, 1));

// console.log(john.birthday);
// console.log(john.age);














