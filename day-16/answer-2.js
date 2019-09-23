function oddEven(arr) {
  if (arr.length === 0) {
    return 'EMPTY'
  }
  if (arr.every(num => num % 2 === 0)) {
    return 'EVEN'
  }
  if (arr.every(num => num % 2 === 1)) {
    return 'ODD'
  } else return 'MIX'
}

console.log(oddEven([4, 88, 68, 46]))
