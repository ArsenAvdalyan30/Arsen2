// let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName)

// let user = {
//     name: 'John'
// }

// let descriptor = Object.getOwnPropertyDescriptor(user, 'name')

// console.log(descriptor)
// console.log(JSON.stringify(descriptor, null, 2))

// Object.defineProperty(obj, propertyName, descriptor)

// let user = {}
// Object.defineProperty(user, 'name', {
//     value: 'John'
// })

// let descriptor = Object.getOwnPropertyDescriptor(user, 'name')
// console.log(JSON.stringify(descriptor, null, 2))

// let user = {
//     name: 'John'
// }
// Object.defineProperty(user, 'name', {
//     writable: false
// })

// user.name = 'Pete';

// let user = {}
// Object.defineProperty(user, 'name', {
//     value: 'John',
//     enumerable: true,
//     configurable: true,
// })
// console.log(user.name)
// user.name = 'Pete'
// console.log(user.name)

// let user = {
//     name: 'John',
//     toString() {
//         return this.name
//     }
// }

// for(let key in user) {
//     console.log(key)
// }

// let user = {
//     name: 'John',
//     toString() {
//         return this.name
//     }
// }

// Object.defineProperty(user, 'toString', {
//     enumerable: false
// })

// for(let key in user) {
//     console.log(key)
// }
// console.log(Object.keys(user))

// let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(JSON.stringify(descriptor, null, 2))
// Object.defineProperty(Math, 'PI', {writable: true})

// let user = {
//   name: "John",
// };

// Object.defineProperty(user, "name", {
//   configurable: false,
// });

// user.name = "Pete"; // works fine
// delete user.name; // Error
// console.log(user);

// let user = {
//   name: "John",
// };

// Object.defineProperty(user, "name", {
//   writable: false,
//   configurable: false,
// });

// user.name = 'Pete'
// console.log(user.name)
// delete user.name
// console.log(user.name)
// Object.defineProperty(user, 'name', {
//     value: 'Pete'
// })//error

// Object.defineProperties(obj, {
//     prop1: descriptor1,
//     prop: descriptor2
//     //...
// })

// Object.defineProperties(user, {
//     name: {value: 'John', writable: false},
//     surname: {value: 'Smith', writable: false},
//     //...
// })

// let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj))

// for (let key in user) {
//     clone[key] = user[key]
// }















