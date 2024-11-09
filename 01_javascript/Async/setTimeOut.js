function func1() {
  console.log("I am func 1");
}
function func2() {
  console.log("I am func 2");
}
function func3() {
  console.log("I am func 3");
}

func2();
setTimeout(func1, 5000);
func3();
