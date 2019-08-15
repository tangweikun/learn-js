function diff(arr) {
  var min = arr[0]
  var max = arr[0]
  for (var i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i]
    }

    if (max < arr[i]) {
      max = arr[i]
    }
  }
  return max - min
}

console.log(diff([1, 3, 6, 8, 9, 34, 8, 9]))
