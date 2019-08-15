function arrIsPositive(arr) {
  if (arr.length == 0) {
    return false
  }
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      return false
    }
  }
  return true
}

console.log(arrIsPositive([2, 4, 5, 6]))
