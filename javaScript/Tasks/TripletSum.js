const nums = [-1, 0, 1, 2, -1, -4];

function threeSums(arr) {
  const triplet = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      for (let k = 2; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === 0) {
          if (triplet.length === 0) {
            triplet.push([arr[i], arr[j], arr[k]]);
          } else {
            for (let el of triplet) {
              if (
                el.includes(arr[i]) &&
                el.includes(arr[j]) &&
                el.includes(arr[k])
              ) {
                triplet.push([arr[i], arr[j], arr[k]]);
              }
            }
          }
        }
      }
    }
  }
  return triplet;
}

console.log(threeSums(nums));

// let newArr = [
//   [-1, 2, -1],
//   [2, 0, 3],
//   [2, -1, -1],
// ];

// const arr = [];

// for (let el of arr) {
//   if (!(el.includes(-1) && el.includes(2) && el.includes(-1))) {
//     arr.push([-1, 2, -1]);
//   }
// }
// console.log(arr)
