function multiN(arr, N) {
  var product = 0
  arr.forEach(num => (product += num))

  return product * N
}

console.log(multiN([1, 2, 3, 4], 7))
