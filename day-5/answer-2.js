function sum(arr) {
  var total = 0
  for (var i = 0; i < arr.length; i++) {
    total = total + arr[i]
  }
  return total
}

console.log(sum([1, 2, 4, 6, 6, 6]))
