function lastWordLength(str) {
  const arr = str.trim().split(' ')
  return arr[arr.length - 1].length
}

console.log(lastWordLength('hello worldhhh '))
