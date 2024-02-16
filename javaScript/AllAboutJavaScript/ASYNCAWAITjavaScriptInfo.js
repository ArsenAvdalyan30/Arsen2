// async function f() {
//     return 1;
// }

// async function f() {
//     return 1;
// }
// f().then(console.log)//1

// //the same as
// async function f() {
//     return Promise.resolve(1);
// }
// f().then(console.log)//1

// let value = await promise

// async function f() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done!"), 1000);
//   });
//   console.log(10);
//   let result = await promise; // wait until the promise resolves(*)
//   console.log(20);
//   console.log(result); // 'done'
//   console.log(3)
// }
// f();

// function f() {
//     let promise = Promise.resolve(1);
//     let result = await promise; // Syntax error
// }

// async function showAvatar() {
//   // read our JSON
//   let response = await fetch("/article/promise-chaining/user.json");
//   let user = await response.json();

//   // read github user
//   let githubResponse = await fetch(`http://api.github.com/users/${user.name}`);
//   let githubUser = await githubResponse.json();

//   // show the awatar
//   let img = document.createElement("img");
//   img.src = githubUser.avatar_url;
//   img.className = "promise-avatar-example";
//   document.body.append(img);

//   // wait 3 second
//   await new Promise((resolve, reject) => setTimeout(resolve, 3000));

//   img.remove();

//   return githubUser;
// }

// showAvatar();

// for old browsers
// (async () => {
//   let response = await fetch("/article/promise-chaining/user.json");
//   let user = await response.json();
//   /*...*/
// })();

// class Thenable {
//     constructor(num) {
//         this.num = num;
//     }
//     then(resolve, reject) {
//         console.log(resolve);
//         // resolve with this.num*2 after 1000ms
//         setTimeout(() => resolve(this.num * 2), 1000); //(*)
//     }
// }
// async function f() {
//     // waits for 1 second, then result becomes 2
//     let result = await new Thenable(1);
//     console.log(result);
// }
// f()

// class Waiter {
//   async wait() {
//     return await Promise.resolve(1);
//   }
// }
// new Waiter().wait().then(console.log); // 1 (this is the same as (result => console.log(result)))

// async function f() {
//     await Promise.reject(new Error('Whoops!'));
// }
// //is the same as
// async function f() {
//     throw new Error('Whoops');
// }

// async function f() {
//   try {
//     let response = await fetch("http: //no-such-url");
//   } catch (err) {
//     console.log(err); // TypeError: failed to fetch
//   }
// }
// f();

// async function f() {
//   try {
//     let response = await fetch("/no-user-here");
//     let user = await response.json();
//   } catch (err) {
//     // catches errors both in fetch and response.json
//     console.log(err);
//   }
// }

// f();

// async function f() {
//     let response = await fetch('http://no-such-url')
// }
// // f() becomes a rejected promise
// f().catch(console.log)

// wait for the array of result
// let result = await Promise.all([
//     fetch(url1),
//     fetch(url2),
//     ...
// ])






























