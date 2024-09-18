// [2,6,5,8,9,4,5,6]
//           0  1  2  3  4  5  6  7    arr[2]

// let min = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }
// console.log(min)

// const fruits = ["banana", "mango"];
const arr = [2, 6, 5, -10, 8];

const minimumVal = arr.reduce((min, curr) => {
  // curr = 2,6,5,-10,8
  // min = 2,2, 2,2,-10,-10

  if (curr < min) {
    return curr;
  } else {
    return min;
  }
}, arr[0]);
console.log(minimumVal)


