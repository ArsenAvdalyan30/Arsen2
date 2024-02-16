// let animal = {
//     eats:true
// }
// let rabbit = {
//     jumps: true
// }
// rabbit.__proto__ = animal

// console.log(rabbit.eats)//true
// console.log(rabbit.jumps)//true
// console.log(animal.jumps)//undefined
// let a = Object.getPrototypeOf(rabbit)
// console.log(a)//{eats:true}

// let animal = {
//   eats: true,
//   walk() {
//     console.log("Animal walk");
//   },
// };

// let rabbit = {
//   jumps: true,
//   __proto__: animal,
// };

// rabbit.walk()//Animal walk

// let animal = {
//   eats: true,
//   walk() {
//     console.log("Animal walk");
//   },
// };

// let rabbit = {
//     jumps: true,
//     __proto__: animal
// }

// let longEar = {
//     earLength: 10,
//     __proto__: rabbit
// }
// longEar.walk()//Animal walk
// console.log(longEar.jumps)//true
// rabbit.walk()//Animal walk

// let animal = {
//   eats: true,
//   walk() {
//     console.log("Animal walk");
//   },
// };

// let rabbit = {
//   __proto__: animal,
// };

// rabbit.walk = function () {
//   console.log("Rabbit! Bounce-bounce!");
// };

// rabbit.walk()

// let user = {
//   name: "John",
//   surname: "Smith",

//   set fullName(value) {
//     [this.name, this.surname] = value.split(" ");
//   },

//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   },
// };

// let admin = {
//   __proto__: user,
//   isAdmin: true,
// };
// console.log(admin.fullName); //John Smith

// admin.fullName = "Alice Cooper";
// console.log(admin.fullName);//Alice Cooper, state of admin modified
// console.log(user.fullName);//John Smith, state of user protected

// let animal = {
//     walk() {
//         if (!this.isSleeping) {
//             console.log(`I walk`)
//         }
//     },
//     sleep() {
//         this.isSleeping = true
//     }
// }

// let rabbit = {
//     name: "White Rabbit",
//     __proto__: animal
// }
// //modifies rabbit.isSleeping
// rabbit.sleep()
// console.log(rabbit.isSleeping)//true
// console.log(animal.isSleeping)// undefined(no such property in the prototype)

// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true,
//     __proto__: animal
// };

// console.log(Object.keys(rabbit))//jumps
// for(let prop in rabbit) console.log(prop)

// let animal = {
//   eats: true,
// };

// let rabbit = {
//   jumps: true,
//   __proto__: animal,
// };

// for (let prop in rabbit) {
//   let isOwn = rabbit.hasOwnProperty(prop);
//   if (isOwn) {
//     console.log(`Our: ${prop}`); //Our: jumps
//   } else {
//     console.log(`Inherited: ${prop}`); // Inherited: eats
//   }
// }

// let animal = {
//   jumps: null,
// };
// let rabbit = {
//   __proto__: animal,
//   jumps: true,
// };
// console.log(rabbit.jumps);
// delete rabbit.jumps;
// console.log(rabbit.jumps);
// delete animal.jumps;
// console.log(rabbit.jumps);

// let head = {
//     glasses: 1
// };

// let table = {
//     pen: 3,
//     __proto__: head
// };

// let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__: head
// };

// let pockets = {
//     money: 2000,
//     __proto__: table
// }

// console.log(pockets.pen)
// console.log(bed.glasses)
// console.log(table.money)

// let animal = {
//     eat() {
//         this.full = true
//     }
// }

// let rabbit = {
//     __proto__: animal
// }

// rabbit.eat()//
// console.log(rabbit.full)

// let hamster = {
//   stomach: [],
//   eat(food) {
//     this.stomach = [food]
//   },
// };
// let speedy = {
//   __proto__: hamster,
// };

// let lazy = {
//   __proto__: hamster,
// };
// speedy.eat("apple");
// console.log(speedy.stomach);
// console.log(lazy.stomach);


























