const sumDigits = (num) =>
  Math.abs(num)
    .toString()
    .split("")
    .reduce((sum, el) => +sum + +el);

console.log(sumDigits(-66));
