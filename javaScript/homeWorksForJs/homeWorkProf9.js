// 1) գրեք Book constructor, որի էկզեմպլյառները կունենան author և title property-ներ, ու getTitle ու getAuthor մեթոդները,
// որոնք կվերադարձնեն author և title property-ները այս տեսքով ՝ 'Title: ....', 'Author: ...': Օրինակ՝
//
// Harry Potter գիրքը ստեղծենք HP անունով
//
// HP.title => "Harry Potter"
// HP.author => "J.K. Rowling"
// HP.getTitle() => "Title: Harry Potter"
// HP.getAuthor() => "Author: J.K. Rowling"

// homeWorkProf1
// function Book(title, author) {
//   this.title = title;
//   this.author = author;
//   this.getTitle = function () {
//     return `Title: ${this.title}`;
//   };
//   this.getAuthor = function () {
//     return `Author: ${this.author}`;
//   };
// }
// const HP = new Book("Harry Potter", "J.K. Rowling");
// console.log(HP.title);
// console.log(HP.author);
// console.log(HP.getTitle());
// console.log(HP.getAuthor())

// 2) գրեք Calculator constructor, որը կունենա add, subtract, multiply ու divide մեթոդները։ Օրինակ՝
// function Calculator() {
//    // ձեր կոդը
// }
// const calculator = new Calculator()
//
// calculator.add(10, 5) => 15

// homeWorkProf2
// function Calculator() {
//   this.add = (a, b) => a + b;
//   this.subtract = (a, b) => a - b;
//   this.multiply = (a, b) => a * b;
//   this.divide = (a, b) => a / b;
// }
// const calculator = new Calculator();
// console.log(calculator.add(10, 5));
// console.log(calculator.subtract(30, 7));
// console.log(calculator.multiply(5, 5));
// console.log(calculator.divide(81, 9));

// 3. Create a constructor named User and create a way to check the number of users (number of
//     instances) that were created, so that the value can be accessed as a class attribute.
//     Example:
//     u1 = new User("johnsmith10")
//     User.userCount ➞ 1
//     u2 = new User("marysue1989")
//     User.userCount ➞ 2
//     u3 = new User("milan_rodrick")
//     User.userCount ➞ 3

// // homeWorkProf3
// class User {
//   constructor(name) {
//     this.name = name;
//     if (new.target) {
//       User.userCount += 1;
//     }
//   }
// }
// User.userCount = 0;
// u1 = new User("johnsmith10");
// console.log(User.userCount);
// u2 = new User("marysue1989");
// console.log(User.userCount);
// u3 = new User("milan_rodrick");
// console.log(User.userCount);

// // 4) Ինչ կտպվի ծրագրի աշխատանքից հետո, բացատրեք ինչու
// // homeWorkProf4
// const obj = {
//     age: 24,
//     foo: function () {
//         let self = this;
//         ((num) => {
//             this.age = num
//         })(17);
//         console.log(this.age);
//     }
//  }
//  obj.foo()
//  // qani vor obj - i mej foo method - i mej nkaragrvac arrow function - y
//  chuni sepakan this, apa this - y hxvum e ir verevi(parent) function - i this - in,
//  vorn el qani vor kanchvac e obj - i vrayic, hetevabar ira this - y obj - n e,
//  isk this.age - y 24, sakayn qani vor arrow function - y IIF e, ayn vercnum e
//  this.age - y(24) ev nra arjeqy veranshanakum ir argumentov` num - ov(17),
//  aysinqn voch miayn foo - n ktpi 17, ayl aysuhet obj - i age - y poxvel ev darcel e 17
//  console.log(obj)

// // 5) Ինչ կտպվի ծրագրի աշխատանքից հետո, բացատրեք ինչու
// const obj = {
//   a: 777,
//   foo,
// };
// foo(); // undefined
// function foo() {
//   console.log(this.a);
// }
// obj.foo(); //777

