const arr = [4, 2, 8, 9, 6];

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let middle = Math.floor(arr.length / 2);
  let compare = arr[middle];

  let less = [];
  let greater = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === middle) {
      continue;
    }
    if (arr[i] < compare) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }
  return [...quickSort(less), compare, ...quickSort(greater)];
}

console.log(quickSort(arr))
