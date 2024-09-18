/* 
The filter() method creates a new array with items that pass a condition (true/false test). If
an item doesn’t pass the test, it won’t be included in the new array.
• Use Case: Picking only specific elements from an array.
const newArr = arr.filter((ele)=> //condition )
*/

const products = [
  { title: "phone", price: 100, category: "electronics" },
  { title: "laptop", price: 200, category: "electronics" },
  { title: "shoes", price: 50, category: "fashion" },
  { title: "t-shirt", price: 20, category: "fashion" },
  { title: "watch", price: 30, category: "electronics" },
  { title: "headphone", price: 10, category: "electronics" },
];

// const budget = 10;
// const budgetPro = products.filter((ele) => ele.price <= budget);
// console.log(budgetPro)

const category = "electronics";

const catePro = products.filter((ele) => ele.category == category)
console.log(catePro)

