function arrReplace(arr, N) {
  return arr.map(num => (num < N ? N : num))
  // var res = []
  // for (var i = 0; i < arr.length; i++) {
  //   if (arr[i] >= N) {
  //     res.push(arr[i])
  //   } else {
  //     res.push(N)
  //   }
  // }
  // return res
}

console.log(arrReplace([1, 2, 3, 4, 5, 6, 2], 4))
