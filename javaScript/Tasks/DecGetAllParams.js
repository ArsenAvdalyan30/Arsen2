let user = {
  age: 20,
  sayHi(name) {
    console.log(`My name is ${name}, i am ${this.age}`);
    return name;
  },
};

function decorator(func) {
  f.getAllCalls = function () {
    return allParams;
  };
  const allParams = [];

  function f(...rest) {
    allParams.push(rest);
    let result = func.call(this, ...rest);
    return result;
  }
  return f;
}

user.sayHi = decorator(user.sayHi);

console.log(user.sayHi("John", 10, 20));
console.log(user.sayHi("Smith", 40, 50));
console.log(user.sayHi(null, 24, 78, undefined));

console.log(user.sayHi.getAllCalls());
