let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function findNumRecursively(arr, num, start, end) {
  if (start > end) return false;

  let middleIndex = Math.floor((start + end) / 2);

  if (arr[middleIndex] === num) {
    return true
  }

  if (arr[middleIndex] > num)
    return findNumRecursively(arr, num, start, middleIndex - 1);
  return findNumRecursively(arr, num, middleIndex + 1, end);
}

console.log(findNumRecursively(numbers, 6, 0, numbers.length - 1));
