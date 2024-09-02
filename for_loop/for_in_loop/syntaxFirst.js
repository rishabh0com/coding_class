/* 
for object :

for (key in object) {
  // code block to be executed
}
  
for array :
for (variable in array) {
  code
}
*/

let arr = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (element in arr) {
//   console.log(element);
// }

const me = { name: "Rishabh", age: 23, gender: "male" };

for (key in me) {
  console.log(me.key);
}
