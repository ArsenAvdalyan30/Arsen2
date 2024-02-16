function sum(num1, num2) {
    return num1 + num2;
  }
  
  function calculateCalls(func) {
    let count = 1;
    return function (...params) {
      console.log(`sum is called ${count} times`);
      count++;
      return func(...params);
    };
  }
  
  sum = calculateCalls(sum);
  
  console.log(sum(2, 3));
  console.log(sum(3, 5));
  console.log(sum(10, 25));