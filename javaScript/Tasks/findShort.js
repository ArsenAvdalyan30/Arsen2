const findShort = (str) =>
  str.split(" ").sort((a, b) => a.length - b.length)[0];
console.log(findShort("hello world hi, asdasd"));
 