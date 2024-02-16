// var greeting = "Hello";

// console.log(greeting);

// greeting = ."Hi";

// console.log("Howdy");

// saySomething("Hello", "Hi");
// // Uncaught SyntaxError: Duplicate parameter name not
// // allowed in this context

// function saySomething(greeting, greeting) {
//   "use strict";
//   console.log(greeting);
// }

// var greeting = "Hello";

// console.log(greeting);

// greeting = ."Hi";

// function saySomething() {
//   var greeting = "Hello";
//   {
//     greeting = "Howdy"; // error comes from here
//     let greeting = "Hi";
//     console.log(greeting);
//   }
// }

// saySomething();
// // ReferenceError: Cannot access 'greeting' before
// // initialization

const obj = {
  name: "John",
  surName: "Brawn",
  age: 32,
};

function reverseObj(obj1) {
    const arr1 = Object.keys(obj)
    const arr2 = Object.values(obj)
    
    return arr4
}
console.log(reverseObj(obj))