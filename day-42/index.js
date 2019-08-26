/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {

  for (let i = 0; i <= x; i++) {
    if (i * i >= x) return i;
  }
};

console.log(mySqrt(1978959248));
