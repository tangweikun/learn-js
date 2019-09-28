function repeatLetter(str) {
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === str[i]) {
      return true
    }
  }
  return false
}

console.log(repeatLetter('abfen'))
