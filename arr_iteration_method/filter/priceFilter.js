const shoes = [
  { itemName: "campus001", price: 1100 },
  { itemName: "bataE001", price: 4500 },
  { itemName: "Nick401", price: 10000 },
  { itemName: "puma981", price: 9000 },
  { itemName: "adidas567", price: 78000 },
  { itemName: "campus021", price: 7700 },
  { itemName: "campus081", price: 2300 },
  { itemName: "campus501", price: 9999 },
];

function budgetRange(priceRange, arr) {
  const budgetRangeShoes = arr.filter((ele) => ele.price <= priceRange);
  if (budgetRangeShoes.length == 0) {
    console.log(`No product found under ${priceRange}`);
  }
  budgetRangeShoes.forEach((ele, index) => {
    console.log(`${index + 1}. Shoes Name : ${ele.itemName} , Shoes Price :${ele.price}`);
  });
}

budgetRange(10000, shoes);
