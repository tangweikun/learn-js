function sum(arr) {
  let total = 0
  arr.forEach(num => (total += num))
  return total
}
console.log(sum([1, 3, 5, 7, 8, 9]))
