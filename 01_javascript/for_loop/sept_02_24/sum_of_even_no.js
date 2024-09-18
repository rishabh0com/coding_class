// Sum of Even Numbers in an Array
// Question: Given an array of numbers, use a for loop
// to calculate the sum of all even numbers in the array.

function printSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      //     console.log(arr[i]);
      sum += arr[i];
    }
  }
  console.log(sum);
}

printSum([1, 2, 3, 4])
printSum([5, 8, 6, 4, 5, 9, 9, 9])
