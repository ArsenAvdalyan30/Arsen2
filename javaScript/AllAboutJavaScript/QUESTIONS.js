// // Question1
// class User {
//   constructor(name) {
//     // invokes the setter
//     this.name = name;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(value) {
//     if (value.length < 4) {
//       console.log("Name is too short.");
//       return;
//     }

//     this._name = value;
//   }
// }
// let user = new User("John");
// console.log(user.name); // John
// user = new User(""); // Name is too short.

// // Question2
// class Button {
//     constructor(value) {
//       this.value = value;
//     }
//     click() {
//       console.log(this.value);
//     }
//   }
//   let button = new Button('hello');
//   console.log(button.click)// [Function: click] // es toxy haskanalia
//   button.click()// hello // es toxn el a haskanali 
//   setTimeout(button.click, 1000);// undefined // estex nenc em haskanum vor this-y 
//                                  // korcnuma button-in u hxvuma globalin, 
//                                  // bayc te xi, lav chem patkeracnum, ete click-y chi kanchvum
//                                  // inchia tpum undefined? tekuz ete this-y korcrela button-in
//                                  // menq meka click method-y chenq kanchum che?.
//   //to fix the problem
//   setTimeout(()=>button.click(), 1000)// hello // es el nenc em haskanum, vor setTimeout-i 
//                                       // mej mi hat arrow enq pahum, vory return a anum
//                                       // click method-i tvac ardyunqy, button-i vra kanchac,
//                                       // dra hamar el normal ashxatuma, tenc? 
  



