// let timerId = setTimeout(func|code, [delay], [arg1], [arg2],...)

// function sayHi() {
//     console.log('Hello');
// }
// setTimeout(sayHi, 1000);

// function sayHi(phrase, who) {
//     console.log(phrase + ', ' + who);
//     setTimeout(sayHi, 1000, 'Hello', 'John')
// }

// setTimeout(sayHi, 1000, 'Hello', 'John');// Hello John

// setTimeout('console.log(Hello)', 1000)

// setTimeout(() => console.log('Hello'), 1000)

// setTimeout(sayHi(), 1000) // Wrong// undefined will be shown

// let timerId = setTimeout(...);
// clearTimeout(timerId)

// let timerId = setTimeout(()=> console.log('never happens'), 1000);
// console.log(timerId); // timer identifier

// clearTimeout(timerId);
// console.log(timerId);//same identifier

// let timerId = setInterval(func|Code, [delay], [arg1], [arg2], ...)

// let timerId = setInterval(() => console.log('tick'), 2000);
// setTimeout(() => {clearInterval(timerId); console.log('stop');}, 5000)


// let timerId = setInterval(() => console.log('tick'), 2000)

// let timerId = setTimeout(function tick () {
//     console.log('tick');
//     timerId = setTimeout(tick, 2000);
// }, 2000)

// let delay = 5000;
// let timerId = setTimeout(function request() {
//     ...send request...

//     if (request failed due to server overloaded){
//         // icrease the interval to the next run
//         delay *= 2;
//     }

//     timerId = setTimeout(request, delay)
// }, delay)

// let i = 1;
// setInterval(function() {
//     func(i++);
// }, 100);

//nested setTimeout
// let i = 1
// setTimeout(function run() {
//     func(i++);
//     setTimeout(run, 100) 
// }, 100);

// setTimeout(function() {...}, 100);

// setTimeout(() => console.log('World'));
// console.log('Hello');
// // // Hello then World

// let start = Date.now();
// let times = [];

// setTimeout(function run() {
//     times.push(Date.now() - start); // remember delay from the previous call
//     if (start + 100 < Date.now()) console.log(times); // show the delays after 100ms
//     else setTimeout(run); // else re-schedule
// });

// // an example of the output:
// // 1,1,1,1,9,15,20,24,30,35,40,45,50....














































































































