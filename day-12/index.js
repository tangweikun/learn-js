// TODO

function uniq(arr) {
  const helper = {}
  const res = []

  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] in helper)) {
      res.push(arr[i])
      helper[arr[i]] = 0
    }
  }

  return res
}

console.log(uniq([-2, 3, 3, 4, 2, 3, 4]))
