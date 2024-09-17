/* 
Filter Array Elements Based on Condition
Question: Write a for...of loop to filter elements from an array that meet a specific condition
 (e.g., finding all numbers greater than 10).
 // Output: [12, 21, 16]
*/

const numbers = [5, 12, 8, 21, 16, 3];

const newArr = [];
// for (i in numbers) {
//   if (numbers[i] > 10) {
//     newArr.push(numbers[i]);
//   }
// }

for (ele of numbers) {
  if (ele > 10) {
    newArr.push(ele);
  }
}
console.log(newArr);

 