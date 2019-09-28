// function containsNumber(str) {
//   for (let char of str) {
//     if (Number(char) === Number(char)) return true
//   }

//   return false
// }

function containsNumber(str) {
  for (let i = 0; i < str.length; i++) {
    if (
      str.charCodeAt(i) >= '0'.charCodeAt(0) &&
      str.charCodeAt(i) <= '9'.charCodeAt(0)
    )
      return true
  }

  return false
}

console.log(containsNumber('33j'))
console.log(containsNumber('ssj'))
