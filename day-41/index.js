/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  const res = [];
  let carry = 1;

  for (let i = digits.length - 1; i >= 0; i--) {
    res.unshift((carry + digits[i]) % 10);
    carry = Math.trunc((carry + digits[i]) / 10);
  }

  if (carry > 0) {
    res.unshift(carry);
  }

  return res;
};

console.log(plusOne([1, 3, 4, 9]));
