// const nums = [6, 1, 3, 2, 7, 8, 7, 4,10];

// function maxx(arr) {
//   let max = nums[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (max < nums[i]) {
//       max = nums[i];
//     }
//   }
//   return max;
// }
// console.log(maxx(nums))

const nums = [6, 1, 3, 2, 7, 8, 7, 4, 10];

const max = nums.reduce((acc, curr) => {
  if (curr > acc) {
    return curr;
  } else {
    return acc;
  }
}, nums[0]);

console.log(max)