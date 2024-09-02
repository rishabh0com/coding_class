// Print the Characters of a String
// Question: Write a for loop that prints each character of a string individually.
// J a v a s c r i p t
//              0123456789
// const str = "javascript"
// console.log(str[4])

function printStr(str) {
  let bag = "";
  for (let i = 0; i < str.length; i++) {
    bag += str[i] + " ";
  }
  console.log(bag);
}
printStr("a");
printStr("Javascript");
