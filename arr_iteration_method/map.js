/* 
arr.map((element,index)=>{
                  // statement
})
*/
const arr = [11, 12, 13, 14, 15, 16];

const mapArr = arr.map((element, index, arr) => {
  console.log(element, index, arr);
  return element + 1;
});
console.log(arr, mapArr);
// mapArr = [12,13,14,15,16,17]
