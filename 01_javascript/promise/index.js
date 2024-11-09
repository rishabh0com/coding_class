const promise = new Promise(function (resolve, reject) {
  // statement
  console.log("cake banao");
  const isCakeBana = true;
  if (isCakeBana) {
    resolve("hmm cake ban gaya");
  } else {
    reject("E: cake nahi bana");
  }
});

promise
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

