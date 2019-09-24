function moveZero(arr) {
  const helper = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      helper.push(0);
      i--;
    }
  }

  return arr.concat(helper);
}

// function moveZero(arr) {
//   return arr.filter(x => x !== 0).concat(arr.filter(x => x === 0));
// }

// function moveZero(arr) {
//   let i = 0;
//   let j = 0;
//   while (j < arr.length) {
//     if (arr[i] !== 0) {
//       i++;
//     } else if (arr[j] !== 0) {
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//       i++;
//     }
//     j++;
//   }

//   return arr;
// }

console.log(moveZero([1, 4, 0, 0, 2, 0, 3, 0]));
