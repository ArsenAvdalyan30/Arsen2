// import { createReadStream, createWriteStream } from "fs";

// function completeOperation(inputFile, outputFile, operation) {
//   const reader = createReadStream(inputFile);
//   const writer = createWriteStream(outputFile);
//   const upperCase = new Transform({
//     transform(chunk, encoding, callback) {
//       callback(null, chunk.toString().toUpperCase());
//     },
//   });
// }


const arr = [13, 5, -8, 56, 48, -8, 56, 89];

function getMaxSumOfSubArr(arr) {
  const result = [];
  let sumOfSubArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length; j !== i; j--) {
      result.push(arr.slice(i, j));
    }
  }
  result.forEach((subArr) => {
    sumOfSubArr.push(subArr.reduce((acc, item) => acc + item));
  });
  return Math.max(...sumOfSubArr);
}
console.log(getMaxSumOfSubArr(arr));