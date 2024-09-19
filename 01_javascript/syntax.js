let arr = [1, 2, 3, 4, 5];
const each = arr.filter(function (ele, idx, arr) {
  return ele > 1;
});
console.log(each);
