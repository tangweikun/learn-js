// function no3Divide(arr) {
//   const res = [];
//   for (let i = 0; i < arr.length; i++){
//     if (arr[i] % 3) {
//       res.push(arr[i]);
//     }
//   }
//   return res;
// }

function no3Divide(arr) {
  return arr.filter((num, index, array) => {
    return num % 3 !== 0
  })
}

console.log(no3Divide([1, 5, 7, 9, 9, 5, 4]))
