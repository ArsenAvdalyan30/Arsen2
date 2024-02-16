// // homeWorkNode1
// const { EventEmitter } = require("events");
// const eventOne = new EventEmitter();
// function fn1() {
//   console.log(15);
// }
// function fn2() {
//   console.log(16);
// }
// eventOne.addListener("call", fn1);
// eventOne.on('call', fn2)
// eventOne.emit("call");

// // homeWorkNode2
// const { EventEmitter } = require("events");
// const eventForOneCall = new EventEmitter();
// eventForOneCall.once("call", (fn = () => console.log("will be called only one time")));
// eventForOneCall.emit("call");

// // homeWorkNode3
// const { EventEmitter } = require("events");
// const event = new EventEmitter();
// event.addListener('call', fn = (a, b) => console.log(a + b))
// event.emit('call', 5, 5)