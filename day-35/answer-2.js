function findMax(arr) {
  let max = Math.max(...arr)
  let maxIndex = arr.indexOf(max)
  arr.splice(maxIndex, 1)
  let secondMax = Math.max(...arr)
  if (max >= 2 * secondMax) return maxIndex
  return -1
}
// function indexOfMax(arr) {
//   arr.sort((a, b) => a - b)
// }

// function findMax(arr) {
//   let max = arr[0]
//   let index = 0
//   let secondMax = -Infinity
//   for (let i = 1; i < arr.length; i++) {
//     secondMax = Math.max(Math.min(arr[i], max), secondMax)

//     if (max < arr[i]) {
//       max = arr[i]
//       index = i
//     }
//   }

//   return max >= 2 * secondMax ? index : -1
// }

console.log(findMax([1, 3, 4, 6, 9]))
console.log(findMax([1, 3, 4, 6, 12]))
