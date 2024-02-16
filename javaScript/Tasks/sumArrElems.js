const arr = [1, 5, 8, 10, 4, 6, 3, 7, 2, 3, 5, 10];

function sumToNum(arr, num) {
  let noDuplicates = [];

  for (let i = 0; i < arr.length; i++) {
    if (!noDuplicates.includes(arr[i])) {
      noDuplicates.push(arr[i]);
    }
  }

  let result = [];

  for (let i = 0; i < noDuplicates.length; i++) {
    for (let j = i + 1; j < noDuplicates.length; j++) {
      if (noDuplicates[i] + noDuplicates[j] === num) {
        result.push([noDuplicates[i], noDuplicates[j]]);
      }
    }
  }
  
  return result;
}

console.log(sumToNum(arr, 6));
