/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let current = 1
  let str = '1'

  while (current < n) {
    let newStr = ''
    let count = 1

    for (let i = 0; i < str.length; i++) {
      if (str[i] !== str[i + 1]) {
        newStr += count + str[i]
        count = 1
      } else {
        count++
      }
    }

    str = newStr
    current++
  }

  return str
}

console.log(countAndSay(5))
