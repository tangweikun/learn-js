// TODO

function onlyNum(arr) {
  const assist = []
  const res = []
  for (let i = 0; i < arr.length; i++) {
    if (assist.findIndex(num => num === arr[i]) === -1) {
      res.push(arr[i])
      assist.push(arr[i])
    }
  }
  return res
}

console.log(onlyNum([1, 1, 1, 3, 5, 8, 9, 6, 4, 3, 6, 7, 4]))
