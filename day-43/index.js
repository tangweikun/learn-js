/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let current = 1;
  let str = '1';

  while (current < n) {
    let start = 0;
    let newStr = '';

    for (let i = 0; i < str.length; i++) {
      if (str[i] !== str[i + 1]) {
        const count = i - start + 1;
        start = i + 1;
        newStr += count + str[i];
      }
    }

    str = newStr;
    current++;
  }

  return str;
};

console.log(countAndSay(4));
