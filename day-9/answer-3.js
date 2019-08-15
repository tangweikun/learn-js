//some
function somePosArr(arr) {
  if (arr.length === 0 || arr.some(num => num <= 0)) {
    return false
  }

  return true
}
//console.log(somePosArr([]))

//every
function everyPosArr(arr) {
  if (arr.length === 0) {
    return false
  }
  if (arr.every(num => num > 0)) {
    return true
  }
  return false
}

console.log(everyPosArr([]))
