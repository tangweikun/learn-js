//TODO
function flatter(arr) {
  let res = []

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res = res.concat(flatter(arr[i]))
    } else {
      res.push(arr[i])
    }
  }

  return res
}

console.log(flatter([1, 2, 3, [4, 5, [6]]]))
