// async function getdata() {
//   let result = await fetch("https://fakestoreapi.com/products");
//   console.log("hlo",await result.json());
// }
// getdata();

// const promise = new Promise(function (resolve, reject) {
//   // statement
//   console.log("promise task executed");
//   resolve(56);
// }).then((value) => {
//   console.log("promise resolved",value);
// });

fetch("https://fakestoreapi.com/products")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
