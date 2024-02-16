// let promise = new Promise(function(resolve, reject) {
//     // executor (the producing code, 'singer')
// });

// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve("done"), 1000);
// });

// let promise = new Promise(function (resolve, reject) {
//   // after 1 second signal that the job is finished with an error
//   setTimeout(() => reject(new Error("Woops!")), 100);
// });

// let promise = new Promise(function (resolve, reject) {
//   resolve("done");

//   reject(new Error("...")); // ignored
//   setTimeout(() => resolve("...")); // ignored
// });

// let promise = new Promise(function(resolve, reject) {
//   // not taking our time to do the job
//   resolve(123); // immediately give the result: 123
// });
// console.log(promise) // Promise { 123 }

// Promise.then(
//   function (result) {
//     /* handle a successful result */
//   },
//   function (error) {
//     /* handle an error*/
//   }
// );

// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve("done"), 1000);
// });
// // resolve runs the first function in .then
// promise.then(
//   (result) => console.log(result), // shows 'done!' after 1 second
//   (error) => console.log(error) // doesn't run
// );

// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => reject(new Error("Whoops!")), 1000);
// });
// // reject runs the second function in .then
// promise.then(
//   (result) => console.log(result), // doesn`t run
//   (error) => console.log(error) // shows 'Error: Whoops!' after 1 second
// );

// let promise = new Promise(resolve => {
//     setTimeout(() => resolve('done'), 1000);
// })
// promise.then(console.log); // shows 'done!' after 1 second

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => reject(new Error('Whoops!')), 1000)
// });
// // .catch(f) is the same as promise.then(null, f)
// promise.catch(console.log)// shows 'Error: Whoops!' after 1 second

// new Promise((resolve, reject) => {

// }).finally(() =

// const myPromise = new Promise((resolve, reject) => {
//   resolve(2);
// });
// const timesTwo = (val) => val * 2;
// mapPromise(myPromise, timesTwo).then((result) => console.log(result));

// function promiseState(p) {
//   const t = {};
//   return Promise.race([p, t]).then(
//     (v) => (v === t ? "pending" : "fulfilled"),
//     () => "rejected"
//   );
// }
// function mapPromise(prom, trans) {
//     return new Promise((resolve, reject) => {
//         if(Promise.race([prom]).then((v)=>))
//     })
// }

// Promise
// homeWorkProf3
// function mapPromise(prom, trans) {
//     return prom.then((res) => trans(res)).catch((rej) => new Error(rej));
//   }
  
//   const myPromise = new Promise((resolve, reject) => {
//     resolve(2);
//   });
//   const timesTwo = (val) => val * 2;
  
//   mapPromise(myPromise, timesTwo).then((res) => console.log(res));

// new Promise((resolve, reject) => {
//     /* do something that take time, and then call resolve or maybe reject */
// })
// //runs when the promise is settled, doesn't matter successfully or not
// .finally(() => stop loading indicator)
// // so the loading indicator is always stopped before we go on
// .then(result => show result, err => show error)

// new Promise ((resolve, reject) => {
//     setTimeout(() => resolve('value'), 2000)
// })
// .finally(() => console.log('Promise ready'))// triggers first
// .then(result => console.log(result))// <-- .then show 'value'

// new Promise ((resolve, reject) => {
//     throw new Error('error');
// })
// .finally(() => console.log('Promise ready'))// triggers first
// .catch(err => console.log(err)); // <-- .catch shows the error

// function delay(ms) {
//     return new Promise ((resolve, reject) => {
//         setTimeout(resolve, ms)
//     })
//   }
  
//   delay(3000).then(() => console.log('Hello'));






























