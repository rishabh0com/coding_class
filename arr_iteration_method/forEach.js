/* 

Array.forEach(()=>{})
*/

const radius = [5, 6, 12, 7, 9];

// const areas = []
// for (let i = 0; i < radius.length; i++){
//   areas.push(area(radius[i]))
// }
// const areas = radius.map((r) => {
//   return (22 / 7) * r ** 2;
// });

const areaCB = (r) => {
  return (22 / 7) * r ** 2;
};

const mapp = (arr, func) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(func(arr[i]));
  }
  return result;
};


console.log(mapp(radius, areaCB));
