// //homeWorkProf1
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   compareAge(per) {
//     if (this.age < per.age) {
//       return `${per.name} is older than me`;
//     } else if (this.age === per.age) {
//       return `${per.name} is the same age as me`;
//     }
//     return `${per.name} is younger than me`;
//   }
// }
// const p1 = new Person("Samuel", 24);
// const p2 = new Person("Joel", 36);
// const p3 = new Person("Lily", 24);
// console.log(p1.compareAge(p2));
// console.log(p2.compareAge(p1));
// console.log(p1.compareAge(p3));

// //homeWorkProf2
// class University {
//   constructor(teachers, students) {
//     this.teachers = [];
//     this.students = [];
//   }
//   addMember(member) {
//     if (member instanceof Teacher) {
//       this.teachers.push(member);
//     } else if (member instanceof Student) {
//       this.students.push(member);
//     }
//   }
//   removeMember(member) {
//     if (member instanceof Teacher) {
//       remove(this.teachers, member);
//     } else if (member instanceof Student) {
//       remove(this.students, member);
//     }
//     function remove(arr, member) {
//       const index = arr.indexOf(member);
//       if (index != -1) {
//         arr.splice(index, 1);
//       }
//       return arr;
//     }
//   }
//   startLessons() {
//     for (let teacher of this.teachers) {
//       teacher.startLessons();
//     }
//     for (let student of this.students) {
//       student.startLessons();
//     }
//   }
// }

// class UniversityMember {
//   constructor(name, age, role, energy = 24) {
//     this.name = name;
//     this.age = age;
//     this.role = role;
//     this.energy = energy;
//   }
//   info() {
//     let infoStr = "";
//     for (let prop in this) {
//       infoStr += `${prop}: ${this[prop]}\n`;
//     }
//     return infoStr;
//   }
// }
// class Teacher extends UniversityMember {
//   startLessons() {
//     this.energy -= 5;
//   }
// }
// class Student extends UniversityMember {
//   startLessons() {
//     this.energy -= 2;
//   }
// }

// const university = new University();
// console.log(university);
// const firstTeacher = new Teacher("John", 30, "Math");
// const firstStudents = new Student("Mark", 25, "English");
// university.addMember(firstTeacher);
// university.addMember(firstStudents);
// console.log(university);
// university.startLessons();
// console.log(university);

// //homeWorkProf3
// const menu = [
//   {
//     name: "orange juice",
//     type: "drink",
//     price: 10,
//   },
//   {
//     name: "lemonade",
//     type: "drink",
//     price: 15,
//   },
//   {
//     name: "cranberry juice",
//     type: "drink",
//     price: 20,
//   },
//   {
//     name: "pineapple juice",
//     type: "drink",
//     price: 25,
//   },
//   {
//     name: "lemon iced tea",
//     type: "drink",
//     price: 30,
//   },
//   {
//     name: "vanilla chai latte",
//     type: "drink",
//     price: 35,
//   },
//   {
//     name: "hot chocolate",
//     type: "drink",
//     price: 40,
//   },
//   {
//     name: "iced coffee",
//     type: "drink",
//     price: 45,
//   },
//   {
//     name: "tuna sandwich",
//     type: "food",
//     price: 50,
//   },
//   {
//     name: "ham and cheese sandwich",
//     type: "food",
//     price: 55,
//   },
//   {
//     name: "bacon and egg",
//     type: "food",
//     price: 60,
//   },
//   {
//     name: "steak",
//     type: "food",
//     price: 65,
//   },
//   {
//     name: "hamburger",
//     type: "food",
//     price: 70,
//   },
//   {
//     name: "cinnamon roll",
//     type: "food",
//     price: 75,
//   },
// ];
// class CoffeeShop {
//   constructor(name, menu, orders) {
//     this.name = name;
//     this.menu = menu;
//     this.orders = orders;
//   }
//   addOrder(nameProduct) {
//     for (let obj of this.menu) {
//       if (obj["name"] === nameProduct) {
//         this.orders.push(nameProduct);
//         return this.orders;
//       }
//     }
//     console.log("This item is currently unavailable");
//   }
//   fulfillOrder() {
//     if (!this.orders.length) {
//       console.log("All orders have been fulfilled");
//     } else {
//       console.log(this.orders.shift());
//     }
//   }
//   listOrders() {
//     console.log(this.orders);
//   }
//   dueAmount() {
//     let sum = 0;
//     for (let name of this.orders) {
//       for (let obj of this.menu) {
//         if (name === obj.name) {
//           sum += obj.price;
//         }
//       }
//     }
//     console.log(sum.toFixed(2));
//   }
//   cheapestItem() {
//     let compare = this.menu[0].price;
//     let nameOfProduct = this.menu[0].name;
//     for (let obj of this.menu) {
//       if (compare > obj.price) {
//         compare = obj.price;
//         nameOfProduct = obj.name;
//       }
//     }
//     console.log(nameOfProduct);
//   }
//   drinksOnly() {
//     const drinks = this.menu.reduce((arr, item) => {
//       if (item.type === "drink") {
//         arr.push(item.name);
//       }
//       return arr;
//     }, []);
//     console.log(drinks);
//   }
//   foodOnly() {
//     const food = this.menu.reduce((arr, item) => {
//       if (item.type === "food") {
//         arr.push(item.name);
//       }
//       return arr;
//     }, []);
//     console.log(food);
//   }
// }
// const myCoffeeShop = new CoffeeShop("tesha", menu, []);
// myCoffeeShop.addOrder("lemonade");
// myCoffeeShop.addOrder("iced coffee");
// console.log(myCoffeeShop.orders);
// myCoffeeShop.fulfillOrder();
// myCoffeeShop.addOrder("hamburger");
// myCoffeeShop.listOrders();
// myCoffeeShop.dueAmount();
// myCoffeeShop.cheapestItem();
// myCoffeeShop.drinksOnly();
// myCoffeeShop.foodOnly();
