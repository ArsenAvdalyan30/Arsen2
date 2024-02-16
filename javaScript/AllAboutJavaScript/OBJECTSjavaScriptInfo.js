// let user = new Object()
// let user1 = {}

// let user2 = {
//     name: 'John',
//     age: 30
// }
// console.log(user2.name)
// console.log(user2.age)
// user2.isAdmin = true
// console.log(user2.isAdmin)
// delete user2.age
// console.log(user2)

// let user = {
//     name: 'John',
//     age: 30,
//     'likes birds': true
// }

// let user = {
//     name: "John",
//     age: 30,
// }
// console.log(user)
// // user.likes birds = true //error

// let user = {};
// user['likes birds'] = true;
// console.log(user['likes birds']);
// delete user['likes birds']
// console.log(user)
// let key = 'likes birds';
// user[key] = true;
// console.log(user[key]) //same as
// console.log(user['likes birds'])

// let user = {
//     name: 'John',
//     age: 30
// };
// let key = prompt('What do you want to know about the user?')
// console.log(user[key])// John, (if enter 'name')

// let user = {
//     name: 'John',
//     age: 30
// };

// let key = 'name';
// console.log(user.key)//undefined
// console.log(user[key])//John

// let fruit = prompt('Which fruit to buy?')
// let bag = {
//     [fruit]: 5,
// };
// console.log(bag.apple)

// let fruit = prompt("Which fruit to buy?");
// let bag = {};
// bag[fruit] = 5;
// console.log(bag)

// let fruit = 'apple';
// let bag = {
//     [fruit + 'Computers']: 5//bag.appleComputers = 5
// }
// console.log(bag)

// function makeUser(name, age) {
//     return {
//         name: name,
//         age: age,
//     }
// }
// let user = makeUser('John', 30)
// console.log(user.name)
// console.log(makeUser('John', 30))

// function makeUser (name, age) {
//     return {
//         name,
//         age,
//     }
// }
// let user = makeUser('John', 30)
// console.log(user.name)
// console.log(user)

// let user = {
//   name, // same as name:name
//   age: 30,
// };

// let obj = {
//     for: 1,
//     let: 2,
//     return: 3
// }
// console.log(obj.for + obj.let + obj. return)

// let obj = {
//    0: 'test' //same as '0': 'test'
// };

// console.log(obj[0])//test
// console.log(obj['0'])//test (same property)

// let obj = {}
// obj.__proto__ = 5;
// console.log(obj.__proto__)

// let user = {};
// console.log(user.noSuchProperty === undefined)

// 'key' in object
// let user = {name: 'John', age: 30}
// console.log('age' in user)
// console.log('blabla' in user)

// let user = {age: 30};
// let key = 'age';
// console.log(key in user)

// let obj = {
//     test: undefined
// }
// console.log(obj.test)
// console.log('test' in obj)

// for (key in object) {}

// let user = {
//     name: 'John',
//     age: 30,
//     isAdmin: true
// }

// for(let key in user) {
//     console.log(key)
//     console.log(user[key])
// }

// let codes = {
//     '49': 'Germany',
//     '41': 'Switzerland',
//     '44': 'Great Britain',
//     '1': 'USA'
// }
// for(let code in codes) {
//     console.log(code)
// }

// console.log(String(Math.trunc(Number('49'))))
// console.log(String(Math.trunc(Number('+49'))))
// console.log(String(Math.trunc(Number('1.2'))))

// let user = {
//     name: 'John',
//     surname: 'Smith',
// };
// user.age = 25;
// for(let prop in user) {
//     console.log(prop)
// }

// let codes = {
//     '+49': 'Germany',
//     '+41': 'Switzerland',
//     '+44': 'Great Britain',
//     '+1': 'USA'
// }
// for(let code in codes) {
//     console.log(+code)
// }

// // tasks
// const user = {};
// const user1 = new Object();
// user.name = 'John'
// user['name'] = 'John'
// console.log(user)
// user.surname = 'Smith'
// user.name = 'Pete'
// console.log(user)
// delete user.name
// console.log(user)

// function isEmpty(obj) {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// }
// let schedule = {};
// console.log(isEmpty(schedule));
// schedule["8:30"] = "get up";
// console.log(isEmpty(schedule));

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
// let sum = 0;
// for(let key in salaries) {
//     sum += salaries[key]
// }
// console.log(sum)

// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === "number" && !isNaN(obj[key])) {
//       obj[key] *= 2;
//     }
//   }
//   return obj
// }
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };
// console.log(multiplyNumeric(menu));
