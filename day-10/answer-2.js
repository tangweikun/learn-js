// TODO

function arrRecon(arr, i) {
  var j = arr[i]
  arr.splice(i, 1)

  arr.unshift(j)

  return arr
}

console.log(arrRecon([1, 3, 4, 5, 6], 3))
