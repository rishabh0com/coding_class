console.log("I am One 1");

async function doSomething() {
  try {
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }

  console.log("I am two 2");
}

doSomething();

console.log("I am three 3");

