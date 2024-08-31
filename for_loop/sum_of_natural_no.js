/*
⁡⁣⁣⁢𝕊𝕦𝕞 𝕠𝕗 𝔽𝕚𝕣𝕤𝕥 𝟙𝟘 ℕ𝕒𝕥𝕦𝕣𝕒𝕝 ℕ𝕦𝕞𝕓𝕖𝕣𝕤:-⁡
⁡⁣⁣⁢Question: Use a for loop to calculate
 and print the sum of the first 10 natural numbers (1 to 10).
⁡ */

// 1 2 3 4 5 6 7 8 9 10 = 55

let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum = sum + i; // sum += i
  console.log(i,sum);
}
console.log(sum);

//   i = 1,2,3,4,5,6,7,8,9,10
// sum = 1,3,6,10,15,21,28,36,45,55
// sum = 3 + 3
