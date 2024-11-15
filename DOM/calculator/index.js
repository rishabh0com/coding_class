const allBtns = document.querySelectorAll(".btn");
const equal = document.getElementById("equal");
const operators = document.querySelectorAll(".operator");
const input = document.getElementById("inp");
// console.log(allBtns, equal, operators);

allBtns.forEach((element) => {
  element.addEventListener("click", () => {
    input.value += element.innerText;
  });
});
operators.forEach((ope) => {
  ope.addEventListener("click", () => {
    input.value += ope.name;
  });
});

equal.addEventListener("click", () => {
  const answer = eval(input.value);
  input.value = answer;
});

// function for All Clear Button
document.getElementById("AC").addEventListener("click", () => {
  input.value = "";
  // console.log("clear");
});

document.getElementById("clear").addEventListener("click", () => {
  // console.log(input.value);
  input.value = input.value.slice(0, -1);
});



slice(0,2)