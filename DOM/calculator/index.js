const allBtns = document.querySelectorAll(".btn");
const equal = document.getElementById("equal");
const operators = document.querySelectorAll(".operator");
const input = document.getElementById("inp");
console.log(allBtns, equal, operators);

allBtns.forEach((element) => {
  element.addEventListener("click", () => {
    input.value += element.innerText;
  });
});
operators.forEach((ope) => {
  ope.addEventListener("click", () => {
    input.value += ope.innerText;
  });
});

equal.addEventListener("click", () => {
  const answer = eval(input.value);
  input.value = answer;
});
