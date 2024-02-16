// let animal = {
//   eats: true,
//   name: 'john'
// };
// let rubbit = {
//   jump: true,
// };

// rubbit.__proto__ = animal
// console.log(rubbit.name)
// console.log(animal.jump)
// console.log(rubbit.eats)

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

// let longEar = {
//   earLength: 10,
//   __proto__: rabbit,
// };
// longEar.walk();
// console.log(longEar.jumps)

// let animal = {
//     walk() {
//       if (!this.isSleeping) {
//         console.log(`I walk`);
//       }
//     },
//     sleep() {
//       this.isSleeping = true;
//     }
//   };
  
//   let rabbit = {
//     name: "White Rabbit",
//     __proto__: animal
//   };
  
//   // modifies rabbit.isSleeping
//   rabbit.sleep();
// //   animal.sleep()
  
//   console.log(rabbit.isSleeping); // true
//   console.log(animal.isSleeping)

let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3,
    __proto__:head
  };
  
  let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
  };
  
  let pockets = {
    money: 2000,
    __proto__:bed
  };

 
  console.log(pockets.pen)
  console.log(bed.glasses)
