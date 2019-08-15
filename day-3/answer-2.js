function arrLen(arr) {
  var len = arr.length
  if (len == 0) {
    return 'NO-NO'
  } else if (len % 2 == 0) {
    return 'TWO-TIMES'
  } else if ((len % 3 == 0) & (len % 5 == 0)) {
    return 'COOL'
  } else if (len % 3 == 0) {
    return 'THREE-TIMES'
  } else {
    return 'NO'
  }
}

console.log(arrLen([23, 7, 8, 9, 6, 9, 0, 6]))
