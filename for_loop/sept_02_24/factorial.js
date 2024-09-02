// Calculate the Factorial of a Number
// Question: Use a for loop to calculate the factorial of a given number (e.g., 5!).

// 7
// 7 * 6 * 5 * 4 * 3 * 2 * 1

function factorial(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;// fact = fact * i
  }
  console.log(`factorial of ${num} is ${fact}`);
}

factorial(5);
factorial(9);
factorial(1);
