const pa = document.getElementById("Principal-input");
const ir = document.querySelector("#rate-input");
const ip = document.getElementById("period");
const btn = document.getElementById("cal-btn");

ir.addEventListener("input", () => {
  document.getElementById("display-interest").innerText = ir.value + "%"; // `${ir.value}%`
});

btn.addEventListener("click", function () {
  const principal_amount = parseFloat(pa.value); // "1000" -> 1000.00
  const interest_rate = parseFloat(ir.value); // "9" -> 9.00
  const interest_period = ip.value; // "yearly"

  if (principal_amount < 0 || pa.value == "") {
    // ! =
    alert("Please Enter a Valid Amount");
    return;
  }
  const interest_amount = (principal_amount * interest_rate) / 100;
  let calculatedAmount;
  switch (interest_period) {
    case "yearly":
      calculatedAmount = principal_amount + interest_amount;
      break;
    case "quarterly":
      calculatedAmount = principal_amount + interest_amount / 4;
      break;
    case "monthly":
      calculatedAmount = principal_amount + interest_amount / 12;
      break;
    default:
      calculatedAmount = "0.00";
  }s
  document.getElementById("result").innerText = `₹ ${calculatedAmount.toFixed(
    2
  )}`;
});
