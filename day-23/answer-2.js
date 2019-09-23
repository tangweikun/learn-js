function countWord(arr) {
  let obj = {}
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in obj) {
      obj[arr[i]]++
    } else {
      obj[arr[i]] = 1
    }
  }
  return obj
}
console.log(countWord(['ddd', 'aaa', 'bbb', 'ccc', 'bbb']))
