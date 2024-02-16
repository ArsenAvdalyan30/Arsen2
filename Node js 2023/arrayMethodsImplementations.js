// map

function myCustomMap(callback) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr[i] = callback(this[i], i, this);
  }
  return newArr;
}
Array.prototype.myCustomMap = myCustomMap;
console.log([4, 8, 9, 5].myCustomMap((el) => el * 2));
