function beforeN(arr, n) {
  var res = arr.slice(0, n)
  return res
}

console.log(beforeN([2, 3, 6, 8, 5, 4], 3))
