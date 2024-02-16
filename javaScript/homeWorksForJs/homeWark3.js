// homeWork1
// let arr = [1, 5, 6, -5, 30, 10, 25];
// let arr1 = [];
// for(let i of arr) {
//     i *= 2;
//     arr1.push(i);
// } console.log(arr1)

// homeWark2
// let arr = [1, 1, 2, -3, 0, 8, 4, 0];
// function givenArr(arr, number) {
//     let newArr = [];
//     for (let i of arr) {
//         if (i > number) {
//             newArr.push(i);
//         }   
//     } if (newArr.length === 0) {
//         newArr = '[] such values do not exist'
//     }
//     return newArr;
// } console.log(givenArr(arr, 11))

// homeWork3case1
// let arr = [1, 3, 0, 5, 9];
// function retIndex(arr, itemArr) {
//     let index = arr.indexOf(itemArr);
//     return index
// } console.log(retIndex(arr, 0))

// homeWark3case2
// let arr = [1,2,5,8,8,7];
// function retIndex(arr, itemArr) {
//     let index = -1;
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] === itemArr) {
//             index = i;
//             break
//         } 
//     } return index;
// } console.log(retIndex(arr, 8))

// homeWark4Example1
// let sentence = '_, we have a _';  
// let arr = ['Houston', 'Problem'];
// for(let i of arr) {
//     sentence = sentence.replace('_', i)
// } console.log(sentence)
  
// homeWork4Example2
// let sentence = 'If at _ you do not _, try, try _.';
// let arr = ['first', 'succeed', 'again'];
// for(let item of arr) {
//     sentence = sentence.replace('_', item)
// } console.log(sentence)
 
// homeWork4Example3
// let sentence = 'May the _ _ _ _.';
// let arr = ['force', 'be', 'with', 'you?'];
// for(let n of arr) {
//     sentence = sentence.replace('_', n);
// } console.log(sentence)

// homeWark5
// let arr = [1, '10', 'hi', 2, 3];
// let numberArr = 0;
// let stringArr = 0;
// for(let i of arr) {
//     typeof(i) === 'string' ? stringArr ++ : numberArr ++
//     } 
// console.log(`Numbers: ${numberArr}`);
// console.log(`Strings: ${stringArr}`);



// let arr = [];
// let str = '';
// console.log(Boolean(arr))//true
// console.log(Boolean(str))//false
// console.log(arr == str)//true



