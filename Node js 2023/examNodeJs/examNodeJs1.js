1. What's the difference between exports and module.exports?

2. WHat will be the outPut in case of common standard if you run b.js file?

```js
// a.js

console.log(45);
const { name } = require("./b.js");
console.log(name);

// b.js

console.log(1);
module.exports = {
  name: "john",
};
console.log(12);
```

3. What will be the output in case of module standard if you run a.js file?

```js
// a.mjs
console.log(45);
import { obj } from "./b.mjs";
console.log(obj);

// b.mjs

console.log(1);
export const obj = {
  name: "John",
};
console.log(12);
```

4. Implement a function to read a file via streams and write it in a different file. 
1. Use "data" event 
2. Use pipe method.

5. Create a transform stream that converts incoming data, if it contains the word "hello, will remove and will transfer only other words.

6. Create an event emitter instance` eventOne and register a 2 listener, 
1. When the event 'eventOne' is emitted, both the above listeners should be invoked.
2. Remove second listener and after emitting 'eventOne', it should call only first listener
3. Print count of listeners. 


7. Task: Read a File
   Description: Implement a function that reads the content of a text file and prints it to the console.
   Requirements:
   - The function should accept the file path as an argument.
   - If the file exists, read its content and print it to the console.
   - If the file doesn't exist, print an error message.


8. What will be the output?

```js
const fs = require("fs");

fs.readFile(__filename, () => {
  console.log("this is readFile 1");
  setImmediate(() => console.log("this is inner setImmediate inside readFile"));
  process.nextTick(() => console.log("this is inner process.nextTick inside readFile"));
  Promise.resolve().then(() => console.log("this is inner Promise.resolve inside readFile"));
});

process.nextTick(() => console.log("this is process.nextTick 1"));
Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
setTimeout(() => console.log("this is setTimeout 1"), 0);

for (let i = 0; i < 2000000000; i++) {} // 
