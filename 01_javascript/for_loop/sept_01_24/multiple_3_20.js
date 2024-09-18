/* 
⁡⁣⁣⁢Print Multiples of 3 // 3 6 9 12 15 18 21 24 27 30
Write a for loop that prints the multiples of 3 between 1 and 20.
⁡*/

let num = 3;
let multiple = 0;
for (let i = 1; i <= 10; i++) {
  //   if (num * 1 >= 1 && num * i <= 20) console.log(num * i);
  multiple = num * i;
  if (multiple >= 1 && multiple <= 20) {
    console.log(multiple);
  }
}

// i = 1,2,3,4,5,6,7,8,9,10
// multiple = 3 ,6, 9, 12 , 15, 18, 21, 24, 27 ,30
// terminal = 3 6 9 12 15 18 
