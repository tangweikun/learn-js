function difference(arr) {
  const max = Math.max(...arr)
  const min = Math.min(...arr)
  return max - min
}

console.log(difference([3, 4, -5]))
