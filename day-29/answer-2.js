function itemCount(arr, item) {
  let obj = {}
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in obj) {
      obj[arr[i]]++
    } else {
      obj[arr[i]] = 1
    }
  }
  return obj[item]
}

console.log(itemCount([1, 3, 4, 4, 3, 2, 2, 2], 4))
