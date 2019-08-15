//[find],[forEach],[filter],[some],[every]

//find
function find3Arr(arr) {
  if (arr.length === 0 || arr.find(num => num % 3 !== 0)) {
    return false
  }

  return true
}

// forEach
// function forE3Arr(arr) {
//   if (arr.length === 0) {
//     return false
//   } else
//     arr.forEach(num => {
//       if (num % 3 !== 0) return false
//     })
// }

//filter
function filter3Arr(arr) {
  if (arr.length === 0 || arr.filter(num => num % 3 !== 0).length !== 0) {
    return false
  }

  return true
}

//some
function some3Arr(arr) {
  if (arr.length === 0 || arr.some(num => num % 3 !== 0)) {
    return false
  }
  return true
}
//every
function every3Arr(arr) {
  if (arr.length === 0) {
    return false
  }
  if (arr.every(num => num % 3 === 0)) {
    return true
  }
  return false
}
