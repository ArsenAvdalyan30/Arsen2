// function slow(x) {
//   console.log(`Called with ${x}`);
//   return x;
// }

// function cachingDecorator(func) {
//   let cache = new Map();

//   return function (x) {
//     if (cache.has(x)) {
//       return cache.get(x);
//     }

//     let result = func(x);

//     cache.set(x, result);
//     return result;
//   };
// }
// console.log(slow(1));
// console.log("Again: " + slow(1));

// console.log(slow(2));
// console.log("Again: " + slow(2));

