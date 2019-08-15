function trible(arr) {
  if (arr.length === 0) {
    return false
  }
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 3 !== 0) {
      return false
    }
  }
  return true
}

console.log(trible([3, 0, 0]))
