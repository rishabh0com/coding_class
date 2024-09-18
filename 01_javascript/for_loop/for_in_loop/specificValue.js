/* 

Check for a Specific Value in an Array
Question: Use a for...of loop to check if a specific value exists in an array. 
Print a message if the value is found.

*/
const colors = ["red", "green", "blue", "yellow"];

function findValue(val, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (val == arr[i]) {
      //       console.log(`${val} exist`);
      return `${val} exist`;
    }
  }
  return "value not found";
}
console.log(findValue("red", colors));