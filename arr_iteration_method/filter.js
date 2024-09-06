/* 
The filter() method creates a new array with items that pass a condition (true/false test). If
an item doesn’t pass the test, it won’t be included in the new array.
• Use Case: Picking only specific elements from an array.
const newArr = arr.filter((ele)=> //condition )
*/

const numbers = [12, 56, 34, 22, 44, 89, 90, 75];
const oddNumber = numbers.filter((ele) => ele % 2 == 1);
console.log(oddNumber)