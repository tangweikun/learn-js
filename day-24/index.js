function containsRepeatingLetter(str) {
  for (let i = 1; i < str.length; i++) {
    if (str.charAt(i - 1) === str.charAt(i)) {
      return true;
    }
  }

  return false;
}

// function containsRepeatingLetter(str) {
//   return /([a-zA-Z])\1/.test(str); // \1指代第一个括号的匹配项
// }

console.log(containsRepeatingLetter('ada'));
