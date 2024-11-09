const func1 = async () => {
  console.log("I am func1");
};
const func2 = () => {
  console.log("I am func2");
};
const func3 = () => {
  console.log("I am func3");
};
const func4 = () => {
  console.log("I am func4");
};

func1(); // 5 sec
func4(); // 1 sec
func2(); // 1 sec
func3(); // 1 sec
