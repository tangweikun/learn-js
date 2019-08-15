function arrRev(string) {
  var arr = string.split('')
  arr.reverse()
  newStr = arr.join('')
  return newStr
}

console.log(arrRev('andk'))
