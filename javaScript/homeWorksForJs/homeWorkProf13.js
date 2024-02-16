// // homeWorkProf1
// let myPromise = new Promise((resolve, reject) => {
//   resolve(3);
// });
// let myPromise1 = new Promise((resolve, reject) => {
//   resolve(5);
// });

// function getTwoPromises(prom1, prom2) {
//   return new Promise((resolve, reject) => {
//     resolve(
//       Promise.all([prom1, prom2]).then((res) =>
//         res.reduce((acc, el) => acc + el)
//       )
//     );
//   });
// }
// getTwoPromises(myPromise, myPromise1).then(console.log);

// // homeWorkProf2
// const arr = [
//   (myPromise1 = new Promise((resolve, reject) => {
//     resolve(3);
//   })),
//   (myPromise2 = new Promise((resolve, reject) => {
//     resolve(5);
//   })),
//   (myPromise3 = new Promise((resolve, reject) => {
//     resolve(7);
//   })),
// ];
// function resolveArr(arrOfProms) {
//   return new Promise((resolve, reject) => {
//     resolve(Promise.all(arrOfProms)).then((res) => res);
//   });
// }
// resolveArr(arr).then(console.log);

// // homeWorkProf3
// function waitThenResolve(n) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(n), n);
//   });
// }
// waitThenResolve(5000).then(console.log);

// // homeWorkProf4
// let arrOfFnRetProm = [() => Promise.resolve(3), () => Promise.resolve(5)];
// function acceptArrOfFn(arr) {
//   return function retProm() {
//     let arrOfResolvedProms = (function recursion(arrForPush = [], index = 0) {
//       if (arrForPush.length === arr.length) {
//         return arrForPush;
//       }
//       arrForPush.push(arr[index]());
//       return recursion(arrForPush, (index += 1));
//     })();
//     return new Promise((resolve, reject) => {
//       resolve(Promise.all(arrOfResolvedProms));
//     });
//   };
// }
// acceptArrOfFn(arrOfFnRetProm)().then(console.log);
