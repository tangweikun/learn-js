function multiN(arr, N) {
  var product = 0
  for (var i = 0; i < arr.length; i++) {
    product += arr[i]
  }
  return product * N
}

console.log(multiN([1, 2, 3], 6))
