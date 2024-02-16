// let message = 'Hello!';
// let phrase = message

// let user = {
//     name: 'John'
// };

// let user = {name: 'John'}
// let admin = user // copy the reference

// let user = {name: 'John'};
// let admin = user
// admin.name = 'Pete'
// console.log(user.name)

// let a = {};
// let b = a;

// console.log(a == b)
// console.log(a === b)

// let a = {};
// let b = {};
// console.log(a == b)

// const user = {
//     name: 'John'
// }

// user.name = 'Pete';
// console.log(user.name)

// let user = {
//     name: 'John',
//     age: 30
// };

// let clone = {};
// for(let key in user) {
//     clone[key] = user[key]
// }
// console.log(clone)
// clone.name = 'Pete';
// console.log(user.name)

// let user = {name: 'John'}
// let permission1 = {canView: true}
// let permission2 = {canEdit: true}

// Object.assign(user, permission1, permission2)
// console.log(user.name)
// console.log(user.canView)
// console.log(user.canEdit)
// let obj = Object.assign({},user)
// console.log(obj)

// let user = {name: ' John'}
// Object.assign(user, {name: ' Pete'})
// console.log(user.name)//now user = {name: 'Pete'}

// let user = {
//     name: 'John',
//     age: 30
// }

// let clone = Object.assign({}, user)
// console.log(clone.name)
// console.log(clone.age)

// const clone = {...user}
// console.log(clone)

// let user = {
//     name: 'John',
//     sizes: {
//         height: 182,
//         width: 50
//     }
// };

// console.log(user.sizes.height)

// let user = {
//     name: 'John',
//     sizes: {
//         height: 182,
//         width: 50
//     }
// }
// let clone = Object.assign({}, user)
// console.log(user.sizes === clone.sizes)
// user.sizes.width = 60;
// console.log(clone.sizes.width)

// let user = {
//     name: 'John',
//     sizes: {
//         height: 182,
//         width: 50
//     }
// }
// let clone = structuredClone(user)

// console.log(user.sizes === clone.sizes)
// user.sizes.width = 60;
// console.log(clone.sizes.width)

// let user = {};
// user.me = user
// console.log(user.me === user)
// let clone = structuredClone(user)
// console.log(clone.me === clone)

// // error
// structuredClone({
//     f: function() {}
// })












