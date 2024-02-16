
const romanToInt = function (s) {
  let result = 0;
  const obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "I" && s[i + 1] === "V") {
      result += obj[`${s[i + 1]}`] - obj[`${s[i]}`];
      i++;
    } else if (s[i] === "I" && s[i + 1] === "X") {
      result += obj[`${s[i + 1]}`] - obj[`${s[i]}`];
      i++;
    } else if (s[i] === "X" && s[i + 1] === "L") {
      result += obj[`${s[i + 1]}`] - obj[`${s[i]}`];
      i++;
    } else if (s[i] === "X" && s[i + 1] === "C") {
      result += obj[`${s[i + 1]}`] - obj[`${s[i]}`];
      i++;
    } else if (s[i] === "C" && s[i + 1] === "D") {
      result += obj[`${s[i + 1]}`] - obj[`${s[i]}`];
      i++;
    } else if (s[i] === "C" && s[i + 1] === "M") {
      result += obj[`${s[i + 1]}`] - obj[`${s[i]}`];
      i++;
    } else {
      result += obj[`${s[i]}`];
    }
  }
  return result;
};

console.log(romanToInt("MCMXCIV"));
