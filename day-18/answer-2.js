function maxContinue(arr) {
  const helper = []
  let count = 0
  const res = []
  if (arr.length === 0) {
    return 0
  }
  for (let i = 1; i < arr.length; i++) {
    helper.push(arr[i] - arr[i - 1])
  }
  if (helper.findIndex(n => n === 1) === -1) {
    return 1
  }

  for (let j = 0; j < helper.length; j++) {
    if (helper[j] === 1) {
      count++
      res.push(count)
    } else count = 0
  }
  res.sort()
  return res[res.length - 1] + 1
}

console.log(maxContinue([1, 2, 3, 5, 6]))
