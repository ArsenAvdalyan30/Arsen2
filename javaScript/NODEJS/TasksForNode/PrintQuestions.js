// codeExamples
/** Experiment 1 - all user written JavaScript code takes priority over async code that the runtime would like to execute */

console.log("console.log 1");
process.nextTick(() => console.log("this is process.nextTick 1"));
console.log("console.log 2");
// console.log(1)
// console.log(2)
// this is process.nextTick 1

/** Experiment 2 - all callbacks in nextTick queue are executed before all callbacks in promise queue */

process.nextTick(() => console.log(1));
process.nextTick(() => {
  console.log(2);
  process.nextTick(() => console.log(4));
});
process.nextTick(() => console.log(3));

Promise.resolve().then(() => console.log(5));
Promise.resolve().then(() => {
  console.log(6);
  process.nextTick(() => console.log(7));
});
Promise.resolve().then(() => console.log(8));
// 1, 2, 3, 4, 5, 6, 8, 7

/** Experiment 3 - microtask queues are executed before timer queue */

setTimeout(() => console.log("this is setTimeout 1"), 0);
setTimeout(() => console.log("this is setTimeout 2"), 0);
setTimeout(() => console.log("this is setTimeout 3"), 0);

process.nextTick(() => console.log(1));
process.nextTick(() => {
  console.log(2);
  process.nextTick(() => console.log(4));
});
process.nextTick(() => console.log(3));

Promise.resolve().then(() => console.log(5));
Promise.resolve().then(() => {
  console.log(6);
  process.nextTick(() => console.log(7));
});
Promise.resolve().then(() => console.log(8));
// 1, 2, 3, 4, 5, 6, 8, 7, this is setTimeout 1, this is setTimeout 2, this is setTimeout 3

/** Experiment 4 - microtask queues are executed inbetween timer queue callbacks */

setTimeout(() => console.log(1), 0);
setTimeout(() => {
  console.log(2);
  process.nextTick(() => console.log(4));
}, 0);
setTimeout(() => console.log(3), 0);

process.nextTick(() => console.log(5));
process.nextTick(() => {
  console.log(6);
  process.nextTick(() => console.log(7));
});
process.nextTick(() => console.log(8));

Promise.resolve().then(() => console.log(9));
Promise.resolve().then(() => {
  console.log(10);
  process.nextTick(() => console.log(11));
});
Promise.resolve().then(() => console.log(12));
// 5, 6, 8, 7, 9, 10, 12, 11, 1, 2, 4, 3

/** Experiment 5 - timer queue callbacks are executed in FIFO order */

setTimeout(() => console.log("this is setTimeout 1"), 1000);
setTimeout(() => console.log("this is setTimeout 2"), 500);
setTimeout(() => console.log("this is setTimeout 3"), 0);
// this is setTimeout 3, this is setTimeout 2, this is setTimeout 1

/** Experiment 6 - Microtask queues callbacks are executed before I/O queue callbacks */

const fs = require("fs");

fs.readFile(__filename, () => {
  console.log(2);
});

process.nextTick(() => console.log(1));
Promise.resolve().then(() => console.log(3));
// 1, 3, 2

/** Experiment 7 - Timer anamoly. Order of execution can never be guaranteed */

const fs = require("fs");

setTimeout(() => console.log(1), 0);

fs.readFile(__filename, () => {
  console.log(2);
});
// 1, 2, or versa
/** Experiment 8 - I/O queue callbacks are executed after Microtask queues callbacks and Timer queue callbacks are executed */

const fs = require("fs");

fs.readFile(__filename, () => {
  console.log(1);
});

process.nextTick(() => console.log(2));
Promise.resolve().then(() => console.log(3));
setTimeout(() => console.log(4), 0);

for (let i = 0; i < 1000000000; i++) {}
// 2, 3, 4, 1

/** Experiment 9 - I/O events are polled and callbacks are added only after I/O is complete */

const fs = require("fs");

fs.readFile(__filename, () => {
  console.log(5);
});

process.nextTick(() => console.log(1));
Promise.resolve().then(() => console.log(2));
setTimeout(() => console.log(3), 0);
setImmediate(() => console.log(4));

for (let i = 0; i < 2000000000; i++) {}
// 1, 2, 3, 4, 5

/** Experiment 10 - Check queue callbacks are executed after Microtask queues callbacks, Timer queue callbacks and I/O queue callbacks are executed  */

const fs = require("fs");

fs.readFile(__filename, () => {
  console.log(5);
  setImmediate(() => console.log(4));
});

process.nextTick(() => console.log(1));
Promise.resolve().then(() => console.log(2));
setTimeout(() => console.log(3), 0);

for (let i = 0; i < 2000000000; i++) {}
// 1, 2, 3, 5, 4

/** Experiment 11 - Microtask queues callbacks are executed after I/O callbacks and before check queue callbacks  */

const fs = require("fs");

fs.readFile(__filename, () => {
  console.log(7);
  setImmediate(() => console.log(6));
  process.nextTick(() => console.log(5));
  Promise.resolve().then(() => console.log(4));
});

process.nextTick(() => console.log(1));
Promise.resolve().then(() => console.log(2));
setTimeout(() => console.log(3), 0);

for (let i = 0; i < 2000000000; i++) {}
// 1, 2, 3, 7, 5, 4, 6

/** Experiment 12 - Microtask queues callbacks are executed inbetween check queue callbacks  */

setImmediate(() => console.log(7));
setImmediate(() => {
  console.log(6);
  process.nextTick(() => console.log(5));
  Promise.resolve().then(() => console.log(4));
});
setImmediate(() => console.log(3));
// 7, 6, 5, 4, 3

/** Experiment 13 - Timer anamoly. Order of execution can never be guaranteed */

setTimeout(() => console.log(1), 0);
setImmediate(() => console.log(2));
// Uncomment below to guarantee order
for (let i = 0; i < 1000000000; i++) {}
// 1, 2

/** Experiment 14 - Close queue callbacks are executed after all other queues callbacks  */

const fs = require("fs");

const readableStream = fs.createReadStream(__filename);
readableStream.close();

readableStream.on("close", () => {
  console.log(5);
});
setImmediate(() => console.log(4));
setTimeout(() => console.log(3), 0);
Promise.resolve().then(() => console.log(2));
process.nextTick(() => console.log(1));
// 1, 2, 3, 4, 5
