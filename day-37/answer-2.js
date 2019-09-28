//为啥这种方法不行
function isSymmetry(str) {
  const arr = str.split('')
  const res = [...arr]

  str1 = res.join('')
  str2 = arr.reverse().join('')
  if (str1 === str2) return true
  return false
}

// console.log(isSymmetry('121'))

// function isSymmetry(str) {
//   for (let i = 0; i < str.length / 2; i++) {
//     if (str[i] !== str[str.length - i - 1]) return false
//   }
//   return true
// }
console.log(isSymmetry('12345654321'))
console.log(isSymmetry('-121'))
console.log(isSymmetry('-13321'))
