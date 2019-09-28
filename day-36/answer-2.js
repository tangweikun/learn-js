function findTarIndex(arr, target) {
  const foobar = []
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (foobar.indexOf(arr[i]) !== -1) continue
    let flag = target - arr[i]
    foobar.push(arr[i])
    index = arr.indexOf(flag)
    if (index !== -1) {
      res = [i, index]
      return res
    }
  }
}

console.log(findTarIndex([1, 3, 5, 6, 7], 9))
