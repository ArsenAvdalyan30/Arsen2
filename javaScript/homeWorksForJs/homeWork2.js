
// homeWork 1
// for(let i = 0; i < 15; i++) {
//     let x = `${i} is even`;
//     let z = `${i} is odd`;
//     if (i % 2 == 0) {
//         console.log(x)
//     } else {
//         console.log(z)
//     }
// }

// homeWark2 
// for(let i = 1; i <= 60; i++) {
//     let x = false;
//     if(i % 3 == 0) {
//         x = 'Fizz'
//     } if(i % 5 == 0) {
//         x = 'Buzz'
//     } if(i % 3 == 0 && i % 5 == 0) {
//         x = 'FizzBuzz'
//     }
//     console.log(x || i)
// } 

// homeWark3
// let x = '';
// for (let i = 1; i <= 8; i++) {
//     x += i + ' ';
//     console.log(x)
// }

// homeWark4Case1
// let i;
// let n = 3476;
// for(i = 0; n > 0; i++) {
//     let x = n % 10;
//     n -= x;
//     n /= 10;
// } console.log(i)

// homeWark4Case2
// let n = 3476;
// let a = 0;
// do {
//     let x = n % 10;
//     n -= x;
//     n /= 10;
//     a++;
// } while (n > 0)
// console.log(a);

// homeWark5
// let sum = 0;
// for(let i = 1; i <= 100; i++) {
//     sum += i;
// } console.log(sum)

//homeWark6
// let digit = 8;
// let n = 45689;
// let i;
// let check = false;
// for(i = 1; n > 0; i++) {
//     let x = n % 10;
//     n -= x;
//     n /= 10;
//     if(digit == x) {
//         check = true;
//         break
//     } 
// } if(check) {
//     console.log('Yes');
// } else {
//     console.log('No');
// }

//homeWark7
// let i;
// let sum = 0;
// let n = 895796;
// for(i = 0; n > 0; i++) {
//     let x = n % 10;
//     n -= x;
//     n /= 10;
//     sum += x;
// } console.log(sum) 