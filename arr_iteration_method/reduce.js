/* 

arr.reduce((accumulater, current)=>{},0)

*/

// const numbers = [1, 2, 3, 2, 1, 4];
// calculate sum = 13

// function cal_sum(arr) {
//   let sum = 0; // 1, 3, 6, 8, 9, 13
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// console.log(cal_sum(numbers));

const numbers = [4, 3, 2, 1, 1, 2];

const sum = numbers.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(sum);

// acc = 0, 4, 7, 9, 10, 11, 13
// curr = 4, 3, 2, , 1, 1, 2
