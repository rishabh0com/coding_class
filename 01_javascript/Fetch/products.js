const dataPromise = fetch("https://fakestoreapi.com/products");
dataPromise
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
