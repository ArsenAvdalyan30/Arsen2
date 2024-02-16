function compareObjects(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
  for (let key in obj1) {
    if (!(key in obj2)) return false;
    else if (!(obj1[key] === obj2[key])) return false;
  }
  return true;
}

const obj1 = {
  age: 28,
  city: "Los Angeles",
  name: "John",
};

const obj2 = {
  name: "John",
  age: 28,
  city: "Los Angeles",
};

console.log(compareObjects({ false: 10 }, { false: 10 }));
