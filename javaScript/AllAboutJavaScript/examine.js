// //erb constructor funkcian kanchvum e new keywordov,texi en unenum
// //hetevyal gorcoxutyunnery
// //1. stugvum e te ardyoq constructor funkcian veradarcnum e
// // primitive type te reference type, referenci - i depqum veradarcnum e
// // reference type - y, isk primitivi depqum, ayn antesvum e ev chi veradarcvum,
// // ayl katarvum en hetevyal gorcoxutyunnery.
// //2. stexcvum e nor datark obyekt ev hxvum e this- in
// //3. ays obyekti __proto__ darnum e constructor funkciayi prototype -y
// //4. veradarcnum e nor stexcvac obyekt-y
// // orinak
// function User (name, age) {
//     // this = {} (stexcvec datark obyekt ev veragrvec this-in)
//     this.name = name,//(sovorabar avelanum en vorosh hatkutyunner)
//     this.age = age
//     return 8 //(primitive type-i veradarc, vory antesvum e)
// }

// const obj = new User('Jack', 30) //{Jack: 30}
// console.log(obj.__proto__ === User.prototype)//true

// ka hatuk nerkarucvac funkciayi metod, func.call (context(this), …args),
// vory tuyl e talis kanchel funkcian hstak sahmanelov this-y(contexty):

// const arr = [1, 2, 3, 4, 5, 6]
// // console.log(arr)
// const splicedArr = arr.splice(2, 0, 'hello')
// console.log(splicedArr)
// console.log(arr)

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const slicedArr = arr.slice(1, -2)
// console.log(slicedArr)
// console.log(arr)

// const filteredArr = arr.filter(item => item > 5)
// console.log(filteredArr)

// const mapedArr = arr.map(item => item * 2)
// console.log(mapedArr)

// const sortedArr = arr.sort((a, b) => b - a);
// console.log(sortedArr)








