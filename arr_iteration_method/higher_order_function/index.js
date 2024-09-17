/*
arr = [1,2,3,4];
arr.map((a,b,c)=>{
                  })
*/

let arr = [1, 2, 3, 4];

// const newArr = arr.map(function(element, index, arr) {
//          console.log(element,index,arr)
// })

const nArr = arr.map((element) => {
  return element * element;
});

console.log(nArr,arr)
// [1,4,9,16]