// skzbum obj - i mej trvum e foo property - n, vory deryevs arjeq chuni, aynuhetev obj - ic durs
// foo - in <<trvum e funkcia arjeq>> function declaration - i tesqov, hetevabar nran karox enq kanchel
// nkaragrutyunic araj, sakayn kanchi ardyunqum kstananq undefined, qani vor foo - ic pahanjvum e tpel this - i
// a property - i arjeqy, isk this - y tvyal depqum global Objectn e(vorovhetev foo - n uxxaki kanchvel e ayl
// vochte inch vor bani vrayic,(orinak obj-i)), vori vra voch a ka vochel a - i arjeq)).
// isk arden obj.foo() kanchi jamanak kstananq 777, vorovhetev foo - i meji this - y arden obj - n
// e(qani vor foo - n kanchvel e obj-i vrayic), ev this - i a property - i arjeqn el 777 - n e.

// // 6) Ինչ կտպվի ծրագրի աշխատանքից հետո, բացատրեք ինչու
// const obj = {
//   age: 22,
//   showAge() {
//     console.log(this.age);
//     const arrowAge = () => {
//       console.log(this.age);
//     };
//     arrowAge();//22
//   },
//   showArrowAge: () => {
//     console.log(this.age);//undefined
//   },
// };
// obj.showAge();
// //22
// //22
// obj.showArrowAge();
// //undefined

// //showAge funcian ir mej uni arrowAge arrow functiony, vori this - y ir parent showAge function - i
// //this - n e, ev hetevabar obj.showAge() kanchi jamanak nax tpum e 22, vorovhetev showAge - i this - y, objn
// //e, aynuhetev eli nuyn tramabanutyamb arrowAge() - i kanchn e tpum 22.
// //showArrowAge function - y ktpi undefined, qani vor ayn arrow e, chuni sepakan this - y, ev chnayac nran vor
// //kanchvum e obj - i vrayic mievnuyn e this-y hxvum e globalin, vortex voch age ka voch el age - i arjeq)).

// // 7) Ինչ կտպվի ծրագրի աշխատանքից հետո, բացատրեք ինչու
// const foo = function () {
//    this.x = 5;
//    (function () {
//        this.x = 3;
//    })();
//    console.log(this.x);//3
// };
// const obj = {
//    x: 4,
//    logger: function () {
// This = {}
//        console.log(this.x);
//    }
// };
// foo();//3
// new foo();//5
// obj.logger();//4
// new obj.logger();//undefined

// //foo()-i kanchi ardyunqum nax globalum kstexcvi x ` 5 arjeqov, vorovhetev ays depqum foo - i this- y hxvum e
// //global Object- in, aynuhetev ira meji IIF function-y kvercni ira parent function - ic ayd x - y ev nran kveranshanaki 3
// //arjeqov` 5 - i poxaren, ayspisov foo - i kanchi ardyunqum kstananq 3.
// //new foo() - i depqum nax kstexcvi object vori x property - i arjeqy kdarna 5, isk IIF arrow function - i
// //this - y eli global Objectn e,vortex kstexcvi x` ira 3 arjeqov, ayspisov new foo() kanchi
// //ardyunqum kstananq 5
// //obj.logger() - i depqum stacvum e vor logger method- y kanchvum e obj - i vrayic, hetevabar ira this- y
// //obj-n e, This = {} - logger - i this-i hamar vochinch chi poxum, vorovhetev mecatar This- y
// //keyword che ayl uxxaki global haytararum e, ayspisov obj.logger() methodi kanchi ardyunqum
// //kstananq mer obj-i x property - i arjeqy, vory 4 e
// //new obj.logger() - i kanchi depqum kstananq undefined, qani vor ayd kanchov nax stexcvum e nor object,
// //vorum pastoren property chka, this - y hxvelu tex chuni, uremn hxvum e globalin, vortex evs x chka,
// //hetevabar stanum enq undefined.

// let rectangleArea = (length, width) => length * width;

// const countParams = (fn) => {
//   return (...params) => {
//     if (params.length !== 2) {
//       console.log(`Incorect count of parameters for ${fn.name}`);
//     }
//     return fn(...params);
//   };
// };

// rectangleArea = countParams(rectangleArea);

// console.log(rectangleArea(20, 30));

let rectangleArea = (length, width) => length * width;

const chekNum = (fn) => {
  return (...args) => {
    args.forEach((item) => {
      if (typeof Number(item) !== "number" && isNaN(item)) {
        console.log("Please input a number");
      }
    });
    return fn(...args);
  };
  
};
rectangleArea = chekNum(rectangleArea);
console.log(rectangleArea("asd", 30));
